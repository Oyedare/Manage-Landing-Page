import Link from "next/link";
import { StyledLink, StyledMenu } from "./styles/Menu.styled";

const Menu = () => {
  return ( 
    <StyledMenu>
      <Link href="/">
        <StyledLink>Pricing</StyledLink>
      </Link> 
      <Link href="/">
        <StyledLink>Product</StyledLink>
      </Link>
      <Link href="/">
        <StyledLink>About Us</StyledLink>
      </Link>  
      <Link href="/">
        <StyledLink>Careers</StyledLink>
       </Link>  
      <Link href="/">
        <StyledLink>Community</StyledLink>
      </Link>  
    </StyledMenu>
   );
}
 
export default Menu;