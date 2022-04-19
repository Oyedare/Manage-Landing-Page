import { Button } from "./styles/Button.styled";
import { Container } from "./styles/Container.styled";
import { StyledTestimomial, StyledTestimonialCard, StyledTestimonialCardItem } from "./styles/Testimonial.styled";

const testimonialCard = [
  {
    img:'../images/avatar-anisha.png',
    name: 'Anisha Li',
    testimony: ' “Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.” ',
    id: 1
  },
  {
    img:'../images/avatar-ali.png',
    name: 'Ali Bravo',
    testimony: ' “We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.” ',
    id: 2
  },
  {
    img:'../images/avatar-richard.png',
    name: 'Richard Watts',
    testimony: ' “Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.” ',
    id: 3
  }
]

const Testimonial = () => {
  return ( 
    <StyledTestimomial>
      <Container>
        <h1>What's Different About Manage?</h1>
        <StyledTestimonialCard>
          {testimonialCard.map((testimonial)=>(
            <StyledTestimonialCardItem>
              <img src={testimonial.img} alt="" />
              <h2>{testimonial.name}</h2>
              <p>{testimonial.testimony}</p>
            </StyledTestimonialCardItem>
          ))}
        </StyledTestimonialCard>
        <Button>Get started</Button>
      </Container>
    </StyledTestimomial>
   );
}
 
export default Testimonial;