import { Image, StyledHeader } from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";
import { Nav } from "./styles/Header.styled";
import { Logo } from "./styles/Header.styled";
import Menu from "./Menu";
import { Button } from "./styles/Button.styled";
import { Flex, HeaderFlex } from "./styles/Flex.styled";

const Header = () => {
  return ( 
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src='../images/logo.svg'/>
          <Menu />
          <Button>Get started</Button>
        </Nav>
        <Flex>
          <HeaderFlex>
            <h1>Bring everyone together to build better products</h1>
            <p>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.
            </p>
            <Button>Get Started</Button>
          </HeaderFlex>
          <Image src = '../images/illustration-intro.svg'/>
        </Flex>
      </Container>
    </StyledHeader>
   );
}
 
export default Header;