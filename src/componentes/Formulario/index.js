import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import './Formulario.css'

const Formulario = () => {

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('Form foi submetido')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                
                <CampoTexto obrigatorio={true} label="Marca:" placeholder="Digite a marca" />
                <CampoTexto obrigatorio={true} label="Ano:" placeholder="Digite o ano" />
                <CampoTexto obrigatorio={true} label="Modelo:" placeholder="Digite o modelo" />
                <CampoTexto obrigatorio={true} label="Cor:" placeholder="Digite a cor" />
                <CampoTexto obrigatorio={true} label="Valor Pago:" placeholder="Digite o valor pago" />
                <CampoTexto obrigatorio={true} label="Valor Venda:" placeholder="Digite o valor de venda" />
                <Botao>
                    Inserir
                </Botao>
            </form>
        </section>
    )
}

export default Formulario