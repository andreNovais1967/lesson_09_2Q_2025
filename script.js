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
        "Tribulação e confiança em Deus, o colapso dos reinos terrestres, a entronização de Cristo, o juízo final e o papel missionário do povo de Deus.",
        "A vida e o ministério de Jesus Cristo, Seus milagres e Seus ensinamentos."
      ],
      "respostaCorreta": "Tribulação e confiança em Deus, o colapso dos reinos terrestres, a entronização de Cristo, o juízo final e o papel missionário do povo de Deus."
    },
    {
      "day": "Sábado",
      "pergunta": "De que forma os Salmos abordam questões como o problema do mal e sofrimento, a justiça divina e a batalha entre o bem e o mal, em contraste com as profecias apocalípticas?",
      "opcoes": [
        "De forma histórica e cronológica.",
        "De forma poética e devocional.",
        "De forma legalista e cerimonial.",
        "De forma apocalíptica e simbólica complexa."
      ],
      "respostaCorreta": "De forma poética e devocional."
    },
    {
      "day": "Sábado",
      "pergunta": "Quais outros livros proféticos a lição menciona que dialogam com as passagens dos Salmos?",
      "opcoes": [
        "Gênesis, Êxodo, Levítico, Números, Deuteronômio.",
        "Isaías, Ezequiel, Joel, Amós, Miquéias.",
        "Daniel, Jeremias, Zacarias, Mateus, Apocalipse.",
        "Provérbios, Eclesiastes, Cântico dos Cânticos."
      ],
      "respostaCorreta": "Daniel, Jeremias, Zacarias, Mateus, Apocalipse."
    },
    {
      "day": "Sábado",
      "pergunta": "Segundo a lição, o estudo dos Salmos e sua conexão com a escatologia adventista visa, entre outras coisas:",
      "opcoes": [
        "Aumentar o medo dos eventos finais.",
        "Fortalecer a esperança e o compromisso dos crentes.",
        "Desencorajar a busca por lições práticas.",
        "Focar exclusivamente em símbolos complexos."
      ],
      "respostaCorreta": "Fortalecer a esperança e o compromisso dos crentes."
    },
    {
      "day": "Sábado",
      "pergunta": "Além de abordar temas proféticos, em grande profundidade, explorando quase todas as emoções humanas, o que mais o livro de Salmos e o livro de Provérbios são considerados, segundo uma das fontes?",
      "opcoes": [
        "Os melhores livros de história antiga.",
        "Os melhores manuais de psicologia humana que podemos encontrar.",
        "Os mais importantes livros sobre lei e justiça.",
        "Os textos mais difíceis de interpretar."
      ],
      "respostaCorreta": "Os melhores manuais de psicologia humana que podemos encontrar."
    },
    {
      "day": "Sábado",
      "pergunta": "Por que a Bíblia, incluindo o Livro dos Salmos, continua sendo um livro atual, segundo uma das fontes?",
      "opcoes": [
        "Porque as épocas e a natureza humana mudaram drasticamente.",
        "Porque trata de assuntos base da raça humana que são as mesmas vivências de hoje, apesar das diferentes épocas e avanços tecnológicos.",
        "Porque foi escrita com uma linguagem complexa que só pode ser entendida hoje.",
        "Porque se foca apenas em eventos históricos que não se repetem."
      ],
      "respostaCorreta": "Porque trata de assuntos base da raça humana que são as mesmas vivências de hoje, apesar das diferentes épocas e avanços tecnológicos."
    },
    {
      "day": "Sábado",
      "pergunta": "A indagação sobre por que Deus não trata o mal de forma mais direta e imediata é mencionada como uma questão com a qual quem se debate?",
      "opcoes": [
        "Apenas os inimigos de Deus.",
        "Indivíduos que leem o livro de Provérbios.",
        "Indivíduos que leem o livro de Salmos e com a qual todos nós já nos colocamos.",
        "Somente aqueles que não têm fé."
      ],
      "respostaCorreta": "Indivíduos que leem o livro de Salmos e com a qual todos nós já nos colocamos."
    },
    {
      "day": "Sábado",
      "pergunta": "Além do santuário terrestre ou templo terrestre, para onde somos encaminhados em busca de respostas ao lermos os Salmos?",
      "opcoes": [
        "Para o mar Mediterrâneo.",
        "Para o monte Sinai.",
        "Para o santuário celestial.",
        "Para a cidade de Babilônia."
      ],
      "respostaCorreta": "Para o santuário celestial."
    },
    {
      "day": "Sábado",
      "pergunta": "Qual é o Verso para Memorizar da Lição 9, “Nos Salmos – Parte 2”?",
      "opcoes": [
        "\"O Senhor é o meu pastor; nada me faltará.\" (Salmo 23:1)",
        "\"Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.\" (João 3:16)",
        "\"Louvem-Te os povos, ó Deus! Louvem-Te os povos todos! Alegrem-se e exultem as nações, pois julgas os povos com justiça e guias na Terra as nações.\" (Salmo 67:3, 4)",
        "\"Vinde a mim, todos os que estais cansados e oprimidos, e eu vos aliviarei.\" (Mateus 11:28)"
      ],
      "respostaCorreta": "\"Louvem-Te os povos, ó Deus! Louvem-Te os povos todos! Alegrem-se e exultem as nações, pois julgas os povos com justiça e guias na Terra as nações.\" (Salmo 67:3, 4)"
    },
    // DOMINGO (Questões 11-20)
    {
      "day": "Domingo",
      "pergunta": "De acordo com o Salmo 46, qual é a atitude do povo de Deus diante das grandes comoções naturais mencionadas no texto?",
      "opcoes": [
        "Temor e desespero.",
        "Incredulidade e negação.",
        "Confiança e a ausência de temor.",
        "Fuga e busca por esconderijo."
      ],
      "respostaCorreta": "Confiança e a ausência de temor."
    },
    {
      "day": "Domingo",
      "pergunta": "O Salmo 46:1 afirma que Deus é nosso refúgio e fortaleza, socorro bem presente em qual circunstância?",
      "opcoes": [
        "Apenas em tempos de paz.",
        "Na angústia.",
        "Durante a prosperidade.",
        "Ao realizar obras de caridade."
      ],
      "respostaCorreta": "Na angústia."
    },
    {
      "day": "Domingo",
      "pergunta": "As cenas do Apocalipse sobre a volta de Jesus, mencionadas em Apocalipse 6:14 (céu enrolando-se, montes e ilhas removidos), são comparadas a que descrição encontrada no Salmo 46?",
      "opcoes": [
        "A calmaria após uma tempestade.",
        "A terra mudando e os montes se transportando para o meio dos mares.",
        "A construção de uma nova cidade.",
        "A fertilidade da terra."
      ],
      "respostaCorreta": "A terra mudando e os montes se transportando para o meio dos mares."
    },
    {
      "day": "Domingo",
      "pergunta": "Qual evento histórico no Antigo Testamento é mencionado como o contexto em que Salmos como o 46 foram cantados, apresentando Deus como refúgio na tribulação?",
      "opcoes": [
        "A libertação de Israel do Egito sob Moisés.",
        "A vitória sobre os cananeus sob Josué.",
        "Uma notável vitória nos dias de Josafá.",
        "A dedicação do Templo por Salomão."
      ],
      "respostaCorreta": "Uma notável vitória nos dias de Josafá."
    },
    {
      "day": "Domingo",
      "pergunta": "O Salmo 46 contrasta o mundo em ruínas e caos com qual imagem relacionada a Deus e Seu povo?",
      "opcoes": [
        "O deserto árido.",
        "A torre de Babel.",
        "A cidade de Deus que habita em paz.",
        "O dilúvio universal."
      ],
      "respostaCorreta": "A cidade de Deus que habita em paz."
    },
    {
      "day": "Domingo",
      "pergunta": "No Salmo 46, a fúria dos rios e mares é contrastada com qual elemento relacionado à presença de Deus?",
      "opcoes": [
        "Um deserto sem água.",
        "Um rio que flui da presença de Deus e alegra a cidade santa.",
        "Um lago de fogo.",
        "O mar Vermelho."
      ],
      "respostaCorreta": "Um rio que flui da presença de Deus e alegra a cidade santa."
    },
    {
      "day": "Domingo",
      "pergunta": "O comando 'Aquietai-vos e saibam que eu sou Deus' (Salmo 46) é apresentado como um contraste direto a qual condição do mundo?",
      "opcoes": [
        "A paz e harmonia universais.",
        "As guerras e a agitação entre nações.",
        "A busca por conhecimento científico.",
        "A celebração religiosa."
      ],
      "respostaCorreta": "As guerras e a agitação entre nações."
    },
    {
      "day": "Domingo",
      "pergunta": "Qual é a principal mensagem que o Salmo 46 nos incentiva a ter diante das tribulações, sejam elas atuais ou finais?",
      "opcoes": [
        "A fugir e se esconder.",
        "A lutar com nossas próprias forças.",
        "A confiar e não temer.",
        "A questionar a justiça de Deus."
      ],
      "respostaCorreta": "A confiar e não temer."
    },
    {
      "day": "Domingo",
      "pergunta": "A lição sugere que, se buscarmos a Deus como nosso refúgio hoje:",
      "opcoes": [
        "As dificuldades cessarão completamente.",
        "Teremos o livramento e a proteção dEle no tempo do fim nas perseguições.",
        "Não precisaremos nos preparar para o futuro.",
        "Apenas as dificuldades atuais serão resolvidas."
      ],
      "respostaCorreta": "Teremos o livramento e a proteção dEle no tempo do fim nas perseguições."
    },
    {
      "day": "Domingo",
      "pergunta": "O Salmo 46 é aplicado para aqueles que:",
      "opcoes": [
        "Dependem de sua própria força.",
        "Confiam e se entregam a Deus.",
        "Ignoram os sinais do fim.",
        "Apenas buscam prosperidade material."
      ],
      "respostaCorreta": "Confiam e se entregam a Deus."
    },
    // SEGUNDA-FEIRA (Questões 21-30)
    {
      "day": "Segunda-feira",
      "pergunta": "A linguagem do Salmo 46, ao descrever o abalo da terra física, é vista como um prenúncio de quê?",
      "opcoes": [
        "A construção de novas cidades.",
        "A transformação da terra pelo retorno de Cristo.",
        "Um período de paz e prosperidade duradoura.",
        "A criação de novas espécies."
      ],
      "respostaCorreta": "A transformação da terra pelo retorno de Cristo."
    },
    {
      "day": "Segunda-feira",
      "pergunta": "A passagem de Jeremias 4:23-26 descreve a terra em qual estado?",
      "opcoes": [
        "Um paraíso restaurado com abundância de vida.",
        "Sem forma e vazia, com montes tremendo e cidades derribadas, após o furor da ira do Senhor.",
        "Um centro de tecnologia avançada e desenvolvimento humano.",
        "Um deserto fértil e habitado por muitas aves."
      ],
      "respostaCorreta": "Sem forma e vazia, com montes tremendo e cidades derribadas, após o furor da ira do Senhor."
    },
    {
      "day": "Segunda-feira",
      "pergunta": "A lição conecta a visão de Jeremias 4 com a promessa de um 'novo céu e uma nova terra', encontrada em qual outro livro bíblico?",
      "opcoes": [
        "Isaías.",
        "Mateus.",
        "Apocalipse.",
        "Hebreus."
      ],
      "respostaCorreta": "Apocalipse."
    },
    {
      "day": "Segunda-feira",
      "pergunta": "Segundo o apóstolo Paulo em 2 Coríntios 4:8-9, os servos de Deus podem ser atribulados, perplexos, perseguidos e abatidos, mas em que condição final?",
      "opcoes": [
        "Angustiados, desanimados, desamparados e destruídos.",
        "Vencedores, alegres, prósperos e saudáveis.",
        "Não angustiados, não desanimados, não desamparados e não destruídos.",
        "Imunes a qualquer tipo de sofrimento."
      ],
      "respostaCorreta": "Não angustiados, não desanimados, não desamparados e não destruídos."
    },
    {
      "day": "Segunda-feira",
      "pergunta": "Por que Deus permite que Seus filhos passem por sofrimento, perplexidade, tribulação ou perseguição, segundo uma das fontes?",
      "opcoes": [
        "Porque Ele não tem poder para impedi-lo.",
        "Porque Ele quer provar sua fraqueza.",
        "Porque sabe que muitas vezes nessas situações o caráter se molda à imagem de Cristo.",
        "Porque Ele é indiferente à dor humana."
      ],
      "respostaCorreta": "Porque sabe que muitas vezes nessas situações o caráter se molda à imagem de Cristo."
    },
    {
      "day": "Segunda-feira",
      "pergunta": "Qual é o 'motor' na vida do cristão que o impede de desanimar e dá sempre um objetivo à vida?",
      "opcoes": [
        "A riqueza material.",
        "O reconhecimento humano.",
        "A esperança.",
        "A força física."
      ],
      "respostaCorreta": "A esperança."
    },
    {
      "day": "Segunda-feira",
      "pergunta": "A grande esperança do cristão, especialmente para os Adventistas do Sétimo Dia, é:",
      "opcoes": [
        "Uma longa vida na terra.",
        "O encontro com Jesus (o advento).",
        "O sucesso profissional.",
        "A ausência de dificuldades."
      ],
      "respostaCorreta": "O encontro com Jesus (o advento)."
    },
    {
      "day": "Segunda-feira",
      "pergunta": "De acordo com a lição, quando o contexto da linguagem do Livro dos Salmos aponta para os tempos do fim (tempos escatológicos), essa linguagem deve ser interpretada como:",
      "opcoes": [
        "Meramente simbólica, sem aplicação literal.",
        "Com razões claras para pensar que seja literal.",
        "Apenas como poesia sem significado profético.",
        "Uma alegoria sem conexão com eventos reais."
      ],
      "respostaCorreta": "Com razões claras para pensar que seja literal."
    },
    {
      "day": "Segunda-feira",
      "pergunta": "A esperança em meio à turbulência mencionada na lição de segunda-feira nos lembra que as dificuldades atuais são um sinal de quê?",
      "opcoes": [
        "Que Deus nos abandonou.",
        "Que as coisas nunca melhorarão.",
        "Que algo melhor está por chegar.",
        "Que o pecado venceu."
      ],
      "respostaCorreta": "Que algo melhor está por chegar."
    },
    {
      "day": "Segunda-feira",
      "pergunta": "Qual Salmo é o foco principal da lição de terça-feira?",
      "opcoes": [
        "Salmo 23",
        "Salmo 46",
        "Salmo 47",
        "Salmo 75"
      ],
      "respostaCorreta": "Salmo 47"
    },
    // TERÇA-FEIRA (Questões 31-40)
    {
      "day": "Terça-feira",
      "pergunta": "O tema da lição de terça-feira, 'Debaixo de seus pés', é uma expressão de quê?",
      "opcoes": [
        "Submissão do povo de Deus aos seus inimigos.",
        "A derrota final de Deus.",
        "Vitória e triunfo sobre os inimigos.",
        "A fraqueza do reino de Deus."
      ],
      "respostaCorreta": "Vitória e triunfo sobre os inimigos."
    },
    {
      "day": "Terça-feira",
      "pergunta": "Segundo Salmo 47:3, Deus submeterá os povos e porá as nações 'debaixo dos nossos pés'. O que essa linguagem de batalha e vitória indica?",
      "opcoes": [
        "Que o povo de Deus lutará fisicamente contra todas as nações.",
        "Que Deus colocará os inimigos que perseguiram debaixo dos pés de Seu povo fiel após Sua vitória.",
        "Que as nações se submeterão voluntariamente ao povo de Deus.",
        "Que o povo de Deus dominará o mundo pela força."
      ],
      "respostaCorreta": "Que Deus colocará os inimigos que perseguiram debaixo dos pés de Seu povo fiel após Sua vitória."
    },
    {
      "day": "Terça-feira",
      "pergunta": "A ideia de colocar os inimigos debaixo dos pés também é encontrada em Salmo 110:1, referindo-se a quem?",
      "opcoes": [
        "O rei Davi.",
        "O povo de Israel.",
        "Jesus, pela Sua vitória na cruz.",
        "Os profetas."
      ],
      "respostaCorreta": "Jesus, pela Sua vitória na cruz."
    },
    {
      "day": "Terça-feira",
      "pergunta": "De acordo com Salmo 47, qual é o lugar que em última análise nós, o povo de Deus, ocupamos no reino de Cristo?",
      "opcoes": [
        "Dominadores sobre Deus.",
        "Escravos sem direitos.",
        "Súditos, mas chamados a reinar junto com Cristo como príncipes.",
        "Observadores passivos."
      ],
      "respostaCorreta": "Súditos, mas chamados a reinar junto com Cristo como príncipes."
    },
    {
      "day": "Terça-feira",
      "pergunta": "A lição menciona a profecia de Zacarias 14:4, que descreve o retorno de Jesus e Seus pés sobre o Monte das Oliveiras. Qual detalhe geográfico significativo ocorre neste evento?",
      "opcoes": [
        "O monte se tornará uma ilha.",
        "O monte será fendido pelo meio.",
        "O monte será movido para o mar.",
        "O monte desaparecerá."
      ],
      "respostaCorreta": "O monte será fendido pelo meio."
    },
    {
      "day": "Terça-feira",
      "pergunta": "Em Daniel 7:14, é dada a quem o domínio, a honra e o reino que é eterno e não será destruído?",
      "opcoes": [
        "Aos reinos terrestres.",
        "Ao povo dos santos do Altíssimo.",
        "Ao Filho do Homem.",
        "Ao anticristo."
      ],
      "respostaCorreta": "Ao Filho do Homem."
    },
    {
      "day": "Terça-feira",
      "pergunta": "Conforme Daniel 7:27, os reinos, domínios e majestade debaixo de todo o céu serão dados a quem após o fracasso dos reinos rebeldes?",
      "opcoes": [
        "Ao Filho do Homem.",
        "Ao povo dos santos do Altíssimo.",
        "Às bestas apocalípticas.",
        "Aos anjos."
      ],
      "respostaCorreta": "Ao povo dos santos do Altíssimo."
    },
    {
      "day": "Terça-feira",
      "pergunta": "A vinda de Cristo, conforme descrito nas profecias bíblicas, será caracterizada por ser:",
      "opcoes": [
        "Oculta e secreta.",
        "Visível para todo olho.",
        "Compreendida apenas por alguns eleitos.",
        "Um evento puramente espiritual sem manifestação física."
      ],
      "respostaCorreta": "Visível para todo olho."
    },
    {
      "day": "Terça-feira",
      "pergunta": "Qual doutrina, surgida no mundo protestante/evangélico, é contrastada na lição com a visibilidade da vinda de Cristo e criticada por não ser como Deus age?",
      "opcoes": [
        "A doutrina da Trindade.",
        "A doutrina da criação.",
        "A doutrina do arrebatamento secreto.",
        "A doutrina do batismo."
      ],
      "respostaCorreta": "A doutrina do arrebatamento secreto."
    },
    {
      "day": "Terça-feira",
      "pergunta": "Qual Salmo é o foco principal da lição de quarta-feira?",
      "opcoes": [
        "Salmo 46",
        "Salmo 47",
        "Salmo 75",
        "Salmo 67"
      ],
      "respostaCorreta": "Salmo 75"
    },
    // QUARTA-FEIRA (Questões 41-50)
    {
      "day": "Quarta-feira",
      "pergunta": "Que aspecto do caráter e obra de Deus é revelado no Salmo 75?",
      "opcoes": [
        "Deus como Criador.",
        "Deus como Redentor.",
        "Deus como Juiz que trará justiça.",
        "Deus como Pastor."
      ],
      "respostaCorreta": "Deus como Juiz que trará justiça."
    },
    {
      "day": "Quarta-feira",
      "pergunta": "No Salmo 75:8, o que simboliza o 'cálice espumante' nas mãos de Deus?",
      "opcoes": [
        "Bênçãos divinas.",
        "A salvação oferecida a todos.",
        "O vinho da cólera/ira de Deus para os ímpios.",
        "A comunhão entre Deus e Seu povo."
      ],
      "respostaCorreta": "O vinho da cólera/ira de Deus para os ímpios."
    },
    {
      "day": "Quarta-feira",
      "pergunta": "Apocalipse 14:10 ecoa quase literalmente Salmo 75:8 ao advertir que quem adorar a besta beberá do vinho da cólera de Deus. Qual é a diferença crucial mencionada na lição sobre o vinho em Apocalipse 14:10 ('sem mistura') em comparação com Salmo 75:8 ('cheio de mistura')?",
      "opcoes": [
        "No Salmo, a ira é mais intensa; no Apocalipse, é diluída.",
        "No Apocalipse, o vinho tem força total, sem diluição com misericórdia, representando a plena medida do juízo divino.",
        "O vinho no Salmo representa a misericórdia, enquanto no Apocalipse representa a ira.",
        "A mistura no Salmo significa adição de água, enquanto no Apocalipse significa adição de veneno."
      ],
      "respostaCorreta": "No Apocalipse, o vinho tem força total, sem diluição com misericórdia, representando a plena medida do juízo divino."
    },
    {
      "day": "Quarta-feira",
      "pergunta": "Beber o 'vinho da ira sem mistura' no fim dos tempos, conforme Apocalipse 14 e Salmo 75, é interpretado como:",
      "opcoes": [
        "Uma oportunidade de arrependimento.",
        "A plena medida do juízo divino.",
        "Um castigo parcial anterior.",
        "Uma bênção para os fiéis."
      ],
      "respostaCorreta": "A plena medida do juízo divino."
    },
    {
      "day": "Quarta-feira",
      "pergunta": "O que acontecerá com os pecadores ('ímpios da terra'), segundo Salmo 75:8, ao beberem do cálice da ira de Deus?",
      "opcoes": [
        "Serão purificados e salvos.",
        "Absorverão e beberão as escórias de suas obras.",
        "Serão transportados para um lugar seguro.",
        "Receberão misericórdia."
      ],
      "respostaCorreta": "Absorverão e beberão as escórias de suas obras."
    },
    {
      "day": "Quarta-feira",
      "pergunta": "A terceira mensagem angélica em Apocalipse 14:9-11 é comparada a um eco do Salmo 75, assegurando que",
      "opcoes": [
        "Todos terão a oportunidade de escapar do juízo.",
        "Nenhum ímpio escapará das consequências de suas escolhas.",
        "O juízo será apenas para alguns.",
        "A misericórdia anulará completamente o juízo."
      ],
      "respostaCorreta": "Nenhum ímpio escapará das consequências de suas escolhas."
    },
    {
      "day": "Quarta-feira",
      "pergunta": "O que Deus fará em relação ao Seu povo, ao pecado e aos pecadores no juízo final, conforme revelado no Salmo 75?",
      "opcoes": [
        "Perdoará a todos sem distinção.",
        "Ignorará o pecado e os pecadores.",
        "Exaltará Seu povo, destruirá pecado e pecadores, e revelará Seu caráter justo.",
        "Apenas julgará as nações, mas não indivíduos."
      ],
      "respostaCorreta": "Exaltará Seu povo, destruirá pecado e pecadores, e revelará Seu caráter justo."
    },
    {
      "day": "Quarta-feira",
      "pergunta": "Qual é uma de las coisas que Deus corrigirá no juízo, segundo uma das fontes?",
      "opcoes": [
        "A ausência de progresso científico.",
        "A falta de organização social.",
        "A apropriação indevida de poder e o egoísmo.",
        "A diversidade cultural."
      ],
      "respostaCorreta": "A apropriação indevida de poder e o egoísmo."
    },
    {
      "day": "Quarta-feira",
      "pergunta": "O que é identificado em uma das fontes como o 'grande problema do pecado'?",
      "opcoes": [
        "A falta de conhecimento.",
        "O egoísmo.",
        "A desobediência a leis humanas.",
        "A fraqueza física."
      ],
      "respostaCorreta": "O egoísmo."
    },
    {
      "day": "Quarta-feira",
      "pergunta": "Qual Salmo é o foco principal da lição de quinta-feira?",
      "opcoes": [
        "Salmo 46",
        "Salmo 47",
        "Salmo 75",
        "Salmo 67"
      ],
      "respostaCorreta": "Salmo 67"
    },
    // QUINTA-FEIRA (Questões 51-60)
    {
      "day": "Quinta-feira",
      "pergunta": "O que o Salmo 67 apresenta em relação à presença de Deus?",
      "opcoes": [
        "Deus escondido de Seu povo.",
        "Deus presente entre Seu povo.",
        "Deus distante e inalcançável.",
        "Deus preocupado apenas consigo mesmo."
      ],
      "respostaCorreta": "Deus presente entre Seu povo."
    },
    {
      "day": "Quinta-feira",
      "pergunta": "Segundo Salmo 67:2, qual é o propósito de Deus abençoar e fazer resplandecer Seu rosto sobre Seu povo?",
      "opcoes": [
        "Para que Seu povo se torne rico e poderoso.",
        "Para que se conheça na terra o Seu caminho e entre todas as nações a Sua salvação.",
        "Para que Seu povo domine as outras nações.",
        "Para que Seu povo viva isolado do mundo."
      ],
      "respostaCorreta": "Para que se conheça na terra o Seu caminho e entre todas as nações a Sua salvação."
    },
    {
      "day": "Quinta-feira",
      "pergunta": "Conforme Salmo 67:4, qual é a razão para os povos se alegrarem e exultarem?",
      "opcoes": [
        "Porque alcançaram prosperidade econômica.",
        "Porque alcançaram a paz mundial.",
        "Porque Deus julga os povos com justiça e guia as nações na Terra.",
        "Porque o conhecimento humano superou a ignorância."
      ],
      "respostaCorreta": "Porque Deus julga os povos com justiça e guia as nações na Terra."
    },
    {
      "day": "Quinta-feira",
      "pergunta": "Qual é o grande objetivo do povo de Deus no tempo do fim, conforme a lição relaciona Salmo 67 com Apocalipse 14?",
      "opcoes": [
        "Estabelecer um reino terrestre.",
        "Proclamar a misericórdia e a salvação de Deus a todo o mundo.",
        "Viver em isolamento e santidade.",
        "Acumular bens e poder."
      ],
      "respostaCorreta": "Proclamar a misericórdia e a salvação de Deus a todo o mundo."
    },
    {
      "day": "Quinta-feira",
      "pergunta": "O que significa ser 'arautos da verdade', conforme a lição discute o papel do povo de Deus?",
      "opcoes": [
        "Ser aqueles que ocultam a verdade dos outros.",
        "Ser os canais que o Senhor quer usar para mostrar a verdade.",
        "Ser aqueles que inventam novas verdades.",
        "Ser aqueles que guardam a verdade apenas para si."
      ],
      "respostaCorreta": "Ser os canais que o Senhor quer usar para mostrar a verdade."
    },
    {
      "day": "Quinta-feira",
      "pergunta": "Segundo uma das fontes, a verdade está sendo espezinhada, falseada e substituída pelo erro hoje. Diante disso, o que Deus necessita e quer de Seu povo?",
      "opcoes": [
        "Que se isolem do mundo.",
        "Que defendam o erro.",
        "Que sejam Seus arautos da verdade.",
        "Que sejam Seus arautos da verdade."
      ],
      "respostaCorreta": "Que sejam Seus arautos da verdade."
    },
    {
      "day": "Quinta-feira",
      "pergunta": "O que é o 'cadinho' na vida do cristão, mencionado em uma das fontes em relação à proclamação da verdade?",
      "opcoes": [
        "Um lugar de descanso e conforto.",
        "Um processo de purificação que ocorre ao nos tornarmos testemunhas de Jesus e proclamarmos verdades que o mundo tem relutância em aceitar.",
        "Um período de prosperidade sem desafios.",
        "Um treinamento teórico sem aplicação prática."
      ],
      "respostaCorreta": "Um processo de purificação que ocorre ao nos tornarmos testemunhas de Jesus e proclamarmos verdades que o mundo tem relutância em aceitar."
    },
    {
      "day": "Quinta-feira",
      "pergunta": "Qual é a melhor forma de fazer face às trevas, segundo uma das fontes, ao discutirmos a missão do povo de Deus?",
      "opcoes": [
        "Entrar em polêmicas e discussões.",
        "Apagar as trevas pela força.",
        "Acender uma luz.",
        "Fugir das trevas."
      ],
      "respostaCorreta": "Acender uma luz."
    },
    {
      "day": "Quinta-feira",
      "pergunta": "Conforme Apocalipse 14:6, quem tem o evangelho eterno para pregar aos que se assentam sobre a terra?",
      "opcoes": [
        "Os reinos terrestres.",
        "Os falsos profetas.",
        "Um anjo voando pelo meio do céu.",
        "Satanás."
      ],
      "respostaCorreta": "Um anjo voando pelo meio do céu."
    },
    {
      "day": "Quinta-feira",
      "pergunta": "A lição enfatiza que não é necessário esperar pela perseguição escatológica para sentir a necessidade de quê?",
      "opcoes": [
        "De acumular bens.",
        "Do refúgio de Deus.",
        "De se isolar da sociedade.",
        "De negar a fé."
      ],
      "respostaCorreta": "Do refúgio de Deus."
    },
    // SEXTA-FEIRA (Questões 61-70)
    {
      "day": "Sexta-feira",
      "pergunta": "A passagem de Jeremias 12:5 ('se te fadigas correndo com homens que vão a pé, como poderás competir com os que vão a cavalo?') é usada para ilustrar o quê?",
      "opcoes": [
        "A importância do exercício físico.",
        "A necessidade de estar preparado para dificuldades maiores no futuro, se já se tem dificuldade com as menores no presente.",
        "A superioridade dos cavalos sobre os homens.",
        "A inutilidade do esforço."
      ],
      "respostaCorreta": "A necessidade de estar preparado para dificuldades maiores no futuro, se já se tem dificuldade com as menores no presente."
    },
    {
      "day": "Sexta-feira",
      "pergunta": "A lição afirma que a preparação para os desafios do tempo do fim começa:",
      "opcoes": [
        "Apenas quando a perseguição se intensifica.",
        "Hoje, no momento atual.",
        "Somente na volta de Jesus.",
        "Após os mil anos no céu."
      ],
      "respostaCorreta": "Hoje, no momento atual."
    },
    {
      "day": "Sexta-feira",
      "pergunta": "Se uma pessoa não é fiel hoje em 'momento de paz', qual a dificuldade que ela provavelmente enfrentará no tempo do fim, segundo a lição?",
      "opcoes": [
        "Será mais fácil ser fiel.",
        "Não terá dificuldade alguma.",
        "Não terá facilidade para ser fiel quando vierem as maiores dificuldades.",
        "Sua fidelidade será automaticamente garantida."
      ],
      "respostaCorreta": "Não terá facilidade para ser fiel quando vierem as maiores dificuldades."
    },
    {
      "day": "Sexta-feira",
      "pergunta": "O que João viu sendo dado ao Cordeiro em Apocalipse 5, indicando Sua dignidade?",
      "opcoes": [
        "Uma espada.",
        "Um livro.",
        "Uma coroa.",
        "Um trono."
      ],
      "respostaCorreta": "Um livro."
    },
    {
      "day": "Sexta-feira",
      "pergunta": "A abertura dos selos em Apocalipse 6, após o Cordeiro receber o livro, surge para contar a história de quê?",
      "opcoes": [
        "O início da criação.",
        "A queda de Satanás.",
        "A igreja até o fim.",
        "A vida de Jesus na Terra."
      ],
      "respostaCorreta": "A igreja até o fim."
    },
    {
      "day": "Sexta-feira",
      "pergunta": "Quais temas são destacados nas cartas às igrejas no início do livro de Apocalipse (Ap. 2, 3)?",
      "opcoes": [
        "Alegria e prosperidade.",
        "Tribulação.",
        "Isolamento.",
        "Indiferença."
      ],
      "respostaCorreta": "Tribulação."
    },
    {
      "day": "Sexta-feira",
      "pergunta": "Em Apocalipse 17:14, quem conquista e com quem?",
      "opcoes": [
        "Os reinos da terra conquistam com a besta.",
        "Satanás conquista com seus seguidores.",
        "O Cordeiro vence e com Ele os eleitos e fiéis.",
        "A humanidade conquista pela ciência."
      ],
      "respostaCorreta": "O Cordeiro vence e com Ele os eleitos e fiéis."
    },
    {
      "day": "Sexta-feira",
      "pergunta": "Qual poder é essencial para que o povo de Deus possa cumprir a tarefa de pregar o evangelho até os confins da terra, segundo Jesus e os apóstolos?",
      "opcoes": [
        "Força física.",
        "Poder político.",
        "Riqueza material.",
        "O poder do Espírito Santo."
      ],
      "respostaCorreta": "O poder do Espírito Santo."
    },
    {
      "day": "Sexta-feira",
      "pergunta": "Quem é o responsável pela obra de alcançar as pessoas com a verdade, e qual é o nosso papel, segundo uma das fontes?",
      "opcoes": [
        "Nós somos totalmente responsáveis, e Deus é apenas um espectador.",
        "Os anjos são responsáveis, e nós apenas observamos.",
        "Deus é o responsável, e nós somos apenas os instrumentos.",
        "O mundo é responsável por se salvar."
      ],
      "respostaCorreta": "Deus é o responsável, e nós somos apenas os instrumentos."
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