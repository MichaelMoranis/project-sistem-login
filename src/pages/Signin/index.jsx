import React, {useState} from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/userAuth";
import * as C from "./styles";
import Theme from "../../theme";


const Signin = () => {
    const {signin} = useAuth();
    const navigate = useNavigate();


    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");
    
    const handleLogin = () => {
        if(!email | !senha) {
            setError("Preencha todos os campos");
            return;
        }
        const res = signin(email, senha);

        if (res) {
            setError(res);
            return;
        }
        navigate("/home");
    }

    return (
      <C.Container>
        <C.Content>
          <Theme />   
        <C.Label>Sistema de Login</C.Label>
          <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
          />
         <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
          />
          <C.LabelError>{error}</C.LabelError>
          <Button Text="Entrar" onClick={handleLogin} />
          <C.LabelSignup>
            Não tem uma conta ?
          <C.Strong>
            <Link to="/signup">&nbsp;Registre-se</Link>
          </C.Strong>
          </C.LabelSignup>
        </C.Content>
      </C.Container>
    )
}

export default Signin;