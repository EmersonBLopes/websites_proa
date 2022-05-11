import logo from './../../logo.png';
import './header.css';
function Header(){
    return(
        <div className="Header">
            <h1 className="Logo"><a href="index.html" title="Loja de informática do Basilio"><img src={logo} alt=""/></a></h1>
            <form action="" method="post">
                <input type="Text" name="pesquisa" id="pesquisa" placeholder="Faça uma pesquisa"/>
                <button>
                    <i className='fa-solid fa-magnifying-glass'></i>
                </button>
            </form>
        </div>
    )
}

export default Header;