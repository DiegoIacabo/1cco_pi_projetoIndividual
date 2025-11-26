create database individual;
use individual;

create table plataforma (
	idPlataforma int primary key auto_increment,
    nome varchar(45)
);

create table tipoJogo (
	idTipoJogo int primary key auto_increment,
    nome varchar(45),
    descricao varchar(200)
);

create table usuario (
	idUsuario int primary key auto_increment,
    nome varchar(45),
    genero varchar(10),
    nascimento date,
    email varchar(45),
    senha varchar(45),
	fkPlataforma int,
    constraint fkPlataformaPreferida
		foreign key (fkPlataforma)
			references plataforma(idPlataforma),
	fkTipoJogo int,
    constraint fkTipoJogoFavorito
		foreign key (fkTipoJogo)
			references tipoJogo(idTipoJogo)
);

create table quiz (
	idQuiz int primary key auto_increment,
    nome varchar(45)
);

create table questao (
	idQuestao int primary key auto_increment,
    pergunta varchar (200),
    alternativaA varchar (45),
    alternativaB varchar (45),
    alternativaC varchar (45),
    alternativaD varchar (45),
    alternativaCorreta varchar (45),
    fkQuiz int,
    constraint fkQuizQuestao
		foreign key (fkQuiz)
			references quiz(idQuiz)
);

create table tentativa (
	idTentativa int,
    fkQuiz int,
    constraint fkQuizTentativa
		foreign key (fkQuiz)
			references quiz(idQuiz),
    fkUsuario int,
    constraint fkUsuarioTentativa
		foreign key (fkUsuario)
			references usuario(idUsuario),
	constraint pkComposta
		primary key (idTentativa, fkQuiz, fkUsuario)
);

insert into plataforma values
	(default, 'Celular'),
    (default, 'Computador'),
    (default, 'Console');
    
insert into tipoJogo values
	(default, 'Battle Royale', 'Muitos jogadores competem até restar apenas um vencedor, buscando recursos e sobrevivendo em uma área de jogo que se reduz ao longo da partida.'),
    (default, 'FPS', 'Jogos de tiro em primeira pessoa, focados em precisão, reflexos rápidos e combates intensos com armas variadas.'),
    (default, 'RPG', 'O jogador assume um personagem, evolui habilidades e toma decisões que influenciam a história e o mundo do jogo.'),
    (default, 'MOBA', 'Times competem em uma arena, cada jogador controlando um personagem único para destruir a base inimiga.'),
    (default, 'Survival', 'Jogador precisa sobreviver com poucos recursos, enfrentando ameaças, explorando o ambiente e gerenciando necessidades básicas.');
    
insert into quiz values
	(default, 'Quiz Geral');
    
insert into questao values
	(default, 'Qual foi o console mais vendido da história?', 'Xbox 360', 'PlayStation 2', 'Nintendo Switch', 'Atari 2600', 'alternativaB', 1),
	(default, 'Desde 2014, o The Game Awards elege o melhor jogo do ano (GOTY). Qual dos seguintes jogos NÃO ganhou esse prêmio?', 'Uncharted 4: A Thief`s End', 'The Last of Us Part II', 'It Takes Two', 'Astro Bot', 'alternativaA', 1),
	(default, 'Alguns jogos, por diversas razões, estão presentes em apenas uma plataforma. Escolha a opção que NÃO representa, originalmente, uma franquia exclusiva.', 'God of War', 'Forza Horizon', 'Zelda', 'Assassin`s Creed', 'alternativaD', 1),
	(default, 'O jogo League of Legends pertence a qual gênero?', 'FPS', 'Survival', 'RPG', 'MOBA', 'alternativaD', 1),
	(default, 'Assinale a alternativa que não se encaixa com as outras.', 'Rainbow Six Siege', 'Call of Duty: Warzone', 'Fortnite', 'PUBG', 'alternativaA', 1),
	(default, 'Escolha a opção do estúdio que NÃO desenvolve jogos mobile.', 'Supercell', 'Garena', 'Naughty Dog', 'King', 'alternativaC', 1);
