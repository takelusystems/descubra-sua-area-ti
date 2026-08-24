import type { QuizQuestion } from '../types/quiz'

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'q1',
    question:
      'Você recebe um computador que começou a apresentar um problema estranho. O que despertaria primeiro a sua curiosidade?',
    context:
      'Escolha a alternativa que mais se aproxima da forma como você naturalmente investigaria a situação.',
    options: [
      {
        id: 'a',
        text: 'Abrir ou analisar os componentes para descobrir se alguma peça está causando o problema.',
        weights: {
          hardware: 3,
        },
      },
      {
        id: 'b',
        text: 'Descobrir se algum programa, configuração ou trecho de código está provocando o erro.',
        weights: {
          programming: 3,
          games: 1,
        },
      },
      {
        id: 'c',
        text: 'Verificar se o equipamento está se comunicando corretamente com a internet e os outros dispositivos.',
        weights: {
          networks: 3,
        },
      },
      {
        id: 'd',
        text: 'Investigar registros e comportamentos estranhos para saber se existe alguma atividade suspeita.',
        weights: {
          cybersecurity: 3,
        },
      },
      {
        id: 'e',
        text: 'Reunir informações sobre o problema e usar ferramentas inteligentes para encontrar padrões ou possíveis causas.',
        weights: {
          ai: 3,
          programming: 1,
        },
      },
    ],
  },
  {
    id: 'q2',
    question:
      'Em um trabalho em grupo, aparece um problema inesperado faltando pouco tempo para a entrega. Qual papel mais combina com você?',
    options: [
      {
        id: 'a',
        text: 'Organizar o problema em etapas e construir uma solução lógica para fazê-lo funcionar.',
        weights: {
          programming: 3,
        },
      },
      {
        id: 'b',
        text: 'Investigar exatamente o que aconteceu, procurando pistas que os outros talvez não tenham percebido.',
        weights: {
          cybersecurity: 3,
        },
      },
      {
        id: 'c',
        text: 'Verificar se os equipamentos e recursos necessários estão conectados e funcionando juntos.',
        weights: {
          networks: 3,
          hardware: 1,
        },
      },
      {
        id: 'd',
        text: 'Pensar em uma solução criativa e interativa que transforme o problema em algo mais interessante.',
        weights: {
          games: 3,
          programming: 1,
        },
      },
      {
        id: 'e',
        text: 'Analisar as informações disponíveis e procurar uma forma de automatizar parte da solução.',
        weights: {
          ai: 3,
          programming: 1,
        },
      },
    ],
  },
  {
    id: 'q3',
    question:
      'Imagine que você entrou em uma grande feira de tecnologia e só pode visitar uma atração. Qual escolheria?',
    options: [
      {
        id: 'a',
        text: 'Um laboratório onde é possível montar computadores, robôs e experimentar novos componentes.',
        weights: {
          hardware: 3,
          networks: 1,
        },
      },
      {
        id: 'b',
        text: 'Uma oficina onde você cria um aplicativo do zero e vê sua ideia funcionando.',
        weights: {
          programming: 3,
        },
      },
      {
        id: 'c',
        text: 'Uma demonstração mostrando como milhares de computadores e dispositivos se comunicam pelo mundo.',
        weights: {
          networks: 3,
        },
      },
      {
        id: 'd',
        text: 'Uma game jam onde pequenos grupos criam um jogo em poucas horas.',
        weights: {
          games: 3,
          programming: 1,
        },
      },
      {
        id: 'e',
        text: 'Um laboratório com sistemas capazes de reconhecer padrões, imagens, textos e tomar decisões.',
        weights: {
          ai: 3,
        },
      },
    ],
  },
  {
    id: 'q4',
    question:
      'Quando você precisa aprender algo tecnológico completamente novo, qual método parece mais interessante?',
    options: [
      {
        id: 'a',
        text: 'Mexer no equipamento, observar cada parte e descobrir na prática como aquilo funciona.',
        weights: {
          hardware: 3,
        },
      },
      {
        id: 'b',
        text: 'Começar pelo básico e resolver desafios cada vez mais difíceis seguindo uma sequência lógica.',
        weights: {
          programming: 3,
        },
      },
      {
        id: 'c',
        text: 'Desenhar ou visualizar como as partes se conectam e como a informação circula entre elas.',
        weights: {
          networks: 3,
        },
      },
      {
        id: 'd',
        text: 'Testar situações inesperadas e tentar descobrir onde o sistema pode falhar.',
        weights: {
          cybersecurity: 3,
        },
      },
      {
        id: 'e',
        text: 'Experimentar exemplos, comparar resultados e descobrir padrões a partir dos testes.',
        weights: {
          ai: 3,
          games: 1,
        },
      },
    ],
  },
  {
    id: 'q5',
    question:
      'Se sua turma tivesse que criar um projeto tecnológico para apresentar, qual responsabilidade você escolheria?',
    options: [
      {
        id: 'a',
        text: 'Fazer a parte principal do sistema funcionar por meio de lógica e código.',
        weights: {
          programming: 3,
        },
      },
      {
        id: 'b',
        text: 'Preparar computadores, dispositivos ou outros equipamentos necessários para a apresentação.',
        weights: {
          hardware: 3,
        },
      },
      {
        id: 'c',
        text: 'Garantir que os dispositivos consigam trocar informações e acessar corretamente os serviços necessários.',
        weights: {
          networks: 3,
        },
      },
      {
        id: 'd',
        text: 'Pensar em riscos, proteger o projeto e testar comportamentos que poderiam causar problemas.',
        weights: {
          cybersecurity: 3,
        },
      },
      {
        id: 'e',
        text: 'Criar uma experiência mais inteligente, criativa ou interativa para impressionar quem estiver assistindo.',
        weights: {
          ai: 2,
          games: 2,
        },
      },
    ],
  },
  {
    id: 'q6',
    question:
      'A internet de uma sala está muito lenta, mas ninguém sabe o motivo. Qual investigação parece mais interessante?',
    options: [
      {
        id: 'a',
        text: 'Descobrir por onde os dados estão passando e em qual ponto a comunicação está ficando lenta.',
        weights: {
          networks: 3,
        },
      },
      {
        id: 'b',
        text: 'Verificar se algum equipamento está sobrecarregado, com defeito ou funcionando abaixo do esperado.',
        weights: {
          hardware: 3,
          networks: 1,
        },
      },
      {
        id: 'c',
        text: 'Criar ou utilizar alguma ferramenta que colete informações e ajude a identificar automaticamente a causa.',
        weights: {
          programming: 2,
          ai: 2,
        },
      },
      {
        id: 'd',
        text: 'Investigar se existe algum acesso estranho ou tráfego suspeito consumindo os recursos da rede.',
        weights: {
          cybersecurity: 3,
          networks: 1,
        },
      },
      {
        id: 'e',
        text: 'Transformar os dados sobre velocidade e uso em uma visualização interativa que facilite entender o problema.',
        weights: {
          games: 2,
          programming: 2,
        },
      },
    ],
  },
  {
    id: 'q7',
    question:
      'Qual destes tipos de desafio provavelmente daria a você maior sensação de satisfação ao conseguir resolver?',
    options: [
      {
        id: 'a',
        text: 'Fazer uma máquina que parecia quebrada voltar a funcionar perfeitamente.',
        weights: {
          hardware: 3,
        },
      },
      {
        id: 'b',
        text: 'Criar uma solução que execute automaticamente algo que antes precisava ser feito manualmente.',
        weights: {
          programming: 3,
          ai: 1,
        },
      },
      {
        id: 'c',
        text: 'Conseguir fazer vários equipamentos diferentes se comunicarem de forma estável.',
        weights: {
          networks: 3,
        },
      },
      {
        id: 'd',
        text: 'Descobrir a origem de um comportamento suspeito depois de analisar várias pequenas pistas.',
        weights: {
          cybersecurity: 3,
        },
      },
      {
        id: 'e',
        text: 'Criar uma experiência digital em que outras pessoas possam explorar, testar e se divertir.',
        weights: {
          games: 3,
          programming: 1,
        },
      },
    ],
  },
  {
    id: 'q8',
    question:
      'Que tipo de quebra-cabeça ou problema mais combina com sua maneira de pensar?',
    options: [
      {
        id: 'a',
        text: 'Encontrar uma sequência exata de passos capaz de transformar uma entrada no resultado esperado.',
        weights: {
          programming: 3,
        },
      },
      {
        id: 'b',
        text: 'Entender como peças diferentes precisam ser organizadas para que o conjunto funcione.',
        weights: {
          hardware: 3,
        },
      },
      {
        id: 'c',
        text: 'Encontrar o melhor caminho entre vários pontos ligados uns aos outros.',
        weights: {
          networks: 3,
          programming: 1,
        },
      },
      {
        id: 'd',
        text: 'Resolver um mistério em que algumas informações podem estar escondidas ou serem enganosas.',
        weights: {
          cybersecurity: 3,
        },
      },
      {
        id: 'e',
        text: 'Observar muitos exemplos e tentar prever o que provavelmente acontecerá a seguir.',
        weights: {
          ai: 3,
          games: 1,
        },
      },
    ],
  },
  {
    id: 'q9',
    question:
      'Quando você imagina começar um novo projeto tecnológico, qual pergunta surgiria primeiro na sua cabeça?',
    options: [
      {
        id: 'a',
        text: 'Qual lógica e quais funcionalidades serão necessárias para transformar essa ideia em algo utilizável?',
        weights: {
          programming: 3,
        },
      },
      {
        id: 'b',
        text: 'Quais equipamentos, peças ou dispositivos serão necessários para isso funcionar?',
        weights: {
          hardware: 3,
        },
      },
      {
        id: 'c',
        text: 'Como todos os dispositivos e serviços envolvidos vão conseguir se comunicar?',
        weights: {
          networks: 3,
        },
      },
      {
        id: 'd',
        text: 'O que alguém poderia fazer para explorar uma falha e como podemos evitar isso?',
        weights: {
          cybersecurity: 3,
        },
      },
      {
        id: 'e',
        text: 'Que tipo de experiência inteligente ou interativa poderia tornar esse projeto diferente dos outros?',
        weights: {
          games: 2,
          ai: 2,
        },
      },
    ],
  },
  {
    id: 'q10',
    question:
      'Você percebe que precisa repetir a mesma tarefa digital dezenas de vezes. Qual reação combina mais com você?',
    options: [
      {
        id: 'a',
        text: 'Pensaria imediatamente em criar um programa ou script para realizar a tarefa sozinho.',
        weights: {
          programming: 3,
        },
      },
      {
        id: 'b',
        text: 'Tentaria descobrir se alguma configuração ou melhoria no equipamento poderia acelerar o processo.',
        weights: {
          hardware: 3,
        },
      },
      {
        id: 'c',
        text: 'Tentaria organizar melhor onde os arquivos e recursos estão para reduzir transferências e esperas.',
        weights: {
          networks: 3,
        },
      },
      {
        id: 'd',
        text: 'Antes de automatizar, verificaria se o processo envolve riscos de acesso, permissões ou exposição de informações.',
        weights: {
          cybersecurity: 3,
        },
      },
      {
        id: 'e',
        text: 'Tentaria criar uma solução capaz de aprender com exemplos e ajudar a decidir automaticamente o que fazer.',
        weights: {
          ai: 3,
          programming: 1,
        },
      },
    ],
  },
  {
    id: 'q11',
    question:
      'Quando algo que deveria funcionar apresenta um erro, qual abordagem parece mais natural?',
    options: [
      {
        id: 'a',
        text: 'Reproduzir o erro, mudar uma coisa de cada vez e descobrir exatamente qual etapa está falhando.',
        weights: {
          programming: 3,
        },
      },
      {
        id: 'b',
        text: 'Testar fisicamente cada componente e substituir temporariamente as peças mais suspeitas.',
        weights: {
          hardware: 3,
        },
      },
      {
        id: 'c',
        text: 'Isolar cada trecho da comunicação até descobrir onde a informação deixou de chegar corretamente.',
        weights: {
          networks: 3,
        },
      },
      {
        id: 'd',
        text: 'Analisar registros, horários e ações para descobrir se o erro pode ter sido provocado intencionalmente.',
        weights: {
          cybersecurity: 3,
        },
      },
      {
        id: 'e',
        text: 'Comparar muitos casos parecidos e procurar padrões que indiquem automaticamente a causa mais provável.',
        weights: {
          ai: 3,
        },
      },
    ],
  },
  {
    id: 'q12',
    question:
      'Em um projeto de tecnologia, qual resultado faria você pensar “ficou realmente bom”?',
    options: [
      {
        id: 'a',
        text: 'O equipamento está estável, organizado, eficiente e preparado para funcionar por bastante tempo.',
        weights: {
          hardware: 3,
        },
      },
      {
        id: 'b',
        text: 'O sistema faz exatamente o que deveria, com uma solução lógica que pode ser melhorada depois.',
        weights: {
          programming: 3,
        },
      },
      {
        id: 'c',
        text: 'A comunicação é rápida, estável e continua funcionando mesmo quando muita gente utiliza ao mesmo tempo.',
        weights: {
          networks: 3,
        },
      },
      {
        id: 'd',
        text: 'O sistema continua protegido mesmo quando alguém tenta utilizá-lo de formas inesperadas.',
        weights: {
          cybersecurity: 3,
        },
      },
      {
        id: 'e',
        text: 'As pessoas acham a experiência interessante e o sistema consegue reagir de maneira inteligente ou envolvente.',
        weights: {
          games: 2,
          ai: 2,
        },
      },
    ],
  },
  {
    id: 'q13',
    question:
      'Um amigo convida você para participar de uma atividade de tecnologia durante um sábado. Qual convite parece mais interessante?',
    options: [
      {
        id: 'a',
        text: 'Montar computadores, servidores ou dispositivos e testar diferentes configurações.',
        weights: {
          hardware: 3,
          networks: 1,
        },
      },
      {
        id: 'b',
        text: 'Participar de um hackathon para criar um aplicativo ou sistema em equipe.',
        weights: {
          programming: 3,
        },
      },
      {
        id: 'c',
        text: 'Montar uma pequena infraestrutura conectando vários computadores e serviços.',
        weights: {
          networks: 3,
        },
      },
      {
        id: 'd',
        text: 'Participar de um desafio de investigação e segurança em um ambiente criado especialmente para testes.',
        weights: {
          cybersecurity: 3,
        },
      },
      {
        id: 'e',
        text: 'Criar um pequeno jogo ou experimentar uma ferramenta de inteligência artificial em um projeto divertido.',
        weights: {
          games: 2,
          ai: 2,
        },
      },
    ],
  },
  {
    id: 'q14',
    question:
      'Você recebe um problema tecnológico com poucas informações e ninguém sabe por onde começar. O que faria?',
    options: [
      {
        id: 'a',
        text: 'Dividiria o problema em partes menores e criaria pequenos testes até descobrir o comportamento de cada uma.',
        weights: {
          programming: 3,
        },
      },
      {
        id: 'b',
        text: 'Inspecionaria primeiro os equipamentos e elementos físicos disponíveis para entender as limitações reais.',
        weights: {
          hardware: 3,
        },
      },
      {
        id: 'c',
        text: 'Mapearia quais sistemas dependem uns dos outros e como a informação circula entre eles.',
        weights: {
          networks: 3,
        },
      },
      {
        id: 'd',
        text: 'Procuraria evidências, registros e comportamentos fora do padrão antes de formular uma hipótese.',
        weights: {
          cybersecurity: 3,
        },
      },
      {
        id: 'e',
        text: 'Reuniria exemplos e dados para testar diferentes hipóteses e descobrir qual delas explica melhor o problema.',
        weights: {
          ai: 3,
        },
      },
    ],
  },
  {
    id: 'q15',
    question:
      'Pensando no futuro da tecnologia, qual possibilidade mais desperta sua curiosidade?',
    context:
      'Esta é a última pergunta. Escolha aquilo que você realmente teria vontade de explorar.',
    options: [
      {
        id: 'a',
        text: 'Criar equipamentos cada vez mais rápidos, compactos, eficientes e capazes de interagir com o mundo físico.',
        weights: {
          hardware: 3,
        },
      },
      {
        id: 'b',
        text: 'Construir aplicativos e sistemas que resolvam problemas utilizados por milhares de pessoas.',
        weights: {
          programming: 3,
        },
      },
      {
        id: 'c',
        text: 'Conectar cada vez mais dispositivos e garantir comunicação rápida entre pessoas, máquinas e serviços.',
        weights: {
          networks: 3,
        },
      },
      {
        id: 'd',
        text: 'Proteger pessoas e organizações em um mundo cada vez mais dependente de sistemas digitais.',
        weights: {
          cybersecurity: 3,
        },
      },
      {
        id: 'e',
        text: 'Criar experiências digitais e sistemas capazes de aprender, gerar conteúdo ou tomar decisões.',
        weights: {
          ai: 2,
          games: 2,
        },
      },
    ],
  },
]