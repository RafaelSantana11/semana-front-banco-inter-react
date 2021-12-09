import { Wrapper, Background, InputContainer, ButtonContainer } from "./styles";
import Card from "../../components";
import background from "../../assets/images/background-login.jpg";
import logoInter from "../../assets/images/inter-orange.png";

const SignIn = () => {
  return (
    <Wrapper>
      <Background image={background} />
      <Card width="403px" height="auto">
        <img src={logoInter} width={172} height={61} alt="logo inter" />
      </Card>
    </Wrapper>
  );
};

//41:42

export default SignIn;
