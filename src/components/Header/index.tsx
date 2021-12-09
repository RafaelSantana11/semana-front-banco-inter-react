import { HeaderContainer, HeaderWrapper, UserInfo } from "./styles";
import UserCircle from "../UserCircle";
import logoInter from "../../assets/images/inter-orange.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLogoff = () => {
    navigate("/");
  };
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <img src={logoInter} width={172} height={61} alt="logo inter" />
        <UserInfo>
          <UserCircle initials="RS" />
          <div>
            <p>
              Olá <span className="primary-color font-bold">Rafael</span>
            </p>
            <strong>4545464-5</strong>
            <br />
            <a href="#" onClick={handleLogoff}>
              Sair
            </a>
          </div>
        </UserInfo>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
