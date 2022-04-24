import { Image, StyledHeader } from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";
import { Nav } from "./styles/Header.styled";
import { Logo } from "./styles/Header.styled";
import Menu from "./Menu";
import { Button, ButtonContainer } from "./styles/Button.styled";
import { Flex, HeaderFlex } from "./styles/Flex.styled";
import { MenuContainer, MobileMenu, MobileMenuContainer, MobileMenuLinks } from "./styles/Menu.styled";
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import {useState} from 'react'

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return ( 
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src='../images/logo.svg'/>
          <MenuContainer>
            <Menu />
          </MenuContainer>
          <ButtonContainer>
            <Button>Get started</Button>
          </ButtonContainer>
          <MobileMenu>
            {toggleMenu ?
            <RiCloseLine color='#000' size={50} onClick={()=> setToggleMenu(false)}/>
            :<RiMenu3Line color='#000' size={50} onClick={()=> setToggleMenu(true)}/>
            }

            {toggleMenu &&(
              <MobileMenuContainer>
                  <Menu />
              </MobileMenuContainer>
            )}
          </MobileMenu>
        </Nav>
        <Flex>
          <HeaderFlex>
            <h1>Bring everyone together to build better products</h1>
            <p>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.
            </p>
            <Button>Get Started</Button>
          </HeaderFlex>
          <Image src = '../images/illustration-intro.svg' alt="header-img"/>
        </Flex>
      </Container>
    </StyledHeader>
   );
}
 
export default Header;