import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { BottomNavigationAction } from "@mui/material";

const Wrapper = styled.div`
    top: ${props => `calc(50px)`};
    /* left: ${props => `calc(2px * ${props.menuleft} - ${window.innerWidth}px)`}; */
    right: 0px;
    /* width: ${props => `calc((${window.innerWidth} - ${props.menuleft})px * 2)`}; */
    
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;

    border-color: none;
    background-color: #050c1a;
`;

const Menu_name = styled.button`
    font: var(--fnt);
    margin: 16px;
    color: white;

    @media ${({ theme }) => theme.device.mobile_big} {
        font-size: 12px;
    };

    @media ${({ theme }) => theme.device.mobile_small} {
        font-size: 12px;
    };
`;

const MobileMenu = (props) => {
    const { setMenu } = props;
    const navigation = useNavigate();

    const handleMenu = (e) => {
        setMenu(false);
        navigation(e.target.value)
    }

    return (
        <Wrapper>
            <Menu_name onClick={handleMenu} value='/'>HOME</Menu_name>
            <Menu_name onClick={handleMenu} value='/intro'>회사소개</Menu_name>
            <Menu_name onClick={handleMenu} value='/portfolio'>포트폴리오</Menu_name>
            <Menu_name onClick={handleMenu} value='/contact'>Contact</Menu_name>
        </Wrapper>
    )
}

export default MobileMenu;