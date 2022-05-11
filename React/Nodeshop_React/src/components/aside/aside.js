import './aside.css';
function Aside() {
    return(
        <aside className='onde-estamos'>
            <h2>Onde estamos</h2>
            <p>Rua Tito, n° 54 - Vila Romana - São Paulo - SP</p>
            <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.1242819856625!2d-46.69399738461476!3d-23.528031966248378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef8775663b04f%3A0x923835e9005f8309!2sSenac%20Lapa%20Tito!5e0!3m2!1spt-BR!2sbr!4v1647286157904!5m2!1spt-BR!2sbr' style={{border:0}} allowfullscreen='' loading='lazy'></iframe>
            <h2>Contatos</h2>
            <ul>
                <li><i class="fa-solid fa-phone"></i>(11) 4002-8922</li>
                <li><i class="fa-brands fa-whatsapp"></i>(11) 1234-5678</li>
                <li><i class="fa-solid fa-at"></i>lopes@gmail.com</li>
            </ul>
        </aside>
    );
}

export default Aside;