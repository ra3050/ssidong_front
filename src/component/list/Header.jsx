import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';
import MobileMenu from "./MobileMenu";
import logo from "../../resource/headfoot/header_logo.png"

const Wrapper = styled.div`
    width: 100%;
    height: 50px;
    
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    background-color: #050c1a;
    color: white;

    z-index: 100;
`

const HeaderBox = styled.div`
    width: 100%;
    height: 100%;
    
    @media ${({ theme }) => theme.device.computer} {
        width: 1400px;
    };
    
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const LogoImage = styled.img`
    position: relative;
    object-fit: contain;
    width: 20%;
    height: calc(100% - 8px);
    margin: 4px 32px;

    @media ${({ theme }) => theme.device.mobile_big} {
        margin: 4px 16px;
    };

    @media ${({ theme }) => theme.device.mobile_small} {
        margin: 4px 16px;
    };
`

const Menu = styled.div`
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const Menu_item = styled.button`
    width: auto;
    height: 100%;
    padding: 0 16px;
    margin: 0 16px;
    
    position: relative;
    color: white;
`

const MenuBox = styled.div`
    margin: 0 16px;
    position: relative;
    align-self: center;
    cursor: pointer;
`

const Header = () => {
    const navigation = useNavigate();
    const [clientWidth, setClientWidth] = useState(window.innerWidth);
    const [menu, setMenu] = useState(false);
    const menuRef = useRef();

    const handleResize = (e) => {
        setClientWidth(e.target.innerWidth);
        setMenu(false);
    }

    const handleMenuBox = (e) => {
        setMenu(!menu);
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        //컴포넌트가 마운트 시 이벤트 리스너 제거
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    return (
        <Wrapper>
            {clientWidth < 768
                ?
                <HeaderBox>
                    <LogoImage src={logo} />
                    <MenuBox ref={menuRef} onClick={handleMenuBox}>
                        <MenuIcon />
                    </MenuBox>
                    {menu && <MobileMenu setMenu={setMenu} />}
                </HeaderBox>
                :
                <HeaderBox>
                    <LogoImage src={logo} />
                    <Menu>
                        <Menu_item onClick={() => navigation('/', { replace: true })}>HOME</Menu_item>
                        <Menu_item onClick={() => navigation('/intro', { replace: true })}>회사소개</Menu_item>
                        <Menu_item onClick={() => navigation('/portfolio', { replace: true })}>포트폴리오</Menu_item>
                        <Menu_item onClick={() => navigation('/contact', { replace: true })}>Contact</Menu_item>
                    </Menu>
                </HeaderBox>
            }


        </Wrapper>
    )
}

export default Header;