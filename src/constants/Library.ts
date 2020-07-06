
const livroArteDoRomance = require('../assets/livro-a-arte-do-romance.png');
const livroConteAquiQueEuContoLa = require('../assets/livro-conte-aqui-que-eu-conto-la.png');
const livroCordelinho = require('../assets/livro-cordelinho.png');
const livroMeioAmbienteEEuComIsso = require('../assets/livro-meio-ambiente-e-eu-com-isso.png');
const livroNinaua = require('../assets/livro-ninaua.png');
const livroOutroProfessor = require('../assets/livro-outro-professor.png');
const livroWonderWomen = require('../assets/livroWonderWomen.png');

const colecaoSaudeFinanceira = require('../assets/saude-financeira.png');
const colecaoCulturaDigitalTecnologica = require('../assets/cultura-digital-e-tecnologia.png');
const colecaoHistoriasParaSeInspirar = require('../assets/historias-para-se-inspirar.png');
const colecaoRespeitarParaSerRespeitado = require('../assets/respeitar-e-ser-respeitado.png');
const colecaoCulturaPopular = require('../assets/cultura-popular.png');
const colecaoVerdesComoArvore = require('../assets/verdes-como-a-arvore.png');

const WonderManMp3 = require('../assets/wonder-women.mp3');

export const colections = [
  { id: '01', title: 'Saúde Financeira', img: colecaoSaudeFinanceira },
  { id: '02', title: 'Cultura Digital e Tecnológica', img: colecaoCulturaDigitalTecnologica },
  { id: '03', title: 'Histórias para se inspirar', img: colecaoHistoriasParaSeInspirar },
  { id: '04', title: 'Respeitar e ser respeitado', img: colecaoRespeitarParaSerRespeitado },
  { id: '05', title: 'Cultura Popular', img: colecaoCulturaPopular },
  { id: '06', title: 'Verdes como a Árvore', img: colecaoVerdesComoArvore },
];

export const categories = [
  { id: '01', starts: [1, 1, 1, 0, 0], autor: 'Everton Ferreira', offline: 0, audioBook: 1, title: 'Wonder Woman', img: livroWonderWomen },
  { id: '02', starts: [1, 1, 1, 0, 0], autor: 'Everton Ferreira', offline: 0, audioBook: 0, title: 'Conte aqui que eu canto lá', img: livroConteAquiQueEuContoLa },
  { id: '03', starts: [1, 1, 1, 0, 0], autor: 'Everton Ferreira', offline: 1, audioBook: 0, title: 'Cordelinho', img: livroCordelinho },
  { id: '04', starts: [1, 1, 1, 0, 0], autor: 'Everton Ferreira', offline: 0, audioBook: 1, title: 'Meio Ambiente e eu com isso', img: livroMeioAmbienteEEuComIsso },
  { id: '05', starts: [1, 1, 1, 0, 0], autor: 'Everton Ferreira', offline: 1, audioBook: 0, title: 'Ninaua', img: livroNinaua },
  { id: '06', starts: [1, 1, 1, 0, 0], autor: 'Everton Ferreira', offline: 0, audioBook: 0, title: 'Outro professor', img: livroOutroProfessor },
  { id: '07', starts: [1, 1, 1, 0, 0], autor: 'Everton Ferreira', offline: 0, audioBook: 1, title: 'A arte do romance', img: livroArteDoRomance },
];


export const audioBookPlaylist = [
	{
		title: 'Hamlet - Act I',
		author: 'William Shakespeare',
		source: 'Librivox',
		uri:WonderManMp3,
		imageSource: 'http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg'
	},
	{
		title: 'Hamlet - Act II',
		author: 'William Shakespeare',
		source: 'Librivox',
		uri:WonderManMp3,
		imageSource: 'http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg'
	},
	{
		title: 'Hamlet - Act III',
		author: 'William Shakespeare',
		source: 'Librivox',
		uri:WonderManMp3,
		imageSource: 'http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg'
	},
	{
		title: 'Hamlet - Act IV',
		author: 'William Shakespeare',
		source: 'Librivox',
		uri:WonderManMp3,
		imageSource: 'http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg'
	},
	{
		title: 'Hamlet - Act V',
		author: 'William Shakespeare',
		source: 'Librivox',
		uri:
			'https://ia600204.us.archive.org/11/items/hamlet_0911_librivox/hamlet_act5_shakespeare.mp3',
		imageSource: 'http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg'
	}
];