import { FooterCenter, FooterForm, FooterLeft, FooterRight, Logo, StyledFooter } from "./styles/Footer.styled";
import {Container} from "./styles/Container.styled"
import SocialIcons from "./SocialIcons";
import {FooterFlex} from './styles/Flex.styled'
import FooterMenu from "./FooterMenu";
import {Button} from './styles/Button.styled'



const Footer = () => {
  return ( 
    <StyledFooter>
      <Container>
        <FooterFlex>
          <FooterLeft>
            <Logo src='../images/logo-white.svg'/>
            <SocialIcons />
          </FooterLeft>
          <FooterCenter>
            <FooterMenu />
          </FooterCenter>
          <FooterRight>
            <FooterForm>
              <input type="text" placeholder="Updated in your inbox" required />
              <Button>Go</Button>
            </FooterForm>
            <p>Copyright © 2022, All Rights Reserved</p>
          </FooterRight>
        </FooterFlex>
      </Container>
    </StyledFooter>
   );
}
 
export default Footer;