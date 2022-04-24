import Link from "next/link";
import { StyledLink, StyledMenu } from "./styles/Menu.styled";

const Menu = () => {
  return ( 
    <StyledMenu>
      <Link href="/" passHref>
        <StyledLink>Pricing</StyledLink>
      </Link> 
      <Link href="/" passHref>
        <StyledLink>Product</StyledLink>
      </Link>
      <Link href="/" passHref>
        <StyledLink>About Us</StyledLink>
      </Link>  
      <Link href="/" passHref>
        <StyledLink>Careers</StyledLink>
       </Link>  
      <Link href="/" passHref>
        <StyledLink>Community</StyledLink>
      </Link>  
    </StyledMenu>
   );
}
 
export default Menu;