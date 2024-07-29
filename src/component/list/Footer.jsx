import styled, { ThemeProvider } from "styled-components";
import theme from "../../style/Theme";
import logo from "../../resource/headfoot/footer_logo.png"

const Wrapper = styled.div`
    top: 50px;
    width: 100%;
    height: 75px; 
    
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    background-color: white;
`

const LogoImage = styled.img`
    width: auto;
    height: calc(100% - 32px);
    margin: 0 16px;

    @media ${({ theme }) => theme.device.mobile_big } {
        width: 0;
        height: 0;
        margin: 0;
    };

    @media ${({ theme }) => theme.device.mobile_small } {
        width: 0;
        height: 0;
        margin: 0;
    };

    position: relative;
    object-fit: contain;
`

const ContentBox = styled.div`
    position: relative;
    display: inline;
    margin: 0 16px;

    text-align: center;
`

const SmallContent = styled.span`
    position: relative;
    display: inline-block;
    font-size: 11px;
    opacity: .6;
    color: black;
`

const Line = styled.div`
    display: inline-block;
    width: 1px;
    height: 11px;
    margin: 0 10px 7px;
    opacity: .4;
    background-color: #c2c2c2;
    vertical-align: top;
`

const Footer = () => {

    return (
        <ThemeProvider theme={theme}>
            <Wrapper>
                <LogoImage src={logo}/>
                <ContentBox>
                    <SmallContent>시동,Siidong</SmallContent>
                    <Line/>
                    <SmallContent>대표: 신동익</SmallContent>
                    <Line/>
                    <SmallContent>사업자등록번호: 754-22-01597</SmallContent><br/>
                    <SmallContent>주소: 충청남도 아산시 배방읍 광장로 210, A동 1층 125호</SmallContent>
                    <Line/>
                    <SmallContent>이메일:siidong21@gmail.com</SmallContent><br/>
                    <SmallContent>COPYRIGHT2022@시동.ALL Right Reserved</SmallContent>
                </ContentBox>
            </Wrapper>
        </ThemeProvider>
    )
}

export default Footer
