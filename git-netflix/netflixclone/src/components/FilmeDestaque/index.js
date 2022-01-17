import './styles.css';

function FilmeDestaque({ item }) {
    let description = item.overview

    if (description.length > 200) {
        description = description.substring(0, 200) + '...'
    }

    return (
        <section style={{ 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
            }}>
            <div className='linear-bottom'>
                <div className='linear-left'>
                    <div className='nome-destaque'>{item.original_name}</div>
                    <div className='descricao-destaque'>{description}</div>
                    <div className='botoes-destaque'>
                        <button className='assistir-destaque'>► Assistir</button>
                        <button className='informacoes-destaque'>+ Minha lista</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FilmeDestaque;