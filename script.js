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
        "O Grande Conflito, a soberania de Deus, a Segunda Vinda de Cristo, o juízo e a restauração final.",
        "As festas judaicas anuais, o sistema sacrificial e a fundação da nação de Israel."
      ],
      "respostaCorreta": "O Grande Conflito, a soberania de Deus, a Segunda Vinda de Cristo, o juízo e a restauração final."
    },
    {
      "day": "Sábado",
      "pergunta": "Qual Salmo serve como uma advertência contra o orgulho e a idolatria, profetizando o julgamento divino e a vinda do Messias?",
      "opcoes": [
        "Salmo 23",
        "Salmo 97",
        "Salmo 1",
        "Salmo 150"
      ],
      "respostaCorreta": "Salmo 97"
    },
    {
      "day": "Sábado",
      "pergunta": "Que Salmo representa a coroação do Rei Messias, celebrando Seu reinado justo e a vitória sobre os inimigos?",
      "opcoes": [
        "Salmo 110",
        "Salmo 8",
        "Salmo 45",
        "Salmo 19"
      ],
      "respostaCorreta": "Salmo 110"
    },
    {
      "day": "Sábado",
      "pergunta": "No contexto profético, como o Salmo 110 é visto na Igreja Adventista do Sétimo Dia?",
      "opcoes": [
        "Como uma referência à restauração de Israel nos últimos dias.",
        "Como uma profecia do reinado de Salomão sobre Israel.",
        "Como uma profecia messiânica, apontando para o sacerdócio eterno de Cristo segundo a ordem de Melquisedeque.",
        "Como um hino de louvor pela criação de Deus."
      ],
      "respostaCorreta": "Como uma profecia messiânica, apontando para o sacerdócio eterno de Cristo segundo a ordem de Melquisedeque."
    },
    {
      "day": "Sábado",
      "pergunta": "O que o Salmo 97 descreve sobre a vinda do Senhor?",
      "opcoes": [
        "Uma vinda pacífica e silenciosa para abençoar a Terra.",
        "Uma vinda gloriosa e majestosa, manifestada em raios e trovões, destruindo ídolos e exaltando a justiça.",
        "Uma vinda discreta para julgar secretamente as nações.",
        "Uma vinda para estabelecer um reino terrestre em Jerusalém."
      ],
      "respostaCorreta": "Uma vinda gloriosa e majestosa, manifestada em raios e trovões, destruindo ídolos e exaltando a justiça."
    },
    {
      "day": "Sábado",
      "pergunta": "No livro 'O Grande Conflito', que evento Ellen White descreve como o cumprimento do Salmo 97:5?",
      "opcoes": [
        "A destruição de Sodoma e Gomorra.",
        "O dilúvio universal.",
        "A vinda de Jesus Cristo na Segunda Vinda, onde 'os montes se derretem como cera na presença do Senhor'.",
        "A queda do muro de Jericó."
      ],
      "respostaCorreta": "A vinda de Jesus Cristo na Segunda Vinda, onde 'os montes se derretem como cera na presença do Senhor'."
    },
    {
      "day": "Sábado",
      "pergunta": "Que Salmo celebra o Rei que trará justiça, compaixão e proteção aos necessitados?",
      "opcoes": [
        "Salmo 72",
        "Salmo 139",
        "Salmo 27",
        "Salmo 103"
      ],
      "respostaCorreta": "Salmo 72"
    },
    {
      "day": "Sábado",
      "pergunta": "De que forma o Salmo 72 aponta para o Messias?",
      "opcoes": [
        "Descrevendo Seu nascimento em Belém.",
        "Detalhando Sua genealogia real.",
        "Apontando para Seu reinado de justiça e paz, estendendo-se por toda a Terra e trazendo bem-estar a todos os povos.",
        "Registrando Seus milagres de cura."
      ],
      "respostaCorreta": "Apontando para Seu reinado de justiça e paz, estendendo-se por toda a Terra e trazendo bem-estar a todos os povos."
    },
    {
      "day": "Sábado",
      "pergunta": "Qual é a importância dos Salmos proféticos para a fé adventista, conforme a lição?",
      "opcoes": [
        "Eles são apenas registros históricos sem relevância futura.",
        "Eles oferecem consolo e esperança, fortalecendo a fé na Segunda Vinda de Cristo e na restauração final de Seu Reino.",
        "Eles servem principalmente como guias para a adoração no templo.",
        "Eles são exemplos de poesia hebraica antiga e não contêm ensinamentos doutrinários."
      ],
      "respostaCorreta": "Eles oferecem consolo e esperança, fortalecendo a fé na Segunda Vinda de Cristo e na restauração final de Seu Reino."
    },
    // DOMINGO (Questões 11-20)
    {
      "day": "Domingo",
      "pergunta": "O que os Salmos proféticos nos convidam a fazer em relação ao futuro, conforme a lição?",
      "opcoes": [
        "Ignorar os acontecimentos futuros, focando apenas no presente.",
        "Preparar-nos para a Segunda Vinda de Cristo e para a vida no novo céu e nova Terra.",
        "Aguardar passivamente o cumprimento das profecias sem qualquer ação pessoal.",
        "Buscar a prosperidade material como sinal da bênção divina."
      ],
      "respostaCorreta": "Preparar-nos para a Segunda Vinda de Cristo e para a vida no novo céu e nova Terra."
    },
    {
      "day": "Domingo",
      "pergunta": "Qual Salmo se destaca como o hino do povo de Deus que aguarda a vinda do Messias?",
      "opcoes": [
        "Salmo 23",
        "Salmo 97",
        "Salmo 1",
        "Salmo 150"
      ],
      "respostaCorreta": "Salmo 97"
    },
    {
      "day": "Domingo",
      "pergunta": "O que o Salmo 97 enfatiza sobre o governo de Deus?",
      "opcoes": [
        "Que Deus governa apenas sobre os justos.",
        "Que Deus governa sobre todas as coisas e os povos, com nuvens e escuridão ao Seu redor.",
        "Que Deus governa apenas sobre Israel.",
        "Que Deus permite que o caos prevaleça na Terra."
      ],
      "respostaCorreta": "Que Deus governa sobre todas as coisas e os povos, com nuvens e escuridão ao Seu redor."
    },
    {
      "day": "Domingo",
      "pergunta": "Qual é o efeito da vinda do Senhor descrita no Salmo 97 sobre a Terra e os elementos naturais?",
      "opcoes": [
        "Traz calma e serenidade.",
        "Provoca terremotos e derretimento de montanhas, revelando Sua majestade.",
        "Causa secas e fomes.",
        "Apenas uma brisa suave."
      ],
      "respostaCorreta": "Provoca terremotos e derretimento de montanhas, revelando Sua majestade."
    },
    {
      "day": "Domingo",
      "pergunta": "O Salmo 97 adverte sobre a inutilidade da adoração de ídolos, declarando que:",
      "opcoes": [
        "Ídolos são fontes de poder oculto.",
        "Aqueles que servem imagens de escultura e se gloriam em ídolos são confundidos.",
        "Ídolos protegem seus adoradores.",
        "Ídolos são meros objetos de arte."
      ],
      "respostaCorreta": "Aqueles que servem imagens de escultura e se gloriam em ídolos são confundidos."
    },
    {
      "day": "Domingo",
      "pergunta": "Qual é o convite para o povo de Deus no Salmo 97?",
      "opcoes": [
        "Temer a Deus e odiar o mal.",
        "Construir mais templos.",
        "Sacrificar animais.",
        "Celebrar festas pagãs."
      ],
      "respostaCorreta": "Temer a Deus e odiar o mal."
    },
    {
      "day": "Domingo",
      "pergunta": "O que os justos recebem no Salmo 97 em meio à escuridão e ao julgamento?",
      "opcoes": [
        "Riqueza material.",
        "Luz e alegria.",
        "Punição divina.",
        "Esquecimento."
      ],
      "respostaCorreta": "Luz e alegria."
    },
    {
      "day": "Domingo",
      "pergunta": "Como os Salmos 97 e 99 retratam o trono de Deus?",
      "opcoes": [
        "Como um trono vazio.",
        "Como um trono de glória, majestade, justiça e retidão.",
        "Como um trono temporário.",
        "Como um trono distante e inacessível."
      ],
      "respostaCorreta": "Como um trono de glória, majestade, justiça e retidão."
    },
    {
      "day": "Domingo",
      "pergunta": "O que a vinda do Senhor significa para o Seu povo, de acordo com o Salmo 97?",
      "opcoes": [
        "Um tempo de tristeza e lamentação.",
        "Um tempo de libertação e redenção.",
        "Um tempo de guerra contínua.",
        "Um tempo de incerteza."
      ],
      "respostaCorreta": "Um tempo de libertação e redenção."
    },
    {
      "day": "Domingo",
      "pergunta": "No contexto da Segunda Vinda, o Salmo 97 enfatiza a importância de:",
      "opcoes": [
        "Acumular bens materiais.",
        "Manter-se fiel a Deus e odiar o mal, vivendo uma vida de santidade.",
        "Esconder-se em bunkers.",
        "Adorar a outros deuses."
      ],
      "respostaCorreta": "Manter-se fiel a Deus e odiar o mal, vivendo uma vida de santidade."
    },
    // SEGUNDA-FEIRA (Questões 21-30)
    {
      "day": "Segunda-feira",
      "pergunta": "Qual Salmo é conhecido por ser um Salmo messiânico, profetizando o Rei ungido por Deus?",
      "opcoes": [
        "Salmo 2",
        "Salmo 139",
        "Salmo 46",
        "Salmo 121"
      ],
      "respostaCorreta": "Salmo 2"
    },
    {
      "day": "Segunda-feira",
      "pergunta": "O que o Salmo 2 retrata as nações e seus governantes fazendo?",
      "opcoes": [
        "Reunindo-se para adorar a Deus.",
        "Conspirando e tramando contra o Senhor e Seu Ungido.",
        "Firmando pactos de paz entre si.",
        "Proclamando a glória de Deus."
      ],
      "respostaCorreta": "Conspirando e tramando contra o Senhor e Seu Ungido."
    },
    {
      "day": "Segunda-feira",
      "pergunta": "Como Deus reage à conspiração das nações no Salmo 2?",
      "opcoes": [
        "Ele se esconde e os ignora.",
        "Ele se ri e zomba deles.",
        "Ele faz acordos com eles.",
        "Ele fica triste e desanimado."
      ],
      "respostaCorreta": "Ele se ri e zomba deles."
    },
    {
      "day": "Segunda-feira",
      "pergunta": "Qual é a declaração central de Deus no Salmo 2 sobre Seu Rei?",
      "opcoes": [
        "Que Ele não tem rei.",
        "Que Ele estabeleceu o Seu Rei sobre Sião, o Seu santo monte.",
        "Que o rei será escolhido pelas nações.",
        "Que o rei será um homem comum."
      ],
      "respostaCorreta": "Que Ele estabeleceu o Seu Rei sobre Sião, o Seu santo monte."
    },
    {
      "day": "Segunda-feira",
      "pergunta": "O que o Salmo 2 profetiza sobre o domínio do Messias?",
      "opcoes": [
        "Que Ele dominará apenas sobre Israel.",
        "Que Ele dominará sobre todas as nações, tendo-as como Sua herança.",
        "Que Ele não terá domínio.",
        "Que Seu domínio será temporário."
      ],
      "respostaCorreta": "Que Ele dominará sobre todas as nações, tendo-as como Sua herança."
    },
    {
      "day": "Segunda-feira",
      "pergunta": "Qual é o conselho final do Salmo 2 aos reis e juízes da Terra?",
      "opcoes": [
        "Que confiem em seus próprios poderes.",
        "Que sirvam ao Senhor com temor e tremam com alegria.",
        "Que se rebelem contra Deus.",
        "Que ignorem os avisos divinos."
      ],
      "respostaCorreta": "Que sirvam ao Senhor com temor e tremam com alegria."
    },
    {
      "day": "Segunda-feira",
      "pergunta": "O que significa 'beijai o Filho' no contexto do Salmo 2?",
      "opcoes": [
        "Um ato de afeto literal.",
        "Um símbolo de submissão e lealdade ao Messias.",
        "Uma saudação cerimonial.",
        "Um ritual de purificação."
      ],
      "respostaCorreta": "Um símbolo de submissão e lealdade ao Messias."
    },
    {
      "day": "Segunda-feira",
      "pergunta": "Qual é a promessa para aqueles que confiam no Senhor, conforme o Salmo 2?",
      "opcoes": [
        "Riquezas e poder.",
        "Felicidade e bênçãos.",
        "Vidas sem desafios.",
        "Reconhecimento humano."
      ],
      "respostaCorreta": "Felicidade e bênçãos."
    },
    {
      "day": "Segunda-feira",
      "pergunta": "Como o Novo Testamento aplica o Salmo 2 a Jesus Cristo?",
      "opcoes": [
        "Apenas como um registro histórico.",
        "Como uma profecia de Seu nascimento.",
        "Como uma profecia cumprida em Sua vida, morte, ressurreição e ascensão ao trono celestial, e que se cumprirá plenamente em Sua Segunda Vinda.",
        "Como uma metáfora para o poder de Roma."
      ],
      "respostaCorreta": "Como uma profecia cumprida em Sua vida, morte, ressurreição e ascensão ao trono celestial, e que se cumprirá plenamente em Sua Segunda Vinda."
    },
    {
      "day": "Segunda-feira",
      "pergunta": "A mensagem do Salmo 2 é uma advertência e um convite. Qual é a essência desse convite?",
      "opcoes": [
        "Convite à rebelião contra Deus.",
        "Convite para aceitar a soberania de Deus e Seu Messias, buscando refúgio Nele antes que Sua ira se manifeste.",
        "Convite para ignorar a autoridade divina.",
        "Convite para viver sem preocupações com o futuro."
      ],
      "respostaCorreta": "Convite para aceitar a soberania de Deus e Seu Messias, buscando refúgio Nele antes que Sua ira se manifeste."
    },
    // TERÇA-FEIRA (Questões 31-40)
    {
      "day": "Terça-feira",
      "pergunta": "Que Salmo se destaca como uma súplica de um profeta para que Deus julgue a Terra e cumpra Suas promessas de redenção?",
      "opcoes": [
        "Salmo 80",
        "Salmo 23",
        "Salmo 100",
        "Salmo 42"
      ],
      "respostaCorreta": "Salmo 80"
    },
    {
      "day": "Terça-feira",
      "pergunta": "No Salmo 80, Deus é invocado como o Pastor de Israel, que guiava qual figura bíblica?",
      "opcoes": [
        "José",
        "Moisés",
        "Davi",
        "Efraim, Benjamim e Manassés"
      ],
      "respostaCorreta": "Efraim, Benjamim e Manassés"
    },
    {
      "day": "Terça-feira",
      "pergunta": "Qual é a principal oração repetida no Salmo 80?",
      "opcoes": [
        "Dá-nos paz e prosperidade.",
        "Restaura-nos, ó Deus; faze resplandecer o Teu rosto, e seremos salvos.",
        "Castiga os nossos inimigos.",
        "Ajuda-nos a construir um templo."
      ],
      "respostaCorreta": "Restaura-nos, ó Deus; faze resplandecer o Teu rosto, e seremos salvos."
    },
    {
      "day": "Terça-feira",
      "pergunta": "O Salmo 80 descreve Israel como uma videira que foi transplantada do Egito. O que aconteceu com essa videira?",
      "opcoes": [
        "Ela floresceu e cobriu toda a Terra.",
        "Suas cercas foram derrubadas, e ela foi destruída pelos transeuntes e animais selvagens.",
        "Ela produziu frutos amargos.",
        "Ela secou e morreu imediatamente."
      ],
      "respostaCorreta": "Suas cercas foram derrubadas, e ela foi destruída pelos transeuntes e animais selvagens."
    },
    {
      "day": "Terça-feira",
      "pergunta": "A quem se refere a 'planta' que o Salmo 80 pede que Deus fortaleça, e quem é o 'filho do homem' que Ele fez forte para Si?",
      "opcoes": [
        "A Israel e ao povo judeu.",
        "À nação de Israel e ao Messias.",
        "Ao templo e aos sacerdotes.",
        "A Davi e seus descendentes."
      ],
      "respostaCorreta": "À nação de Israel e ao Messias."
    },
    {
      "day": "Terça-feira",
      "pergunta": "O que o Salmo 80 antecipa a respeito do Messias?",
      "opcoes": [
        "Sua fraqueza e incapacidade.",
        "Sua vinda como um poderoso Salvador e Restaurador, que trará o livramento definitivo para o povo de Deus.",
        "Seu papel como um rei terreno comum.",
        "Seu desaparecimento do cenário mundial."
      ],
      "respostaCorreta": "Sua vinda como um poderoso Salvador e Restaurador, que trará o livramento definitivo para o povo de Deus."
    },
    {
      "day": "Terça-feira",
      "pergunta": "Como o Salmo 80 retrata a esperança de Israel em meio à destruição?",
      "opcoes": [
        "Pela resignação ao destino.",
        "Pela confiança na intervenção divina e na restauração.",
        "Pelo abandono da fé.",
        "Pela busca de ajuda em nações vizinhas."
      ],
      "respostaCorreta": "Pela confiança na intervenção divina e na restauração."
    },
    {
      "day": "Terça-feira",
      "pergunta": "Qual é a conexão entre o Salmo 80 e o clamor por avivamento na Igreja Adventista do Sétimo Dia?",
      "opcoes": [
        "Não há conexão.",
        "Ambos expressam um desejo profundo pela intervenção divina e pela restauração do povo de Deus à Sua plenitude e poder.",
        "O Salmo 80 fala apenas do passado.",
        "A Igreja Adventista não acredita em avivamento."
      ],
      "respostaCorreta": "Ambos expressam um desejo profundo pela intervenção divina e pela restauração do povo de Deus à Sua plenitude e poder."
    },
    {
      "day": "Terça-feira",
      "pergunta": "O que significa 'faze resplandecer o Teu rosto' no Salmo 80?",
      "opcoes": [
        "Que Deus deve se mostrar fisicamente.",
        "Que Deus deve demonstrar Sua aprovação, favor e bênção ao Seu povo.",
        "Que Deus deve se afastar.",
        "Que Deus deve julgar severamente."
      ],
      "respostaCorreta": "Que Deus deve demonstrar Sua aprovação, favor e bênção ao Seu povo."
    },
    {
      "day": "Terça-feira",
      "pergunta": "O Salmo 80 é um lembrete de que, mesmo em tempos de adversidade, o povo de Deus pode:",
      "opcoes": [
        "Desistir da fé.",
        "Clamar a Deus por restauração e ter esperança em Sua promessa de redenção.",
        "Confiar apenas em seus próprios esforços.",
        "Culpar os outros por seus problemas."
      ],
      "respostaCorreta": "Clamar a Deus por restauração e ter esperança em Sua promessa de redenção."
    },
    // QUARTA-FEIRA (Questões 41-50)
    {
      "day": "Quarta-feira",
      "pergunta": "Qual Salmo profetiza um Reino divino de paz e justiça que se estenderá por toda a Terra?",
      "opcoes": [
        "Salmo 72",
        "Salmo 1",
        "Salmo 46",
        "Salmo 100"
      ],
      "respostaCorreta": "Salmo 72"
    },
    {
      "day": "Quarta-feira",
      "pergunta": "A quem o Salmo 72 é tradicionalmente atribuído?",
      "opcoes": [
        "Moisés",
        "Davi",
        "Salomão",
        "Asafe"
      ],
      "respostaCorreta": "Salomão"
    },
    {
      "day": "Quarta-feira",
      "pergunta": "O que o Salmo 72 descreve sobre o rei que governará?",
      "opcoes": [
        "Que ele governará com tirania e opressão.",
        "Que ele julgará os pobres com justiça, salvará os filhos dos necessitados e esmagará o opressor.",
        "Que ele governará apenas por um curto período.",
        "Que ele favorecerá os ricos e poderosos."
      ],
      "respostaCorreta": "Que ele julgará os pobres com justiça, salvará os filhos dos necessitados e esmagará o opressor."
    },
    {
      "day": "Quarta-feira",
      "pergunta": "Qual é a duração do reinado profetizado no Salmo 72?",
      "opcoes": [
        "Apenas alguns anos.",
        "Por muitas gerações.",
        "Para sempre, enquanto o sol e a lua existirem.",
        "Até que os inimigos sejam derrotados."
      ],
      "respostaCorreta": "Para sempre, enquanto o sol e a lua existirem."
    },
    {
      "day": "Quarta-feira",
      "pergunta": "De onde virão os presentes e tributos para este rei, segundo o Salmo 72?",
      "opcoes": [
        "Apenas de Israel.",
        "Das nações distantes, como Társis, Sabá e Sebá.",
        "Dos povos vizinhos.",
        "Do próprio povo do rei."
      ],
      "respostaCorreta": "Das nações distantes, como Társis, Sabá e Sebá."
    },
    {
      "day": "Quarta-feira",
      "pergunta": "O que acontecerá ao nome do rei profetizado no Salmo 72?",
      "opcoes": [
        "Será esquecido rapidamente.",
        "Será para sempre; o Seu nome permanecerá de geração em geração, e os homens serão abençoados Nele.",
        "Será conhecido apenas em seu próprio tempo.",
        "Será amaldiçoado pelas nações."
      ],
      "respostaCorreta": "Será para sempre; o Seu nome permanecerá de geração em geração, e os homens serão abençoados Nele."
    },
    {
      "day": "Quarta-feira",
      "pergunta": "Como o Salmo 72 descreve a prosperidade do Reino do Messias?",
      "opcoes": [
        "Com escassez de recursos.",
        "Com abundância de cereais, como no alto dos montes, e prosperidade nas cidades.",
        "Com terras secas e improdutivas.",
        "Com falta de alimento para o povo."
      ],
      "respostaCorreta": "Com abundância de cereais, como no alto dos montes, e prosperidade nas cidades."
    },
    {
      "day": "Quarta-feira",
      "pergunta": "Qual é a bênção principal que o reinado do Messias trará, conforme o Salmo 72?",
      "opcoes": [
        "Aumento de impostos.",
        "Guerra e conflitos.",
        "Paz e justiça.",
        "Divisão entre os povos."
      ],
      "respostaCorreta": "Paz e justiça."
    },
    {
      "day": "Quarta-feira",
      "pergunta": "O Salmo 72, embora possa se referir a Salomão, é considerado pelos cristãos como uma profecia que aponta para:",
      "opcoes": [
        "O império romano.",
        "O reinado de qualquer rei justo.",
        "Jesus Cristo e Seu Reino milenar de paz e justiça.",
        "A fundação de Jerusalém."
      ],
      "respostaCorreta": "Jesus Cristo e Seu Reino milenar de paz e justiça."
    },
    {
      "day": "Quarta-feira",
      "pergunta": "A promessa de que 'todas as nações O servirão' no Salmo 72 é uma esperança para a Igreja Adventista do Sétimo Dia de que:",
      "opcoes": [
        "Apenas alguns se converterão.",
        "A mensagem do evangelho alcançará todos os povos antes da Segunda Vinda.",
        "As nações se destruirão mutuamente.",
        "As nações não reconhecerão a Deus."
      ],
      "respostaCorreta": "A mensagem do evangelho alcançará todos os povos antes da Segunda Vinda."
    },
    // QUINTA-FEIRA (Questões 51-60)
    {
      "day": "Quinta-feira",
      "pergunta": "Qual Salmo reflete o lamento de um profeta exilado, clamando a Deus por libertação e restauração?",
      "opcoes": [
        "Salmo 74",
        "Salmo 1",
        "Salmo 23",
        "Salmo 139"
      ],
      "respostaCorreta": "Salmo 74"
    },
    {
      "day": "Quinta-feira",
      "pergunta": "No Salmo 74, o povo de Deus se lamenta pela destruição de qual lugar sagrado?",
      "opcoes": [
        "O monte Sinai",
        "O Templo em Jerusalém",
        "O tabernáculo no deserto",
        "A cidade de Babilônia"
      ],
      "respostaCorreta": "O Templo em Jerusalém"
    },
    {
      "day": "Quinta-feira",
      "pergunta": "Como o Salmo 74 descreve a profanação do santuário?",
      "opcoes": [
        "Com orações e cânticos de louvor.",
        "Com o grito dos inimigos na casa de Deus e seus estandartes erguidos como sinais.",
        "Com a presença de anjos.",
        "Com a adoração de ídolos."
      ],
      "respostaCorreta": "Com o grito dos inimigos na casa de Deus e seus estandartes erguidos como sinais."
    },
    {
      "day": "Quinta-feira",
      "pergunta": "O que o Salmo 74 lembra a Deus sobre Seu poder passado?",
      "opcoes": [
        "A criação do mundo e a divisão do mar, como na travessia do Mar Vermelho.",
        "A construção das pirâmides.",
        "As conquistas de impérios humanos.",
        "A criação de um pequeno riacho."
      ],
      "respostaCorreta": "A criação do mundo e a divisão do mar, como na travessia do Mar Vermelho."
    },
    {
      "day": "Quinta-feira",
      "pergunta": "Que monstro marinho mítico é mencionado no Salmo 74 como um símbolo dos inimigos de Deus?",
      "opcoes": [
        "Behemoth",
        "Leviatã",
        "Grifo",
        "Fênix"
      ],
      "respostaCorreta": "Leviatã"
    },
    {
      "day": "Quinta-feira",
      "pergunta": "Qual é o apelo final do Salmo 74 a Deus?",
      "opcoes": [
        "Que Ele se esqueça de Seu povo.",
        "Que Ele se lembre de Sua aliança e não se esqueça de Seu povo sofredor e dos clamores dos pobres.",
        "Que Ele destrua o mundo.",
        "Que Ele pare de intervir na história humana."
      ],
      "respostaCorreta": "Que Ele se lembre de Sua aliança e não se esqueça de Seu povo sofredor e dos clamores dos pobres."
    },
    {
      "day": "Quinta-feira",
      "pergunta": "Em que contexto profético a destruição do Templo e o sofrimento do povo no Salmo 74 podem ser vistos pela fé adventista?",
      "opcoes": [
        "Apenas como eventos passados e sem relevância futura.",
        "Como precursores da destruição do mundo no fim dos tempos.",
        "Como eventos que se repetem ao longo da história, refletindo o Grande Conflito entre o bem e o mal.",
        "Como castigo permanente de Deus para Israel."
      ],
      "respostaCorreta": "Como eventos que se repetem ao longo da história, refletindo o Grande Conflito entre o bem e o mal."
    },
    {
      "day": "Quinta-feira",
      "pergunta": "O que o Salmo 74 nos ensina sobre a perseverança na fé em tempos de crise?",
      "opcoes": [
        "Que devemos perder a esperança.",
        "Que, mesmo em meio à adversidade, o povo de Deus pode clamar a Ele e confiar em Sua fidelidade e poder para intervir e restaurar.",
        "Que a fé não tem valor em tempos difíceis.",
        "Que devemos confiar apenas em nós mesmos."
      ],
      "respostaCorreta": "Que, mesmo em meio à adversidade, o povo de Deus pode clamar a Ele e confiar em Sua fidelidade e poder para intervir e restaurar."
    },
    {
      "day": "Quinta-feira",
      "pergunta": "A menção do 'Leviatã' no Salmo 74 é uma imagem que representa o quê?",
      "opcoes": [
        "Um animal extinto.",
        "As forças do mal e os inimigos de Deus que oprimem Seu povo.",
        "Um monstro marinho amigável.",
        "Um símbolo de riqueza e poder."
      ],
      "respostaCorreta": "As forças do mal e os inimigos de Deus que oprimem Seu povo."
    },
    {
      "day": "Quinta-feira",
      "pergunta": "O Salmo 74 serve como um lembrete para a Igreja de que, mesmo quando Deus parece ausente, Ele é:",
      "opcoes": [
        "Indiferente.",
        "Soberano e ativo na história, e que o Seu Reino prevalecerá.",
        "Derrotado pelos inimigos.",
        "Fraco e sem poder."
      ],
      "respostaCorreta": "Soberano e ativo na história, e que o Seu Reino prevalecerá."
    },
    // SEXTA-FEIRA (Questões 61-70)
    {
      "day": "Sexta-feira",
      "pergunta": "Qual Salmo se destaca como um hino de louvor ao Rei que reina na majestade de Sua santidade e justiça?",
      "opcoes": [
        "Salmo 99",
        "Salmo 1",
        "Salmo 23",
        "Salmo 139"
      ],
      "respostaCorreta": "Salmo 99"
    },
    {
      "day": "Sexta-feira",
      "pergunta": "O que o Salmo 99 convida o povo a fazer diante da presença do Senhor?",
      "opcoes": [
        "Esconder-se em medo.",
        "Tentar fugir de Sua presença.",
        "Tremer e adorar, pois Ele é santo e justo.",
        "Permanecer indiferente."
      ],
      "respostaCorreta": "Tremer e adorar, pois Ele é santo e justo."
    },
    {
      "day": "Sexta-feira",
      "pergunta": "O Salmo 99 exalta o Senhor como o Rei que ama:",
      "opcoes": [
        "A injustiça.",
        "A retidão e o juízo, estabelecendo a equidade em Jacó.",
        "A corrupção.",
        "A opressão dos pobres."
      ],
      "respostaCorreta": "A retidão e o juízo, estabelecendo a equidade em Jacó."
    },
    {
      "day": "Sexta-feira",
      "pergunta": "Quais figuras bíblicas são mencionadas no Salmo 99 como exemplos de líderes que oraram a Deus e foram ouvidos?",
      "opcoes": [
        "Abraão, Isaque e Jacó",
        "Noé, Daniel e Jó",
        "Moisés, Arão e Samuel",
        "Pedro, Tiago e João"
      ],
      "respostaCorreta": "Moisés, Arão e Samuel"
    },
    {
      "day": "Sexta-feira",
      "pergunta": "O que o Salmo 99 nos lembra sobre o caráter de Deus?",
      "opcoes": [
        "Que Ele é indiferente às orações.",
        "Que Ele é um Deus que perdoa as iniquidades, mas também castiga as transgressões.",
        "Que Ele nunca perdoa.",
        "Que Ele é um Deus distante e inacessível."
      ],
      "respostaCorreta": "Que Ele é um Deus que perdoa as iniquidades, mas também castiga as transgressões."
    },
    {
      "day": "Sexta-feira",
      "pergunta": "Qual é o convite final do Salmo 99 ao povo de Deus?",
      "opcoes": [
        "Para ignorar a santidade de Deus.",
        "Para exaltar o Senhor, nosso Deus, e adorar em Seu santo monte, porque o Senhor, nosso Deus, é santo.",
        "Para adorar outros deuses.",
        "Para questionar a autoridade de Deus."
      ],
      "respostaCorreta": "Para exaltar o Senhor, nosso Deus, e adorar em Seu santo monte, porque o Senhor, nosso Deus, é santo."
    },
    {
      "day": "Sexta-feira",
      "pergunta": "A mensagem do Salmo 99 é particularmente relevante para a Igreja Adventista do Sétimo Dia por que razão?",
      "opcoes": [
        "Porque ele fala sobre a necessidade de festas e celebrações.",
        "Porque ele enfatiza a santidade e a majestade de Deus, temas centrais na doutrina do santuário e na preparação para a Segunda Vinda de Cristo.",
        "Porque ele descreve rituais de sacrifício.",
        "Porque ele se foca apenas na história antiga de Israel."
      ],
      "respostaCorreta": "Porque ele enfatiza a santidade e a majestade de Deus, temas centrais na doutrina do santuário e na preparação para a Segunda Vinda de Cristo."
    },
    {
      "day": "Sexta-feira",
      "pergunta": "O que o Salmo 99 nos ensina sobre a oração?",
      "opcoes": [
        "Que a oração não tem efeito.",
        "Que Deus ouve e responde às orações de Seus servos fiéis, mas também exige responsabilidade por suas ações.",
        "Que orar é inútil em tempos de dificuldade.",
        "Que Deus ignora as orações dos pecadores."
      ],
      "respostaCorreta": "Que Deus ouve e responde às orações de Seus servos fiéis, mas também exige responsabilidade por suas ações."
    },
    {
      "day": "Sexta-feira",
      "pergunta": "A frase 'Ele é santo' repetida no Salmo 99 serve para enfatizar o quê?",
      "opcoes": [
        "A fragilidade de Deus.",
        "A pureza, a perfeição e a separação de Deus de tudo o que é pecaminoso e impuro.",
        "A distância de Deus da humanidade.",
        "A incapacidade de Deus de intervir."
      ],
      "respostaCorreta": "A pureza, a perfeição e a separação de Deus de tudo o que é pecaminoso e impuro."
    },
    {
      "day": "Sexta-feira",
      "pergunta": "No contexto escatológico, a adoração da santidade de Deus no Salmo 99 aponta para qual aspecto da fé adventista?",
      "opcoes": [
        "Apenas para a vida terrena.",
        "Para a adoração celestial no Reino de Deus, onde Sua santidade será plenamente manifesta e adorada por todo o universo.",
        "Para a adoração de ídolos.",
        "Para a indiferença à moralidade."
      ],
      "respostaCorreta": "Para a adoração celestial no Reino de Deus, onde Sua santidade será plenamente manifesta e adorada por todo o universo."
    }
];

// Elementos do DOM
const daySelectionContainer = document.getElementById('day-selection-container');
const quizContentContainer = document.getElementById('quiz-content');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const submitButton = document.getElementById('submit-button');
const feedback = document.getElementById('feedback');
const nextButton = document.getElementById('next-button');
const questionCounter = document.getElementById('question-counter');
const backToDaysButton = document.getElementById('back-to-days-button');
const restartButton = document.getElementById('restart-button');

// Adicionado para selecionar TODOS os botões de dia
const dayButtons = document.querySelectorAll('.day-button');

let questions = []; // Perguntas para o quiz atual
let currentQuestionIndex = 0;
let correctAnswersCount = 0;
let selectedOption = null;

// Função para embaralhar um array (Fisher-Yates shuffle)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showResults();
        return;
    }

    selectedOption = null; // Reseta a seleção
    feedback.textContent = ''; // Limpa o feedback
    submitButton.style.display = 'block'; // Mostra o botão de verificar
    nextButton.style.display = 'none'; // Esconde o botão de próxima
    optionsContainer.innerHTML = ''; // Limpa as opções anteriores

    const question = questions[currentQuestionIndex];
    questionText.textContent = question.pergunta;
    questionCounter.textContent = `Questão ${currentQuestionIndex + 1} de ${questions.length}`;

    // Embaralha as opções para a pergunta atual
    const shuffledOptions = [...question.opcoes];
    shuffleArray(shuffledOptions);

    shuffledOptions.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-button');
        button.addEventListener('click', () => {
            // Remove a classe 'selected' de todos os botões antes de adicionar ao novo
            document.querySelectorAll('.option-button').forEach(btn => {
                btn.classList.remove('selected');
            });
            button.classList.add('selected');
            selectedOption = option;
        });
        optionsContainer.appendChild(button);
    });
}

function checkAnswer() {
    if (selectedOption === null) {
        feedback.textContent = 'Por favor, selecione uma opção.';
        feedback.style.color = 'orange';
        return;
    }

    const question = questions[currentQuestionIndex];
    const optionButtons = optionsContainer.querySelectorAll('.option-button');

    optionButtons.forEach(button => {
        if (button.textContent === question.respostaCorreta) {
            button.classList.add('correct');
        } else if (button.textContent === selectedOption) {
            button.classList.add('wrong');
        }
        button.disabled = true; // Desabilita todos os botões após a verificação
    });

    if (selectedOption === question.respostaCorreta) {
        feedback.textContent = 'Correto!';
        feedback.style.color = 'green';
        correctAnswersCount++;
    } else {
        feedback.textContent = 'Errado. A resposta correta era: ' + question.respostaCorreta;
        feedback.style.color = 'red';
    }

    submitButton.style.display = 'none';
    nextButton.style.display = 'block';
}

function goToNextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

function showResults() {
    questionText.textContent = `Quiz Finalizado! Você acertou ${correctAnswersCount} de ${questions.length} questões.`;
    optionsContainer.innerHTML = '';
    feedback.textContent = '';
    submitButton.style.display = 'none';
    nextButton.style.display = 'none';
    backToDaysButton.style.display = 'block';
    restartButton.style.display = 'block';
    questionCounter.textContent = ''; // Limpa o contador de questões
}

function restartQuiz() {
    currentQuestionIndex = 0;
    correctAnswersCount = 0;
    shuffleArray(questions); // Embaralha novamente para um novo quiz
    loadQuestion();
    backToDaysButton.style.display = 'none';
    restartButton.style.display = 'none';
}

// Função para resetar o quiz e mostrar a seleção de dia
function resetQuiz() {
    // A linha 'daySelect.value = "";' foi removida, pois 'daySelect' não existe mais.
    questionText.textContent = '';
    optionsContainer.innerHTML = '';
    feedback.textContent = '';
    submitButton.style.display = 'block';
    nextButton.style.display = 'none';
    backToDaysButton.style.display = 'none';
    restartButton.style.display = 'none';
    daySelectionContainer.style.display = 'block'; // Garante que a tela de seleção de dia volte
    quizContentContainer.style.display = 'none';
}

function showDaySelection() {
    quizContentContainer.style.display = 'none';
    daySelectionContainer.style.display = 'block';
    resetQuiz(); // Chame resetQuiz para limpar o estado e mostrar a seleção de dias
}

// Event Listener para os botões de dia (novo)
dayButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const selectedDay = event.target.dataset.day; // Pega o valor de data-day
        startQuiz(selectedDay);
    });
});

// Outros Event Listeners (permanecem)
submitButton.addEventListener('click', checkAnswer);
nextButton.addEventListener('click', goToNextQuestion);
restartButton.addEventListener('click', restartQuiz);
backToDaysButton.addEventListener('click', showDaySelection);
