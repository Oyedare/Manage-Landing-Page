import { FooterCenter, FooterForm, FooterLeft, FooterRight, Logo, StyledFooter } from "./styles/Footer.styled";
import {Container} from "./styles/Container.styled"
import SocialIcons from "./SocialIcons";
import {FooterFlex, FooterFlexLeftCenter} from './styles/Flex.styled'
import FooterMenu from "./FooterMenu";
import {Button} from './styles/Button.styled'



const Footer = () => {
  return ( 
    <StyledFooter>
      <Container>
        <FooterFlex>
          <FooterFlexLeftCenter>
            <FooterLeft>
              <Logo src='../images/logo-white.svg'/>
              <SocialIcons />
            </FooterLeft>
            <FooterCenter>
              <FooterMenu />
            </FooterCenter>
          </FooterFlexLeftCenter>
          <FooterRight>
            <FooterForm>
              <input type="text" placeholder="Updated in your inbox" required />
              <Button>Go</Button>
            </FooterForm>
          </FooterRight>
        </FooterFlex>
        <p>Copyright © 2022, All Rights Reserved</p>
      </Container>
    </StyledFooter>
   );
}
 
export default Footer;