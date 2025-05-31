// O array de questões JSON já está embutido aqui, com a propriedade "day" adicionada
const allQuestions = [ 
  {
    "day": "Sábado",
    "pergunta": "De acordo com 1 Coríntios 10:11, 12, por que as coisas que aconteceram no passado foram escritas?",
    "opcoes": [
      "Para nos desanimar",
      "Para servir de exemplo e advertência para nós",
      "Para mostrar que o fim não chegará",
      "Para justificar a queda dos que pensam estar em pé"
    ],
    "respostaCorreta": "Para servir de exemplo e advertência para nós"
  },
  {
    "day": "Sábado",
    "pergunta": "O que a Bíblia contém que aponta para eventos futuros e oferece chaves para compreender a 'verdade presente'?",
    "opcoes": [
      "Relatos sem importância para o fim dos tempos",
      "Apenas histórias de fracasso",
      "Relatos sobre o povo de Deus",
      "Profecias que não se cumprirão"
    ],
    "respostaCorreta": "Relatos sobre o povo de Deus"
  },
  {
    "day": "Sábado",
    "pergunta": "Qual é o grande centro e objetivo final de todos os empreendimentos proféticos mencionados na lição?",
    "opcoes": [
      "As profecias de Daniel",
      "As histórias do Antigo Testamento",
      "O juízo investigativo",
      "Cristo"
    ],
    "respostaCorreta": "Cristo"
  },
  {
    "day": "Sábado",
    "pergunta": "Algumas histórias do Antigo Testamento servem como tipos ou símbolos de eventos finais porque:",
    "opcoes": [
      "São as únicas histórias na Bíblia",
      "O Novo Testamento se refere a elas especificamente ao descrever os eventos dos últimos dias",
      "São as histórias mais antigas",
      "Apenas exigem um estudo superficial"
    ],
    "respostaCorreta": "O Novo Testamento se refere a elas especificamente ao descrever os eventos dos últimos dias"
  },
  {
    "day": "Sábado",
    "pergunta": "O título da lição, 'Para quem o fim tem chegado', é tirado de qual texto bíblico?",
    "opcoes": [
      "Gênesis 6",
      "Apocalipse 6",
      "Daniel 7",
      "1 Coríntios 10:11, 12"
    ],
    "respostaCorreta": "1 Coríntios 10:11, 12"
  },
  {
    "day": "Sábado",
    "pergunta": "O estudo das histórias do passado e dos relatos bíblicos nos dá uma base mais ampla para:",
    "opcoes": [
      "Menosprezar a palavra de Deus",
      "Desanimar na fé",
      "Nos concentrarmos apenas no presente",
      "Nos dedicarmos ao estudo das profecias de Daniel e Apocalipse"
    ],
    "respostaCorreta": "Nos dedicarmos ao estudo das profecias de Daniel e Apocalipse"
  },
  {
    "day": "Sábado",
    "pergunta": "O que significa o termo grego 'telos', que se refere à palavra 'fim' ou 'fins' no verso para memorizar?",
    "opcoes": [
      "Um início ou começo",
      "Uma demora ou adiamento",
      "Um fim, propósito, meta, conclusão, realização, imposto",
      "Uma incerteza ou dúvida"
    ],
    "respostaCorreta": "Um fim, propósito, meta, conclusão, realização, imposto"
  },
  {
    "day": "Sábado",
    "pergunta": "Qual é o objetivo da lição desta semana, conforme mencionado em uma das fontes?",
    "opcoes": [
      "Estudar apenas o livro de Êxodo",
      "Analisar os eventos finais sem base bíblica",
      "Abordar o juízo de Deus e suas consequências",
      "Focar apenas nas histórias do Novo Testamento"
    ],
    "respostaCorreta": "Abordar o juízo de Deus e suas consequências"
  },
  {
    "day": "Sábado",
    "pergunta": "De acordo com uma das fontes, para quem o fim só chega?",
    "opcoes": [
      "Para aqueles que são fiéis a Deus",
      "Para aqueles que buscam fazer a vontade do Senhor",
      "Para aqueles que vivem na luz do reino de Deus",
      "Para aqueles que não são fiéis a Deus, são indiferentes às coisas espirituais"
    ],
    "respostaCorreta": "Para aqueles que não são fiéis a Deus, são indiferentes às coisas espirituais"
  },
  {
    "day": "Sábado",
    "pergunta": "O que a 'verdade presente' significa para cada época?",
    "opcoes": [
      "Que a verdade de Deus nunca muda",
      "Que a verdade de Deus é a mesma para todas as épocas, sem distinção",
      "Que para cada época existe uma verdade diferente e atual",
      "Que a verdade de Deus era relevante apenas no passado"
    ],
    "respostaCorreta": "Que para cada época existe uma verdade diferente e atual"
  },
  {
    "day": "Domingo",
    "pergunta": "Qual é o título do estudo de domingo?",
    "opcoes": [
      "O Evangelismo de Noé",
      "Sodoma e Gomorra",
      "O Juízo Pré-Advento",
      "A Ira do Cordeiro"
    ],
    "respostaCorreta": "A Ira do Cordeiro"
  },
  {
    "day": "Domingo",
    "pergunta": "Qual livro e capítulo do Apocalipse são referenciados para descrever a ira do Cordeiro e a reação dos perdidos?",
    "opcoes": [
      "Apocalipse 20",
      "Apocalipse 14",
      "Apocalipse 11",
      "Apocalipse 6"
    ],
    "respostaCorreta": "Apocalipse 6"
  },
  {
    "day": "Domingo",
    "pergunta": "Qual será a reação dos perdidos ao verem os eventos dos últimos dias, conforme descrito em Apocalipse 6?",
    "opcoes": [
      "Alegria e esperança",
      "Reconhecimento e arrependimento",
      "Esconderem-se nas cavernas e penhascos, pedindo para as montanhas caírem sobre eles",
      "Pregarem o evangelho"
    ],
    "respostaCorreta": "Esconderem-se nas cavernas e penhascos, pedindo para as montanhas caírem sobre eles"
  },
  {
    "day": "Domingo",
    "pergunta": "A ira de Deus é descrita como sendo diferente da ira humana porque:",
    "opcoes": [
      "É motivada por raiva e rancor",
      "É apenas destrutiva",
      "É justa e virá para trazer justiça e salvação",
      "Não tem consequências"
    ],
    "respostaCorreta": "É justa e virá para trazer justiça e salvação"
  },
  {
    "day": "Domingo",
    "pergunta": "A surpresa dos perdidos nos eventos finais não será por falta de informação, mas por:",
    "opcoes": [
      "Falta de tempo",
      "Falta de oportunidade",
      "Falta de evidência",
      "Sua recusa em crer e obedecer"
    ],
    "respostaCorreta": "Sua recusa em crer e obedecer"
  },
  {
    "day": "Domingo",
    "pergunta": "Quem são 'eles' a quem se refere a ira do Cordeiro (no plural) em Apocalipse 6:16, 17?",
    "opcoes": [
      "Os profetas e os anjos",
      "Os justos e os injustos",
      "O Anticristo e seus seguidores",
      "Aquele que está sentado no trono (Deus Pai) e o Cordeiro (Jesus)"
    ],
    "respostaCorreta": "Aquele que está sentado no trono (Deus Pai) e o Cordeiro (Jesus)"
  },
  {
    "day": "Domingo",
    "pergunta": "O que acontecerá com o evangelho antes que o fim venha?",
    "opcoes": [
      "Será esquecido",
      "Será ridicularizado",
      "Será pregado apenas para um pequeno grupo",
      "Será pregado a todas as nações da terra"
    ],
    "respostaCorreta": "Será pregado a todas as nações da terra"
  },
  {
    "day": "Domingo",
    "pergunta": "Quando Jesus voltar, as pessoas que foram avisadas e não tomaram atitude:",
    "opcoes": [
      "Serão pegas de surpresa sem saber o que está acontecendo",
      "Irão se arrepender imediatamente",
      "Irão se alegrar",
      "Lembrarão do que ouviram e entenderão o que está acontecendo"
    ],
    "respostaCorreta": "Lembrarão do que ouviram e entenderão o que está acontecendo"
  },
  {
    "day": "Domingo",
    "pergunta": "Qual é o papel importante do povo de Deus na história, conforme mencionado na lição?",
    "opcoes": [
      "Esconder-se e não falar sobre o fim",
      "Esperar passivamente o retorno de Cristo",
      "Focar apenas em seus próprios prazeres",
      "Pregar o evangelho"
    ],
    "respostaCorreta": "Pregar o evangelho"
  },
  {
    "day": "Domingo",
    "pergunta": "A cruz de Cristo, que revelou o amor de Deus, será o motivo de terror para aqueles que:",
    "opcoes": [
      "A aceitaram",
      "A estudaram",
      "A defenderam",
      "A desprezaram"
    ],
    "respostaCorreta": "A desprezaram"
  },
  {
    "day": "Segunda-feira",
    "pergunta": "Qual é o título do estudo de segunda-feira?",
    "opcoes": [
      "A Ira do Cordeiro",
      "Sodoma e Gomorra",
      "O Juiz de Toda a Terra",
      "O Evangelismo de Noé"
    ],
    "respostaCorreta": "O Evangelismo de Noé"
  },
  {
    "day": "Segunda-feira",
    "pergunta": "Muitos não estarão preparados para o retorno de Cristo porque:",
    "opcoes": [
      "Não tiveram oportunidade de ouvir a mensagem",
      "Estavam muito ocupados com suas vidas",
      "Deus não avisou",
      "De propósito esquecem o que aconteceu no dilúvio"
    ],
    "respostaCorreta": "De propósito esquecem o que aconteceu no dilúvio"
  },
  {
    "day": "Segunda-feira",
    "pergunta": "O que o mundo possui, apesar da ridicularização do relato bíblico do dilúvio?",
    "opcoes": [
      "Uma memória parcial do dilúvio",
      "Uma rejeição total do conceito de dilúvio",
      "Uma memória coletiva de um grande dilúvio",
      "Nenhuma lembrança do dilúvio"
    ],
    "respostaCorreta": "Uma memória coletiva de um grande dilúvio"
  },
  {
    "day": "Segunda-feira",
    "pergunta": "Por quanto tempo Noé pregou a mensagem de advertência, conforme mencionado nas fontes?",
    "opcoes": [
      "40 dias e 40 noites",
      "7 dias",
      "120 meses",
      "120 anos"
    ],
    "respostaCorreta": "120 anos"
  },
  {
    "day": "Segunda-feira",
    "pergunta": "Quais condições morais nos dias de Noé levaram ao dilúvio, e que se assemelham aos dias de hoje?",
    "opcoes": [
      "Santidade e obediência a Deus",
      "Apenas falta de chuva",
      "Maldade multiplicada, imaginação e pensamentos maus, casamentos mistos, desejos carnais, indiferença, incredulidade",
      "Apenas a construção da arca"
    ],
    "respostaCorreta": "Maldade multiplicada, imaginação e pensamentos maus, casamentos mistos, desejos carnais, indiferença, incredulidade"
  },
  {
    "day": "Segunda-feira",
    "pergunta": "Apesar de pregar por 120 anos, quantas pessoas foram salvas na arca com Noé?",
    "opcoes": [
      "Nenhuma",
      "Centenas",
      "Dezenas",
      "Oito"
    ],
    "respostaCorreta": "Oito"
  },
  {
    "day": "Segunda-feira",
    "pergunta": "Se Noé fosse um evangelista dos tempos modernos, como ele seria considerado por muitos, e por quê?",
    "opcoes": [
      "Bem-sucedido, por ter construído a arca",
      "Bem-sucedido, por salvar sua família",
      "Fracassado, porque a maioria das pessoas não foi salva",
      "Fracassado, porque a maioria das pessoas não entrou na arca"
    ],
    "respostaCorreta": "Fracassado, porque a maioria das pessoas não foi salva"
  },
  {
    "day": "Segunda-feira",
    "pergunta": "O que a Bíblia compara o número de perdidos no tempo do fim a?",
    "opcoes": [
      "O número de salvos",
      "Os animais da arca",
      "Os habitantes de Sodoma e Gomorra",
      "Os grãos de areia do mar"
    ],
    "respostaCorreta": "Os habitantes de Sodoma e Gomorra"
  },
  {
    "day": "Segunda-feira",
    "pergunta": "Como podemos manter o ânimo em nossos esforços evangelísticos, mesmo que não vejamos resultados imediatos?",
    "opcoes": [
      "Desistindo se poucas pessoas aceitarem",
      "Acreditando que a colheita é nossa responsabilidade",
      "Focando apenas nos números de convertidos",
      "Continuando firmes, fazendo a nossa parte, plantando a semente e acreditando na promessa de Deus"
    ],
    "respostaCorreta": "Continuando firmes, fazendo a nossa parte, plantando a semente e acreditando na promessa de Deus"
  },
  {
    "day": "Segunda-feira",
    "pergunta": "Qual é a analogia usada por Jesus para a palavra pregada que sugere a necessidade de paciência e espera pelos resultados?",
    "opcoes": [
      "A construção de uma arca",
      "A chuva",
      "A colheita",
      "A semente"
    ],
    "respostaCorreta": "A semente"
  },
  {
    "day": "Terça-feira",
    "pergunta": "Qual história do Antigo Testamento é o foco do estudo de terça-feira?",
    "opcoes": [
      "O Dilúvio",
      "O Juízo de Daniel 7",
      "A Torre de Babel",
      "Sodoma e Gomorra"
    ],
    "respostaCorreta": "Sodoma e Gomorra"
  },
  {
    "day": "Terça-feira",
    "pergunta": "O que a história de Sodoma e Gomorra mostra, em sua ligação com o Apocalipse?",
    "opcoes": [
      "A fidelidade do povo de Deus",
      "As condições morais no tempo do fim e as advertências de Deus",
      "A misericórdia de Deus sem juízo",
      "Apenas uma história antiga sem paralelos futuros"
    ],
    "respostaCorreta": "As condições morais no tempo do fim e as advertências de Deus"
  },
  {
    "day": "Terça-feira",
    "pergunta": "Quais eram as principais características da maldade e violência em Sodoma e Gomorra?",
    "opcoes": [
      "Apenas desrespeito",
      "Apenas orgulho",
      "Apenas desonestidade",
      "Imoralidade sexual e violência"
    ],
    "respostaCorreta": "Imoralidade sexual e violência"
  },
  {
    "day": "Terça-feira",
    "pergunta": "Deus revelou Seus planos de destruir Sodoma e Gomorra a Abraão antes de agir porque:",
    "opcoes": [
      "Precisava da permissão de Abraão",
      "Abraão certamente viria a ser uma grande nação e nele seriam benditas todas as nações da terra",
      "Queria testar a fé de Abraão",
      "Não faria coisa alguma sem informar Abraão"
    ],
    "respostaCorreta": "Abraão certamente viria a ser uma grande nação e nele seriam benditas todas as nações da terra"
  },
  {
    "day": "Terça-feira",
    "pergunta": "A intercessão de Abraão por Sodoma e Gomorra é um tipo de:",
    "opcoes": [
      "Desconfiança em Deus",
      "Oposição ao juízo",
      "Ação desnecessária",
      "Como o povo de Deus deve interceder pelos ímpios no tempo do fim"
    ],
    "respostaCorreta": "Como o povo de Deus deve interceder pelos ímpios no tempo do fim"
  },
  {
    "day": "Terça-feira",
    "pergunta": "Abraão questionou a justiça de Deus ao perguntar se Ele destruiria o justo com o ímpio. O que isso diz sobre o caráter de Deus?",
    "opcoes": [
      "Que Deus é questionável",
      "Que Deus pode cometer injustiça",
      "Que Deus não se submete ao julgamento de criaturas",
      "Que Deus voluntariamente Se submete às perguntas de Abraão e é justo"
    ],
    "respostaCorreta": "Que Deus voluntariamente Se submete às perguntas de Abraão e é justo"
  },
  {
    "day": "Terça-feira",
    "pergunta": "A história dos anjos enviados para advertir Ló em Sodoma é comparada nas fontes a quais mensageiros do Apocalipse?",
    "opcoes": [
      "Os quatro cavaleiros",
      "As sete pragas",
      "A besta do mar",
      "Os anjos simbólicos que chamam o povo de Deus para sair de Babilônia"
    ],
    "respostaCorreta": "Os anjos simbólicos que chamam o povo de Deus para sair de Babilônia"
  },
  {
    "day": "Terça-feira",
    "pergunta": "Qual foi a razão pela qual as filhas casadas de Ló e seus genros não quiseram sair de Sodoma?",
    "opcoes": [
      "Não acreditaram na advertência",
      "Estavam muito ocupados",
      "Ló não os avisou a tempo",
      "Tinham refletido a cultura da época e se tornaram carnais como as pessoas de Sodoma"
    ],
    "respostaCorreta": "Tinham refletido a cultura da época e se tornaram carnais como as pessoas de Sodoma"
  },
  {
    "day": "Terça-feira",
    "pergunta": "O que a história de Ló e sua família em Sodoma ensina sobre a preparação para o fim?",
    "opcoes": [
      "Que é suficiente ter conhecimento",
      "Que é possível viver no mundo sem ser afetado por ele",
      "Que devemos rejeitar qualquer tipo de complacência espiritual e viver uma vida de santidade prática",
      "Que Deus salva automaticamente a família do justo"
    ],
    "respostaCorreta": "Que devemos rejeitar qualquer tipo de complacência espiritual e viver uma vida de santidade prática"
  },
  {
    "day": "Terça-feira",
    "pergunta": "As cidades da planície, como Sodoma e Gomorra, tornaram-se o primeiro exemplo bíblico de centros populacionais destruídos por:",
    "opcoes": [
      "Um terremoto",
      "Um dilúvio",
      "Uma praga",
      "Fogo do céu"
    ],
    "respostaCorreta": "Fogo do céu"
  },
  {
    "day": "Quarta-feira",
    "pergunta": "Qual é o título do estudo de quarta-feira?",
    "opcoes": [
      "O Evangelismo de Noé",
      "Sodoma e Gomorra",
      "A Ira do Cordeiro",
      "O Juiz de Toda a Terra"
    ],
    "respostaCorreta": "O Juiz de Toda a Terra"
  },
  {
    "day": "Quarta-feira",
    "pergunta": "O que Deus não fará sem primeiro revelar o Seu segredo aos Seus servos, os profetas?",
    "opcoes": [
      "Criar o mundo",
      "Fazer justiça",
      "Vir pela segunda vez",
      "Fazer coisa alguma"
    ],
    "respostaCorreta": "Fazer coisa alguma"
  },
  {
    "day": "Quarta-feira",
    "pergunta": "O texto de Amós 3:7 é usado para demonstrar que Deus:",
    "opcoes": [
      "Age sem avisar",
      "Só age no último momento",
      "Revela Seus planos antes de julgar",
      "Não se preocupa com a humanidade"
    ],
    "respostaCorreta": "Revela Seus planos antes de julgar"
  },
  {
    "day": "Quarta-feira",
    "pergunta": "A história de Abraão intercedendo por Sodoma mostra que Deus está disposto a:",
    "opcoes": [
      "Ignorar a justiça",
      "Mudar Seus planos",
      "Ser testado por Abraão",
      "Ser examinado por criaturas que dependem Dele"
    ],
    "respostaCorreta": "Ser examinado por criaturas que dependem Dele"
  },
  {
    "day": "Quarta-feira",
    "pergunta": "Além de Abraão avaliar o caso de Sodoma, o que ele também estava fazendo ao dialogar com Deus?",
    "opcoes": [
      "Duvidando de Deus",
      "Negociando a vida de Ló",
      "Intercedendo pelos justos",
      "Examinando o caráter de Deus"
    ],
    "respostaCorreta": "Examinando o caráter de Deus"
  },
  {
    "day": "Quarta-feira",
    "pergunta": "O que Deus abrirá antes que o fim venha, permitindo que a humanidade investigue as evidências?",
    "opcoes": [
      "O templo",
      "As portas do céu",
      "O mar",
      "Os livros do Céu"
    ],
    "respostaCorreta": "Os livros do Céu"
  },
  {
    "day": "Quarta-feira",
    "pergunta": "De acordo com uma das fontes, após o juízo sobre os perdidos, Deus dará mil anos para que os justos:",
    "opcoes": [
      "Questionem Suas decisões",
      "Governem a Terra",
      "Descobriam o que houve com cada um e por quê",
      "Obtenham respostas para suas perguntas ainda não respondidas"
    ],
    "respostaCorreta": "Descobriam o que houve com cada um e por quê"
  },
  {
    "day": "Quarta-feira",
    "pergunta": "O que a disposição de Deus em ser julgado por Suas criaturas que dependem Dele diz sobre Seu caráter?",
    "opcoes": [
      "Que Ele é fraco",
      "Que Ele é indiferente",
      "Que Ele não é soberano",
      "Demonstra Seu amor, justiça e transparência"
    ],
    "respostaCorreta": "Demonstra Seu amor, justiça e transparência"
  },
  {
    "day": "Quarta-feira",
    "pergunta": "O que significa o juízo ser 'transparente' e 'cristalino'?",
    "opcoes": [
      "Que é fácil de entender",
      "Que não acontece sem que a gente saiba porquê",
      "Que é justo",
      "Todas as opções acima estão corretas"
    ],
    "respostaCorreta": "Todas as opções acima estão corretas"
  },
  {
    "day": "Quarta-feira",
    "pergunta": "O que a abertura dos livros do céu tem como objetivo final?",
    "opcoes": [
      "Condenar os ímpios",
      "Salvar os justos",
      "Legitimar que Deus sempre fez o que é correto e que o pecado não se levantará uma segunda vez",
      "Mostrar os erros dos justos"
    ],
    "respostaCorreta": "Legitimar que Deus sempre fez o que é correto e que o pecado não se levantará uma segunda vez"
  },
  {
    "day": "Quinta-feira",
    "pergunta": "Qual é o tema principal do estudo de quinta-feira?",
    "opcoes": [
      "A Vinda de Cristo",
      "A Destruição Final",
      "O Juízo Executivo",
      "O Juízo Pré-Advento / Juízo Investigativo"
    ],
    "respostaCorreta": "O Juízo Pré-Advento / Juízo Investigativo"
  },
  {
    "day": "Quinta-feira",
    "pergunta": "Qual livro profético é a base para o estudo do juízo pré-advento nesta lição?",
    "opcoes": [
      "Isaías",
      "Jeremias",
      "Ezequiel",
      "Daniel"
    ],
    "respostaCorreta": "Daniel"
  },
  {
    "day": "Quinta-feira",
    "pergunta": "A descrição do juízo em Daniel 7:9, 10, 13, 14, 22, 26, 27 apresenta um vislumbre por trás do véu de:",
    "opcoes": [
      "O plano de Satanás",
      "A criação do mundo",
      "O reino dos céus",
      "Como Deus está resolvendo o problema do pecado enquanto redime os que desejam viver em aliança com Ele"
    ],
    "respostaCorreta": "Como Deus está resolvendo o problema do pecado enquanto redime os que desejam viver em aliança com Ele"
  },
  {
    "day": "Quinta-feira",
    "pergunta": "Quem aparece em meio ao juízo celestial em Daniel 7, garantindo que este juízo é a favor dos santos do Altíssimo?",
    "opcoes": [
      "Os anjos",
      "O Ancião de Dias",
      "Os santos",
      "O Filho do Homem (Cristo)"
    ],
    "respostaCorreta": "O Filho do Homem (Cristo)"
  },
  {
    "day": "Quinta-feira",
    "pergunta": "O que é o foco principal do juízo investigativo em Daniel 7?",
    "opcoes": [
      "Condenar os ímpios",
      "Revelar os pecados do mundo",
      "Julgar os anjos",
      "A vindicação do povo de Deus"
    ],
    "respostaCorreta": "A vindicação do povo de Deus"
  },
  {
    "day": "Quinta-feira",
    "pergunta": "Que elementos são descritos na cena do juízo em Daniel 7:9-10?",
    "opcoes": [
      "O mar e a terra",
      "O sol e a lua",
      "Tronos postos, o Ancião de Dias, um tribunal assentado e livros abertos",
      "O chifre pequeno e os reinos da terra"
    ],
    "respostaCorreta": "Tronos postos, o Ancião de Dias, um tribunal assentado e livros abertos"
  },
  {
    "day": "Quinta-feira",
    "pergunta": "Para que Deus precisa de registros ou livros no céu, conforme explicado nas fontes?",
    "opcoes": [
      "Ele não precisa, mas as Suas criaturas precisam",
      "Para lembrar de tudo",
      "Para provar Seu poder",
      "Para condenar os ímpios"
    ],
    "respostaCorreta": "Ele não precisa, mas as Suas criaturas precisam"
  },
  {
    "day": "Quinta-feira",
    "pergunta": "De acordo com Daniel 7:22, após o juízo, o reino será dado a quem?",
    "opcoes": [
      "Ao Ancião de Dias",
      "Ao Filho do Homem",
      "À ponta pequena",
      "Ao povo dos santos do Altíssimo"
    ],
    "respostaCorreta": "Ao povo dos santos do Altíssimo"
  },
  {
    "day": "Quinta-feira",
    "pergunta": "O juízo pré-advento, ou investigativo, é uma doutrina exclusiva de qual grupo religioso, mencionada em uma das fontes?",
    "opcoes": [
      "Batistas",
      "Metodistas",
      "Pentecostais",
      "Adventistas do Sétimo Dia"
    ],
    "respostaCorreta": "Adventistas do Sétimo Dia"
  },
  {
    "day": "Quinta-feira",
    "pergunta": "O que a presença de Cristo como Filho do Homem no juízo de Daniel 7 garante aos santos?",
    "opcoes": [
      "Sua condenação",
      "Sua punição",
      "Que o juízo é a favor deles",
      "Que eles serão esquecidos"
    ],
    "respostaCorreta": "Que o juízo é a favor deles"
  },
  {
    "day": "Sexta-feira",
    "pergunta": "Qual é a única esperança do crente no momento do juízo, conforme sugerido pelas notas suplementares?",
    "opcoes": [
      "Suas próprias obras",
      "Os registros nos livros",
      "O perdão",
      "Cristo"
    ],
    "respostaCorreta": "Cristo"
  },
  {
    "day": "Sexta-feira",
    "pergunta": "Os livros de registro no céu contêm:",
    "opcoes": [
      "Apenas os nomes dos salvos",
      "Apenas os pecados dos perdidos",
      "Apenas a lei de Deus",
      "Os nomes e as obras dos homens, registros da vida de cada ser humano"
    ],
    "respostaCorreta": "Os nomes e as obras dos homens, registros da vida de cada ser humano"
  },
  {
    "day": "Sexta-feira",
    "pergunta": "O que a ilustração da lição com o livro aberto, as tábuas dos Dez Mandamentos e a pena de escrever simbolizam?",
    "opcoes": [
      "A misericórdia de Deus sem a lei",
      "Que a lei foi abolida",
      "Que o juízo não ocorrerá",
      "Que as ações humanas são avaliadas à luz da Lei divina no contexto do juízo"
    ],
    "respostaCorreta": "Que as ações humanas são avaliadas à luz da Lei divina no contexto do juízo"
  },
  {
    "day": "Sexta-feira",
    "pergunta": "O que a descrição do juízo investigativo em Daniel 7 nos oferece?",
    "opcoes": [
      "Medo e desespero",
      "Dúvidas sobre Deus",
      "Uma visão além do véu para ver como Deus está resolvendo o problema do pecado",
      "A certeza da condenação"
    ],
    "respostaCorreta": "Uma visão além do véu para ver como Deus está resolvendo o problema do pecado"
  },
  {
    "day": "Sexta-feira",
    "pergunta": "O que a lição nos convida a analisar em nossa vida com base nos relatos e no juízo?",
    "opcoes": [
      "Apenas as falhas dos outros",
      "Apenas os sucessos",
      "O nosso interior, práticas diárias, egoísmo, ociosidade, indiferença espiritual, deveres não cumpridos",
      "Apenas a teoria bíblica"
    ],
    "respostaCorreta": "O nosso interior, práticas diárias, egoísmo, ociosidade, indiferença espiritual, deveres não cumpridos"
  },
  {
    "day": "Sexta-feira",
    "pergunta": "De acordo com as notas suplementares, a intemperança embota as faculdades morais e espirituais e prepara o caminho para:",
    "opcoes": [
      "A obediência a Deus",
      "A reforma de saúde",
      "A satisfação das más paixões",
      "O estudo da Bíblia"
    ],
    "respostaCorreta": "A satisfação das más paixões"
  },
  {
    "day": "Sexta-feira",
    "pergunta": "Como podemos evitar a queda, conforme a advertência de 1 Coríntios 10:12?",
    "opcoes": [
      "Pensando que já estamos firmes",
      "Ignorando os exemplos do passado",
      "Olhando para trás e não para frente",
      "Aquele que pensa estar em pé, veja que não caia"
    ],
    "respostaCorreta": "Aquele que pensa estar em pé, veja que não caia"
  },
  {
    "day": "Sexta-feira",
    "pergunta": "Apesar de ser um estudo sóbrio, o estudo do juízo investigativo e dos eventos finais traz esperança e alegria porque:",
    "opcoes": [
      "Podemos esconder nossos pecados",
      "Deus não julgará",
      "Jesus é nosso advogado",
      "O juízo é contra nós"
    ],
    "respostaCorreta": "Jesus é nosso advogado"
  },
  {
    "day": "Sexta-feira",
    "pergunta": "Qual é o apelo final feito nas fontes para aqueles que ouvem a mensagem de Deus?",
    "opcoes": [
      "Endurecer o coração",
      "Adiar a decisão",
      "Abrir o coração para Jesus e não endurecê-lo",
      "Esperar pelo próximo aviso"
    ],
    "respostaCorreta": "Abrir o coração para Jesus e não endurecê-lo"
  },
  {
    "day": "Sexta-feira",
    "pergunta": "O que a palavra de Deus diz que a verdade fará por aqueles que a conhecem?",
    "opcoes": [
      "Os condenará",
      "Os tornará arrogantes",
      "Os aprisionará",
      "Os libertará"
    ],
    "respostaCorreta": "Os libertará"
  }
];

  let questions = []; // Este array agora será preenchido com as questões filtradas
  let currentQuestionIndex = 0;
  let selectedAnswer = null;
  let correctAnswersCount = 0;

  // Referências aos novos elementos da interface
  const daySelectionContainer = document.getElementById('day-selection-container');
  const daySelect = document.getElementById('day-select'); // Referência ao novo select
  const allQuestionsButton = document.getElementById('all-questions-button'); // Referência ao botão "Todas as Questões"
  const quizContentContainer = document.getElementById('quiz-content');

  const questionTextElement = document.getElementById('question-text');
  const questionCounterElement = document.getElementById('question-counter');
  const optionsContainer = document.getElementById('options-container');
  const submitButton = document.getElementById('submit-button');
  const feedbackElement = document.getElementById('feedback');
  const nextButton = document.getElementById('next-button');
  const restartButton = document.getElementById('restart-button');
  const backToDaysButton = document.getElementById('back-to-days-button');
  const scoreDisplayElement = document.getElementById('score-display');

  // Função para embaralhar um array (Fisher-Yates shuffle)
  function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
  }

  function updateQuestionCounter() {
      questionCounterElement.textContent = `Questão ${currentQuestionIndex + 1} de ${questions.length}`;
  }

  function loadQuestion() {
      scoreDisplayElement.style.display = 'none';
      backToDaysButton.style.display = 'none';

      if (currentQuestionIndex < questions.length) {
          const currentQuestion = questions[currentQuestionIndex];
          questionTextElement.textContent = currentQuestion.pergunta;
          optionsContainer.innerHTML = '';
          selectedAnswer = null;
          updateQuestionCounter();

          const shuffledOptions = [...currentQuestion.opcoes];
          shuffleArray(shuffledOptions);

          shuffledOptions.forEach(option => {
              const button = document.createElement('button');
              button.classList.add('option-button');
              button.textContent = option;
              button.addEventListener('click', () => selectOption(button, option));
              optionsContainer.appendChild(button);
          });

          submitButton.style.display = 'block';
          submitButton.disabled = false;
          feedbackElement.textContent = '';
          nextButton.style.display = 'none';

          optionsContainer.querySelectorAll('.option-button').forEach(btn => {
              btn.classList.remove('correct', 'incorrect', 'selected');
              btn.disabled = false;
          });

      } else {
          questionTextElement.textContent = "Quiz Concluído!";
          optionsContainer.innerHTML = '';
          submitButton.style.display = 'none';
          feedbackElement.textContent = 'Você terminou todas as questões para este dia!';
          questionCounterElement.style.display = 'none';

          scoreDisplayElement.textContent = `Você acertou ${correctAnswersCount} de ${questions.length} questões!`;
          scoreDisplayElement.style.display = 'block';

          restartButton.style.display = 'block';
          backToDaysButton.style.display = 'block';
          nextButton.style.display = 'none';
      }
  }

  function selectOption(button, option) {
      optionsContainer.querySelectorAll('.option-button').forEach(btn => {
          btn.classList.remove('selected');
      });
      button.classList.add('selected');
      selectedAnswer = option;
  }

  function checkAnswer() {
      if (selectedAnswer === null) {
          feedbackElement.textContent = 'Por favor, selecione uma opção.';
          feedbackElement.style.color = '#ffc107';
          return;
      }

      const currentQuestion = questions[currentQuestionIndex];
      const buttons = optionsContainer.querySelectorAll('.option-button');

      buttons.forEach(button => {
          button.disabled = true;
          if (button.textContent === currentQuestion.respostaCorreta) {
              button.classList.add('correct');
          } else if (button.textContent === selectedAnswer) {
              button.classList.add('incorrect');
          }
      });

      if (selectedAnswer === currentQuestion.respostaCorreta) {
          feedbackElement.textContent = 'Correto!';
          feedbackElement.style.color = '#28a745';
          correctAnswersCount++;
      } else {
          feedbackElement.textContent = `Incorreto. A resposta correta era: ${currentQuestion.respostaCorreta}`;
          feedbackElement.style.color = '#dc3545';
      }

      submitButton.style.display = 'none';
      nextButton.style.display = 'block';

      if (currentQuestionIndex === questions.length - 1) {
          nextButton.style.display = 'none';
          restartButton.style.display = 'block';
          backToDaysButton.style.display = 'block';
      }
  }

  function goToNextQuestion() {
      currentQuestionIndex++;
      loadQuestion();
  }

  function restartQuiz() {
      currentQuestionIndex = 0;
      correctAnswersCount = 0;
      shuffleArray(questions);
      questionCounterElement.style.display = 'block';
      loadQuestion();
  }

  function showDaySelection() {
      quizContentContainer.style.display = 'none';
      daySelectionContainer.style.display = 'flex';
      correctAnswersCount = 0;
      currentQuestionIndex = 0;
      questionCounterElement.style.display = 'block';
      scoreDisplayElement.style.display = 'none';
      feedbackElement.textContent = '';
      daySelect.value = ""; // Reseta o valor selecionado no dropdown
  }

  function startQuiz(day) {
      if (day === "") { // Adicionado para lidar com a opção "Selecione um dia"
          alert("Por favor, selecione um dia para começar o quiz.");
          return;
      }
      if (day === "Geral") {
          questions = [...allQuestions];
      } else {
          questions = allQuestions.filter(q => q.day === day);
      }

      if (questions.length === 0) {
          alert("Não há questões para o dia selecionado. Por favor, escolha outro dia.");
          return;
      }

      shuffleArray(questions);
      currentQuestionIndex = 0;
      correctAnswersCount = 0;

      daySelectionContainer.style.display = 'none';
      quizContentContainer.style.display = 'block';
      loadQuestion();
  }

  // Event Listeners
  submitButton.addEventListener('click', checkAnswer);
  nextButton.addEventListener('click', goToNextQuestion);
  restartButton.addEventListener('click', restartQuiz);
  backToDaysButton.addEventListener('click', showDaySelection);

  // Event Listener para o novo combobox/dropdown
  daySelect.addEventListener('change', (event) => {
      const selectedDay = event.target.value;
      startQuiz(selectedDay);
  });

  // Event Listener para o botão "Todas as Questões"
  allQuestionsButton.addEventListener('click', () => {
      startQuiz("Geral");
  });

  // Inicializa mostrando a tela de seleção de dias
  showDaySelection();
