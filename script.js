// O array de questões JSON já está embutido aqui, com a propriedade "day" adicionada
const allQuestions = [
  {
    "day": "Sábado",
    "pergunta": "Qual é o verso para memorizar da lição desta semana, que se encontra no livro de Ester?",
    "opcoes": [
      "Ester 3:1",
      "Ester 5:2",
      "Ester 4:14",
      "Ester 8:1"
    ],
    "respostaCorreta": "Ester 4:14"
  },
  {
    "day": "Sábado",
    "pergunta": "As histórias de Rute e Ester são consideradas importantes para o estudo das profecias bíblicas por qual(is) motivo(s)?",
    "opcoes": [
      "São os únicos livros da Bíblia que narram histórias de mulheres.",
      "Oferecem relatos em miniatura do grande conflito, seus personagens têm papéis relevantes no plano da salvação, e destacam o alcance universal do poder de Deus.",
      "São alegorias completas de eventos futuros sem base histórica.",
      "Detalham exclusivamente as perseguições que o povo de Deus enfrentará."
    ],
    "respostaCorreta": "Oferecem relatos em miniatura do grande conflito, seus personagens têm papéis relevantes no plano da salvação, e destacam o alcance universal do poder de Deus."
  },
  {
    "day": "Sábado",
    "pergunta": "No contexto profético e escatológico, o que a mulher simboliza nas profecias?",
    "opcoes": [
      "O mundo",
      "A humanidade",
      "A igreja",
      "A nação de Israel"
    ],
    "respostaCorreta": "A igreja"
  },
  {
    "day": "Sábado",
    "pergunta": "A principal finalidade de estudar as histórias de Rute e Ester no contexto das profecias é:",
    "opcoes": [
      "Descobrir os nomes dos futuros líderes.",
      "Prever datas exatas de eventos futuros.",
      "Compreender como Deus age na história e como Seu povo deve se posicionar no tempo do fim.",
      "Apenas para satisfazer a curiosidade sobre eventos passados."
    ],
    "respostaCorreta": "Compreender como Deus age na história e como Seu povo deve se posicionar no tempo do fim."
  },
  {
    "day": "Sábado",
    "pergunta": "De acordo com a introdução da lição, as histórias de Rute e Ester:",
    "opcoes": [
      "São puramente alegóricas, sem base em fatos reais.",
      "São histórias reais do passado que prefiguram eventos e situações dos últimos dias.",
      "Não têm relação com as profecias apocalípticas.",
      "Devem ser interpretadas apenas literalmente, sem simbolismo."
    ],
    "respostaCorreta": "São histórias reais do passado que prefiguram eventos e situações dos últimos dias."
  },
  {
    "day": "Sábado",
    "pergunta": "Ao estudar as profecias, qual é o principal objetivo que se busca?",
    "opcoes": [
      "Apenas obter conhecimento intelectual.",
      "Assustar e deixar as pessoas angustiadas.",
      "Crescer em conhecimento e na graça de Deus, e fortalecer a fé.",
      "Dominar os outros com informações exclusivas."
    ],
    "respostaCorreta": "Crescer em conhecimento e na graça de Deus, e fortalecer a fé."
  },
  {
    "day": "Sábado",
    "pergunta": "A história de Rute ilustra principalmente:",
    "opcoes": [
      "A sede de poder e adoração.",
      "A perseguição do povo de Deus.",
      "O amor redentor de Deus e Seu juízo em nosso favor.",
      "O conflito entre noras e sogras."
    ],
    "respostaCorreta": "O amor redentor de Deus e Seu juízo em nosso favor."
  },
  {
    "day": "Sábado",
    "pergunta": "Ester, por sua vez, é apresentada como uma mulher que:",
    "opcoes": [
      "Se escondeu dos problemas.",
      "Teve que se expor a uma situação delicada para salvar seu povo.",
      "Buscava apenas o conforto pessoal.",
      "Não tinha fé em Deus."
    ],
    "respostaCorreta": "Teve que se expor a uma situação delicada para salvar seu povo."
  },
  {
    "day": "Sábado",
    "pergunta": "Qual é a importância da genealogia de Jesus para as histórias de Rute e Ester?",
    "opcoes": [
      "Apenas para registrar a linhagem real.",
      "Evidencia a inclusão de gentios e a providência divina no plano da salvação.",
      "Demonstra a perfeição humana dos ancestrais de Jesus.",
      "Não possui relevância teológica direta."
    ],
    "respostaCorreta": "Evidencia a inclusão de gentios e a providência divina no plano da salvação."
  },
  {
    "day": "Sábado",
    "pergunta": "A lição sugere que as histórias de Rute e Ester nos convidam a ter:",
    "opcoes": [
      "Medo do futuro.",
      "Indiferença diante das crises.",
      "Coragem, intercessão e fidelidade.",
      "Dúvida sobre o propósito divino."
    ],
    "respostaCorreta": "Coragem, intercessão e fidelidade."
  },
  {
    "day": "Domingo",
    "pergunta": "Qual o significado da palavra 'Belém' em hebraico?",
    "opcoes": [
      "Casa de Oração",
      "Casa do Pão",
      "Terra Prometida",
      "Cidade Santa"
    ],
    "respostaCorreta": "Casa do Pão"
  },
  {
    "day": "Domingo",
    "pergunta": "A fome em Belém, no início da história de Rute, é apresentada como:",
    "opcoes": [
      "Um evento natural sem significado espiritual.",
      "Um teste aleatório de fé.",
      "Uma consequência da rebelião do povo de Deus e da desordem moral.",
      "Um sinal de abundância disfarçada."
    ],
    "respostaCorreta": "Uma consequência da rebelião do povo de Deus e da desordem moral."
  },
  {
    "day": "Domingo",
    "pergunta": "A família de Noemi decidiu migrar para Moabe devido à fome em Belém. Moabe era:",
    "opcoes": [
      "Uma nação aliada de Israel.",
      "Uma terra fértil onde o Messias nasceria.",
      "Uma das nações mais ímpias e pagãs ao redor de Israel.",
      "Uma cidade dentro do território de Judá."
    ],
    "respostaCorreta": "Uma das nações mais ímpias e pagãs ao redor de Israel."
  },
  {
    "day": "Domingo",
    "pergunta": "O que a história de Noemi e Rute, no contexto do sofrimento humano, reflete?",
    "opcoes": [
      "A impecabilidade da raça humana.",
      "A condição humana após a queda, com perda e escassez.",
      "A total ausência de Deus na história.",
      "A recompensa por decisões sábias."
    ],
    "respostaCorreta": "A condição humana após a queda, com perda e escassez."
  },
  {
    "day": "Domingo",
    "pergunta": "Embora Deus permita dificuldades e as consequências do pecado, qual é a Sua atitude perante o sofrimento do Seu povo?",
    "opcoes": [
      "Ele ignora, pois já lhes deu livre-arbítrio.",
      "Ele castiga diretamente o povo com o mal.",
      "Ele trabalha na história para resolver os problemas do pecado e do sofrimento, mostrando-se compassivo e agindo de forma redentora.",
      "Ele se afasta completamente até que o povo mude."
    ],
    "respostaCorreta": "Ele trabalha na história para resolver os problemas do pecado e do sofrimento, mostrando-se compassivo e agindo de forma redentora."
  },
  {
    "day": "Domingo",
    "pergunta": "Os críticos da fé cristã frequentemente apontam o mal no mundo como evidência de que Deus não existe ou não Se importa. Como as fontes refutam essa suposição?",
    "opcoes": [
      "Afirmam que Deus só permite o mal para testar a fé.",
      "Declaram que o mal é uma ilusão e não existe de fato.",
      "Apresentam histórias bíblicas que mostram Deus trabalhando em meio à tragédia e suas consequências redentoras.",
      "Argumentam que o mal é unicamente responsabilidade de Satanás, sem intervenção divina."
    ],
    "respostaCorreta": "Apresentam histórias bíblicas que mostram Deus trabalhando em meio à tragédia e suas consequências redentoras."
  },
  {
    "day": "Domingo",
    "pergunta": "Apesar de a terra ainda produzir fartura, a lição aponta que a fome no mundo é resultado de:",
    "opcoes": [
      "Uma maldição divina permanente.",
      "A ganância humana e os danos do pecado.",
      "A falta de tecnologia agrícola.",
      "Desastres naturais inevitáveis."
    ],
    "respostaCorreta": "A ganância humana e os danos do pecado."
  },
  {
    "day": "Domingo",
    "pergunta": "O que o sofrimento e as perdas na vida de Noemi (perda do marido Elimeleque e dos dois filhos) demonstram sobre a condição humana?",
    "opcoes": [
      "Que ela era pecadora em particular.",
      "Que o sofrimento é um destino inevitável para todos.",
      "Que a vida se tornou uma fonte de sofrimento após a perda da herança original planejada por Deus.",
      "Apenas a dificuldade de viver em um país estrangeiro."
    ],
    "respostaCorreta": "Que a vida se tornou uma fonte de sofrimento após a perda da herança original planejada por Deus."
  },
  {
    "day": "Domingo",
    "pergunta": "Qual é a principal lição do livre-arbítrio de Deus no contexto do sofrimento humano, conforme abordado na lição?",
    "opcoes": [
      "Deus obriga as pessoas a fazerem Suas escolhas.",
      "Deus nos presenteou com liberdade para nos rebelar, mas devemos assumir a responsabilidade pelas consequências de nossas escolhas.",
      "As escolhas humanas não têm impacto no sofrimento.",
      "O livre-arbítrio é apenas uma teoria teológica."
    ],
    "respostaCorreta": "Deus nos presenteou com liberdade para nos rebelar, mas devemos assumir a responsabilidade pelas consequências de nossas escolhas."
  },
  {
    "day": "Domingo",
    "pergunta": "A expressão 'fome na casa do pão' é irônica porque:",
    "opcoes": [
      "O pão espiritual estava abundante, mas o físico não.",
      "Belém tinha muitos padeiros, mas pouca farinha.",
      "Belém, que significa 'casa do pão', estava sofrendo de escassez e fome.",
      "O povo se recusava a comer o pão que tinha."
    ],
    "respostaCorreta": "Belém, que significa 'casa do pão', estava sofrendo de escassez e fome."
  },
  {
    "day": "Segunda-feira",
    "pergunta": "Qual foi a famosa declaração de Rute que demonstrou sua lealdade e fé em Noemi e em seu Deus?",
    "opcoes": [
      "Eu voltarei para a minha terra.",
      "Eu vou cuidar de você, minha sogra.",
      "O teu povo é o meu povo e o teu Deus é o meu Deus.",
      "Que Deus me abençoe em tudo."
    ],
    "respostaCorreta": "O teu povo é o meu povo e o teu Deus é o meu Deus."
  },
  {
    "day": "Segunda-feira",
    "pergunta": "A lealdade de Rute foi inspirada principalmente por:",
    "opcoes": [
      "Apenas um afeto de nora pela sogra.",
      "O desejo de herdar bens materiais.",
      "A vida prática e o testemunho de fé de Noemi, mesmo em meio às suas amarguras.",
      "A promessa de uma vida mais fácil em Belém."
    ],
    "respostaCorreta": "A vida prática e o testemunho de fé de Noemi, mesmo em meio às suas amarguras."
  },
  {
    "day": "Segunda-feira",
    "pergunta": "Noemi pediu para ser chamada de 'Mara' porque:",
    "opcoes": [
      "Era um nome mais agradável.",
      "Simbolizava a esperança.",
      "Significava 'amarga', refletindo a grande amargura que o Todo-Poderoso lhe havia dado.",
      "Era um costume da época para viúvas."
    ],
    "respostaCorreta": "Significava 'amarga', refletindo a grande amargura que o Todo-Poderoso lhe havia dado."
  },
  {
    "day": "Segunda-feira",
    "pergunta": "A lei da respiga em Israel permitia que:",
    "opcoes": [
      "Qualquer pessoa colhesse livremente em qualquer campo.",
      "Os donos das terras vendessem tudo o que produziam.",
      "Os pobres, estrangeiros, órfãos e viúvas pudessem colher o que sobrava nos campos após a colheita principal.",
      "Apenas os levitas colhessem os campos."
    ],
    "respostaCorreta": "Os pobres, estrangeiros, órfãos e viúvas pudessem colher o que sobrava nos campos após a colheita principal."
  },
  {
    "day": "Segunda-feira",
    "pergunta": "Boaz é descrito nas fontes como um 'Goel', que significa:",
    "opcoes": [
      "Um líder político.",
      "Um guerreiro valente.",
      "Um parente remidor ou resgatador.",
      "Um homem rico e generoso."
    ],
    "respostaCorreta": "Um parente remidor ou resgatador."
  },
  {
    "day": "Segunda-feira",
    "pergunta": "De que forma Boaz é um 'tipo de Cristo' na história de Rute?",
    "opcoes": [
      "Ele era um pregador famoso.",
      "Ele impôs leis rígidas.",
      "Ele age como resgatador, tornando-se parente de Rute e Noemi e redimindo a propriedade e a família.",
      "Ele foi abandonado por sua família."
    ],
    "respostaCorreta": "Ele age como resgatador, tornando-se parente de Rute e Noemi e redimindo a propriedade e a família."
  },
  {
    "day": "Segunda-feira",
    "pergunta": "A inclusão de Rute, uma moabita estrangeira, na genealogia de Jesus é significativa porque:",
    "opcoes": [
      "Prova que apenas estrangeiros podem se tornar ancestrais do Messias.",
      "Era um requisito legal para a linhagem real.",
      "Sublinha a universalidade do amor e da graça de Deus, que transcende barreiras sociais e étnicas.",
      "Demonstra que Deus muda Suas leis para Seus propósitos."
    ],
    "respostaCorreta": "Sublinha a universalidade do amor e da graça de Deus, que transcende barreiras sociais e étnicas."
  },
  {
    "day": "Segunda-feira",
    "pergunta": "Como a bondade de Boaz se manifestou para Rute no campo?",
    "opcoes": [
      "Ele a ignorou, mas permitiu que ela colhesse.",
      "Ele a tratou com severidade para que aprendesse a se sustentar.",
      "Ele a convidou para colher em seu campo, instruiu seus ceifadores a deixarem mais espigas e a tratou com gentileza e respeito.",
      "Ele lhe deu uma grande quantidade de dinheiro."
    ],
    "respostaCorreta": "Ele a convidou para colher em seu campo, instruiu seus ceifadores a deixarem mais espigas e a tratou com gentileza e respeito."
  },
  {
    "day": "Segunda-feira",
    "pergunta": "Qual é a principal lição que o encontro de Rute e Boaz traz sobre o caráter de Deus?",
    "opcoes": [
      "Deus é um juiz severo que exige condições rigorosas.",
      "Deus só ajuda aqueles que se esforçam sem a Sua ajuda.",
      "Deus nos vê e, apesar de nossa pobreza espiritual, nos quer como Sua noiva, oferecendo redenção e amor incondicional.",
      "Deus só se importa com a obediência, não com o amor."
    ],
    "respostaCorreta": "Deus nos vê e, apesar de nossa pobreza espiritual, nos quer como Sua noiva, oferecendo redenção e amor incondicional."
  },
  {
    "day": "Segunda-feira",
    "pergunta": "A história de Rute é considerada um 'retrato fiel da providência divina' porque:",
    "opcoes": [
      "Mostra como as pessoas podem resolver seus problemas sozinhas.",
      "Detalha um plano de salvação que não depende da fé pessoal.",
      "Revela como a fidelidade pessoal pode abrir portas para bênçãos eternas e como Deus atua mesmo em situações de desgraça.",
      "É apenas uma história de amor sem significado profético."
    ],
    "respostaCorreta": "Revela como a fidelidade pessoal pode abrir portas para bênçãos eternas e como Deus atua mesmo em situações de desgraça."
  },
  {
    "day": "Terça-feira",
    "pergunta": "Além de redimir a propriedade, quais outras responsabilidades e direitos um 'Goel' (parente remidor) tinha na lei mosaica?",
    "opcoes": [
      "Prover um exército para o parente.",
      "Casar-se com a viúva do parente falecido para suscitar descendência e preservar o nome da família.",
      "Aconselhar o parente em questões financeiras.",
      "Administrar todas as propriedades do parente."
    ],
    "respostaCorreta": "Casar-se com a viúva do parente falecido para suscitar descendência e preservar o nome da família."
  },
  {
    "day": "Terça-feira",
    "pergunta": "A lição compara o 'parente mais próximo' que se recusa a redimir Rute com Satanás. Por que Satanás é comparado a esse parente?",
    "opcoes": [
      "Ele também é rico e poderoso.",
      "Ele tem a mesma genealogia de Cristo.",
      "Porque Satanás reivindica o direito sobre a humanidade como sua posse, mas desiste quando percebe que a redenção implica em um compromisso que ele não está disposto a assumir.",
      "Ele oferece uma redenção mais fácil."
    ],
    "respostaCorreta": "Porque Satanás reivindica o direito sobre a humanidade como sua posse, mas desiste quando percebe que a redenção implica em um compromisso que ele não está disposto a assumir."
  },
  {
    "day": "Terça-feira",
    "pergunta": "Qual dos seguintes exemplos bíblicos é usado para ilustrar a reivindicação de Satanás sobre a terra e a humanidade?",
    "opcoes": [
      "A construção da Torre de Babel.",
      "A destruição de Sodoma e Gomorra.",
      "A tentação de Jesus no deserto, onde Satanás oferece todos os reinos do mundo.",
      "O Êxodo de Israel do Egito."
    ],
    "respostaCorreta": "A tentação de Jesus no deserto, onde Satanás oferece todos os reinos do mundo."
  },
  {
    "day": "Terça-feira",
    "pergunta": "A disputa de Miguel (Jesus) com o diabo pelo corpo de Moisés (Judas 9) é um exemplo de:",
    "opcoes": [
      "Uma briga por território físico.",
      "A incapacidade de Satanás de guardar a lei.",
      "A reivindicação de Satanás sobre os pecadores e a intervenção de Cristo para redimir mesmo aqueles que morreram.",
      "Um debate teológico sobre a ressurreição."
    ],
    "respostaCorreta": "A reivindicação de Satanás sobre os pecadores e a intervenção de Cristo para redimir mesmo aqueles que morreram."
  },
  {
    "day": "Terça-feira",
    "pergunta": "De acordo com a lição, qual foi o 'preço' que Jesus pagou para redimir o mundo e a humanidade?",
    "opcoes": [
      "Sua posição no céu.",
      "Obedecer a todas as leis de Deus.",
      "Sua própria vida, tornando-se humano e morrendo por nós.",
      "Conquistar reinos terrestres."
    ],
    "respostaCorreta": "Sua própria vida, tornando-se humano e morrendo por nós."
  },
  {
    "day": "Terça-feira",
    "pergunta": "A ressurreição de Moisés é mencionada como um exemplo de:",
    "opcoes": [
      "A vitória do homem sobre a morte.",
      "A soberania de Deus sobre a morte e a derrota das reivindicações de Satanás.",
      "O poder dos profetas.",
      "Apenas um milagre isolado."
    ],
    "respostaCorreta": "A soberania de Deus sobre a morte e a derrota das reivindicações de Satanás."
  },
  {
    "day": "Terça-feira",
    "pergunta": "A bondade, generosidade e justiça de Boaz, ao resgatar Rute e sua herança, refletem qual aspecto do caráter de Deus?",
    "opcoes": [
      "Sua exigência de cumprimento legal.",
      "Sua severidade no julgamento.",
      "Seu caráter compassivo que provê sustento e dignidade, acolhendo-nos por graça e amor incondicional.",
      "Seu desinteresse pelas dificuldades humanas."
    ],
    "respostaCorreta": "Seu caráter compassivo que provê sustento e dignidade, acolhendo-nos por graça e amor incondicional."
  },
  {
    "day": "Terça-feira",
    "pergunta": "A lição compara o ato de Boaz de cumprir a reivindicação legal publicamente na porta da cidade com:",
    "opcoes": [
      "Um julgamento humano sem envolvimento divino.",
      "O juízo de Deus, que se manifesta publicamente para vindicar Seu povo.",
      "Um evento social sem importância profética.",
      "Apenas um costume local."
    ],
    "respostaCorreta": "O juízo de Deus, que se manifesta publicamente para vindicar Seu povo."
  },
  {
    "day": "Terça-feira",
    "pergunta": "Quando Boaz assume a responsabilidade de resgatar Rute e a propriedade, mesmo havendo um parente mais próximo, isso ilustra:",
    "opcoes": [
      "A desorganização das leis em Israel.",
      "A falta de interesse do parente mais próximo.",
      "A atitude de Cristo de intervir e pagar o preço pela nossa redenção, apesar da 'reivindicação' do pecado sobre nós.",
      "A flexibilidade das normas judaicas."
    ],
    "respostaCorreta": "A atitude de Cristo de intervir e pagar o preço pela nossa redenção, apesar da 'reivindicação' do pecado sobre nós."
  },
  {
    "day": "Terça-feira",
    "pergunta": "O que significa dizer que 'Jesus, o nosso parente mais próximo', encarnou para nos resgatar?",
    "opcoes": [
      "Que Jesus era literalmente um parente de Rute.",
      "Que Ele se tornou humano (assumindo nossa natureza) para nos redimir do domínio do pecado e de Satanás.",
      "Que Ele interage apenas com Sua própria família.",
      "Que Ele só se preocupa com a genealogia física."
    ],
    "respostaCorreta": "Que Ele se tornou humano (assumindo nossa natureza) para nos redimir do domínio do pecado e de Satanás."
  },
  {
    "day": "Quarta-feira",
    "pergunta": "Qual é a principal característica de Hamã que o assemelha a Satanás?",
    "opcoes": [
      "Sua sabedoria e beleza.",
      "Sua posição de poder.",
      "Sua sede de poder, orgulho e desejo de adoração e extermínio do povo de Deus.",
      "Sua lealdade ao rei."
    ],
    "respostaCorreta": "Sua sede de poder, orgulho e desejo de adoração e extermínio do povo de Deus."
  },
  {
    "day": "Quarta-feira",
    "pergunta": "A queda de Lúcifer (Ezequiel 28:11-15 e Isaías 14:12-15) é usada como paralelo à história de Hamã para ilustrar:",
    "opcoes": [
      "A beleza dos querubins.",
      "O destino de todos os anjos rebeldes.",
      "O desejo de ser como Deus e usurpar Seu lugar, motivando a iniquidade.",
      "A necessidade de hierarquia no reino."
    ],
    "respostaCorreta": "O desejo de ser como Deus e usurpar Seu lugar, motivando a iniquidade."
  },
  {
    "day": "Quarta-feira",
    "pergunta": "O plano de Hamã para exterminar todos os judeus prefigura qual evento escatológico?",
    "opcoes": [
      "A volta de Cristo.",
      "O juízo investigativo.",
      "O decreto de morte universal contra o povo de Deus nos últimos dias.",
      "A reconstrução do templo."
    ],
    "respostaCorreta": "O decreto de morte universal contra o povo de Deus nos últimos dias."
  },
  {
    "day": "Quarta-feira",
    "pergunta": "A fidelidade de Mordecai em não se curvar diante de Hamã simboliza:",
    "opcoes": [
      "Uma rebelião política contra o rei.",
      "A arrogância de Mordecai.",
      "A postura do remanescente fiel que, ao guardar os mandamentos de Deus, se oporá às leis humanas que vão contra a lei divina, especialmente a observância do sábado.",
      "Um desejo de ser exaltado acima de Hamã."
    ],
    "respostaCorreta": "A postura do remanescente fiel que, ao guardar os mandamentos de Deus, se oporá às leis humanas que vão contra a lei divina, especialmente a observância do sábado."
  },
  {
    "day": "Quarta-feira",
    "pergunta": "Embora o livro de Ester não mencione explicitamente o nome de Deus, Sua providência é visível em cada reviravolta da trama. Isso significa que Deus:",
    "opcoes": [
      "Não se envolve diretamente nos assuntos humanos.",
      "Opera nos bastidores, orquestrando eventos para proteger Seu povo.",
      "Seus planos são aleatórios e sem sentido.",
      "Depende exclusivamente das ações humanas para Seus propósitos."
    ],
    "respostaCorreta": "Opera nos bastidores, orquestrando eventos para proteger Seu povo."
  },
  {
    "day": "Quarta-feira",
    "pergunta": "A derrota de Hamã e a reversão de seu decreto simbolizam:",
    "opcoes": [
      "Um mero capricho do rei Assuero.",
      "A vingança humana.",
      "A derrota final de Satanás e o livramento do povo de Deus no fim dos tempos.",
      "A fraqueza dos inimigos de Deus."
    ],
    "respostaCorreta": "A derrota final de Satanás e o livramento do povo de Deus no fim dos tempos."
  },
  {
    "day": "Quarta-feira",
    "pergunta": "A lei de Hamã contra os judeus, que prefigura o decreto de morte nos últimos dias, seria contra aqueles que:",
    "opcoes": [
      "Se recusarem a pagar impostos.",
      "Não se curvam a reis terrenos.",
      "Guardam os mandamentos de Deus e se opõem às leis das nações que irão contra a lei divina.",
      "Têm uma religião diferente."
    ],
    "respostaCorreta": "Guardam os mandamentos de Deus e se opõem às leis das nações que irão contra a lei divina."
  },
  {
    "day": "Quarta-feira",
    "pergunta": "Qual foi o elemento-chave que Amã não sabia sobre a Rainha Ester ao propor o decreto de extermínio dos judeus?",
    "opcoes": [
      "Que ela era a irmã de Mordecai.",
      "Que ela planejava fugir do palácio.",
      "Que ela era judia.",
      "Que ela era uma espiã de outro reino."
    ],
    "respostaCorreta": "Que ela era judia."
  },
  {
    "day": "Quarta-feira",
    "pergunta": "Qual a origem de Hamã, que é relevante para o seu ódio contra os judeus?",
    "opcoes": [
      "Ele era um persa que odiava os judeus por causa de suas riquezas.",
      "Ele era descendente de Agague, rei dos amalequitas, um povo que Israel deveria exterminar.",
      "Ele era um líder religioso que se opunha à fé judaica.",
      "Ele era um ex-escravo judeu que se rebelou."
    ],
    "respostaCorreta": "Ele era descendente de Agague, rei dos amalequitas, um povo que Israel deveria exterminar."
  },
  {
    "day": "Quarta-feira",
    "pergunta": "A lição de Ester sobre o grande conflito demonstra que Satanás:",
    "opcoes": [
      "Atua abertamente em todas as suas ações.",
      "Induz à perseguição por trás dos poderes e forças humanas.",
      "É um inimigo visível que sempre se revela.",
      "Suas estratégias são fáceis de identificar."
    ],
    "respostaCorreta": "Induz à perseguição por trás dos poderes e forças humanas."
  },
  {
    "day": "Quinta-feira",
    "pergunta": "Qual é a famosa frase de Mordecai a Ester que a desafiou a agir em prol de seu povo?",
    "opcoes": [
      "Você deve fugir do palácio.",
      "O rei está do nosso lado.",
      "Quem sabe se para conjuntura como esta é que foste levada rainha?",
      "Prepare um banquete para o rei."
    ],
    "respostaCorreta": "Quem sabe se para conjuntura como esta é que foste levada rainha?"
  },
  {
    "day": "Quinta-feira",
    "pergunta": "A atitude de Ester de se apresentar ao rei sem ser convidada, dizendo 'e, perecendo, pereço', é um exemplo de:",
    "opcoes": [
      "Desespero e falta de planejamento.",
      "Arrogância e desrespeito ao rei.",
      "Fé, coragem e determinação, mesmo arriscando a própria vida.",
      "Um ato impulsivo sem propósito."
    ],
    "respostaCorreta": "Fé, coragem e determinação, mesmo arriscando a própria vida."
  },
  {
    "day": "Quinta-feira",
    "pergunta": "Como Deus intervém para salvar Seu povo na história de Ester?",
    "opcoes": [
      "Através de um milagre visível no céu.",
      "Ignorando a situação e esperando o melhor.",
      "Orquestrando eventos como o sono perturbado do rei, a honra a Mordecai e a humilhação de Hamã.",
      "Enviando um anjo para lutar diretamente com Hamã."
    ],
    "respostaCorreta": "Orquestrando eventos como o sono perturbado do rei, a honra a Mordecai e a humilhação de Hamã."
  },
  {
    "day": "Quinta-feira",
    "pergunta": "O livramento do povo judeu na história de Ester é um símbolo profético de:",
    "opcoes": [
      "Apenas um evento histórico isolado.",
      "A vitória da justiça humana.",
      "O livramento final que Deus concederá ao Seu povo remanescente durante as perseguições do tempo do fim.",
      "A necessidade de que o homem lute por sua própria liberdade."
    ],
    "respostaCorreta": "O livramento final que Deus concederá ao Seu povo remanescente durante as perseguições do tempo do fim."
  },
  {
    "day": "Quinta-feira",
    "pergunta": "A história de Ester é vista como um 'protótipo' de como Deus protegerá Seu povo em meio a um decreto de morte universal. Isso significa que:",
    "opcoes": [
      "A história se repetirá exatamente igual no futuro.",
      "É um modelo ou exemplo de como Deus age, com princípios aplicáveis a eventos futuros.",
      "Apenas os judeus serão salvos no fim dos tempos.",
      "Os decretos de morte são apenas simbólicos, não reais."
    ],
    "respostaCorreta": "É um modelo ou exemplo de como Deus age, com princípios aplicáveis a eventos futuros."
  },
  {
    "day": "Quinta-feira",
    "pergunta": "A lição enfatiza que, ao estudar as profecias sobre tempos difíceis, a ênfase principal deve ser:",
    "opcoes": [
      "No desespero e medo.",
      "Apenas nos aspectos sombrios da profecia.",
      "Na esperança do livramento divino e no triunfo final do bem.",
      "Na compreensão das consequências do pecado."
    ],
    "respostaCorreta": "Na esperança do livramento divino e no triunfo final do bem."
  },
  {
    "day": "Quinta-feira",
    "pergunta": "A preparação de Ester para interceder (jejum e oração) simboliza:",
    "opcoes": [
      "A necessidade de se esconder do perigo.",
      "A busca por poder pessoal.",
      "O tempo de angústia de Jacó, quando os santos clamarão dia e noite, e a necessidade de confiança em Deus diante da adversidade.",
      "Um ritual sem significado prático."
    ],
    "respostaCorreta": "O tempo de angústia de Jacó, quando os santos clamarão dia e noite, e a necessidade de confiança em Deus diante da adversidade."
  },
  {
    "day": "Quinta-feira",
    "pergunta": "Como a atitude de Ester de 'posicionamento' reflete um princípio para o povo de Deus no tempo do fim?",
    "opcoes": [
      "Devemos evitar confrontos a todo custo.",
      "Devemos estar dispostos a testemunhar e agir, mesmo que isso nos coloque em risco ou exija sacrifícios.",
      "Apenas os líderes devem se posicionar.",
      "Ação não é necessária se Deus está no controle."
    ],
    "respostaCorreta": "Devemos estar dispostos a testemunhar e agir, mesmo que isso nos coloque em risco ou exija sacrifícios."
  },
  {
    "day": "Quinta-feira",
    "pergunta": "Qual a principal lição sobre a intervenção divina, ao se observar que o nome de Deus não é explicitamente mencionado no livro de Ester?",
    "opcoes": [
      "Deus Se afastou do povo de Israel.",
      "Deus opera nos bastidores da história, agindo mesmo quando não é visivelmente reconhecido.",
      "A história é apenas uma ficção.",
      "O povo não tinha fé suficiente para invocar o nome de Deus."
    ],
    "respostaCorreta": "Deus opera nos bastidores da história, agindo mesmo quando não é visivelmente reconhecido."
  },
  {
    "day": "Quinta-feira",
    "pergunta": "A glória dada a Mordecai e aos judeus após a reversão do decreto simboliza:",
    "opcoes": [
      "A recompensa por sua beleza.",
      "O reconhecimento humano.",
      "A vindicação do caráter de Deus e de Seu povo fiel diante do universo.",
      "Um final feliz sem significado espiritual."
    ],
    "respostaCorreta": "A vindicação do caráter de Deus e de Seu povo fiel diante do universo."
  },
  {
    "day": "Sexta-feira",
    "pergunta": "Qual é a principal estratégia de Satanás nos últimos dias, segundo as fontes, que será semelhante ao plano de Hamã?",
    "opcoes": [
      "Exterminar os animais.",
      "Incitar a indignação contra a minoria que recusa aceitar costumes e tradições populares, buscando destruir sua fé através de leis opressivas (como as leis dominicais).",
      "Promover a união de todas as religiões.",
      "Desencorajar a oração e o estudo da Bíblia."
    ],
    "respostaCorreta": "Incitar a indignação contra a minoria que recusa aceitar costumes e tradições populares, buscando destruir sua fé através de leis opressivas (como as leis dominicais)."
  },
  {
    "day": "Sexta-feira",
    "pergunta": "A lição finaliza enfatizando que, apesar dos problemas decorrentes do pecado, o desfecho para o cristão será:",
    "opcoes": [
      "Incerto e imprevisível.",
      "Cheio de mais sofrimento.",
      "Feliz e certo, com a vitória final do evangelho e a adoração de todos os povos a Deus.",
      "Dependente apenas dos esforços humanos."
    ],
    "respostaCorreta": "Feliz e certo, com a vitória final do evangelho e a adoração de todos os povos a Deus."
  },
  {
    "day": "Sexta-feira",
    "pergunta": "Como as histórias de Rute e Ester indicam que Deus cumprirá Sua vontade, mesmo em tempos difíceis?",
    "opcoes": [
      "Através da intervenção de anjos visíveis.",
      "Através da força militar.",
      "Confirmando que 'Meu conselho será firme, e farei toda a Minha vontade'.",
      "Confiando que o povo se salvará sozinho."
    ],
    "respostaCorreta": "Confirmando que 'Meu conselho será firme, e farei toda a Minha vontade'."
  },
  {
    "day": "Sexta-feira",
    "pergunta": "A persistente recusa de uma minoria em ceder à exigência popular, especialmente em relação ao sábado, fará com que essa minoria se torne alvo de:",
    "opcoes": [
      "Apoio e reconhecimento.",
      "Proteção governamental.",
      "Ódio universal e perseguição.",
      "Isenção de leis opressivas."
    ],
    "respostaCorreta": "Ódio universal e perseguição."
  },
  {
    "day": "Sexta-feira",
    "pergunta": "A quem se refere a citação de Ellen G. White que diz: 'O decreto que será finalmente expedido contra o remanescente povo de Deus será muito semelhante ao que foi emitido por Assuero contra os judeus'?",
    "opcoes": [
      "Aos protestantes.",
      "Aos católicos.",
      "Ao povo fiel no fim dos tempos.",
      "Aos governantes."
    ],
    "respostaCorreta": "Ao povo fiel no fim dos tempos."
  },
  {
    "day": "Sexta-feira",
    "pergunta": "Qual é a principal lição que o 'Poder do Testemunho Pessoal' traz, conforme as histórias de Rute e Ester?",
    "opcoes": [
      "Que as pessoas só se convertem através de milagres.",
      "Que apenas líderes religiosos podem influenciar outros.",
      "Que a vida fiel e as ações bondosas dos crentes podem impactar profundamente outros, levando-os a buscar e aceitar o Deus verdadeiro.",
      "Que o testemunho é apenas verbal, não prático."
    ],
    "respostaCorreta": "Que a vida fiel e as ações bondosas dos crentes podem impactar profundamente outros, levando-os a buscar e aceitar o Deus verdadeiro."
  },
  {
    "day": "Sexta-feira",
    "pergunta": "A lição final enfatiza a importância de se concentrar na esperança. Qual é a principal base dessa esperança?",
    "opcoes": [
      "A capacidade humana de superar desafios.",
      "O apoio de governantes e líderes.",
      "O livramento divino e o triunfo final do bem, apesar das dificuldades profetizadas.",
      "O conhecimento detalhado de todas as profecias."
    ],
    "respostaCorreta": "O livramento divino e o triunfo final do bem, apesar das dificuldades profetizadas."
  },
  {
    "day": "Sexta-feira",
    "pergunta": "Em relação à 'Importância do Relacionamento com Deus', qual é a prática essencial para a jornada de fé do crente?",
    "opcoes": [
      "Participar de muitos eventos sociais.",
      "Acumular riqueza e poder.",
      "Aprofundar o relacionamento com Deus por meio da oração e do estudo de Sua Palavra.",
      "Conhecer todas as doutrinas religiosas."
    ],
    "respostaCorreta": "Aprofundar o relacionamento com Deus por meio da oração e do estudo de Sua Palavra."
  },
  {
    "day": "Sexta-feira",
    "pergunta": "Qual a principal mensagem que as histórias de Rute e Ester, como parábolas proféticas, buscam iluminar?",
    "opcoes": [
      "Apenas a história do antigo Israel.",
      "A complexidade das relações familiares.",
      "O plano de salvação de Deus, a luta contra o mal e o papel da igreja no tempo do fim.",
      "A importância da beleza e da riqueza."
    ],
    "respostaCorreta": "O plano de salvação de Deus, a luta contra o mal e o papel da igreja no tempo do fim."
  },
  {
    "day": "Sexta-feira",
    "pergunta": "A lição sobre Rute e Ester convida à:",
    "opcoes": [
      "Preocupação excessiva com o futuro.",
      "Passividade diante da adversidade.",
      "Esperança e confiança no plano de Deus, mesmo em tempos difíceis.",
      "Dúvida e incerteza sobre a providência divina."
    ],
    "respostaCorreta": "Esperança e confiança no plano de Deus, mesmo em tempos difíceis."
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
