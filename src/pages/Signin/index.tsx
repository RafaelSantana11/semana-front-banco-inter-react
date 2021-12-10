import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Wrapper, Background, InputContainer, ButtonContainer } from "./styles";

import Card from "../../components/Card";
import background from "../../assets/images/background-login.png";
import logoInter from "../../assets/images/inter-orange.png";
import Input from "../../components/Input";
import Button from "../../components/Button";

import useAuth from "../../hooks/useAuth";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassord] = useState("");

  const navigate = useNavigate();
  const { userSignIn } = useAuth();

  const handleToSignIn = async () => {
    const data = {
      email,
      password,
    };

    const response = await userSignIn(data);

    if (response.id) {
      navigate("/dashboard");
      return;
    }

    alert('Usuário ou senha inválida')
  };
  return (
    <Wrapper>
      <Background image={background} />
      <Card width="403px" height="auto">
        <img src={logoInter} width={172} height={61} alt="logo inter" />

        <InputContainer>
          <Input
            placeholder="EMAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="SENHA"
            value={password}
            onChange={(e) => setPassord(e.target.value)}
            type="password"
          />
        </InputContainer>

        <ButtonContainer>
          <Button onClick={handleToSignIn} type="button">
            Entrar
          </Button>
          <p>
            Ainda não é cadastrado? <Link to="/signup"> Cadastre-se Já</Link>
          </p>
        </ButtonContainer>
      </Card>
    </Wrapper>
  );
};

export default SignIn;
