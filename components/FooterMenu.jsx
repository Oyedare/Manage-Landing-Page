import { StyledFooterLink, StyledFooterMenu, StyledFooterMenuItem } from "./styles/Menu.styled";
import Link from "next/link";

const FooterMenu = () => {
  return ( 
    <StyledFooterMenu>
      <StyledFooterMenuItem>
        <Link href="/">
          <StyledFooterLink>Home</StyledFooterLink>
        </Link> 
        <Link href="/">
          <StyledFooterLink>Pricing</StyledFooterLink>
        </Link>
        <Link href="/">
          <StyledFooterLink>Products</StyledFooterLink>
        </Link>  
        <Link href="/">
          <StyledFooterLink>About</StyledFooterLink>
        </Link>  
      </StyledFooterMenuItem>

      <StyledFooterMenuItem>
        <Link href="/">
          <StyledFooterLink>Careers</StyledFooterLink>
        </Link>  
        <Link href="/">
          <StyledFooterLink>Community</StyledFooterLink>
        </Link>  
        <Link href="/">
          <StyledFooterLink>Privacy Policy</StyledFooterLink>
        </Link>  
      </StyledFooterMenuItem>
    </StyledFooterMenu>
   );
}
 
export default FooterMenu;