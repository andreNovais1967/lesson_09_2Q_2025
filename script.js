// O array de questões JSON já está embutido aqui, com a propriedade "day" adicionada
const allQuestions = [ // Renomeado para 'allQuestions' para manter o array completo
    // SÁBADO (Questões 1-10)
    {
      "day": "Sábado",
      "pergunta": "Qual é o foco principal da Lição 9, 'Nos Salmos - Parte 2'?",
      "opcoes": [
        "Analisar profecias apocalípticas com bestas e símbolos complexos.",
        "Explorar alusões proféticas no Livro dos Salmos e como suas imagens, símbolos e alusões enriquecem a compreensão da profecia bíblica.",
        "Estudar a história do povo de Israel através de seus cânticos devocionais.",
        "Comparar o Livro dos Salmos com os Evangelhos."
      ],
      "respostaCorreta": "Explorar alusões proféticas no Livro dos Salmos e como suas imagens, símbolos e alusões enriquecem a compreensão da profecia bíblica."
    },
    {
      "day": "Sábado",
      "pergunta": "Do ponto de vista da Igreja Adventista do Sétimo Dia, quais temas escatológicos centrais são destacados nos Salmos estudados?",
      "opcoes": [
        "O êxodo do Egito e a entrada na Terra Prometida, a construção do Templo de Salomão e a dispersão das tribos de Israel.",
        "A criação do mundo, a queda do homem e a promessa de um Salvador.",
        "O segundo advento de Cristo, o juízo e o estabelecimento do Reino de Deus.",
        "A vida de Jesus Cristo e Seus milagres."
      ],
      "respostaCorreta": "O segundo advento de Cristo, o juízo e o estabelecimento do Reino de Deus."
    },
    {
      "day": "Sábado",
      "pergunta": "O que a profecia de Ageu sobre a abalo de 'todas as nações' e o 'Desejado de todas as nações' tem em comum com as alusões proféticas nos Salmos?",
      "opcoes": [
        "Ambas as profecias se referem exclusivamente ao primeiro advento de Cristo.",
        "Ambas enfatizam o retorno literal do povo de Israel à sua terra.",
        "Ambas predizem o juízo final sobre a Terra e o estabelecimento do Reino milenar.",
        "Ambas as profecias apontam para a manifestação gloriosa de Cristo e Seu governo sobre as nações."
      ],
      "respostaCorreta": "Ambas as profecias apontam para a manifestação gloriosa de Cristo e Seu governo sobre as nações."
    },
    {
      "day": "Sábado",
      "pergunta": "O que o Salmo 23, com sua imagem do 'Pastor', tem a ver com a compreensão profética e escatológica?",
      "opcoes": [
        "Ele profetiza a futura ocupação da Terra Prometida.",
        "Ele se refere apenas à liderança de Moisés no deserto.",
        "Ele simboliza o cuidado e a provisão de Deus para Seu povo, que culmina na era messiânica e no Reino de Deus.",
        "Ele é uma alusão direta à vida de Davi como pastor."
      ],
      "respostaCorreta": "Ele simboliza o cuidado e a provisão de Deus para Seu povo, que culmina na era messiânica e no Reino de Deus."
    },
    {
      "day": "Sábado",
      "pergunta": "Como os Salmos contribuem para a nossa compreensão do Messias e Seu Reino, mesmo sem serem profecias apocalípticas explícitas?",
      "opcoes": [
        "Apenas fornecendo hinos para adoração no templo.",
        "Através de imagens poéticas e simbólicas, os Salmos prefiguram a vinda, o sofrimento, a ressurreição e o reinado de Cristo.",
        "Eles contam histórias da vida dos profetas do Antigo Testamento.",
        "Eles descrevem a fundação de Jerusalém como capital."
      ],
      "respostaCorreta": "Através de imagens poéticas e simbólicas, os Salmos prefiguram a vinda, o sofrimento, a ressurreição e o reinado de Cristo."
    },
    {
      "day": "Sábado",
      "pergunta": "Qual é a relação entre os Salmos e a visão adventista do Grande Conflito?",
      "opcoes": [
        "Os Salmos não têm relação alguma com o Grande Conflito, pois são apenas cânticos de louvor.",
        "Os Salmos não abordam o tema do Grande Conflito.",
        "Os Salmos retratam o conflito entre o bem e o mal, a justiça e a injustiça, e a esperança final na vitória de Deus, alinhando-se com a visão adventista do Grande Conflito.",
        "Eles apenas narram eventos históricos de guerras em Israel."
      ],
      "respostaCorreta": "Os Salmos retratam o conflito entre o bem e o mal, a justiça e a injustiça, e a esperança final na vitória de Deus, alinhando-se com a visão adventista do Grande Conflito."
    },
    {
      "day": "Sábado",
      "pergunta": "No contexto da escatologia adventista, como os Salmos podem fortalecer a nossa fé no segundo advento de Cristo?",
      "opcoes": [
        "Eles fornecem detalhes específicos sobre a data do retorno de Cristo.",
        "Através da descrição de Deus como Rei e Juiz, os Salmos reforçam a certeza do futuro reino de justiça e paz, onde Cristo reinará plenamente.",
        "Eles descrevem os sinais exatos que precederão o retorno de Jesus.",
        "Os Salmos não mencionam o segundo advento."
      ],
      "respostaCorreta": "Através da descrição de Deus como Rei e Juiz, os Salmos reforçam a certeza do futuro reino de justiça e paz, onde Cristo reinará plenamente."
    },
    {
      "day": "Sábado",
      "pergunta": "Qual a importância de estudar as 'alusões proféticas' nos Salmos para a interpretação adventista?",
      "opcoes": [
        "Para focar apenas na história de Israel.",
        "Para entender a Bíblia de forma literal e não simbólica.",
        "Elas fornecem um contexto mais rico e aprofundado para a compreensão das grandes verdades do plano da salvação e do futuro de Deus para a humanidade.",
        "Para desconsiderar as profecias apocalípticas."
      ],
      "respostaCorreta": "Elas fornecem um contexto mais rico e aprofundado para a compreensão das grandes verdades do plano da salvação e do futuro de Deus para a humanidade."
    },
    {
      "day": "Sábado",
      "pergunta": "Que papel os Salmos desempenham na Liturgia e adoração adventista, especialmente considerando seu conteúdo profético?",
      "opcoes": [
        "Apenas como músicas de fundo.",
        "São cantados para preencher o tempo nos cultos.",
        "Os Salmos são usados para inspirar louvor e adoração, ao mesmo tempo em que lembram os crentes das promessas divinas e da esperança futura.",
        "Eles servem apenas para meditação individual e não para culto público."
      ],
      "respostaCorreta": "Os Salmos são usados para inspirar louvor e adoração, ao mesmo tempo em que lembram os crentes das promessas divinas e da esperança futura."
    },
    {
      "day": "Sábado",
      "pergunta": "Em resumo, qual a mensagem central que os Salmos transmitem sobre o futuro, conforme a compreensão adventista?",
      "opcoes": [
        "Uma mensagem de desespero e incerteza.",
        "Uma mensagem de espera passiva pelo fim.",
        "Uma mensagem de esperança, justiça e a certeza da vitória final de Deus e do estabelecimento de Seu Reino eterno.",
        "Uma mensagem focada apenas na salvação individual, sem perspectiva coletiva."
      ],
      "respostaCorreta": "Uma mensagem de esperança, justiça e a certeza da vitória final de Deus e do estabelecimento de Seu Reino eterno."
    },

    // DOMINGO (Questões 11-20)
    {
      "day": "Domingo",
      "pergunta": "Que tipo de linguagem os Salmos empregam para transmitir suas mensagens, especialmente as alusões proféticas?",
      "opcoes": [
        "Linguagem meramente histórica e factual.",
        "Linguagem apocalíptica direta e símbolos complexos.",
        "Linguagem poética, simbólica e metafórica que, ao invés de apresentar datas ou eventos explícitos, evoca imagens e sentimentos.",
        "Linguagem jurídica e legalista."
      ],
      "respostaCorreta": "Linguagem poética, simbólica e metafórica que, ao invés de apresentar datas ou eventos explícitos, evoca imagens e sentimentos."
    },
    {
      "day": "Domingo",
      "pergunta": "Qual a principal função da poesia no Livro dos Salmos?",
      "opcoes": [
        "Apenas para embelezar o texto.",
        "A poesia nos Salmos tem a função de expressar emoções profundas, facilitar a memorização e criar imagens vívidas que revelam verdades sobre Deus e a experiência humana.",
        "Para tornar o texto mais difícil de entender.",
        "Para esconder o verdadeiro significado das profecias."
      ],
      "respostaCorreta": "A poesia nos Salmos tem a função de expressar emoções profundas, facilitar a memorização e criar imagens vívidas que revelam verdades sobre Deus e a experiência humana."
    },
    {
      "day": "Domingo",
      "pergunta": "O que significa dizer que os Salmos utilizam 'imagens' e 'símbolos' em suas alusões proféticas?",
      "opcoes": [
        "Significa que os Salmos são livros de adivinhação.",
        "Significa que eles fornecem representações concretas de conceitos abstratos, permitindo que os leitores compreendam verdades espirituais complexas de forma mais intuitiva.",
        "Significa que os Salmos são apenas histórias infantis.",
        "Que suas mensagens são diretas e sem duplo sentido."
      ],
      "respostaCorreta": "Significa que eles fornecem representações concretas de conceitos abstratos, permitindo que os leitores compreendam verdades espirituais complexas de forma mais intuitiva."
    },
    {
      "day": "Domingo",
      "pergunta": "Qual a diferença entre uma 'profecia direta' e uma 'alusão profética' no contexto dos Salmos?",
      "opcoes": [
        "Não há diferença; são termos sinônimos.",
        "Uma profecia direta prediz um evento futuro de forma explícita, enquanto uma alusão profética usa imagens e temas que prefiguram eventos ou realidades messiânicas e escatológicas.",
        "A profecia direta só se aplica ao Antigo Testamento, e a alusão profética ao Novo.",
        "A profecia direta é fácil de entender, a alusão profética é impossível de entender."
      ],
      "respostaCorreta": "Uma profecia direta prediz um evento futuro de forma explícita, enquanto uma alusão profética usa imagens e temas que prefiguram eventos ou realidades messiânicas e escatológicas."
    },
    {
      "day": "Domingo",
      "pergunta": "Por que a compreensão da linguagem poética é crucial para a interpretação dos Salmos?",
      "opcoes": [
        "Porque os Salmos são apenas poemas e não têm significado profundo.",
        "Porque a poesia dos Salmos não é importante para o entendimento da mensagem.",
        "Porque ignorar a natureza poética leva a interpretações literais e equivocadas, perdendo a riqueza de significado e as camadas de sentido que os Salmos pretendem transmitir.",
        "Porque a poesia dificulta a compreensão da verdade bíblica."
      ],
      "respostaCorreta": "Porque ignorar a natureza poética leva a interpretações literais e equivocadas, perdendo a riqueza de significado e as camadas de sentido que os Salmos pretendem transmitir."
    },
    {
      "day": "Domingo",
      "pergunta": "Como o Salmo 2, com sua imagem do 'Filho' governando sobre as nações, exemplifica uma alusão profética?",
      "opcoes": [
        "Ele se refere apenas ao filho biológico de Davi.",
        "Ele é uma profecia literal sobre a divisão do reino de Israel.",
        "Ele usa a figura de um rei terreno para aludir ao Messias, o Filho de Deus, cujo reinado se estenderá sobre todas as nações, prefigurando o reino de Cristo.",
        "É um salmo histórico sem implicações futuras."
      ],
      "respostaCorreta": "Ele usa a figura de um rei terreno para alusão ao Messias, o Filho de Deus, cujo reinado se estenderá sobre todas as nações, prefigurando o reino de Cristo."
    },
    {
      "day": "Domingo",
      "pergunta": "No Salmo 24, a entrada do 'Rei da Glória' em Jerusalém pode ser entendida como uma alusão a que evento futuro?",
      "opcoes": [
        "Apenas a entrada de Davi na cidade.",
        "A construção do segundo Templo.",
        "À entrada triunfal de Cristo em Jerusalém, à Sua ascensão aos céus e, finalmente, ao Seu retorno glorioso para estabelecer Seu reino eterno.",
        "A uma conquista militar."
      ],
      "respostaCorreta": "À entrada triunfal de Cristo em Jerusalém, à Sua ascensão aos céus e, finalmente, ao Seu retorno glorioso para estabelecer Seu reino eterno."
    },
    {
      "day": "Domingo",
      "pergunta": "Qual é a importância de reconhecer a linguagem figurada nos Salmos para a escatologia adventista?",
      "opcoes": [
        "Para diminuir a importância da profecia.",
        "Para não levar a Bíblia a sério.",
        "Permite que os adventistas compreendam como os Salmos, com sua riqueza poética, apontam para a segunda vinda de Cristo, o juízo e o estabelecimento do reino milenar de Deus.",
        "Para focar apenas no aspecto histórico da Bíblia."
      ],
      "respostaCorreta": "Permite que os adventistas compreendam como os Salmos, com sua riqueza poética, apontam para a segunda vinda de Cristo, o juízo e o estabelecimento do reino milenar de Deus."
    },
    {
      "day": "Domingo",
      "pergunta": "Como a poesia dos Salmos ajuda a preparar os crentes para os eventos finais?",
      "opcoes": [
        "Apenas descrevendo desastres naturais.",
        "Ao inspirar esperança, fé e confiança na soberania de Deus, a poesia dos Salmos fortalece os crentes para enfrentar os desafios e esperar a consumação das promessas divinas.",
        "Dando-lhes instruções detalhadas sobre como construir abrigos.",
        "Ensinando-os a prever o futuro com precisão."
      ],
      "respostaCorreta": "Ao inspirar esperança, fé e confiança na soberania de Deus, a poesia dos Salmos fortalece os crentes para enfrentar os desafios e esperar a consumação das promessas divinas."
    },
    {
      "day": "Domingo",
      "pergunta": "O que a 'exegese histórico-gramatical' e a 'leitura teológica' dos Salmos contribuem para a compreensão das alusões proféticas?",
      "opcoes": [
        "Apenas focam na gramática hebraica.",
        "A exegese histórico-gramatical busca o sentido original do texto, enquanto a leitura teológica contextualiza as alusões proféticas dentro da história da salvação e da teologia bíblica mais ampla, revelando sua relevância para o plano de Deus.",
        "Ambas as abordagens são contraditórias e não devem ser usadas juntas.",
        "Elas são irrelevantes para a interpretação profética."
      ],
      "respostaCorreta": "A exegese histórico-gramatical busca o sentido original do texto, enquanto a leitura teológica contextualiza as alusões proféticas dentro da história da salvação e da teologia bíblica mais ampla, revelando sua relevância para o plano de Deus."
    },
    // SEGUNDA-FEIRA (Questões 21-30)
    {
      "day": "Segunda-feira",
      "pergunta": "Qual o principal tema abordado no Salmo 97 e como ele se relaciona com a escatologia?",
      "opcoes": [
        "A importância da observância do sábado.",
        "A descrição da criação do mundo.",
        "O reinado universal e a glória de Deus, que culmina no estabelecimento de Seu reino de justiça e no juízo final, eventos cruciais na escatologia.",
        "A história da vida de Davi."
      ],
      "respostaCorreta": "O reinado universal e a glória de Deus, que culmina no estabelecimento de Seu reino de justiça e no juízo final, eventos cruciais na escatologia."
    },
    {
      "day": "Segunda-feira",
      "pergunta": "O que a expressão 'nuvens e densas trevas O rodeiam' no Salmo 97:2 simboliza no contexto profético?",
      "opcoes": [
        "A presença de uma tempestade literal.",
        "A dificuldade de se aproximar de Deus.",
        "A santidade, a majestade e, por vezes, o mistério e o terror da presença divina em Seus atos de juízo e poder.",
        "O eclipse solar."
      ],
      "respostaCorreta": "A santidade, a majestade e, por vezes, o mistério e o terror da presença divina em Seus atos de juízo e poder."
    },
    {
      "day": "Segunda-feira",
      "pergunta": "Como a frase 'fogo vai adiante dEle e abrasa os inimigos ao redor' (Salmo 97:3) se encaixa na visão adventista do fim dos tempos?",
      "opcoes": [
        "Refere-se a um incêndio florestal.",
        "Descreve o castigo literal do povo de Israel.",
        "Aponta para o juízo final de Deus sobre os ímpios, onde o fogo destrói o pecado e purifica a Terra, preparando-a para o estabelecimento do Reino eterno.",
        "É uma metáfora para a raiva humana."
      ],
      "respostaCorreta": "Aponta para o juízo final de Deus sobre os ímpios, onde o fogo destrói o pecado e purifica a Terra, preparando-a para o estabelecimento do Reino eterno."
    },
    {
      "day": "Segunda-feira",
      "pergunta": "Que significado tem a frase 'os montes se derretem como cera na presença do Senhor' (Salmo 97:5) para a escatologia?",
      "opcoes": [
        "Descreve um fenômeno geológico.",
        "Significa que as montanhas de Israel vão derreter.",
        "Simboliza a magnitude do poder divino que transforma e reconfigura a criação em preparação para o estabelecimento de Seu reino de justiça, como na Nova Terra.",
        "É uma descrição de uma erupção vulcânica."
      ],
      "respostaCorreta": "Simboliza a magnitude do poder divino que transforma e reconfigura a criação em preparação para o estabelecimento de Seu reino de justiça, como na Nova Terra."
    },
    {
      "day": "Segunda-feira",
      "pergunta": "O Salmo 97:6 afirma que 'os céus anunciam a Sua justiça, e todos os povos veem a Sua glória'. Como isso se alinha com a visão adventista do segundo advento?",
      "opcoes": [
        "Indica que apenas algumas pessoas verão a glória de Deus.",
        "É uma declaração sobre a supremacia do sol.",
        "Refere-se à manifestação universal da glória de Cristo e à proclamação final da justiça de Deus ao mundo antes de Sua vinda.",
        "Descreve um fenômeno meteorológico."
      ],
      "respostaCorreta": "Refere-se à manifestação universal da glória de Cristo e à proclamação final da justiça de Deus ao mundo antes de Sua vinda."
    },
    {
      "day": "Segunda-feira",
      "pergunta": "Qual a implicação da ordem 'adorai-o, todos os seus anjos' (Salmo 97:7) para a adoração no fim dos tempos?",
      "opcoes": [
        "Apenas os anjos devem adorar a Deus.",
        "Não tem implicação para a adoração humana.",
        "Aponta para a adoração universal a Deus no fim dos tempos, onde toda a criação, incluindo os remidos, se unirá em louvor e reconhecimento de Sua soberania.",
        "Adoração é um conceito desatualizado."
      ],
      "respostaCorreta": "Aponta para a adoração universal a Deus no fim dos tempos, onde toda a criação, incluindo os remidos, se unirá em louvor e reconhecimento de Sua soberania."
    },
    {
      "day": "Segunda-feira",
      "pergunta": "Como a alegria de Sião e Judá no Salmo 97:8-9 pode ser interpretada à luz do fim dos tempos?",
      "opcoes": [
        "Apenas a alegria das cidades de Israel.",
        "Um sentimento passageiro e sem importância.",
        "Sinaliza a celebração e a justificação do povo de Deus (a Sião espiritual) ao ver a justiça e a vitória de Deus se manifestarem plenamente no final dos tempos.",
        "É uma metáfora para a felicidade dos reis."
      ],
      "respostaCorreta": "Sinaliza a celebração e a justificação do povo de Deus (a Sião espiritual) ao ver a justiça e a vitória de Deus se manifestarem plenamente no final dos tempos."
    },
    {
      "day": "Segunda-feira",
      "pergunta": "O Salmo 97:10 exorta: 'Vós que amais o Senhor, aborrecei o mal'. Que relevância isso tem para a vida dos crentes antes do segundo advento?",
      "opcoes": [
        "Não é relevante para a vida cristã.",
        "Significa que os crentes devem odiar todas as pessoas.",
        "Destaca a importância da santidade e da separação do pecado como preparação para a vinda de Cristo e para viver no Seu reino de justiça.",
        "Apenas para os líderes religiosos."
      ],
      "respostaCorreta": "Destaca a importância da santidade e da separação do pecado como preparação para a vinda de Cristo e para viver no Seu reino de justiça."
    },
    {
      "day": "Segunda-feira",
      "pergunta": "Que papel o Salmo 97 desempenha na esperança adventista da restauração e do novo céu e nova terra?",
      "opcoes": [
        "Nenhum papel, é apenas um salmo sobre a realeza de Deus.",
        "Ele reforça a crença na intervenção divina para estabelecer um novo mundo de justiça e paz, onde a glória de Deus será plenamente revelada e o mal será erradicado.",
        "Descreve a formação de novas galáxias.",
        "Foca apenas na vida presente."
      ],
      "respostaCorreta": "Ele reforça a crença na intervenção divina para estabelecer um novo mundo de justiça e paz, onde a glória de Deus será plenamente revelada e o mal será erradicado."
    },
    {
      "day": "Segunda-feira",
      "pergunta": "Em suma, qual a mensagem de esperança que o Salmo 97 transmite sobre o futuro de Deus?",
      "opcoes": [
        "Uma mensagem de incerteza e medo.",
        "Que Deus é um rei cruel e implacável.",
        "Uma mensagem de triunfo divino, justiça e a certeza de que Deus reinará soberanamente, trazendo luz e alegria para Seu povo.",
        "Que o mundo está fadado à destruição sem esperança."
      ],
      "respostaCorreta": "Uma mensagem de triunfo divino, justiça e a certeza de que Deus reinará soberanamente, trazendo luz e alegria para Seu povo."
    },
    // TERÇA-FEIRA (Questões 31-40)
    {
      "day": "Terça-feira",
      "pergunta": "Qual a principal profecia messiânica no Salmo 45?",
      "opcoes": [
        "A conquista de uma cidade por Davi.",
        "O casamento de um rei israelita.",
        "A unção e o reinado eterno de um rei divinamente escolhido, que prefigura Jesus Cristo como o Messias e Rei.",
        "A construção de um templo."
      ],
      "respostaCorreta": "A unção e o reinado eterno de um rei divinamente escolhido, que prefigura Jesus Cristo como o Messias e Rei."
    },
    {
      "day": "Terça-feira",
      "pergunta": "A quem se refere a frase 'Tu és mais formoso do que os filhos dos homens' (Salmo 45:2) no contexto messiânico?",
      "opcoes": [
        "A um rei terreno comum.",
        "A qualquer ser humano.",
        "A Jesus Cristo, que excede em beleza e graça a todos os seres humanos, refletindo Sua divindade e perfeição.",
        "A um anjo."
      ],
      "respostaCorreta": "A Jesus Cristo, que excede em beleza e graça a todos os seres humanos, refletindo Sua divindade e perfeição."
    },
    {
      "day": "Terça-feira",
      "pergunta": "O que significa 'Deus, o Teu trono subsiste para todo o sempre' (Salmo 45:6) em relação ao Messias?",
      "opcoes": [
        "Que o trono de um rei terreno é eterno.",
        "Que Deus não tem trono.",
        "Indica a natureza divina e eterna do reinado de Jesus Cristo, cujo reino não terá fim, cumprindo a promessa do Reino de Deus.",
        "É uma figura de linguagem sem significado profundo."
      ],
      "respostaCorreta": "Indica a natureza divina e eterna do reinado de Jesus Cristo, cujo reino não terá fim, cumprindo a promessa do Reino de Deus."
    },
    {
      "day": "Terça-feira",
      "pergunta": "Como a unção do Messias com 'óleo de alegria mais do que a Teus companheiros' (Salmo 45:7) se relaciona com Jesus?",
      "opcoes": [
        "Refere-se a um ritual de coroação antigo.",
        "Significa que Jesus era mais feliz que todos.",
        "Simboliza a unção de Jesus pelo Espírito Santo para Sua missão messiânica, destacando Sua alegria e pureza como Filho de Deus.",
        "É uma referência literal a óleo de oliva."
      ],
      "respostaCorreta": "Simboliza a unção de Jesus pelo Espírito Santo para Sua missão messiânica, destacando Sua alegria e pureza como Filho de Deus."
    },
    {
      "day": "Terça-feira",
      "pergunta": "Quem é a 'rainha' mencionada no Salmo 45:9 ('A rainha está à Tua direita em ouro de Ofir') no contexto profético?",
      "opcoes": [
        "A esposa de um rei terreno.",
        "Uma rainha histórica de Israel.",
        "Representa a Igreja, a noiva de Cristo, adornada com a justiça de Deus e unida a Ele em Seu reino.",
        "É uma figura mitológica."
      ],
      "respostaCorreta": "Representa a Igreja, a noiva de Cristo, adornada com a justiça de Deus e unida a Ele em Seu reino."
    },
    {
      "day": "Terça-feira",
      "pergunta": "O que a instrução à 'filha do rei' para 'esquecer o teu povo e a casa de teu pai' (Salmo 45:10) significa para a Igreja?",
      "opcoes": [
        "Que a Igreja deve abandonar sua história.",
        "Que os crentes devem renunciar à sua família.",
        "Simboliza a completa dedicação e lealdade da Igreja a Cristo, deixando para trás as antigas formas e apegos mundanos para se unir a Ele.",
        "É uma alegoria sem aplicação prática."
      ],
      "respostaCorreta": "Simboliza a completa dedicação e lealdade da Igreja a Cristo, deixando para trás as antigas formas e apegos mundanos para se unir a Ele."
    },
    {
      "day": "Terça-feira",
      "pergunta": "Como os Salmos 110 e 45 se complementam na descrição do Messias?",
      "opcoes": [
        "Não se complementam, são independentes.",
        "O Salmo 110 foca no sacerdócio, e o Salmo 45 na realeza.",
        "Enquanto o Salmo 110 enfatiza o Messias como Rei e Sacerdote, o Salmo 45 o descreve como um Rei glorioso e o Noivo da Igreja, juntos, oferecendo uma visão completa de Seu ofício messiânico.",
        "Ambos descrevem o mesmo evento histórico."
      ],
      "respostaCorreta": "Enquanto o Salmo 110 enfatiza o Messias como Rei e Sacerdote, o Salmo 45 o descreve como um Rei glorioso e o Noivo da Igreja, juntos, oferecendo uma visão completa de Seu ofício messiânico."
    },
    {
      "day": "Terça-feira",
      "pergunta": "Qual a relevância do Salmo 45 para a escatologia adventista, especialmente em relação ao casamento do Cordeiro?",
      "opcoes": [
        "Nenhuma, é apenas um salmo de amor.",
        "É uma profecia sobre casamentos terrenos.",
        "O Salmo 45 prefigura o casamento do Cordeiro (Apocalipse 19:7-9), simbolizando a união final e gloriosa de Cristo com Sua Igreja remida no estabelecimento do Reino eterno.",
        "Descreve o fim dos casamentos."
      ],
      "respostaCorreta": "O Salmo 45 prefigura o casamento do Cordeiro (Apocalipse 19:7-9), simbolizando a união final e gloriosa de Cristo com Sua Igreja remida no estabelecimento do Reino eterno."
    },
    {
      "day": "Terça-feira",
      "pergunta": "O que a menção de 'filhas de reis' e 'princesas' no Salmo 45:13-14 representa para a Igreja?",
      "opcoes": [
        "Apenas mulheres da realeza.",
        "Não tem significado simbólico.",
        "Simboliza a universalidade da Igreja, composta por pessoas de todas as nações e classes sociais, que são convidadas a se unirem ao Rei e Sua noiva.",
        "Representa a hierarquia da Igreja."
      ],
      "respostaCorreta": "Simboliza a universalidade da Igreja, composta por pessoas de todas as nações e classes sociais, que são convidadas a se unirem ao Rei e Sua noiva."
    },
    {
      "day": "Terça-feira",
      "pergunta": "Qual a mensagem geral de esperança que o Salmo 45 transmite sobre o Messias e Sua Igreja?",
      "opcoes": [
        "Uma mensagem de derrota e tristeza.",
        "Que o Messias não terá uma Igreja.",
        "Uma mensagem de glória, beleza e triunfo, onde o Messias reinará eternamente com Sua Igreja, trazendo alegria e prosperidade sem fim.",
        "Uma mensagem focada na imperfeição humana."
      ],
      "respostaCorreta": "Uma mensagem de glória, beleza e triunfo, onde o Messias reinará eternamente com Sua Igreja, trazendo alegria e prosperidade sem fim."
    },
    // QUARTA-FEIRA (Questões 41-50)
    {
      "day": "Quarta-feira",
      "pergunta": "O que o Salmo 82 descreve e qual sua relevância para a escatologia?",
      "opcoes": [
        "Apenas uma disputa entre deuses pagãos.",
        "Um julgamento divino que demonstra o juízo de Deus sobre líderes injustos e falsos deuses, prefigurando o juízo final e o estabelecimento do Reino de Deus.",
        "Uma batalha entre nações.",
        "Um evento histórico sem significado futuro."
      ],
      "respostaCorreta": "Um julgamento divino que demonstra o juízo de Deus sobre líderes injustos e falsos deuses, prefigurando o juízo final e o estabelecimento do Reino de Deus."
    },
    {
      "day": "Quarta-feira",
      "pergunta": "A quem se refere 'Deus assiste na congregação divina' (Salmo 82:1)?",
      "opcoes": [
        "A uma reunião de sacerdotes.",
        "A uma assembleia de anjos e seres celestiais, onde Deus, o Juiz supremo, preside o julgamento dos 'deuses' (governantes injustos).",
        "A um conselho de reis terrenos.",
        "A uma reunião secreta de magos."
      ],
      "respostaCorreta": "A uma assembleia de anjos e seres celestiais, onde Deus, o Juiz supremo, preside o julgamento dos 'deuses' (governantes injustos)."
    },
    {
      "day": "Quarta-feira",
      "pergunta": "O que significa 'Até quando julgareis injustamente e tomareis partido com os ímpios?' (Salmo 82:2)?",
      "opcoes": [
        "Uma crítica aos juízes de Israel.",
        "Uma acusação de corrupção política.",
        "Uma condenação divina à injustiça e à corrupção dos líderes e governantes que oprimem os necessitados e violam a lei de Deus.",
        "Uma pergunta retórica sem resposta."
      ],
      "respostaCorreta": "Uma condenação divina à injustiça e à corrupção dos líderes e governantes que oprimem os necessitados e violam a lei de Deus."
    },
    {
      "day": "Quarta-feira",
      "pergunta": "Qual a implicação da frase 'todos vós sois deuses' (Salmo 82:6) para os juízes e líderes?",
      "opcoes": [
        "Que os juízes são literalmente deuses.",
        "Que os líderes são imortais.",
        "Lembrar que, embora tenham autoridade delegada por Deus, eles são mortais e responsáveis por seus atos, submetidos ao juízo divino.",
        "Que eles têm poder ilimitado."
      ],
      "respostaCorreta": "Lembrar que, embora tenham autoridade delegada por Deus, eles são mortais e responsáveis por seus atos, submetidos ao juízo divino."
    },
    {
      "day": "Quarta-feira",
      "pergunta": "Como o Salmo 82:7, 'Todavia, como homens morrereis, e como um dos príncipes caireis', se relaciona com o juízo final?",
      "opcoes": [
        "Descreve a morte natural de todos os homens.",
        "Significa que apenas os príncipes morrerão.",
        "Enfatiza a mortalidade e a responsabilidade de todos os 'deuses' (líderes) diante de Deus, que os julgará e os fará cair como qualquer ser humano, no juízo final.",
        "É uma profecia sobre a queda de impérios."
      ],
      "respostaCorreta": "Enfatiza a mortalidade e a responsabilidade de todos os 'deuses' (líderes) diante de Deus, que os julgará e os fará cair como qualquer ser humano, no juízo final."
    },
    {
      "day": "Quarta-feira",
      "pergunta": "O que a exortação 'Levanta-te, ó Deus, julga a terra, pois tu herdarás todas as nações' (Salmo 82:8) significa para a esperança escatológica?",
      "opcoes": [
        "Um pedido para Deus abençoar a terra.",
        "Que Deus deve se tornar um rei terreno.",
        "É um clamor para que Deus intervenha e estabeleça Seu reino de justiça, onde Ele reinará sobre todas as nações e julgará com retidão, restaurando a ordem.",
        "É uma expressão de desespero."
      ],
      "respostaCorreta": "É um clamor para que Deus intervenha e estabeleça Seu reino de justiça, onde Ele reinará sobre todas as nações e julgará com retidão, restaurando a ordem."
    },
    {
      "day": "Quarta-feira",
      "pergunta": "Qual a relação entre o Salmo 82 e a visão adventista do juízo investigativo?",
      "opcoes": [
        "Não há relação.",
        "O Salmo 82 descreve o juízo final e a punição dos ímpios, alinhando-se com a crença adventista no juízo investigativo que precede o segundo advento e determina quem é digno da salvação.",
        "O Salmo 82 foca apenas no juízo terreno.",
        "É uma profecia sobre a destruição de templos."
      ],
      "respostaCorreta": "O Salmo 82 descreve o juízo final e a punição dos ímpios, alinhando-se com a crença adventista no juízo investigativo que precede o segundo advento e determina quem é digno da salvação."
    },
    {
      "day": "Quarta-feira",
      "pergunta": "O Salmo 82 aborda a questão da justiça social. Como isso se relaciona com a preparação para o fim dos tempos?",
      "opcoes": [
        "A justiça social não é importante no fim dos tempos.",
        "É um tema apenas para ativistas sociais.",
        "A busca pela justiça social e a defesa dos oprimidos são parte integrante da fé adventista e refletem o caráter de Deus, preparando os crentes para viver em um mundo de justiça plena.",
        "É uma distração da pregação do evangelho."
      ],
      "respostaCorreta": "A busca pela justiça social e a defesa dos oprimidos são parte integrante da fé adventista e refletem o caráter de Deus, preparando os crentes para viver em um mundo de justiça plena."
    },
    {
      "day": "Quarta-feira",
      "pergunta": "Que esperança o Salmo 82 oferece aos oprimidos e aos que sofrem injustiça?",
      "opcoes": [
        "Nenhuma esperança, apenas descreve a injustiça.",
        "Apenas a esperança de vingança.",
        "Oferece a esperança de que Deus é o Juiz supremo que defenderá os oprimidos, corrigirá as injustiças e estabelecerá Seu reino de justiça plena.",
        "Apenas a esperança de um milagre imediato."
      ],
      "respostaCorreta": "Oferece a esperança de que Deus é o Juiz supremo que defenderá os oprimidos, corrigirá as injustiças e estabelecerá Seu reino de justiça plena."
    },
    {
      "day": "Quarta-feira",
      "pergunta": "Em resumo, qual a principal mensagem do Salmo 82 sobre o caráter de Deus e o futuro?",
      "opcoes": [
        "Que Deus é indiferente à injustiça.",
        "Que Deus é apenas um observador passivo.",
        "Que Deus é um Juiz justo e soberano que, no tempo certo, intervirá para julgar a terra, erradicar a injustiça e estabelecer Seu reino de justiça e paz.",
        "Que o futuro é incerto e sem direção."
      ],
      "respostaCorreta": "Que Deus é um Juiz justo e soberano que, no tempo certo, intervirá para julgar a terra, erradicar a injustiça e estabelecer Seu reino de justiça e paz."
    },
    // QUINTA-FEIRA (Questões 51-60)
    {
      "day": "Quinta-feira",
      "pergunta": "Qual o tema central do Salmo 118 em relação à profecia?",
      "opcoes": [
        "A construção do Templo de Jerusalém.",
        "A celebração da vitória militar.",
        "A vinda do Messias, a Sua rejeição e, por fim, a Sua exaltação como a 'pedra angular', prefigurando Sua morte, ressurreição e reinado.",
        "A coroação de um rei terreno."
      ],
      "respostaCorreta": "A vinda do Messias, a Sua rejeição e, por fim, a Sua exaltação como a 'pedra angular', prefigurando Sua morte, ressurreição e reinado."
    },
    {
      "day": "Quinta-feira",
      "pergunta": "A quem se refere a frase 'Bendito o que vem em nome do Senhor' (Salmo 118:26) no Novo Testamento?",
      "opcoes": [
        "A qualquer pessoa que vem ao templo.",
        "A um profeta do Antigo Testamento.",
        "A Jesus Cristo, em Sua entrada triunfal em Jerusalém, quando a multidão O saudou com essas palavras, reconhecendo-O como o Messias.",
        "Ao sumo sacerdote."
      ],
      "respostaCorreta": "A Jesus Cristo, em Sua entrada triunfal em Jerusalém, quando a multidão O saudou com essas palavras, reconhecendo-O como o Messias."
    },
    {
      "day": "Quinta-feira",
      "pergunta": "O que significa 'A pedra que os construtores rejeitaram, essa veio a ser a pedra angular' (Salmo 118:22) em relação a Jesus?",
      "opcoes": [
        "Que Jesus foi rejeitado pelos construtores de casas.",
        "Que Jesus era uma pedra literal.",
        "Profetiza a rejeição de Jesus pelos líderes religiosos de Sua época, mas Sua posterior exaltação por Deus como o fundamento essencial da Igreja e do plano da salvação.",
        "É uma metáfora sobre a construção de um muro."
      ],
      "respostaCorreta": "Profetiza a rejeição de Jesus pelos líderes religiosos de Sua época, mas Sua posterior exaltação por Deus como o fundamento essencial da Igreja e do plano da salvação."
    },
    {
      "day": "Quinta-feira",
      "pergunta": "Como a frase 'Esta é a obra do Senhor; maravilhosa é aos nossos olhos' (Salmo 118:23) se aplica à ressurreição de Cristo?",
      "opcoes": [
        "Refere-se à construção de uma grande obra arquitetônica.",
        "Não tem relação com a ressurreição.",
        "Reconhece a ressurreição de Jesus como um ato milagroso e divino de Deus, que é surpreendente e digno de admiração para os que creem.",
        "Descreve um espetáculo natural."
      ],
      "respostaCorreta": "Reconhece a ressurreição de Jesus como um ato milagroso e divino de Deus, que é surpreendente e digno de admiração para os que creem."
    },
    {
      "day": "Quinta-feira",
      "pergunta": "Que papel a 'pedra angular' desempenha na visão adventista da Igreja e do plano da salvação?",
      "opcoes": [
        "É apenas um ornamento sem função.",
        "A pedra angular simboliza Jesus Cristo como o fundamento inabalável da Igreja, sobre quem toda a estrutura da fé e do plano da salvação é construída.",
        "A pedra angular é um objeto de adoração.",
        "Não tem papel na teologia adventista."
      ],
      "respostaCorreta": "A pedra angular simboliza Jesus Cristo como o fundamento inabalável da Igreja, sobre quem toda a estrutura da fé e do plano da salvação é construída."
    },
    {
      "day": "Quinta-feira",
      "pergunta": "Como o Salmo 118 reforça a esperança na soberania de Deus e no Seu plano, mesmo diante da rejeição?",
      "opcoes": [
        "Ele sugere que Deus não tem um plano.",
        "Ao mostrar que Deus, mesmo diante da oposição humana, cumpre Seus propósitos e exalta aqueles que são rejeitados, inspirando confiança na Sua justiça e poder.",
        "Foca apenas no sofrimento.",
        "Mostra que a rejeição é o fim de tudo."
      ],
      "respostaCorreta": "Ao mostrar que Deus, mesmo diante da oposição humana, cumpre Seus propósitos e exalta aqueles que são rejeitados, inspirando confiança na Sua justiça e poder."
    },
    {
      "day": "Quinta-feira",
      "pergunta": "O Salmo 118 é um 'salmo Hallel' (de louvor). Que mensagem de louvor ele oferece sobre a fidelidade de Deus no fim dos tempos?",
      "opcoes": [
        "Apenas louvor pela vida presente.",
        "Que Deus é fiel apenas em tempos bons.",
        "Ele inspira louvor pela fidelidade inabalável de Deus, que garante a vitória final de Cristo e o cumprimento de todas as Suas promessas, mesmo em meio às adversidades.",
        "É um salmo de lamento."
      ],
      "respostaCorreta": "Ele inspira louvor pela fidelidade inabalável de Deus, que garante a vitória final de Cristo e o cumprimento de todas as Suas promessas, mesmo em meio às adversidades."
    },
    {
      "day": "Quinta-feira",
      "pergunta": "Qual a conexão entre o Salmo 118 e a ressurreição dos justos no segundo advento?",
      "opcoes": [
        "Não há conexão, trata-se apenas de Jesus.",
        "O Salmo 118, ao exaltar a vitória de Cristo sobre a morte, aponta para a promessa da ressurreição dos justos, que também experimentarão a vida em Cristo.",
        "Descreve a ressurreição dos ímpios.",
        "É sobre a ressurreição de reis terrenos."
      ],
      "respostaCorreta": "O Salmo 118, ao exaltar a vitória de Cristo sobre a morte, aponta para a promessa da ressurreição dos justos, que também experimentarão a vida em Cristo."
    },
    {
      "day": "Quinta-feira",
      "pergunta": "O que a mensagem de 'luz' no Salmo 118:27 ('O Senhor é Deus, e nos deu luz') pode significar para o fim dos tempos?",
      "opcoes": [
        "Apenas a luz do sol.",
        "A luz da iluminação espiritual e da verdade que Deus revela ao Seu povo, guiando-os em meio às trevas e preparando-os para o reino de luz de Cristo.",
        "A luz artificial das cidades.",
        "É uma figura de linguagem sem sentido profético."
      ],
      "respostaCorreta": "A luz da iluminação espiritual e da verdade que Deus revela ao Seu povo, guiando-os em meio às trevas e preparando-os para o reino de luz de Cristo."
    },
    {
      "day": "Quinta-feira",
      "pergunta": "Em resumo, qual a mensagem central de esperança que o Salmo 118 transmite sobre o Messias e o plano da salvação?",
      "opcoes": [
        "Uma mensagem de fracasso e desespero.",
        "Que o plano de Deus foi frustrado pela rejeição.",
        "Uma mensagem de triunfo divino, revelando que a rejeição do Messias levou à Sua exaltação como a pedra angular, garantindo a vitória final de Deus e a salvação para todos que nEle creem.",
        "Uma mensagem focada apenas na história passada."
      ],
      "respostaCorreta": "Uma mensagem de triunfo divino, revelando que a rejeição do Messias levou à Sua exaltação como a pedra angular, garantindo a vitória final de Deus e a salvação para todos que nEle creem."
    },
    // SEXTA-FEIRA (Questões 61-70)
    {
      "day": "Sexta-feira",
      "pergunta": "Como os Salmos em geral, com suas alusões proféticas, fortalecem a fé dos adventistas no segundo advento?",
      "opcoes": [
        "Eles não têm relação com o segundo advento.",
        "Ao prefigurarem eventos e aspectos do reinado messiânico e do juízo final, os Salmos oferecem uma base sólida e inspiradora para a esperança na segunda vinda de Cristo.",
        "Apenas descrevendo os sinais celestiais.",
        "Fornecendo datas exatas para o retorno de Jesus."
      ],
      "respostaCorreta": "Ao prefigurarem eventos e aspectos do reinado messiânico e do juízo final, os Salmos oferecem uma base sólida e inspiradora para a esperança na segunda vinda de Cristo."
    },
    {
      "day": "Sexta-feira",
      "pergunta": "Qual a importância de integrar a leitura dos Salmos com outros livros proféticos como Daniel e Apocalipse?",
      "opcoes": [
        "Não é importante, pois são livros distintos.",
        "Ajuda a criar confusão na interpretação.",
        "A integração permite uma compreensão mais rica e completa do plano de Deus, pois os Salmos fornecem o contexto emocional e espiritual para as verdades proféticas mais explícitas.",
        "Apenas para aumentar o volume de leitura."
      ],
      "respostaCorreta": "A integração permite uma compreensão mais rica e completa do plano de Deus, pois os Salmos fornecem o contexto emocional e espiritual para as verdades proféticas mais explícitas."
    },
    {
      "day": "Sexta-feira",
      "pergunta": "Como os Salmos inspiram adoração e serviço ativo enquanto esperamos o cumprimento das profecias?",
      "opcoes": [
        "Apenas incentivando a espera passiva.",
        "Eles inspiram adoração ao revelar a grandeza de Deus e o Seu plano, e serviço ativo ao motivar os crentes a viverem vidas justas e a proclamarem a mensagem do Evangelho.",
        "Desencorajando qualquer ação.",
        "Focando apenas na salvação individual."
      ],
      "respostaCorreta": "Eles inspiram adoração ao revelar a grandeza de Deus e o Seu plano, e serviço ativo ao motivar os crentes a viverem vidas justas e a proclamarem a mensagem do Evangelho."
    },
    {
      "day": "Sexta-feira",
      "pergunta": "Que papel a linguagem poética e simbólica dos Salmos desempenha na nossa compreensão da profecia?",
      "opcoes": [
        "Torna a profecia ambígua e sem sentido.",
        "Permite uma compreensão mais profunda das verdades divinas, convidando à reflexão e à conexão emocional com o plano de Deus, além de ser um recurso literário para expressar realidades futuras.",
        "Serve apenas para entretenimento.",
        "Impede uma interpretação clara."
      ],
      "respostaCorreta": "Permite uma compreensão mais profunda das verdades divinas, convidando à reflexão e à conexão emocional com o plano de Deus, além de ser um recurso literário para expressar realidades futuras."
    },
    {
      "day": "Sexta-feira",
      "pergunta": "Como os Salmos nos preparam para o juízo final e o estabelecimento do Reino de Deus?",
      "opcoes": [
        "Não nos preparam, são apenas cânticos.",
        "Ao retratar a soberania de Deus como Juiz e Rei, os Salmos nos convidam à reflexão sobre nossa vida, à retidão e à confiança na justiça divina que se manifestará plenamente.",
        "Apenas através de descrições apocalípticas.",
        "Incentivando o medo e o desespero."
      ],
      "respostaCorreta": "Ao retratar a soberania de Deus como Juiz e Rei, os Salmos nos convidam à reflexão sobre nossa vida, à retidão e à confiança na justiça divina que se manifestará plenamente."
    },
    {
      "day": "Sexta-feira",
      "pergunta": "Qual a relação dos Salmos com a doutrina adventista do Grande Conflito?",
      "opcoes": [
        "Nenhuma, pois são livros de diferentes épocas.",
        "Os Salmos, ao abordarem temas de sofrimento, injustiça, e a vitória final de Deus, refletem e reforçam a narrativa do Grande Conflito entre Cristo e Satanás.",
        "Os Salmos tratam apenas de conflitos terrenos.",
        "São contrários à doutrina do Grande Conflito."
      ],
      "respostaCorreta": "Os Salmos, ao abordarem temas de sofrimento, injustiça, e a vitória final de Deus, refletem e reforçam a narrativa do Grande Conflito entre Cristo e Satanás."
    },
    {
      "day": "Sexta-feira",
      "pergunta": "Que mensagem de esperança e encorajamento os Salmos oferecem para os crentes que vivem nos últimos dias?",
      "opcoes": [
        "Uma mensagem de desespero e isolamento.",
        "Que não há esperança para o futuro.",
        "Os Salmos oferecem consolo, direção e a certeza da vitória final de Deus, incentivando a confiança em Sua soberania e a perseverança na fé, mesmo em tempos difíceis.",
        "Apenas promessas de riqueza material."
      ],
      "respostaCorreta": "Os Salmos oferecem consolo, direção e a certeza da vitória final de Deus, incentivando a confiança em Sua soberania e a perseverança na fé, mesmo em tempos difíceis."
    },
    {
      "day": "Sexta-feira",
      "pergunta": "Como a leitura devocional dos Salmos pode enriquecer a experiência de fé adventista?",
      "opcoes": [
        "Tornando-a superficial e sem significado.",
        "Apenas para fins de estudo acadêmico.",
        "A leitura devocional dos Salmos nutre a alma, fortalece a conexão com Deus, inspira gratidão e louvor, e aprofunda a compreensão do plano divino, enriquecendo a vida espiritual.",
        "Diminuindo a fé e a confiança."
      ],
      "respostaCorreta": "A leitura devocional dos Salmos nutre a alma, fortalece a conexão com Deus, inspira gratidão e louvor, e aprofunda a compreensão do plano divino, enriquecendo a vida espiritual."
    },
    {
      "day": "Sexta-feira",
      "pergunta": "Qual a relevância prática de estudar as alusões proféticas nos Salmos para a vida diária?",
      "opcoes": [
        "Não tem relevância prática, é apenas teoria.",
        "A relevância prática está em compreender que Deus está no controle da história, e que Suas promessas de justiça e restauração oferecem esperança e propósito para a vida diária, influenciando nossas escolhas e atitudes.",
        "Apenas para prever o futuro.",
        "É um estudo para o ócio."
      ],
      "respostaCorreta": "A relevância prática está em compreender que Deus está no controle da história, e que Suas promessas de justiça e restauração oferecem esperança e propósito para a vida diária, influenciando nossas escolhas e atitudes."
    },
    {
      "day": "Sexta-feira",
      "pergunta": "Em conclusão, qual a mensagem unificadora dos Salmos e sua importância para a escatologia adventista?",
      "opcoes": [
        "Uma mensagem de desunião e dúvida.",
        "Que os Salmos são irrelevantes para os adventistas.",
        "Os Salmos oferecem uma mensagem unificadora de esperança messiânica e escatológica, revelando a soberania de Deus, a vitória de Cristo e a certeza do estabelecimento de Seu reino eterno de justiça e paz, inspirando fé e adoração.",
        "Uma mensagem de materialismo e egocentrismo."
      ],
      "respostaCorreta": "Os Salmos oferecem uma mensagem unificadora de esperança messiânica e escatológica, revelando a soberania de Deus, a vitória de Cristo e a certeza do estabelecimento de Seu reino eterno de justiça e paz, inspirando fé e adoração."
    }
];

document.addEventListener('DOMContentLoaded', () => {
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
});
