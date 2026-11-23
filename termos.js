var TERMOS = [
  {
    resposta: 'CPU',
    nome: 'CPU',
    aceitas: ['UNIDADECENTRALDEPROCESSAMENTO', 'PROCESSADOR'],
    arcano: { numero: 'I', nome: 'O Mago', imagem: 'img/arcanos/01-o-mago.svg', cor: 'var(--yellow)' },
    pistas: {
      funcao: [
        'Componente que busca, decodifica e executa as instruções dos programas.',
        'O cérebro do computador, onde ficam a ULA, a UC e os registradores.',
        'Chip principal que repete o ciclo buscar, decodificar e executar.'
      ],
      diferenca: [
        'Chip de uso geral que precisa de memória e periféricos fora dele.',
        'Depende de RAM e armazenamento externos, ligados a ela pela placa-mãe.'
      ],
      concreto: [
        'Fica embaixo do cooler, encaixada no soquete da placa-mãe.',
        'A frequência em GHz anunciada no notebook é a velocidade desse chip.'
      ]
    },
    explicacao: 'A CPU executa as instruções dos programas no ciclo buscar, decodificar e executar, usando ULA, UC e registradores.',
    gemeo: 'MICROCONTROLADOR',
    grupo: 'processador'
  },
  {
    resposta: 'ULA',
    nome: 'ULA',
    aceitas: ['UNIDADELOGICAEARITMETICA'],
    arcano: { numero: 'XI', nome: 'A Justiça', imagem: 'img/arcanos/11-a-justica.svg', cor: 'var(--yellow)' },
    pistas: {
      funcao: [
        'Parte da CPU que soma, subtrai e compara números.',
        'Bloco do processador que executa operações AND, OR e NOT sobre bits.',
        'Circuito que realiza os cálculos pedidos por cada instrução.'
      ],
      diferenca: [
        'Calcula o resultado, mas não decide qual instrução vem a seguir.',
        'Executa a operação; quem manda executar é a unidade vizinha.'
      ],
      concreto: [
        'Ao testar se um número é maior que outro, é ela que trabalha.',
        'Quando uma planilha soma uma coluna, essa parte da CPU faz a conta.'
      ]
    },
    explicacao: 'A ULA faz as operações aritméticas e lógicas da CPU. Ela só calcula: quem decide o que calcular é a UC.',
    gemeo: 'UC',
    grupo: 'processador'
  },
  {
    resposta: 'UC',
    nome: 'UC (Unidade de Controle)',
    aceitas: ['UNIDADEDECONTROLE'],
    arcano: { numero: 'IV', nome: 'O Imperador', imagem: 'img/arcanos/04-o-imperador.svg', cor: 'var(--magenta)' },
    pistas: {
      funcao: [
        'Parte da CPU que interpreta cada instrução e coordena sua execução.',
        'Gera os sinais que comandam ULA, registradores e memória no tempo certo.',
        'Decodifica as instruções e diz a cada parte da CPU o que fazer.'
      ],
      diferenca: [
        'Não faz as contas: comanda a parte que faz as contas.',
        'Organiza a ordem das operações, enquanto a vizinha apenas calcula.'
      ],
      concreto: [
        'Como um maestro, não toca nenhum instrumento, mas rege a orquestra da CPU.',
        'Funciona como o semáforo da CPU, liberando cada etapa na hora certa.'
      ]
    },
    explicacao: 'A UC decodifica as instruções e envia sinais que comandam as outras partes da CPU, inclusive a ULA.',
    gemeo: 'ULA',
    grupo: 'processador'
  },
  {
    resposta: 'REGISTRADORES',
    nome: 'Registradores',
    aceitas: ['REGISTRADOR'],
    arcano: { numero: '0', nome: 'O Louco', imagem: 'img/arcanos/00-o-louco.svg', cor: 'var(--yellow)' },
    pistas: {
      funcao: [
        'Pequenas memórias dentro da CPU que guardam os valores em uso agora.',
        'Posições de armazenamento internas ao processador, usadas direto pelas instruções.',
        'Guardam os operandos e o resultado da operação que a ULA acabou de fazer.'
      ],
      diferenca: [
        'Mais rápidos e menores até que a memória intermediária da CPU.',
        'Ficam no topo da hierarquia de memória: os mais rápidos e com menos capacidade.'
      ],
      concreto: [
        'O contador de programa, que aponta a próxima instrução, é um deles.',
        'Num processador de 64 bits, cada um deles guarda 64 bits.'
      ]
    },
    explicacao: 'Registradores são as memórias mais rápidas e menores do computador, dentro da própria CPU, com os dados da instrução atual.',
    gemeo: 'CACHE',
    grupo: 'memoria'
  },
  {
    resposta: 'RAM',
    nome: 'RAM',
    aceitas: ['MEMORIARAM'],
    arcano: { numero: 'XVIII', nome: 'A Lua', imagem: 'img/arcanos/18-a-lua.svg', cor: 'var(--purple)' },
    pistas: {
      funcao: [
        'Memória principal onde ficam os aplicativos e dados enquanto estão abertos.',
        'Memória de trabalho que a CPU lê e escreve o tempo todo.',
        'Memória principal volátil, lida e gravada livremente durante o uso.'
      ],
      diferenca: [
        'Perde tudo o que guarda quando o computador é desligado.',
        'Pode ser lida e gravada à vontade, mas é volátil.'
      ],
      concreto: [
        'Os pentes de 8 ou 16 GB encaixados na placa-mãe.',
        'Quando há muitas abas abertas e o PC fica lento, falta dela.'
      ]
    },
    explicacao: 'A RAM é a memória principal: rápida, lida e gravada o tempo todo, mas volátil. Ao desligar, o conteúdo some.',
    gemeo: 'ROM',
    grupo: 'memoria'
  },
  {
    resposta: 'ROM',
    nome: 'ROM',
    aceitas: ['MEMORIAROM'],
    arcano: { numero: 'V', nome: 'O Hierofante', imagem: 'img/arcanos/05-o-hierofante.svg', cor: 'var(--purple)' },
    pistas: {
      funcao: [
        'Memória não volátil gravada na fábrica, com instruções que não mudam.',
        'Guarda o firmware de inicialização mesmo com o aparelho desligado.',
        'Memória permanente cujo conteúdo já vem definido de fábrica.'
      ],
      diferenca: [
        'Não perde o conteúdo ao desligar, mas não é regravada no uso normal.',
        'Mantém os dados sem energia e não pode ser reescrita pelo usuário.'
      ],
      concreto: [
        'Nos computadores antigos, guardava a BIOS que dá a partida na máquina.',
        'Cartuchos de videogame antigos guardavam os jogos nesse tipo de memória.'
      ]
    },
    explicacao: 'A ROM é não volátil e vem gravada de fábrica, sem ser regravada no uso normal. Guarda firmware, como a antiga BIOS.',
    gemeo: 'RAM',
    grupo: 'memoria'
  },
  {
    resposta: 'EEPROM',
    nome: 'EEPROM',
    aceitas: [],
    arcano: { numero: 'XIV', nome: 'A Temperança', imagem: 'img/arcanos/14-a-temperanca.svg', cor: 'var(--cyan)' },
    pistas: {
      funcao: [
        'Memória não volátil que pode ser apagada e regravada byte a byte.',
        'Guarda poucos dados que precisam sobreviver ao desligamento e mudar às vezes.',
        'Memória permanente regravável pelo próprio circuito, sem retirar o chip da placa.'
      ],
      diferenca: [
        'Apaga um byte de cada vez, e não blocos inteiros.',
        'Menor e mais lenta que a do pen drive, mas edita byte a byte.'
      ],
      concreto: [
        'No Arduino, guarda configurações que continuam lá depois de tirar da tomada.',
        'Guarda ajustes como o canal favorito de uma TV ou a calibração de um sensor.'
      ]
    },
    explicacao: 'A EEPROM é não volátil e regravável byte a byte pelo circuito. Tem pouca capacidade e guarda configurações.',
    gemeo: 'FLASH',
    grupo: 'memoria'
  },
  {
    resposta: 'FLASH',
    nome: 'Flash',
    aceitas: ['MEMORIAFLASH'],
    arcano: { numero: 'XVI', nome: 'A Torre', imagem: 'img/arcanos/16-a-torre.svg', cor: 'var(--magenta)' },
    pistas: {
      funcao: [
        'Memória não volátil regravável, apagada em blocos inteiros de uma vez.',
        'Tecnologia sem partes móveis usada em SSDs e cartões de memória.',
        'Memória regravável que apaga setores inteiros num só passo.'
      ],
      diferenca: [
        'Apaga blocos inteiros, não byte a byte, e por isso grava rápido.',
        'Tem muito mais capacidade que a memória regravável byte a byte do Arduino.'
      ],
      concreto: [
        'É o chip dentro do pen drive e do cartão de memória do celular.',
        'Armazena as fotos e os apps do celular e o firmware do roteador.'
      ]
    },
    explicacao: 'A Flash é uma memória não volátil derivada da EEPROM que apaga por blocos. Por isso é rápida e tem grande capacidade.',
    gemeo: 'EEPROM',
    grupo: 'memoria'
  },
  {
    resposta: 'CACHE',
    nome: 'Cache',
    aceitas: ['MEMORIACACHE'],
    arcano: { numero: 'II', nome: 'A Sacerdotisa', imagem: 'img/arcanos/02-a-sacerdotisa.svg', cor: 'var(--cyan)' },
    pistas: {
      funcao: [
        'Memória pequena e rápida que guarda cópias dos dados mais usados pela CPU.',
        'Fica entre a CPU e a RAM para reduzir o tempo de espera.',
        'Memória intermediária que evita a CPU buscar tudo na memória principal.'
      ],
      diferenca: [
        'Maior e mais lenta que os registradores, mas muito mais rápida que a RAM.',
        'Guarda cópias de dados vindos da RAM, não os operandos da instrução atual.'
      ],
      concreto: [
        'Nas especificações do processador aparece dividida em L1, L2 e L3.',
        'Fica gravada no próprio chip do processador, com alguns megabytes.'
      ]
    },
    explicacao: 'A cache guarda cópias dos dados mais usados da RAM perto da CPU, em níveis L1, L2 e L3, para evitar espera.',
    gemeo: 'REGISTRADORES',
    grupo: 'memoria'
  },
  {
    resposta: 'MEMORIADEMASSA',
    nome: 'Memória de massa (armazenamento)',
    aceitas: ['ARMAZENAMENTO', 'MEMORIASECUNDARIA'],
    arcano: { numero: 'III', nome: 'A Imperatriz', imagem: 'img/arcanos/03-a-imperatriz.svg', cor: 'var(--purple)' },
    pistas: {
      funcao: [
        'Onde arquivos, fotos e o sistema operacional ficam guardados de forma permanente.',
        'Guarda grandes volumes de dados por anos, mesmo sem energia.',
        'Dispositivo de grande capacidade e não volátil onde os programas ficam instalados.'
      ],
      diferenca: [
        'Mais lenta que a RAM, mas guarda tudo mesmo desligada.',
        'Base da pirâmide: maior capacidade, menor custo e menor velocidade.'
      ],
      concreto: [
        'HD, SSD e pen drive são exemplos dessa categoria.',
        'O disco de 1 TB onde ficam os jogos instalados no PC.'
      ]
    },
    explicacao: 'Memória de massa é o armazenamento não volátil e de grande capacidade, como HD e SSD. É mais lenta que a RAM.',
    gemeo: 'RAM',
    grupo: 'memoria'
  },
  {
    resposta: 'DMA',
    nome: 'DMA',
    aceitas: ['ACESSODIRETOAMEMORIA'],
    arcano: { numero: 'IX', nome: 'O Eremita', imagem: 'img/arcanos/09-o-eremita.svg', cor: 'var(--yellow)' },
    pistas: {
      funcao: [
        'Recurso que copia dados entre periférico e RAM sem passar pela CPU.',
        'Mecanismo que move blocos de dados enquanto o processador faz outra coisa.',
        'Libera a CPU de copiar dados byte a byte entre dispositivos e RAM.'
      ],
      diferenca: [
        'Transfere dados, mas não executa instruções nem faz cálculos.',
        'Avisa a CPU por interrupção só quando a transferência inteira terminou.'
      ],
      concreto: [
        'A placa de rede usa esse recurso para gravar pacotes na RAM sozinha.',
        'Graças a ele, copiar um arquivo grande não trava o processador.'
      ]
    },
    explicacao: 'O DMA transfere dados entre dispositivos e RAM sem a CPU copiar cada byte, deixando o processador livre.',
    gemeo: 'CPU',
    grupo: 'barramento'
  },
  {
    resposta: 'ADDRESSBUS',
    nome: 'Address bus (barramento de endereço)',
    aceitas: ['BARRAMENTODEENDERECO', 'BARRAMENTODEENDERECOS'],
    arcano: { numero: 'XVII', nome: 'A Estrela', imagem: 'img/arcanos/17-a-estrela.svg', cor: 'var(--cyan)' },
    pistas: {
      funcao: [
        'Linhas por onde a CPU indica qual posição da memória quer acessar.',
        'Leva o endereço da posição escolhida, da CPU até a RAM.',
        'Conjunto de fios que seleciona onde ler ou escrever na memória.'
      ],
      diferenca: [
        'Diz onde está a informação, mas não carrega a informação em si.',
        'É unidirecional: sai da CPU em direção à memória e aos dispositivos.'
      ],
      concreto: [
        'Com 32 linhas nele, a CPU alcança até 4 GB de memória.',
        'Como o CEP numa carta: indica o destino, não o conteúdo.'
      ]
    },
    explicacao: 'O address bus leva da CPU o endereço da posição de memória a ser acessada. É unidirecional e não carrega o dado.',
    gemeo: 'DATABUS',
    grupo: 'barramento'
  },
  {
    resposta: 'DATABUS',
    nome: 'Data bus (barramento de dados)',
    aceitas: ['BARRAMENTODEDADOS'],
    arcano: { numero: 'X', nome: 'A Roda da Fortuna', imagem: 'img/arcanos/10-a-roda-da-fortuna.svg', cor: 'var(--cyan)' },
    pistas: {
      funcao: [
        'Linhas que transportam os valores lidos ou gravados entre CPU e memória.',
        'Caminho por onde a informação em si viaja entre processador e RAM.',
        'Via que entrega à CPU o valor que estava guardado na memória.'
      ],
      diferenca: [
        'É bidirecional: a informação vai e volta entre CPU e memória.',
        'Carrega o conteúdo; quem diz onde ele está é a outra via.'
      ],
      concreto: [
        'Sua largura, como 64 bits, define quanto se transfere por ciclo.',
        'Como o caminhão de entregas: leva a encomenda, não o endereço.'
      ]
    },
    explicacao: 'O data bus transporta os dados entre CPU, memória e dispositivos, nos dois sentidos. A posição vem pelo address bus.',
    gemeo: 'ADDRESSBUS',
    grupo: 'barramento'
  },
  {
    resposta: 'MICROCONTROLADOR',
    nome: 'Microcontrolador',
    aceitas: [],
    arcano: { numero: 'VII', nome: 'O Carro', imagem: 'img/arcanos/07-o-carro.svg', cor: 'var(--cyan)' },
    pistas: {
      funcao: [
        'Chip único com processador, RAM, Flash e entradas e saídas integrados.',
        'Computador completo num só chip, feito para uma tarefa específica.',
        'Circuito integrado que comanda sozinho um aparelho embarcado.'
      ],
      diferenca: [
        'Já traz memória e periféricos dentro do chip, sem depender da placa-mãe.',
        'Consome pouca energia e roda um único programa dedicado, não um sistema completo.'
      ],
      concreto: [
        'O ATmega328 da placa Arduino Uno é um exemplo.',
        'Está dentro da máquina de lavar, do forno e do teclado.'
      ]
    },
    explicacao: 'O microcontrolador reúne processador, memória e entradas e saídas num só chip, para comandar um aparelho específico.',
    gemeo: 'CPU',
    grupo: 'processador'
  },
  {
    resposta: 'DUALCORE',
    nome: 'Dual core',
    aceitas: [],
    arcano: { numero: 'VI', nome: 'Os Enamorados', imagem: 'img/arcanos/06-os-enamorados.svg', cor: 'var(--magenta)' },
    pistas: {
      funcao: [
        'Processador com duas unidades de processamento completas no mesmo chip.',
        'CPU capaz de executar duas tarefas realmente ao mesmo tempo.',
        'Chip com um par de processadores independentes que dividem o trabalho.'
      ],
      diferenca: [
        'Tem metade das unidades de processamento de um modelo com quatro.',
        'Executa duas sequências de instruções em paralelo, não quatro.'
      ],
      concreto: [
        'Os Intel Pentium D, de 2005, já traziam essa configuração.',
        'Pentium Gold e muitos Celeron de notebook básico usam esse formato.'
      ]
    },
    explicacao: 'Dual core é um processador com dois núcleos no mesmo chip, que executam duas tarefas em paralelo.',
    gemeo: 'QUADCORE',
    grupo: 'processador'
  },
  {
    resposta: 'QUADCORE',
    nome: 'Quad core',
    aceitas: [],
    arcano: { numero: 'XXI', nome: 'O Mundo', imagem: 'img/arcanos/21-o-mundo.svg', cor: 'var(--purple)' },
    pistas: {
      funcao: [
        'Processador com quatro unidades de processamento completas no mesmo chip.',
        'CPU que executa quatro tarefas realmente ao mesmo tempo.',
        'Chip com quatro processadores independentes que dividem o trabalho.'
      ],
      diferenca: [
        'Tem o dobro das unidades de processamento de um modelo com duas.',
        'Executa quatro sequências de instruções em paralelo, não apenas duas.'
      ],
      concreto: [
        'O Raspberry Pi 4 usa um processador ARM com essa configuração.',
        'O AMD Ryzen 3 3200G, de entrada, tem essa configuração.'
      ]
    },
    explicacao: 'Quad core é um processador com quatro núcleos no mesmo chip, que executam quatro tarefas em paralelo.',
    gemeo: 'DUALCORE',
    grupo: 'processador'
  }
];
