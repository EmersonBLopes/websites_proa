import './menu.css'

function Menu(){
    return(
        <div className="Menu">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#produtos">Produtos</a></li>
                    <li><a href="#servicos">Serviços</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
                <div className="social-icons">
                    <a href="#" class="btn-facebook"><i class="fa-brands fa-facebook"></i></a>
                    <a href="#" class="btn-twitter"><i class="fa-brands fa-twitter"></i></a>
                    <a href="#" class="btn-google"><i class="fa-brands fa-google"></i></a>
                </div>
            </div>
    );
}

export default Menu