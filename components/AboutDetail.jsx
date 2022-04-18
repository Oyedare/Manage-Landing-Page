import { AboutDetailFlex, AboutText, StyledAboutDetail } from "./styles/AboutDetail.styled";
import { AboutButton} from "./styles/Button.styled";

const aboutData = [
  {
    title: 'Track company-wide progress',
    text: 'See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.',
    id: 1
  },
  {
    title: 'Advanced built-in reports',
    text: 'Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.',
    id: 2
  },
  {
    title: 'Everything you need in one place',
    text: 'Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.',
    id: 3
  }
]

const AboutDeatil = () => {
  return ( 
    <StyledAboutDetail>
      {aboutData.map((item)=>(
        <AboutDetailFlex key={item.id}>
          <AboutButton>0{item.id}</AboutButton>
          <AboutText>
            <h1>{item.title}</h1>
            <p>{item.text}</p>
          </AboutText>
        </AboutDetailFlex>
      ))}
    </StyledAboutDetail>
  );
}
 
export default AboutDeatil;