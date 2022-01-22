import styled from "styled-components";

const FooterWrapper = styled.div`
width:100%
height:100%;
`;
const FooterText = styled.a`
color:white;
font-size:18px;
`;

const Header = ()=>{
    return(
<FooterWrapper>

        <FooterText href="https://github.com/arslanmurat06/randompersonReact" target="_blank" >Source</FooterText>
</FooterWrapper>
    );
}

export default Header;