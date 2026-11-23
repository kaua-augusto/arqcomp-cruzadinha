var TOTAL_POR_PARTIDA = 12;
var MAXIMO_PISTAS = 3;
var ERROS_PARA_REVELAR = 2;
var TEMPO_RECOLHER_MS = 800;
var CARTAS_POR_MAO = 4;
var TEMPO_PROXIMA_MAO_MS = 3000;
var TEMPO_AVISO_MS = 1500;

var cartasSorteadas = [];
var acertos = 0;
var pontos = 0;
var baralho = [];
var mao = [];
var temporizadorProximaMao;
var temporizadorAviso;

function iniciarPartida() {
  var termosSorteados = sortearCartas();
  cartasSorteadas = [];
  baralho = [];
  acertos = 0;
  pontos = 0;

  for (var indice = 0; indice < termosSorteados.length; indice++) {
    cartasSorteadas.push({
      termo: termosSorteados[indice],
      pistas: sortearPistas(termosSorteados[indice]),
      opcoes: sortearOpcoes(termosSorteados[indice]),
      pistasMostradas: 1,
      erros: 0,
      status: 'aberta'
    });
    baralho.push(indice);
  }

  span_total.textContent = TOTAL_POR_PARTIDA;
  section_relatorio.hidden = true;
  atualizarPlacar();
  distribuirMao();
}

function distribuirMao() {
  mao = baralho.splice(0, CARTAS_POR_MAO);
  span_baralho.textContent = baralho.length;
  btn_trocar_mao.disabled = baralho.length === 0;
  mostrarCartas();
}

function sortearCartas() {
  return embaralhar(TERMOS.slice()).slice(0, TOTAL_POR_PARTIDA);
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

function sortearOpcoes(termo) {
  var gemeo = buscarTermo(termo.gemeo);
  var parecidos = [];

  for (var posicao = 0; posicao < TERMOS.length; posicao++) {
    var outro = TERMOS[posicao];
    if (outro.grupo === termo.grupo && outro !== termo && outro !== gemeo) {
      parecidos.push(outro);
    }
  }

  var parecido = parecidos[Math.floor(Math.random() * parecidos.length)];
  return embaralhar([termo, gemeo, parecido]);
}

function embaralhar(lista) {
  for (var indice = lista.length - 1; indice > 0; indice--) {
    var sorteado = Math.floor(Math.random() * (indice + 1));
    var guardado = lista[indice];
    lista[indice] = lista[sorteado];
    lista[sorteado] = guardado;
  }

  return lista;
}

function trocarDeMao() {
  for (var posicao = 0; posicao < mao.length; posicao++) {
    if (cartasSorteadas[mao[posicao]].status === 'aberta') {
      baralho.push(mao[posicao]);
    }
  }

  recolherMao(distribuirMao);
}

function novaPartida() {
  recolherMao(iniciarPartida);
}

function recolherMao(depois) {
  var espera = TEMPO_RECOLHER_MS;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    espera = 0;
  }

  clearTimeout(temporizadorProximaMao);
  btn_trocar_mao.disabled = true;
  btn_nova_partida.disabled = true;
  div_cartas.classList.add('mao-recolhendo');

  setTimeout(function () {
    div_cartas.classList.remove('mao-recolhendo');
    btn_nova_partida.disabled = false;
    depois();
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
    var pontosGanhos = MAXIMO_PISTAS + 1 - carta.pistasMostradas;
    carta.status = 'certa';
    acertos++;
    pontos = pontos + pontosGanhos;
    mostrarAviso(true, pontosGanhos);
    virarCarta(indice);
    return;
  }

  carta.erros++;
  mostrarAviso(false, 0);
  document.getElementById('article_carta_' + indice).classList.add('carta-errada');
  document.getElementById('input_resposta_' + indice).select();

  if (carta.erros >= ERROS_PARA_REVELAR) {
    document.getElementById('btn_revelar_' + indice).hidden = false;
  }
}

function mostrarAviso(acertou, pontosGanhos) {
  p_aviso_certo.hidden = !acertou;
  p_aviso_errado.hidden = acertou;
  span_aviso_pontos.textContent = pontosGanhos;
  div_aviso.classList.toggle('aviso-certo', acertou);
  div_aviso.hidden = false;

  clearTimeout(temporizadorAviso);
  temporizadorAviso = setTimeout(function () {
    div_aviso.hidden = true;
  }, TEMPO_AVISO_MS);
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

  for (var posicao = 0; posicao < mao.length; posicao++) {
    if (cartasSorteadas[mao[posicao]].status === 'aberta') {
      return;
    }
  }

  if (baralho.length === 0) {
    mostrarRelatorio();
    return;
  }

  temporizadorProximaMao = setTimeout(trocarDeMao, TEMPO_PROXIMA_MAO_MS);
}

function buscarTermo(resposta) {
  for (var posicao = 0; posicao < TERMOS.length; posicao++) {
    if (TERMOS[posicao].resposta === resposta) {
      return TERMOS[posicao];
    }
  }
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

  for (var posicao = 0; posicao < mao.length; posicao++) {
    var indice = mao[posicao];
    var carta = cartasSorteadas[indice];
    var termo = carta.termo;
    var numero = String(indice + 1).padStart(2, '0');
    var arquivo = termo.arcano.imagem.split('/').pop().replace('.svg', '');
    var motivo = 'motivo-' + arquivo.split('-')[2];

    var nomeGemeo = buscarTermo(termo.gemeo).nome;

    var opcoes = '';
    for (var opcao = 0; opcao < carta.opcoes.length; opcao++) {
      opcoes += '<li>' + escaparHtml(carta.opcoes[opcao].nome.split(' (')[0]) + '</li>';
    }

    var arcano =
      '<p class="arcano-numero">' + escaparHtml(termo.arcano.numero) + '</p>' +
      '<img class="arcano-imagem" src="' + escaparHtml(termo.arcano.imagem) + '" alt="' + escaparHtml(termo.arcano.nome) + '">' +
      '<p class="arcano-nome">' + escaparHtml(termo.arcano.nome) + '</p>';

    html +=
      '<article class="carta" id="article_carta_' + indice + '" style="--cor-arcano: ' + escaparHtml(termo.arcano.cor) + '; --ordem: ' + posicao + '">' +
        '<div class="carta-interior">' +
          '<div class="carta-pergunta ' + motivo + '">' +
            arcano +
            '<h2 class="carta-numero">Carta ' + numero + '</h2>' +
            '<ol class="carta-pistas" id="ol_pistas_' + indice + '">' +
              '<li>' + escaparHtml(carta.pistas[0]) + '</li>' +
            '</ol>' +
            '<p class="carta-opcoes-titulo">A resposta é uma destas:</p>' +
            '<ul class="carta-opcoes">' + opcoes + '</ul>' +
            '<button class="button button-pista" id="btn_pista_' + indice + '" type="button" onclick="mostrarProximaPista(' + indice + ')">+ Pista</button>' +
            '<label for="input_resposta_' + indice + '">Sua resposta</label>' +
            '<input id="input_resposta_' + indice + '" type="text" autocomplete="off" spellcheck="false" placeholder="Digite e aperte Enter" onkeydown="conferirCarta(event, ' + indice + ')" oninput="limparErro(' + indice + ')">' +
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
