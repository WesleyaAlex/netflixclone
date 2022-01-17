import { useState } from 'react'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import './styles.css';

function ListaFilme({ titulo, itens }) {
    const [scrollX, setScrollX] = useState(0)

    const diminuirScroll = () => {
        let x = scrollX + Math.round(window.innerHeight / 2);

        if (x > 0) {
            x = 0;
        }

        setScrollX(x);
    }

    const aumentarScroll = () => {
        let x = scrollX - Math.round(window.innerWidth / 2)
        let larguraLista = itens.results.length * 150
        if ((window.innerWidth - larguraLista) > x) {
            x = (window.innerWidth - larguraLista) - 65
        }
        setScrollX(x)
    }

    return (
        <div className='linha-container'>
            <h2>{titulo}</h2>

            <div className='container-filmes'>
                <div className='navigate-before' onClick={diminuirScroll}>
                    <NavigateBeforeIcon style={{ fontSize: 50 }} />
                </div>
                
                <div className='area-lista'>
                    <div className='lista' style={{ marginLeft: scrollX, width: itens.results.length * 150 }}>
                        {itens.results.length > 0 && itens.results.map((filme, key) => (
                            <div className='item-lista' key={key}>
                                <img src={`https://image.tmdb.org/t/p/w300${filme.poster_path}`} alt={filme.original_title} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className='navigate-next' onClick={aumentarScroll}>
                    <NavigateNextIcon style={{ fontSize: 50 }} />
                </div>
            </div>
        </div>
    );
}

export default ListaFilme;