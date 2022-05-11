import './section.css';

function Newsletter(){
    return(
    <section className='newsletter'>
        <h3>Newsletter</h3>
        <p>Receba nossas promoções</p>
        <form action='#Cadastro.php'>
            <input type='text' name ='' id='' placeholder='Seu nome'/>
            <input type='email' name='' id='' placeholder='Seu e-mail'/>
            <button>Cadastrar</button>
        </form>
    </section>
    );
}

export default Newsletter;