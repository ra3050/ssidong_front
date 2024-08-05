import styled from "styled-components";
import { ContentBox } from "../MainPage/MainHTML";

export const Wrapper = styled.div`
    top: ${({ theme }) => `calc(${theme.windowSource.header_height})`};
    width: 100%;
    min-height: ${window.innerHeight}px;
    
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #050c1a;
`

export const Title = styled.p`
    margin: 64px 0;

    position: relative;

    text-align: center;
    font-size: 48px;
    font-weight: bold;
    color: white;

    @media ${({ theme }) => theme.device.mobile_big} {
        font-size: 32px;
    };

    @media ${({ theme }) => theme.device.mobile_small} {
        font-size: 32px;
    };
`

export const PortfolioBox = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
`

export const PfCategoryBox = styled.div`
    margin: 32px;
    position: relative;
    display: flex;
    justify-content: center;

    @media ${({ theme }) => theme.device.mobile_big} {
        margin: 32px 16px;
    };

    @media ${({ theme }) => theme.device.mobile_small} {
        margin: 32px 16px;
    };
`

export const PfCategory = styled.button`
    margin: 0 16px;
    position: relative;

    font-size: 24px;
    font-weight: 600;
    color: white;
    opacity: 0.5;

    @media ${({ theme }) => theme.device.mobile_big} {
        font-size: 11px;
        margin: 0 8px;
    };

    @media ${({ theme }) => theme.device.mobile_small} {
        font-size: 11px;
        margin: 0 8px;
    };
    
    transition: all 0.15s ease-in-out; 
`

export const PfContentBox = styled.div`
    width: ${props => `calc(${props.width}px)`};
    max-width: 1920px;
    margin: 0 90px;

    @media ${({ theme }) => theme.device.mobile_big} {
        width: 100vw;
        margin: 0;
    };

    @media ${({ theme }) => theme.device.mobile_small} {
        width: 100vw;
        margin: 0;
    };

    position: relative;
    display: flex;
    flex-wrap: wrap;
`

export const PfContent = styled.button`
    width: ${props => `calc(${props.width}px)`};
    height: ${props => `calc(${props.height}px)`};
    max-width: calc((1920px / 3) - 32px);
    margin: 0 16px 32px 16px;

    @media ${({ theme }) => theme.device.mobile_big} {
        width:  calc(100vw - 32px);
        height: calc((100vw - 32px) * 9 / 16);
    };

    @media ${({ theme }) => theme.device.mobile_small} {
        width:  calc(100vw - 32px);
        height: calc((100vw - 32px) * 9 / 16);
    };

    position: relative;
    background-size: contain;
    background-position: center;

    ::after {
        content: "${props => props.title}";
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        position: absolute;

        text-align: center;
        vertical-align: center;
        font-size: 14px;
        font-weight: bold;
        line-height: calc(${props => props.height}px);

        @media ${({ theme }) => theme.device.mobile_big} {
            line-height: calc((100vw - 32px) * 9 / 16);
        };

        @media ${({ theme }) => theme.device.mobile_small} {
            line-height: calc((100vw - 32px) * 9 / 16);
        };

        color: white;
        background-color: rgba(255,255,192,0.1);
        backdrop-filter: blur(10px);

        opacity: 0;
        transition: all 0.15s ease-in-out;
    }

    :hover::after {
        opacity: 1;
    }
`

export const PfContentImg = styled.img`
    width: 100%;
    height: 100%;
    position: relative;
    object-fit: contain;
`