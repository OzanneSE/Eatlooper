/**
 * EATLOOPER — receptor de fichas das casas
 * Cola isto em script.google.com, publica como Web App, e cola a URL
 * na constante ENDPOINT de cada página de casa.
 *
 * Grava duas coisas na planilha:
 *   aba RECEBIDOS  — uma linha por envio, com resumo e o JSON inteiro
 *   aba MATRIZ     — uma linha por ingrediente da última versão de cada casa
 *                    (é o "arquivo matriz" que se atualiza sozinho)
 */

// ID da planilha (pega da URL: docs.google.com/spreadsheets/d/<ID>/edit)
const PLANILHA_ID = 'COLE_AQUI_O_ID_DA_PLANILHA';

function doPost(e) {
  try {
    const d = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.openById(PLANILHA_ID);
    gravarRecebido_(ss, d);
    atualizarMatriz_(ss, d);
    return ContentService.createTextOutput(JSON.stringify({ok: true}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ok: false, erro: String(err)}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput('Eatlooper — receptor de fichas. Use POST.');
}

function gravarRecebido_(ss, d) {
  let ws = ss.getSheetByName('RECEBIDOS');
  if (!ws) {
    ws = ss.insertSheet('RECEBIDOS');
    ws.appendRow(['Recebido em','Casa','Circuito','Preço','Custo','CMV','Decisões respondidas','Resumo das decisões','JSON']);
    ws.setFrozenRows(1);
  }
  const respondidas = (d.decisoes || []).filter(x => x.resposta).length;
  const resumo = (d.decisoes || []).map((x, i) =>
    (i+1) + '. ' + x.t + ': ' + (x.resposta || '—') + (x.nota ? ' — ' + x.nota : '')
  ).join('\n');
  ws.appendRow([
    new Date(), d.casa, d.circuito, d.preco, d.custo, d.cmv,
    respondidas + '/' + (d.decisoes || []).length, resumo, JSON.stringify(d)
  ]);
}

function atualizarMatriz_(ss, d) {
  let ws = ss.getSheetByName('MATRIZ');
  if (!ws) {
    ws = ss.insertSheet('MATRIZ');
    ws.appendRow(['Casa','Tempo','Prato','Ingrediente','Qtd líq.','Unid','Rend.','Qtd bruta','Preço unit.','Custo','Atualizado em']);
    ws.setFrozenRows(1);
  }
  // apaga as linhas antigas desta casa — a última versão manda
  const vals = ws.getDataRange().getValues();
  for (let i = vals.length - 1; i >= 1; i--) {
    if (vals[i][0] === d.casa) ws.deleteRow(i + 1);
  }
  const agora = new Date();
  const linhas = [];
  (d.pratos || []).forEach(p => {
    (p.itens || []).forEach(it => {
      const bruta = it.q / it.r;
      linhas.push([d.casa, p.tempo, p.nome, it.n, it.q, it.un === 'UN' ? 'un' : 'kg',
                   it.r, bruta, it.p, bruta * it.p, agora]);
    });
    linhas.push([d.casa, p.tempo, p.nome, '— CUSTO DO PREPARO —', '', '', '', '', '',
                 (p.itens || []).reduce((s, it) => s + (it.q / it.r) * it.p, 0), agora]);
  });
  if (linhas.length) {
    ws.getRange(ws.getLastRow() + 1, 1, linhas.length, linhas[0].length).setValues(linhas);
  }
}
