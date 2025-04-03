
import './App.css';
import Header from './componentes/cabecalho';
import CardProjeto from './componentes/cardProjeto';
import Contato from './componentes/contato';

function App() {
  return (
    <div className="App">
      <Header />
      <h2 className="title">LATEST <span>PROJECTS</span></h2>
      <div id="corpo">
        <CardProjeto
          projetoTitulo = 'Home Page Site W'
          projetoDescricao = 'Simples home page.'
          projetoDemoLink = 'https://ericlamounier.github.io/HomePageW/'
          projetoLink = 'https://github.com/EricLamounier/HomePageW'
          projetoImagemLink='https://raw.githubusercontent.com/EricLamounier/HomePageW/main/git/desktop.jpg'
          projetoImagemAlt = 'HomePageW'
        />
        <CardProjeto
          projetoTitulo = 'Calculadora'
          projetoDescricao = 'Calculadora Simples'
          projetoDemoLink = 'https://ericlamounier.github.io/Calculator/'
          projetoLink = 'https://github.com/EricLamounier/Calculator'
          projetoImagemLink='https://raw.githubusercontent.com/EricLamounier/Calculator/main/git/desktop1.jpg'
          projetoImagemAlt = 'Calculadora'
        />
        <CardProjeto
          projetoTitulo = 'Teste Automatizado NEO'
          projetoDescricao = 'Teste Automatizado para validação do sistema NEO da Realtec Solução em Gestão'
          projetoDemoLink = 'https://raw.githubusercontent.com/EricLamounier/AutomatizadoNeo/main/git/automatizadoneo.png'
          projetoLink = 'https://github.com/EricLamounier/AutomatizadoNeo'
          projetoImagemLink='https://raw.githubusercontent.com/EricLamounier/AutomatizadoNeo/main/git/automatizadoneo.png'
          projetoImagemAlt = 'Teste Automatizado NEO'
        />
        <CardProjeto
          projetoTitulo = 'Conversor de Números'
          projetoDescricao = 'Conversor de números decimais, binários, octais e hexadecimais.'
          projetoDemoLink = 'https://ericlamounier.github.io/Conversor/'
          projetoLink = 'https://github.com/EricLamounier/Conversor'
          projetoImagemLink='https://raw.githubusercontent.com/EricLamounier/Conversor/main/git/conversor_preview.jpg'
          projetoImagemAlt = 'Conversor'
        />        
        <CardProjeto
          projetoTitulo = 'Landind Page Site BlogR'
          projetoDescricao = 'Landing page básica site BlogR.'
          projetoDemoLink = 'https://ericlamounier.github.io/Landing-Page-BLOGR/'
          projetoLink = 'https://github.com/EricLamounier/Landing-Page-BLOGR'
          projetoImagemLink='https://raw.githubusercontent.com/EricLamounier/Landing-Page-BLOGR/main/git/imagePC1.jpg'
          projetoImagemAlt = 'Landing-Page-BLOGR'
        />
        <CardProjeto
          projetoTitulo = 'Tic-Tac-Toe (Jogo da Velha)'
          projetoDescricao = 'Jogo da velha aleatório simples.'
          projetoDemoLink = 'https://ericlamounier.github.io/Tic-Tac-Toe/'
          projetoLink = 'https://github.com/EricLamounier/Tic-Tac-Toe'
          projetoImagemLink='https://raw.githubusercontent.com/EricLamounier/Tic-Tac-Toe/main/images/preview/note.jpg'
          projetoImagemAlt = 'Tic-Tac-Toe (Jogo da Velha)'
        />
      </div>
      <Contato />
    </div>
  );
}

export default App;
