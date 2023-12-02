import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const filmes = [
  {
    nome: 'O Senhor do Aneis: A Sociedade do Anel',
    lancamento: 2002,
		oscar: true,
    diretores: ['Peter Jackson'],
    generos: ['Fantasia', 'Aventura'],
  },
  {
    nome: 'Harry Potter e a Pedra Filosofal',
    lancamento: 2001,
		oscar: true,
    diretores: ['Chris Columbus'],
    generos: ['Fantasia'],
  },
  {
    nome: 'Matrix',
		oscar: true,
    lancamento: 1999,
    diretores: ['Lana Wachowski', 'Lilly Wachowski'],
    generos: ['Ação', 'Ficção Cientifica'],
  },
	{
    nome: 'Meninas Malvadas',
    oscar: false,
    lancamento: 2004,
    diretores: ['Mark Waters'],
    generos: ['Comédia'],
  }
];

function Filme (props) {
  console.log(props)
  const nome = props.nome;
  const ano = props.ano;

  return(<p>
    <span>{ano} - </span>
    <span>{nome}</span>
  </p>)
  }

function App() {
  
  const [oscar, setOscar] = useState(true);

  const filmesFiltrados = filmes.filter(filme => filme.oscar === oscar);

  const gerarEstiloBotao = (botao) => {
    if(botao === 'ganhador') {
      return {
        backgroundColor: oscar ? 'blue' : 'gray',
        color: oscar ? 'white' : 'black'
      };
    }
    if(botao === 'perdedor') {
    return {
      backgroundColor: oscar ? 'gray' : 'blue',
      color: oscar ? 'black' : 'white'
    };
   }
  }

  const handleOnClickGanhador = () => {
    setOscar(true);

  }

  const handleOnClickPerdedor = () => {
    setOscar(false);
  }



  return (
    <>
      <h1>Oscar</h1>

      <div>
        <button onClick={handleOnClickGanhador} style = {gerarEstiloBotao('ganhador')}>Ganhadores</button>

        <button onClick ={handleOnClickPerdedor} style = {gerarEstiloBotao('perdedor')}>Perdedores</button>

      </div>
      {
        filmesFiltrados.map(filme => <Filme nome= {filme.nome} ano = {filme.lancamento}/>)
      }
    </>
  )
}

export default App
