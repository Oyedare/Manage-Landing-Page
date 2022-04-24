import AboutDeatil from "./AboutDetail";
import { AboutFlex, AboutTextFlex, StyledAbout } from "./styles/About.styled";
import { Container } from "./styles/Container.styled";



const About = () => {
  return ( 
    <StyledAbout>
      <Container>
        <AboutFlex>
          <AboutTextFlex>
            <h1>What's Different About Manage?</h1>
            <p>Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.</p>
          </AboutTextFlex>
          <AboutDeatil />
        </AboutFlex>
      </Container>
    </StyledAbout>
  );
}
 
export default About;