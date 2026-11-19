# NETSCAN

> A tarot card game of progressive clues for studying Computer Architecture: read the arcana, type the hardware term, reveal the card.

NETSCAN is a study game made for Atividade Avaliativa III of the Computer Architecture course (Arquitetura Computacional, Sprint 3) of the Systems Analysis and Development course at SPTech (São Paulo Tech School). The player is a netrunner holding a hand of major arcana, and each arcana hides one hardware term from the class.

**Play it:** [https://kaua-augusto.github.io/arqcomp-cruzadinha/](https://kaua-augusto.github.io/arqcomp-cruzadinha/)

## Table of contents

- [How to play](#how-to-play)
- [Why it is not a crossword](#why-it-is-not-a-crossword)
- [The 16 arcana](#the-16-arcana)
- [Terms and clues](#terms-and-clues)
- [Artwork](#artwork)
- [Project structure](#project-structure)
- [Getting started](#getting-started)

## How to play

Each match deals a hand of 12 cards in a single row. Every card is the major arcana of one term and shows its first clue. Type the term in the card and press **Enter**.

| Rule | Description |
| --- | --- |
| Draw | Every match draws 12 of the 16 terms at random, numbered `Carta 01` to `Carta 12`. |
| Clues | Each term has a pool of 7 clues: 3 about its function, 2 about what sets it apart from the term it is confused with, and 2 concrete examples. Each card draws one clue of each group, so a new match rarely repeats the same clues (12 combinations per term). |
| More clues | `+ Pista` shows clue 2 (difference) and then clue 3 (concrete example). |
| Checking | Enter checks that card only. Accents, spaces and punctuation are ignored, so `memória de massa` matches `MEMORIADEMASSA`. Enter on a blank card does nothing. |
| Right answer | The card flips with a yellow frame and shows the term, a short explanation and "Não confunda com", the term it is most often confused with. |
| Wrong answer | The card gets a magenta frame and stays editable. Typing again clears the magenta. |
| Reveal | After 2 errors on the same card, `Revelar` shows the answer. The card flips with a magenta frame and a grayscale arcana, and scores 0. |
| Counter | `X de 12 arcanos revelados` counts right answers; the points are shown next to it. |
| Report | When no card is open, the report shows the final points and a "Para revisar" list with every term that was revealed, had an error or needed all 3 clues, each with its explanation. |
| New hand | `Trocar de mão` collects the cards, clears everything and deals a new hand with new clues. |

Scoring:

| Clues used | Points |
| --- | --- |
| 1 | 3 |
| 2 | 2 |
| 3 | 1 |
| Revealed | 0 |

The maximum is 36 points (12 cards × 3).

## Why it is not a crossword

The assignment suggests a crossword. In a crossword, a word can often be filled in from the letters that cross it, without knowing the concept. NETSCAN asks the player to **recall** each term from what it does: the answer is typed, the clues go from concept to concrete example, and every card shows the term it is most often confused with (RAM × ROM, EEPROM × Flash, address bus × data bus, dual core × quad core, cache × registradores, ULA × UC).

Every requirement of the assignment is still met:

| Requisito da atividade | No NETSCAN |
| --- | --- |
| Pelo menos 12 dos 16 termos | Os 16 termos estão no `termos.js`; cada partida sorteia 12 |
| Palavras que se cruzam | Cada termo tem um gêmeo (o termo com que mais se confunde); depois do acerto a carta mostra "Não confunda com". Os pares de gêmeos fazem o papel do cruzamento |
| Pistas numeradas, separadas em Horizontais e Verticais | Cartas numeradas (`Carta 01` a `12`), cada uma com até 3 pistas numeradas |
| O jogador digita as letras no tabuleiro | O jogador digita a resposta em cada carta |
| Botão Conferir mostrando as palavras certas e erradas | O Enter no campo de cada carta faz o papel do Conferir, uma carta por vez: marca certa (amarelo) ou errada (magenta) |
| Contador de acertos, ex.: "8 de 12 palavras" | `X de 12 arcanos revelados` |
| Botão Reiniciar que limpa o tabuleiro | O botão "Trocar de mão" é o Reiniciar: recolhe as cartas, limpa tudo e distribui 12 novas |
| HTML, CSS e JS puros, com `index.html` na raiz | Igual |
| Pistas com no máximo 15 palavras, sem a resposta, corretas e com resposta única | Mesmas regras, conferidas por script |

## The 16 arcana

Each term has one major arcana from the traditional tarot, chosen as a memory hook for what the term does.

| Arcana | Term | Why this arcana |
| --- | --- | --- |
| 0 O Louco | Registradores | carries a tiny bundle with him at all times: the few values the CPU holds in hand |
| I O Mago | CPU | the one who executes, with every tool on his table |
| II A Sacerdotisa | Cache | keeps knowledge close and at hand, behind a veil |
| III A Imperatriz | Memória de massa (armazenamento) | abundance: the largest capacity |
| IV O Imperador | UC (Unidade de Controle) | order and command |
| V O Hierofante | ROM | tradition written once and never changed |
| VI Os Enamorados | Dual core | a pair |
| VII O Carro | Microcontrolador | a driver who steers one vehicle alone |
| IX O Eremita | DMA | works alone, without the CPU |
| X A Roda da Fortuna | Data bus (barramento de dados) | a wheel: data goes and comes back |
| XI A Justiça | ULA | the scale: compares and calculates |
| XIV A Temperança | EEPROM | pours carefully, little by little: byte by byte |
| XVI A Torre | Flash | the lightning strike: erases a whole block at once |
| XVII A Estrela | Address bus (barramento de endereço) | the guiding star: points to where to go |
| XVIII A Lua | RAM | fades at dawn: volatile |
| XXI O Mundo | Quad core | four figures in the four corners |

## Terms and clues

The clues are in Portuguese, as in the game, and are copied from `termos.js`.

### Registradores

**Arcana:** 0 O Louco · **Answer:** `REGISTRADORES` · **Twin (gêmeo):** Cache

| Group | Clue |
| --- | --- |
| Function | Pequenas memórias dentro da CPU que guardam os valores em uso agora. |
| Function | Posições de armazenamento internas ao processador, usadas direto pelas instruções. |
| Function | Guardam os operandos e o resultado da operação que a ULA acabou de fazer. |
| Difference | Mais rápidos e menores até que a memória intermediária da CPU. |
| Difference | Ficam no topo da hierarquia de memória: os mais rápidos e com menos capacidade. |
| Concrete | O contador de programa, que aponta a próxima instrução, é um deles. |
| Concrete | Num processador de 64 bits, cada um deles guarda 64 bits. |

**Explanation:** Registradores são as memórias mais rápidas e menores do computador, dentro da própria CPU, com os dados da instrução atual.

### CPU

**Arcana:** I O Mago · **Answer:** `CPU` · **Twin (gêmeo):** Microcontrolador

| Group | Clue |
| --- | --- |
| Function | Componente que busca, decodifica e executa as instruções dos programas. |
| Function | O cérebro do computador, onde ficam a ULA, a UC e os registradores. |
| Function | Chip principal que repete o ciclo buscar, decodificar e executar. |
| Difference | Chip de uso geral que precisa de memória e periféricos fora dele. |
| Difference | Depende de RAM e armazenamento externos, ligados a ela pela placa-mãe. |
| Concrete | Fica embaixo do cooler, encaixada no soquete da placa-mãe. |
| Concrete | A frequência em GHz anunciada no notebook é a velocidade desse chip. |

**Explanation:** A CPU executa as instruções dos programas no ciclo buscar, decodificar e executar, usando ULA, UC e registradores.

### Cache

**Arcana:** II A Sacerdotisa · **Answer:** `CACHE` · **Twin (gêmeo):** Registradores

| Group | Clue |
| --- | --- |
| Function | Memória pequena e rápida que guarda cópias dos dados mais usados pela CPU. |
| Function | Fica entre a CPU e a RAM para reduzir o tempo de espera. |
| Function | Memória intermediária que evita a CPU buscar tudo na memória principal. |
| Difference | Maior e mais lenta que os registradores, mas muito mais rápida que a RAM. |
| Difference | Guarda cópias de dados vindos da RAM, não os operandos da instrução atual. |
| Concrete | Nas especificações do processador aparece dividida em L1, L2 e L3. |
| Concrete | Fica gravada no próprio chip do processador, com alguns megabytes. |

**Explanation:** A cache guarda cópias dos dados mais usados da RAM perto da CPU, em níveis L1, L2 e L3, para evitar espera.

### Memória de massa (armazenamento)

**Arcana:** III A Imperatriz · **Answer:** `MEMORIADEMASSA` · **Twin (gêmeo):** RAM

| Group | Clue |
| --- | --- |
| Function | Onde arquivos, fotos e o sistema operacional ficam guardados de forma permanente. |
| Function | Guarda grandes volumes de dados por anos, mesmo sem energia. |
| Function | Dispositivo de grande capacidade e não volátil onde os programas ficam instalados. |
| Difference | Mais lenta que a RAM, mas guarda tudo mesmo desligada. |
| Difference | Base da pirâmide: maior capacidade, menor custo e menor velocidade. |
| Concrete | HD, SSD e pen drive são exemplos dessa categoria. |
| Concrete | O disco de 1 TB onde ficam os jogos instalados no PC. |

**Explanation:** Memória de massa é o armazenamento não volátil e de grande capacidade, como HD e SSD. É mais lenta que a RAM.

### UC (Unidade de Controle)

**Arcana:** IV O Imperador · **Answer:** `UC` · **Twin (gêmeo):** ULA

| Group | Clue |
| --- | --- |
| Function | Parte da CPU que interpreta cada instrução e coordena sua execução. |
| Function | Gera os sinais que comandam ULA, registradores e memória no tempo certo. |
| Function | Decodifica as instruções e diz a cada parte da CPU o que fazer. |
| Difference | Não faz as contas: comanda a parte que faz as contas. |
| Difference | Organiza a ordem das operações, enquanto a vizinha apenas calcula. |
| Concrete | Como um maestro, não toca nenhum instrumento, mas rege a orquestra da CPU. |
| Concrete | Funciona como o semáforo da CPU, liberando cada etapa na hora certa. |

**Explanation:** A UC decodifica as instruções e envia sinais que comandam as outras partes da CPU, inclusive a ULA.

### ROM

**Arcana:** V O Hierofante · **Answer:** `ROM` · **Twin (gêmeo):** RAM

| Group | Clue |
| --- | --- |
| Function | Memória não volátil gravada na fábrica, com instruções que não mudam. |
| Function | Guarda o firmware de inicialização mesmo com o aparelho desligado. |
| Function | Memória permanente cujo conteúdo já vem definido de fábrica. |
| Difference | Não perde o conteúdo ao desligar, mas não é regravada no uso normal. |
| Difference | Mantém os dados sem energia e não pode ser reescrita pelo usuário. |
| Concrete | Nos computadores antigos, guardava a BIOS que dá a partida na máquina. |
| Concrete | Cartuchos de videogame antigos guardavam os jogos nesse tipo de memória. |

**Explanation:** A ROM é não volátil e vem gravada de fábrica, sem ser regravada no uso normal. Guarda firmware, como a antiga BIOS.

### Dual core

**Arcana:** VI Os Enamorados · **Answer:** `DUALCORE` · **Twin (gêmeo):** Quad core

| Group | Clue |
| --- | --- |
| Function | Processador com duas unidades de processamento completas no mesmo chip. |
| Function | CPU capaz de executar duas tarefas realmente ao mesmo tempo. |
| Function | Chip com um par de processadores independentes que dividem o trabalho. |
| Difference | Tem metade das unidades de processamento de um modelo com quatro. |
| Difference | Executa duas sequências de instruções em paralelo, não quatro. |
| Concrete | Os Intel Pentium D, de 2005, já traziam essa configuração. |
| Concrete | Pentium Gold e muitos Celeron de notebook básico usam esse formato. |

**Explanation:** Dual core é um processador com dois núcleos no mesmo chip, que executam duas tarefas em paralelo.

### Microcontrolador

**Arcana:** VII O Carro · **Answer:** `MICROCONTROLADOR` · **Twin (gêmeo):** CPU

| Group | Clue |
| --- | --- |
| Function | Chip único com processador, RAM, Flash e entradas e saídas integrados. |
| Function | Computador completo num só chip, feito para uma tarefa específica. |
| Function | Circuito integrado que comanda sozinho um aparelho embarcado. |
| Difference | Já traz memória e periféricos dentro do chip, sem depender da placa-mãe. |
| Difference | Consome pouca energia e roda um único programa dedicado, não um sistema completo. |
| Concrete | O ATmega328 da placa Arduino Uno é um exemplo. |
| Concrete | Está dentro da máquina de lavar, do forno e do teclado. |

**Explanation:** O microcontrolador reúne processador, memória e entradas e saídas num só chip, para comandar um aparelho específico.

### DMA

**Arcana:** IX O Eremita · **Answer:** `DMA` · **Twin (gêmeo):** CPU

| Group | Clue |
| --- | --- |
| Function | Recurso que copia dados entre periférico e RAM sem passar pela CPU. |
| Function | Mecanismo que move blocos de dados enquanto o processador faz outra coisa. |
| Function | Libera a CPU de copiar dados byte a byte entre dispositivos e RAM. |
| Difference | Transfere dados, mas não executa instruções nem faz cálculos. |
| Difference | Avisa a CPU por interrupção só quando a transferência inteira terminou. |
| Concrete | A placa de rede usa esse recurso para gravar pacotes na RAM sozinha. |
| Concrete | Graças a ele, copiar um arquivo grande não trava o processador. |

**Explanation:** O DMA transfere dados entre dispositivos e RAM sem a CPU copiar cada byte, deixando o processador livre.

### Data bus (barramento de dados)

**Arcana:** X A Roda da Fortuna · **Answer:** `DATABUS` · **Twin (gêmeo):** Address bus (barramento de endereço)

| Group | Clue |
| --- | --- |
| Function | Linhas que transportam os valores lidos ou gravados entre CPU e memória. |
| Function | Caminho por onde a informação em si viaja entre processador e RAM. |
| Function | Via que entrega à CPU o valor que estava guardado na memória. |
| Difference | É bidirecional: a informação vai e volta entre CPU e memória. |
| Difference | Carrega o conteúdo; quem diz onde ele está é a outra via. |
| Concrete | Sua largura, como 64 bits, define quanto se transfere por ciclo. |
| Concrete | Como o caminhão de entregas: leva a encomenda, não o endereço. |

**Explanation:** O data bus transporta os dados entre CPU, memória e dispositivos, nos dois sentidos. A posição vem pelo address bus.

### ULA

**Arcana:** XI A Justiça · **Answer:** `ULA` · **Twin (gêmeo):** UC (Unidade de Controle)

| Group | Clue |
| --- | --- |
| Function | Parte da CPU que soma, subtrai e compara números. |
| Function | Bloco do processador que executa operações AND, OR e NOT sobre bits. |
| Function | Circuito que realiza os cálculos pedidos por cada instrução. |
| Difference | Calcula o resultado, mas não decide qual instrução vem a seguir. |
| Difference | Executa a operação; quem manda executar é a unidade vizinha. |
| Concrete | Ao testar se um número é maior que outro, é ela que trabalha. |
| Concrete | Quando uma planilha soma uma coluna, essa parte da CPU faz a conta. |

**Explanation:** A ULA faz as operações aritméticas e lógicas da CPU. Ela só calcula: quem decide o que calcular é a UC.

### EEPROM

**Arcana:** XIV A Temperança · **Answer:** `EEPROM` · **Twin (gêmeo):** Flash

| Group | Clue |
| --- | --- |
| Function | Memória não volátil que pode ser apagada e regravada byte a byte. |
| Function | Guarda poucos dados que precisam sobreviver ao desligamento e mudar às vezes. |
| Function | Memória permanente regravável pelo próprio circuito, sem retirar o chip da placa. |
| Difference | Apaga um byte de cada vez, e não blocos inteiros. |
| Difference | Menor e mais lenta que a do pen drive, mas edita byte a byte. |
| Concrete | No Arduino, guarda configurações que continuam lá depois de tirar da tomada. |
| Concrete | Guarda ajustes como o canal favorito de uma TV ou a calibração de um sensor. |

**Explanation:** A EEPROM é não volátil e regravável byte a byte pelo circuito. Tem pouca capacidade e guarda configurações.

### Flash

**Arcana:** XVI A Torre · **Answer:** `FLASH` · **Twin (gêmeo):** EEPROM

| Group | Clue |
| --- | --- |
| Function | Memória não volátil regravável, apagada em blocos inteiros de uma vez. |
| Function | Tecnologia sem partes móveis usada em SSDs e cartões de memória. |
| Function | Memória regravável que apaga setores inteiros num só passo. |
| Difference | Apaga blocos inteiros, não byte a byte, e por isso grava rápido. |
| Difference | Tem muito mais capacidade que a memória regravável byte a byte do Arduino. |
| Concrete | É o chip dentro do pen drive e do cartão de memória do celular. |
| Concrete | Armazena as fotos e os apps do celular e o firmware do roteador. |

**Explanation:** A Flash é uma memória não volátil derivada da EEPROM que apaga por blocos. Por isso é rápida e tem grande capacidade.

### Address bus (barramento de endereço)

**Arcana:** XVII A Estrela · **Answer:** `ADDRESSBUS` · **Twin (gêmeo):** Data bus (barramento de dados)

| Group | Clue |
| --- | --- |
| Function | Linhas por onde a CPU indica qual posição da memória quer acessar. |
| Function | Leva o endereço da posição escolhida, da CPU até a RAM. |
| Function | Conjunto de fios que seleciona onde ler ou escrever na memória. |
| Difference | Diz onde está a informação, mas não carrega a informação em si. |
| Difference | É unidirecional: sai da CPU em direção à memória e aos dispositivos. |
| Concrete | Com 32 linhas nele, a CPU alcança até 4 GB de memória. |
| Concrete | Como o CEP numa carta: indica o destino, não o conteúdo. |

**Explanation:** O address bus leva da CPU o endereço da posição de memória a ser acessada. É unidirecional e não carrega o dado.

### RAM

**Arcana:** XVIII A Lua · **Answer:** `RAM` · **Twin (gêmeo):** ROM

| Group | Clue |
| --- | --- |
| Function | Memória principal onde ficam os aplicativos e dados enquanto estão abertos. |
| Function | Memória de trabalho que a CPU lê e escreve o tempo todo. |
| Function | Memória principal volátil, lida e gravada livremente durante o uso. |
| Difference | Perde tudo o que guarda quando o computador é desligado. |
| Difference | Pode ser lida e gravada à vontade, mas é volátil. |
| Concrete | Os pentes de 8 ou 16 GB encaixados na placa-mãe. |
| Concrete | Quando há muitas abas abertas e o PC fica lento, falta dela. |

**Explanation:** A RAM é a memória principal: rápida, lida e gravada o tempo todo, mas volátil. Ao desligar, o conteúdo some.

### Quad core

**Arcana:** XXI O Mundo · **Answer:** `QUADCORE` · **Twin (gêmeo):** Dual core

| Group | Clue |
| --- | --- |
| Function | Processador com quatro unidades de processamento completas no mesmo chip. |
| Function | CPU que executa quatro tarefas realmente ao mesmo tempo. |
| Function | Chip com quatro processadores independentes que dividem o trabalho. |
| Difference | Tem o dobro das unidades de processamento de um modelo com duas. |
| Difference | Executa quatro sequências de instruções em paralelo, não apenas duas. |
| Concrete | O Raspberry Pi 4 usa um processador ARM com essa configuração. |
| Concrete | O AMD Ryzen 3 3200G, de entrada, tem essa configuração. |

**Explanation:** Quad core é um processador com quatro núcleos no mesmo chip, que executam quatro tarefas em paralelo.

## Artwork

The 16 arcana in `img/arcanos/` are original SVG line drawings made for this project, inspired by the symbolism of the traditional tarot (the 1909 Rider-Waite-Smith deck, in the public domain). They do not copy any modern deck or the tarot art of any game.

## Project structure

```
.
├── index.html        # The page: header, counter, hand of cards, report
├── style.css         # The only stylesheet
├── termos.js         # The 16 terms: answers, arcana, clues, explanations and twins
├── script.js         # Match logic: draw, checking, clues, reveal, report, new hand
└── img/arcanos/      # The 16 arcana SVGs
```

Plain HTML, CSS and JavaScript, with no framework, build step or dependency. The only external resource is the Chakra Petch font from Google Fonts.

## Getting started

Open `index.html` in any browser. No server or installation is needed.

To get the code:

```bash
git clone https://github.com/kaua-augusto/arqcomp-cruzadinha.git
```
