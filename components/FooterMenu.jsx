import { StyledFooterLink, StyledFooterMenu, StyledFooterMenuItem } from "./styles/Menu.styled";
import Link from "next/link";

const FooterMenu = () => {
  return ( 
    <StyledFooterMenu>
      <StyledFooterMenuItem>
        <Link href="/" passHref>
          <StyledFooterLink>Home</StyledFooterLink>
        </Link> 
        <Link href="/" passHref>
          <StyledFooterLink>Pricing</StyledFooterLink>
        </Link>
        <Link href="/" passHref>
          <StyledFooterLink>Products</StyledFooterLink>
        </Link>  
        <Link href="/" passHref>
          <StyledFooterLink>About</StyledFooterLink>
        </Link>  
      </StyledFooterMenuItem>

      <StyledFooterMenuItem>
        <Link href="/" passHref>
          <StyledFooterLink>Careers</StyledFooterLink>
        </Link>  
        <Link href="/" passHref>
          <StyledFooterLink>Community</StyledFooterLink>
        </Link>  
        <Link href="/" passHref>
          <StyledFooterLink>Privacy Policy</StyledFooterLink>
        </Link>  
      </StyledFooterMenuItem>
    </StyledFooterMenu>
   );
}
 
export default FooterMenu;