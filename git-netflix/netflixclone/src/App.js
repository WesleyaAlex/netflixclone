import Header from './components/Header';
import FilmeDestaque from './components/FilmeDestaque';
import ListaFilme from './components/ListaFilme';
import Api from './Api';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [filmes, setFilmes] = useState([])
  const [destaqueData, setDestaqueData] = useState(null)
  const [fundoPreto, setFundoPreto] = useState(false)

  useEffect(() => {
    async function filmes() {
      let lista = await Api.listaFilmes()
      setFilmes(lista)

      let originais = lista.filter(i => i.slug === "originals")
      let escolhaAleatorio = Math.floor(Math.random() * (originais[0].items.results.length - 1))
      let aleatorio = originais[0].items.results[escolhaAleatorio]
      let aleatorioInfo = await Api.informacoesFilme(aleatorio.id, 'tv')
      setDestaqueData(aleatorioInfo)
    }

    filmes()
  }, [])

  useEffect(() => {
    const eventoScroll = () => {
      if (window.scrollY > 10) {
        setFundoPreto(true)
      } else {
        setFundoPreto(false)
      }
    }
    
    window.addEventListener('scroll', eventoScroll)
    return () => {
      window.removeEventListener('scroll', eventoScroll)
    }
  }, [])

  return (
    <div className="container">
      <Header fundoPreto={fundoPreto} />

      {destaqueData &&
        <FilmeDestaque item={destaqueData} />
      }

      <section className='section-filmes'>
        {filmes.map((filme, key) => (
          <ListaFilme key={key} titulo={filme.title} itens={filme.items} />
        ))}
      </section>

      {filmes.length <= 0 && 
        <div className='loading'>
          <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt='Carregando' />
        </div>
      }
    </div>
  );
}

export default App;