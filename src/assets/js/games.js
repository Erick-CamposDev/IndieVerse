//prettier-ignore
class Game{
    constructor(name, type, logo, character, backgroud, dataLaunch, steamUrl, creatorLogo,
        description, history, gameplayDesc, gameplayElements, awardsDesc, awards,
        legacy, title, curiosities, platforms){
            this.name = name
            this.type = type
            this.logo = logo
            this.character = character
            this.backgroud = backgroud
            this.data = dataLaunch
            this.url = steamUrl
            this.creatorLogo = creatorLogo
            this. description = description
            this.history = history
            this.gameplayDesc = gameplayDesc
            this.gameplayElements = gameplayElements
            this.awardsDesc = awardsDesc
            this.awards = awards
            this.legacy = legacy
            this.curiositiesTitle = title
            this.curiosities = curiosities
            this.platforms = platforms
        }
}

const hollowKnight = new Game(
  "Hollow Knight",
  "Metroidvania / Ação e Aventura / Plataforma 2D",
  "src/assets/imgs/logos/Hollow Knight logo.webp",
  "src/assets/imgs/character/The_knight.webp",
  "src/assets/imgs/charcter/HollowKnight3.avif",
  "24 de fevereiro de 2017",
  "https://store.steampowered.com/app/367520/Hollow_Knight/",
  "src/assets/imgs/team-cherry-logo.png",
  "Hollow Knight é um jogo de ação e aventura no estilo Metroidvania,desenvolvido pela Team Cherry. Ele se passa em Hallownest, um vasto reino subterrâneo em ruínas, habitado por insetos e criaturas misteriosas. O jogador controla um cavaleiro silencioso que explora esse mundo interconectado, enfrentando inimigos desafiadores, chefes intensos e descobrindo segredos ocultos enquanto adquire novas habilidades que permitem acessar novas áreas",
  "Em Hollow Knight, você controla um pequeno guerreiro silencioso que chega ao Reino de Hallownest, um vasto mundo subterrâneo que está em ruínas. Esse reino foi, há muito tempo, uma civilização próspera de insetos inteligentes, mas acabou sendo destruído por uma infecção misteriosa que enlouquece os habitantes. Explorando cavernas, cidades abandonadas e templos antigos, o Cavaleiro busca entender o que aconteceu com Hallownest e qual é o seu papel nesse destino trágico. Ao longo da jornada, ele descobre segredos sobre o Rei Pálido, o Vazio, e sobre outros seres criados para conter a infecção — incluindo ele mesmo.",
  "Hollow Knight é um metroidvania 2D focado em exploração, combate e progressão por habilidades. O jogador controla um pequeno cavaleiro em um vasto e interconectado reino subterrâneo chamado Hallownest, repleto de segredos, inimigos e chefes desafiadores. A movimentação é fluida e precisa, combinando plataformas com batalhas corpo a corpo utilizando um prego (arma principal do protagonista). Conforme o jogador avança, novas habilidades — como o Dash, o Wall Jump e o Double Jump — permitem acessar áreas antes inacessíveis, incentivando a exploração constante do mapa. Além do combate direto, o jogo conta com um sistema de Charms (Amuletos) que personalizam o estilo de jogo, oferecendo vantagens como cura mais rápida, aumento de dano ou melhorias na mobilidade. Os inimigos possuem padrões de ataque variados, exigindo atenção e estratégia. A dificuldade é desafiadora, mas justa, recompensando a paciência e a habilidade do jogador. O progresso é salvo em bancos e bancos de descanso (Benches), e ao morrer, o jogador precisa retornar ao local da morte para recuperar sua Shade (sombra) e os Geo (moeda do jogo).",
  [
    "- Exploração não linear com múltiplos caminhos.",
    "- Sistema de progressão por habilidades que desbloqueiam novas áreas.",
    "- Combates desafiadores contra inimigos e chefes únicos.",
    "- Personalização com Charms para adaptar o estilo de luta.",
    "- Atmosfera imersiva, com trilha sonora e ambientação que reforçam o sentimento de solidão e descoberta.",
  ],
  "Desde seu lançamento, Hollow Knight recebeu diversos prêmios e indicações por sua direção artística, trilha sonora e design de jogo, consolidando-se como um dos melhores jogos independentes de todos os tempos.",
  [
    "🏅 Melhor Jogo Independente - Australian Game Developer Awards (2017)",
    "🏅 Excelência em Arte Visual - Indie Prize Europe (2017)",
    "🏅 Melhor Jogo de Aventura/Plataforma - IGN Australia Select Awards (2017)",
    "🏅 Indicado a Melhor Jogo Independente - Game Awards (2017)",
    "🏅 Vencedor do “Player's Choice” - Steam Awards (2018)",
    "💬 Amplamente listado em rankings de “Melhores Jogos Indie da Década” por sites como PC Gamer, GameSpot e Metacritic.",
  ],
  "Mesmo anos após o lançamento, Hollow Knight continua sendo referência em design e atmosfera dentro do gênero metroidvania, inspirando inúmeros títulos independentes. Seu sucesso também impulsionou o desenvolvimento de sua aguardada sequência, Hollow Knight: Silksong.",
  [
    "🐞 Inspirado em insetos:",
    "🎨 Arte feita à mão:",
    "🎵 Trilha sonora marcante:",
    "💀 Morte com consequência:",
    "⏱️ Desenvolvido por uma pequena equipe:",
    "🕳️ Final alternativo:",
    "🔥 Versão de estreia no Kickstarter:",
  ],
  [
    "Quase todos os personagens e inimigos do jogo são baseados em insetos ou criaturas pequenas, o que combina com o tema do reino subterrâneo de Hallownest.",
    "Toda a arte de Hollow Knight foi desenhada à mão pelo artista Ari Gibson, um dos fundadores da Team Cherry, o que dá ao jogo seu visual único e artesanal.",
    "A música foi composta por Christopher Larkin, e é amplamente elogiada por criar emoção e imersão — especialmente em áreas como City of Tears e Greenpath.",
    "Quando o jogador morre, ele deixa para trás sua Shade (sombra), que guarda o dinheiro (Geo) e parte da alma — uma ideia inspirada em Dark Souls.",
    "Hollow Knight foi criado por apenas três pessoas principais, e mesmo assim entregou um dos jogos indies mais elogiados da geração.",
    "O jogo possui vários finais, que variam de acordo com as ações do jogador e os chefes derrotados — incentivando múltiplas jogatinas.",
    "O projeto começou como uma campanha no Kickstarter em 2014, arrecadando cerca de US$ 57 mil, valor relativamente baixo para a grandiosidade do resultado final.",
  ],
  [
    "src/assets/imgs/game-platforms/Steam-logo.png, src/assets/imgs/game-platforms/Playstation logo.png, src/assets/imgs/game-platforms/xbox-logo.png, src/assets/imgs/game-platforms/nintendo-switch-logo.png",
  ]
);

const undertale = new Game(
  "Undertale",
  "RPG / Indie / Aventura",
  "src/assets/imgs/logos/Undertale-Logo.png",
  "src/assets/imgs/character/Frisk.png",
  "src/assets/imgs/background-imgs/caste-img-undertale.png",
  "15 de setembro de 2015",
  "https://store.steampowered.com/app/391540/Undertale/",
  "src/assets/imgs/creator-img/toby-fox.webp",
  "Undertale é um RPG inovador criado por Toby Fox, onde suas escolhas realmente importam. O jogo se passa em um mundo subterrâneo habitado por monstros, e você pode escolher poupar ou derrotar seus inimigos, influenciando profundamente a narrativa.",
  "A história acompanha uma criança humana que cai em um mundo subterrâneo habitado por monstros, isolado da superfície por uma barreira mágica. No início, a criança é acolhida por Toriel, uma criatura gentil que tenta protegê-la, mas logo precisa seguir sozinha em busca de uma saída. Durante essa jornada, o jogador conhece figuras cativantes como Sans, Papyrus, Undyne, Alphys, Mettaton e Asgore, cada um com sua própria história e motivações. Dependendo das escolhas do jogador, o enredo muda completamente, explorando temas como empatia, perdão e as consequências das ações. Undertale se destaca por quebrar a quarta parede e fazer o jogador refletir sobre suas decisões, transformando uma simples aventura em uma experiência emocional e memorável.",
  "Undertale é um jogo de RPG que combina elementos clássicos com mecânicas únicas de combate, onde o jogador pode escolher entre lutar ou poupar os inimigos. Durante as batalhas, o jogador controla um coração que representa sua alma e precisa desviar de ataques em um sistema que lembra jogos de tiro com muitos projéteis. Cada decisão influencia diretamente o rumo da história e o comportamento dos personagens, permitindo diferentes rotas, como a pacifista, onde ninguém é morto; a neutra, que mistura combate e misericórdia; e a genocida, onde todos os inimigos são eliminados. Além dos combates, o jogo apresenta diálogos cheios de humor, quebra-cabeças e interações marcantes com os personagens do subsolo.",
  [
    "- Sistema de combate inovador com opção de poupar inimigos.",
    "- Narrativa ramificada com múltiplos finais.",
    "- Personagens carismáticos e memoráveis.",
    "- Trilha sonora composta por Toby Fox.",
    "- Humor e emoção em equilíbrio perfeito.",
  ],
  "Undertale foi aclamado pela crítica e pelo público, recebendo prêmios por sua originalidade, trilha sonora e narrativa.",
  [
    "🏅 Melhor Jogo Independente - The Game Awards (2015)",
    "🏅 Excelência em Narrativa - SXSW Gaming Awards (2016)",
    "🏅 Indicado a Melhor Trilha Sonora - BAFTA Games Awards (2016)",
  ],
  "Undertale tornou-se um fenômeno cultural, influenciando diversos jogos indie e criando uma base de fãs apaixonada. Sua abordagem inovadora de narrativa e moralidade é referência até hoje.",
  [
    "🐶 Desenvolvido quase inteiramente por Toby Fox.",
    "💀 Trilha sonora viral, com músicas como 'Megalovania'.",
    "💬 Quebra da quarta parede frequente.",
    "🕹️ Referências a RPGs clássicos.",
    "👾 Final Pacifista, Neutro e Genocida.",
  ],
  [
    "Toby Fox criou quase todo o jogo sozinho, incluindo arte, música e programação.",
    "A música 'Megalovania' tornou-se um meme e é reconhecida mundialmente.",
    "O jogo frequentemente brinca com as expectativas do jogador, quebrando a quarta parede.",
    "Há diversas referências a EarthBound e outros RPGs clássicos.",
    "O final muda drasticamente dependendo de suas escolhas durante o jogo.",
  ],
  [
    "src/assets/imgs/game-platforms/Steam-logo.png, src/assets/imgs/game-platforms/Playstation logo.png, src/assets/imgs/game-platforms/nintendo-switch-logo.png",
  ]
);

const deltarune = new Game(
  "Deltarune",
  "RPG / Indie / Aventura",
  "src/assets/imgs/logos/Deltarune-bg.jpg",
  "src/assets/imgs/character/kris-deltarune-webp",
  "src/assets/imgs/background-imgs/deltarune-bg.jpg",
  "31 de outubro de 2018",
  "https://store.steampowered.com/app/1671210/DELTARUNE/",
  "src/assets/imgs/creator-img/toby-fox.webp",
  "Deltarune é o sucessor espiritual de Undertale, também criado por Toby Fox. O jogo apresenta um novo elenco de personagens e um sistema de combate aprimorado, mantendo o humor e a criatividade do original.",
  "O jogador assume o controle de Kris, um humano que vive em uma cidade habitada por monstros. Após um evento misterioso na escola, Kris e sua colega Susie caem em um mundo alternativo conhecido como Mundo das Trevas, onde encontram Ralsei, um príncipe que acredita que eles são heróis destinados a restaurar o equilíbrio entre a luz e a escuridão. A jornada do trio envolve enfrentar inimigos, resolver enigmas e formar laços de amizade enquanto tentam cumprir essa missão.",
  "A jogabilidade mantém o sistema de batalhas por turnos com a opção de lutar ou poupar os oponentes, mas agora em um formato de grupo, com cada personagem possuindo habilidades próprias. Durante os combates, o jogador também precisa desviar de ataques controlando um pequeno coração, e as escolhas de diálogo e ação influenciam a forma como os personagens reagem e se relacionam. Assim como em Undertale, Deltarune mistura momentos de humor e emoção, mas com uma narrativa mais linear e cinematográfica, focando no desenvolvimento dos personagens e nas relações entre eles. O jogo apresenta um tom mais misterioso e simbólico, deixando diversas perguntas em aberto sobre o passado e o destino de Kris, e promete expandir sua história em capítulos futuros.",
  [
    "- Sistema de combate aprimorado com mecânicas de defesa.",
    "- Novos personagens e mundo expandido.",
    "- Narrativa misteriosa e cheia de reviravoltas.",
    "- Trilha sonora envolvente.",
    "- Humor característico de Toby Fox.",
  ],
  "Deltarune foi elogiado por sua narrativa, personagens e trilha sonora, mantendo o alto padrão de Undertale.",
  [
    "🏅 Indicado a Melhor Jogo Independente - Golden Joystick Awards (2019)",
    "🏅 Destaque em trilha sonora - Vários sites especializados",
  ],
  "Deltarune continua a expandir o universo de Undertale, com novos capítulos aguardados ansiosamente pela comunidade.",
  [
    "🌑 Capítulos lançados gratuitamente.",
    "🎹 Trilha sonora composta por Toby Fox.",
    "🦊 Referências e conexões com Undertale.",
    "👥 Novos personagens carismáticos.",
    "🕹️ Sistema de combate renovado.",
  ],
  [
    "Os capítulos de Deltarune são lançados gratuitamente até o capítulo 2 após isso o restante será pago.",
    "A trilha sonora mantém o padrão de qualidade de Undertale.",
    "Há diversas teorias sobre a ligação entre Deltarune e Undertale.",
    "Personagens como Ralsei, Susie e Lancer conquistaram rapidamente os fãs.",
    "O sistema de combate agora inclui defesa ativa, tornando as batalhas mais dinâmicas.",
  ],
  [
    "src/assets/imgs/game-platforms/Steam-logo.png, src/assets/imgs/game-platforms/Playstation logo.png, src/assets/imgs/game-platforms/nintendo-switch-logo.png",
  ]
);

const silksong = new Game(
  "Hollow Knight: Silksong",
  "Metroidvania / Ação e Aventura / Plataforma 2D",
  "src/assets/imgs/logos/hk-silskong-logo.webp",
  "src/assets/imgs/character/hornet-hk-silksong.webp",
  "src/assets/imgs/background-imgs/silksong-bg.jpg",
  "4 de setembro de 2025",
  "https://store.steampowered.com/app/1030300/Hollow_Knight_Silksong/",
  "src/assets/imgs/team-cherry-logo.png",
  "Hollow Knight: Silksong é a sequência de Hollow Knight, desenvolvida pela Team Cherry. Desta vez, você controla Hornet, explorando um novo reino chamado Fiarlongo repleto de desafios, segredos e inimigos inéditos.",
  "Em Silksong, o jogador assume o controle de Hornet, a princesa protetora de Hallownest, que foi capturada e levada para o misterioso reino de Pharloom. Este novo mundo é descrito como 'assombrado por seda e música', oferecendo uma atmosfera única e repleta de segredos. Hornet deve enfrentar desafios e inimigos enquanto busca entender os motivos de sua captura e desvendar os mistérios que permeiam Fiarlongo.",
  "A jogabilidade de Silksong expande e refina os elementos do primeiro jogo. Hornet é mais ágil e versátil, equipada com uma agulha e linha que lhe conferem habilidades de combate e movimentação aprimoradas. O jogo apresenta mais de 165 inimigos diferentes, além de diversos NPCs que enriquecem a experiência. A exploração é incentivada por meio de um sistema de missões que recompensa o jogador com upgrades e habilidades adicionais. A dinâmica de combate é mais rápida e fluida, com Hornet podendo realizar ataques à distância e combos, proporcionando uma experiência mais intensa e estratégica.",
  [
    "- Nova protagonista com habilidades únicas.",
    "- Mundo totalmente novo para explorar.",
    "- Missões secundárias e NPCs inéditos.",
    "- Combate mais rápido e acrobático.",
    "- Trilha sonora original de Christopher Larkin.",
  ],
  "Silksong foi um dos jogos mais aguardados do ano de 2025 e recebeu destaque em eventos e premiações mesmo antes do lançamento.",
  [
    "🏅 Destaque em eventos como E3 e Nintendo Direct.",
    "🏅 Altamente aguardado pela comunidade gamer.",
    "🏅 Indicado a prêmios de jogo mais esperado.",
  ],
  "Silksong elevou ainda mais o padrão de qualidade estabelecido por Hollow Knight, com novidades em gameplay, arte e trilha sonor além de mais de 40 chefes diferentes para o jogador enfrentar em seu jogo.",
  [
    "🕷️ Protagonista Hornet, com jogabilidade diferente do Cavaleiro.",
    "🌎 Novo reino vertical, com mapas maiores.",
    "🎶 Trilha sonora novamente por Christopher Larkin.",
    "🦋 Mais de 150 novos inimigos.",
    "🗺️ Sistema de missões e NPCs aprimorado.",
  ],
  [
    "Hornet é mais ágil e possui habilidades de seda exclusivas.",
    "O mundo de Silksong é mais vertical e expansivo.",
    "A trilha sonora é composta pelo mesmo artista de Hollow Knight.",
    "O jogo terá um sistema de missões secundárias mais robusto.",
    "Mais de 150 novos inimigos prometem variedade e desafio.",
  ],
  [
    "src/assets/imgs/game-platforms/Steam-logo.png, src/assets/imgs/game-platforms/Playstation logo.png, src/assets/imgs/game-platforms/xbox-logo.png, src/assets/imgs/game-platforms/nintendo-switch-logo.png",
  ]
);

const celeste = new Game(
  "Celeste",
  "Plataforma / Indie / Aventura",
  "src/assets/imgs/logos/Celeste-logo.png",
  "src/assets/imgs/character/madeline-celeste.png",
  "src/assets/imgs/background-imgs/celeste-bg.avif",
  "25 de janeiro de 2018",
  "https://store.steampowered.com/app/504230/Celeste/",
  "src/assets/imgs/creator-img/maddy-makes-games.png",
  "Celeste é um jogo de plataforma desafiador sobre escalar a Montanha Celeste. Você controla Madeline em sua jornada de autodescoberta, enfrentando desafios físicos e emocionais em fases criativas e difíceis.",
  "Celeste tem como história a jornada de Madeline, uma jovem que decide escalar a montanha Celeste. Mais do que apenas enfrentar desafios físicos, ela precisa lidar com seus próprios medos, ansiedade e inseguranças. Durante a escalada, Madeline encontra uma versão sombria de si mesma, que representa suas dúvidas internas e momentos de fraqueza, sendo necessário confrontar essa parte de si para avançar. O jogo aborda temas como superação pessoal, saúde mental e autoaceitação, criando uma narrativa emocionalmente envolvente que conecta o jogador com a personagem.",
  "Na jogabilidade, Celeste é um jogo de plataforma 2D focado em precisão e timing. O jogador precisa dominar saltos, dashes rápidos e escaladas estratégicas para superar obstáculos desafiadores. Cada fase é desenhada para testar reflexos e paciência, mas checkpoints frequentes garantem que o progresso não se torne frustrante. Além disso, há coletáveis opcionais, como morangos, que oferecem desafios extras e recompensas para jogadores mais habilidosos. O design das fases combina dificuldade justa com sensação de conquista ao completar cada trecho.",
  [
    "- Plataforma precisa e desafiadora.",
    "- Narrativa emocional e envolvente.",
    "- Fases secretas e colecionáveis.",
    "- Trilha sonora premiada.",
    "- Acessibilidade com modos de assistência.",
  ],
  "Celeste foi amplamente premiado por sua jogabilidade, narrativa e trilha sonora.",
  [
    "🏅 Melhor Jogo Independente - The Game Awards (2018)",
    "🏅 Excelência em Jogabilidade - SXSW Gaming Awards (2018)",
    "🏅 Indicado a Jogo do Ano - The Game Awards (2018)",
  ],
  "Celeste é referência em acessibilidade e narrativa em jogos de plataforma, sendo celebrado por jogadores e crítica.",
  [
    "⛰️ Desenvolvido por uma pequena equipe.",
    "🎶 Trilha sonora de Lena Raine.",
    "🧠 Aborda temas de saúde mental.",
    "🕹️ Modos de assistência para acessibilidade.",
    "🏆 Desafios extras para jogadores hardcore.",
  ],
  [
    "O jogo foi criado por Maddy Makes Games, com uma equipe reduzida.",
    "A trilha sonora é elogiada e composta por Lena Raine.",
    "Celeste aborda temas como ansiedade e autossuperação.",
    "Possui modos de assistência para tornar o jogo acessível.",
    "Há desafios extras para quem busca mais dificuldade.",
  ],
  [
    "src/assets/imgs/game-platforms/Steam-logo.png, src/assets/imgs/game-platforms/Playstation logo.png, src/assets/imgs/game-platforms/xbox-logo.png, src/assets/imgs/game-platforms/nintendo-switch-logo.png",
  ]
);

const cuphead = new Game(
  "Cuphead",
  "Run and Gun / Plataforma / Indie",
  "src/assets/imgs/logos/cuphead-logo.png",
  "src/assets/imgs/character/Cuphead.webp",
  "src/assets/imgs/background-imgs/cuphead-bg.avif",
  "29 de setembro de 2017",
  "https://store.steampowered.com/app/268910/Cuphead/",
  "src/assets/imgs/creator-img/StudioMDHR.webp",
  "Cuphead é um jogo de ação inspirado em desenhos animados dos anos 1930. Com visual e trilha sonora retrô, o jogo é conhecido por sua dificuldade elevada e batalhas contra chefes criativos.",
  "Cuphead apresenta uma história simples, mas cativante: os irmãos Cuphead e Mugman perdem uma aposta com o Diabo e precisam coletar as almas de outros devedores para salvar suas próprias vidas. A narrativa é reforçada pelo estilo visual único do jogo, inspirado em desenhos animados dos anos 1930, e pela trilha sonora de jazz, que dão personalidade e charme ao universo do jogo, tornando cada fase memorável mesmo que a história seja direta.",
  "Quanto à jogabilidade, Cuphead combina fases de plataforma com batalhas intensas contra chefes. O jogo exige reflexos rápidos e memorização de padrões, pois cada inimigo possui ataques e comportamentos específicos. O combate envolve tiros, ataques especiais e esquivas, e as fases de plataforma exigem precisão para superar obstáculos e inimigos menores. O jogo é famoso por sua dificuldade elevada, mas cada vitória traz grande sensação de conquista, e o estilo artístico torna cada batalha visualmente impressionante.",
  [
    "- Visual e animação inspirados nos anos 1930.",
    "- Dificuldade elevada e recompensadora.",
    "- Batalhas contra chefes criativos.",
    "- Trilha sonora de jazz autêntica.",
    "- Modo cooperativo local.",
  ],
  "Cuphead foi premiado por sua direção de arte, animação e trilha sonora.",
  [
    "🏅 Melhor Direção de Arte - The Game Awards (2017)",
    "🏅 Excelência em Animação - Annie Awards (2018)",
    "🏅 Melhor Jogo Independente - BAFTA Games Awards (2018)",
  ],
  "Cuphead tornou-se referência em animação e design de chefes, sendo um dos jogos indie mais reconhecidos mundialmente.",
  [
    "🎬 Animação feita à mão, quadro a quadro.",
    "🎺 Trilha sonora gravada com banda ao vivo.",
    "👹 Chefes inspirados em desenhos clássicos.",
    "🕹️ Modo cooperativo para dois jogadores.",
    "🔥 Dificuldade notória, mas justa.",
  ],
  [
    "A animação foi feita quadro a quadro, como nos desenhos antigos.",
    "A trilha sonora foi gravada com uma banda de jazz ao vivo.",
    "Os chefes são inspirados em personagens de desenhos animados clássicos.",
    "O jogo pode ser jogado em modo cooperativo local.",
    "Cuphead é conhecido por sua dificuldade elevada, mas recompensadora.",
  ],
  [
    "src/assets/imgs/game-platforms/Steam-logo.png, src/assets/imgs/game-platforms/Playstation logo.png, src/assets/imgs/game-platforms/xbox-logo.png, src/assets/imgs/game-platforms/nintendo-switch-logo.png",
  ]
);

const shovelKnight = new Game(
  "Shovel Knight",
  "Plataforma / Ação / Indie",
  "src/assets/imgs/logos/shovel-knight-logo.png",
  "src/assets/imgs/character/shovel-knight.png",
  "src/assets/imgs/background-imgs/shovel-knight-background.jpg",
  "26 de junho de 2014",
  "https://store.steampowered.com/app/250760/Shovel_Knight_Treasure_Trove/",
  "src/assets/imgs/creator-img/Yacht_Club_Games.webp",
  "Shovel Knight é um jogo de plataforma retrô que homenageia clássicos dos anos 8 bits. Você controla o Cavaleiro da Pá, enfrentando inimigos e chefes em fases desafiadoras para salvar sua amada Shield Knight.",
  "Shovel Knight conta a história de um cavaleiro que usa uma pá como arma e embarca em uma missão para resgatar sua amada Shield Knight e derrotar a Orde das Enchantresses. A narrativa combina elementos de fantasia clássica, humor e homenagens aos jogos de 8 bits, criando um universo nostálgico, mas com personalidade própria e momentos cômicos que enriquecem a experiência do jogador.",
  "Na jogabilidade, Shovel Knight mistura plataforma 2D, exploração e combate. O jogador enfrenta inimigos usando a pá, descobre tesouros escondidos e enfrenta chefes com padrões distintos que exigem estratégia e atenção. O mapa do jogo permite progressão não-linear, com níveis e áreas que podem ser revisitados conforme novos itens ou habilidades são adquiridos. Além disso, o jogo combina desafios de plataforma clássicos com mecânicas de combate refinadas, tornando a experiência tanto acessível para iniciantes quanto satisfatória para jogadores que buscam desafios mais profundos.",
  [
    "- Visual retrô inspirado em 8 bits.",
    "- Fases e chefes desafiadores.",
    "- Trilha sonora nostálgica.",
    "- Expansões gratuitas com novos personagens.",
    "- Jogabilidade precisa e divertida.",
  ],
  "Shovel Knight foi aclamado por sua jogabilidade, arte e trilha sonora, recebendo diversos prêmios.",
  [
    "🏅 Melhor Jogo Independente - The Game Awards (2014)",
    "🏅 Excelência em Trilha Sonora - SXSW Gaming Awards (2015)",
    "🏅 Indicado a Melhor Jogo de Plataforma - BAFTA Games Awards (2015)",
  ],
  "Shovel Knight é um dos maiores sucessos indie, influenciando uma geração de jogos retrô modernos.",
  [
    "🛡️ Expansões gratuitas adicionam novos personagens e campanhas.",
    "🎶 Trilha sonora composta por Jake Kaufman.",
    "🕹️ Referências a clássicos dos anos 80.",
    "👾 Visual e animação fiéis ao estilo 8 bits.",
    "🏆 Premiado por jogabilidade e design.",
  ],
  [
    "O jogo recebeu várias expansões gratuitas, como Plague of Shadows e Specter of Torment.",
    "A trilha sonora é composta por Jake Kaufman, com participação de Manami Matsumae.",
    "Há diversas referências a jogos clássicos como Mega Man e Castlevania.",
    "O visual e animação são fiéis ao estilo 8 bits, mas com melhorias modernas.",
    "Shovel Knight é celebrado por sua jogabilidade precisa e divertida.",
  ],
  [
    "src/assets/imgs/game-platforms/Steam-logo.png, src/assets/imgs/game-platforms/Playstation logo.png, src/assets/imgs/game-platforms/xbox-logo.png, src/assets/imgs/game-platforms/nintendo-switch-logo.png",
  ]
);
