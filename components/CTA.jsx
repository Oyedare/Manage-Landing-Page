import { StyledCTA } from "./styles/CTA.styled";
import {Container} from "./styles/Container.styled"
import { CTAButton } from "./styles/Button.styled";
import { Flex } from "./styles/Flex.styled";

const CTA = () => {
  return ( 
    <StyledCTA>
      <Container>
        <Flex>
          <h1>Simplify how your team works today</h1>
          <CTAButton>Get Started</CTAButton>
        </Flex>
      </Container>
    </StyledCTA>
   );
}
 
export default CTA;