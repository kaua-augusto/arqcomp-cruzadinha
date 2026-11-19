var TOTAL_POR_PARTIDA = 12;
var MAXIMO_PISTAS = 3;
var ERROS_PARA_REVELAR = 2;
var TEMPO_RECOLHER_MS = 800;

var cartasSorteadas = [];
var acertos = 0;
var pontos = 0;

function iniciarPartida() {
  var termosSorteados = sortearCartas();
  cartasSorteadas = [];
  acertos = 0;
  pontos = 0;

  for (var indice = 0; indice < termosSorteados.length; indice++) {
    cartasSorteadas.push({
      termo: termosSorteados[indice],
      pistas: sortearPistas(termosSorteados[indice]),
      pistasMostradas: 1,
      erros: 0,
      status: 'aberta'
    });
  }

  span_total.textContent = TOTAL_POR_PARTIDA;
  section_relatorio.hidden = true;
  atualizarPlacar();
  mostrarCartas();
}

function sortearCartas() {
  var baralho = TERMOS.slice();

  for (var indice = baralho.length - 1; indice > 0; indice--) {
    var sorteado = Math.floor(Math.random() * (indice + 1));
    var guardado = baralho[indice];
    baralho[indice] = baralho[sorteado];
    baralho[sorteado] = guardado;
  }

  return baralho.slice(0, TOTAL_POR_PARTIDA);
}

function sortearPistas(termo) {
  var funcao = termo.pistas.funcao;
  var diferenca = termo.pistas.diferenca;
  var concreto = termo.pistas.concreto;

  return [
    funcao[Math.floor(Math.random() * funcao.length)],
    diferenca[Math.floor(Math.random() * diferenca.length)],
    concreto[Math.floor(Math.random() * concreto.length)]
  ];
}

function trocarDeMao() {
  var espera = TEMPO_RECOLHER_MS;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    espera = 0;
  }

  btn_trocar_mao.disabled = true;
  div_cartas.classList.add('mao-recolhendo');

  setTimeout(function () {
    div_cartas.classList.remove('mao-recolhendo');
    div_cartas.scrollLeft = 0;
    iniciarPartida();
    btn_trocar_mao.disabled = false;
  }, espera);
}

function conferirCarta(evento, indice) {
  if (evento.key !== 'Enter') {
    return;
  }

  var carta = cartasSorteadas[indice];
  var resposta = normalizarTexto(document.getElementById('input_resposta_' + indice).value);

  if (carta.status !== 'aberta' || resposta === '') {
    return;
  }

  if (respostaCorreta(carta.termo, resposta)) {
    carta.status = 'certa';
    acertos++;
    pontos = pontos + MAXIMO_PISTAS + 1 - carta.pistasMostradas;
    virarCarta(indice);
    return;
  }

  carta.erros++;
  document.getElementById('article_carta_' + indice).classList.add('carta-errada');
  document.getElementById('input_resposta_' + indice).select();

  if (carta.erros >= ERROS_PARA_REVELAR) {
    document.getElementById('btn_revelar_' + indice).hidden = false;
  }
}

function limparErro(indice) {
  document.getElementById('article_carta_' + indice).classList.remove('carta-errada');
}

function mostrarProximaPista(indice) {
  var carta = cartasSorteadas[indice];

  if (carta.pistasMostradas >= MAXIMO_PISTAS) {
    return;
  }

  var item = document.createElement('li');
  item.textContent = carta.pistas[carta.pistasMostradas];
  document.getElementById('ol_pistas_' + indice).appendChild(item);
  carta.pistasMostradas++;

  if (carta.pistasMostradas === MAXIMO_PISTAS) {
    document.getElementById('btn_pista_' + indice).hidden = true;
  }
}

function revelarCarta(indice) {
  cartasSorteadas[indice].status = 'revelada';
  virarCarta(indice);
}

function virarCarta(indice) {
  var artigo = document.getElementById('article_carta_' + indice);
  artigo.classList.remove('carta-errada');
  artigo.classList.add('carta-virada', 'carta-' + cartasSorteadas[indice].status);
  atualizarPlacar();

  for (var posicao = 0; posicao < cartasSorteadas.length; posicao++) {
    if (cartasSorteadas[posicao].status === 'aberta') {
      return;
    }
  }

  mostrarRelatorio();
}

function respostaCorreta(termo, resposta) {
  if (resposta === termo.resposta) {
    return true;
  }

  for (var posicao = 0; posicao < termo.aceitas.length; posicao++) {
    if (resposta === termo.aceitas[posicao]) {
      return true;
    }
  }

  return false;
}

function normalizarTexto(texto) {
  return texto
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toUpperCase()
    .replace(/[^A-Z]/g, '');
}

function atualizarPlacar() {
  span_acertos.textContent = acertos;
  span_pontos.textContent = pontos;
}

function mostrarRelatorio() {
  var html = '';

  for (var indice = 0; indice < cartasSorteadas.length; indice++) {
    var carta = cartasSorteadas[indice];
    if (carta.status === 'revelada' || carta.erros > 0 || carta.pistasMostradas === MAXIMO_PISTAS) {
      html += '<li><strong>' + escaparHtml(carta.termo.nome) + ':</strong> ' + escaparHtml(carta.termo.explicacao) + '</li>';
    }
  }

  ul_revisar.innerHTML = html;
  div_revisar.hidden = html === '';
  p_sem_revisao.hidden = html !== '';
  span_pontos_finais.textContent = pontos;
  section_relatorio.hidden = false;
}

function mostrarCartas() {
  var html = '';

  for (var indice = 0; indice < cartasSorteadas.length; indice++) {
    var carta = cartasSorteadas[indice];
    var termo = carta.termo;
    var numero = String(indice + 1).padStart(2, '0');
    var arquivo = termo.arcano.imagem.split('/').pop().replace('.svg', '');
    var motivo = 'motivo-' + arquivo.split('-')[2];

    var nomeGemeo = '';
    for (var posicao = 0; posicao < TERMOS.length; posicao++) {
      if (TERMOS[posicao].resposta === termo.gemeo) {
        nomeGemeo = TERMOS[posicao].nome;
      }
    }

    var arcano =
      '<p class="arcano-numero">' + escaparHtml(termo.arcano.numero) + '</p>' +
      '<img class="arcano-imagem" src="' + escaparHtml(termo.arcano.imagem) + '" alt="' + escaparHtml(termo.arcano.nome) + '">' +
      '<p class="arcano-nome">' + escaparHtml(termo.arcano.nome) + '</p>';

    html +=
      '<article class="carta" id="article_carta_' + indice + '" style="--cor-arcano: ' + escaparHtml(termo.arcano.cor) + '; --ordem: ' + indice + '">' +
        '<div class="carta-interior">' +
          '<div class="carta-pergunta ' + motivo + '">' +
            arcano +
            '<h2 class="carta-numero">Carta ' + numero + '</h2>' +
            '<ol class="carta-pistas" id="ol_pistas_' + indice + '">' +
              '<li>' + escaparHtml(carta.pistas[0]) + '</li>' +
            '</ol>' +
            '<button class="button button-pista" id="btn_pista_' + indice + '" type="button" onclick="mostrarProximaPista(' + indice + ')">+ Pista</button>' +
            '<label for="input_resposta_' + indice + '">Sua resposta</label>' +
            '<input id="input_resposta_' + indice + '" type="text" autocomplete="off" spellcheck="false" onkeydown="conferirCarta(event, ' + indice + ')" oninput="limparErro(' + indice + ')">' +
            '<button class="button button-revelar" id="btn_revelar_' + indice + '" type="button" onclick="revelarCarta(' + indice + ')" hidden>Revelar</button>' +
          '</div>' +
          '<div class="carta-resposta ' + motivo + '">' +
            arcano +
            '<h2 class="carta-termo">' + escaparHtml(termo.nome) + '</h2>' +
            '<p class="carta-explicacao">' + escaparHtml(termo.explicacao) + '</p>' +
            '<p class="carta-gemeo">Não confunda com: <strong>' + escaparHtml(nomeGemeo) + '</strong></p>' +
          '</div>' +
        '</div>' +
      '</article>';
  }

  div_cartas.innerHTML = html;
}

function escaparHtml(texto) {
  return texto
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

iniciarPartida();
