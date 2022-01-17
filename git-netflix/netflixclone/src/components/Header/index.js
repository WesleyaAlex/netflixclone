import './styles.css';

function Header({ fundoPreto }) {

    return (
        <header className={fundoPreto ? 'fundo-preto' : ''}>
            <div className='header-logo-menu'>
                <div className='logo'>
                    <a href='/'>
                        <img src='https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png' alt='logo' />
                    </a>
                </div>

                <nav>
                    <a href='/'>Início</a>
                    <a href='/'>Séries</a>
                    <a href='/'>Filmes</a>
                    <a href='/'>Bombando</a>
                    <a href='/'>Minha lista</a>
                    <a href='/'>Navegar por idiomas</a>
                </nav>

                <div className='div-menu-mobile'>
                    <a>Navegar</a><span className='teste'></span>
                </div>
            </div>

            <div className='header-usuario'>
                <nav>
                    <a href='/' className='pesquisa'>
                        <img src='https://watch.yourgamecam.com/img/nav/magnifying_glass_icon.png' />
                    </a>
                    <a href='/' className='nav-infantil'>Infantil</a>
                    <a href='/' className='img-notificacao'><img src={require('../../assets/images/notificacao.png')} /></a>
                    <a href='/'><img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='usuário' /></a>
                </nav>
            </div>
        </header>
    );
}

export default Header;