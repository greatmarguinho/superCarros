import Botao from '../../componentes/Botao';
import CampoTexto from '../../componentes/CampoTexto';
import styles from './Login.module.css';


function Login() {
    return (
        <section className={styles.login}>
            <CampoTexto obrigatorio={true} label="Login:" placeholder="Login" />
            <CampoTexto obrigatorio={true} label="Senha:" placeholder="Senha" />
            <Botao>Entrar</Botao>
        </section>
    )
}

export default Login;