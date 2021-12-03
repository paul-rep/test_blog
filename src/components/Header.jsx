import styled from "styled-components";
import Search from "./Search";


const HeaderContainer = styled.header`
    padding:30px;
    display: flex;
    align-items: center;
    justify-items: center;
    justify-content: space-around;
    max-width: 1470px;

    @media (max-width: 740px) {
      /* width: 50%; */
      flex-direction: column;
      & > * {
          margin-bottom: 20px;
      }
    }
`;

const Logo = styled.div`
    font-size: 24px;
    line-height: 30px;
    display: flex;
`;

const Button = styled.button`
    background-color: #333348;
    border-radius: 40px;
    font-weight: 600;
    color: #EEEEEE;
    padding: 20px 44px;
    border: none;
    cursor: pointer;
    font-size: 18px;
    transition: all ease .6s;
    &:hover {
        background-color: #52519D;
        transform: scale(1.05);
    }
`;


const Header = ({handleSort}) => {

    return (
      <HeaderContainer>
          <Logo>Lorem ipsum</Logo>
          <Button onClick={handleSort}>Sort users</Button>
          <Search />
      </HeaderContainer>
    )
}

export default Header;
