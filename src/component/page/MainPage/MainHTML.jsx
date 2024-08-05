import styled from "styled-components"
import theme from "../../../style/Theme"

export const Wrapper = styled.div`
    top: ${({ theme }) => `calc(${theme.windowSource.header_height})`};
    width: 100%;
    
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #050c1a;
`

export const Banner = styled.video`
    width: ${({ theme }) => `calc(${theme.windowSource.window_width})`};
    height: ${({ theme }) => `calc(${theme.windowSource.window_width} / 2.5)`};

    @media ${({ theme }) => theme.device.tablet} {
        height: auto;  /* 모바일 기준 height는 하위 요소만큼 길어져아한다.*/
    };

    @media ${({ theme }) => theme.device.mobile_big} {
        top: 32px;
        height: auto;  /* 모바일 기준 height는 하위 요소만큼 길어져아한다.*/
    };

    @media ${({ theme }) => theme.device.mobile_small} {
        top: 32px;
        height: auto;  /* 모바일 기준 height는 하위 요소만큼 길어져아한다.*/
    };

    position: relative;
`

export const AboutBox = styled.div`
    @media ${({ theme }) => theme.device.computer} {
        width: 1400px;
        height: auto;
    };

    @media ${({ theme }) => theme.device.laptop} {
        width: 1024px;
        height: auto;
    };


    @media ${({ theme }) => theme.device.tablet} {
        width: ${({ theme }) => `calc(${theme.windowSource.window_width})`};
        height: auto;  /* 모바일 기준 height는 하위 요소만큼 길어져아한다.*/
    };

    @media ${({ theme }) => theme.device.mobile_big} {
        width: 100%;
        height: auto;  /* 모바일 기준 height는 하위 요소만큼 길어져아한다.*/
    };

    @media ${({ theme }) => theme.device.mobile_small} {
        width: 100%;
        height: auto;  /* 모바일 기준 height는 하위 요소만큼 길어져아한다.*/
    };

    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Title = styled.span`
    margin: 64px 0 64px  0;
    
    position: relative;
    color: #667491;
    font-family: Noto sans KR;
    font-size: 32px;
    font-weight: bold;
`

export const ContentBox = styled.div`
    width: 100%;
    margin: 32px;

    @media ${({ theme }) => theme.device.mobile_big} {
        margin: 0;
        overflow: hidden;
    };

    @media ${({ theme }) => theme.device.mobile_small} {
        margin: 0;
        overflow: hidden;
    };

    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;

    
`

export const ContentGroup = styled.div`
    width: ${({ theme }) => `calc(${theme.windowSource.window_width})`};
    height: 0;

    :hover {
        transform: scale(1.1);
    }

    @media ${({ theme }) => theme.device.computer} {
        width: calc(1400px / 4);
        height: calc(1400px / 4);
    };

    @media ${({ theme }) => theme.device.laptop} {
        width: calc(1400px / 4);
        height: calc(1400px / 4);
    };

    @media ${({ theme }) => theme.device.tablet} {
        width: calc(1400px / 4);
        height: calc(1400px / 4);
    };
    
    @media ${({ theme }) => theme.device.mobile_big} {
        height: 0;
        :hover {
            transform: none;
        }
    };

    @media ${({ theme }) => theme.device.mobile_small} {
        height: 0;
        :hover {
            transform: none;
        }
    };


    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    transition: all 0.25s ease-in-out;
`

export const Content_main_box = styled.div`
    width: 100%;
    height: calc(100% * 5 / 11);
    
    position: relative;

`

export const Content_main_subBox = styled.div`
    width: 100%;
    height: calc(100% * 5 / 11);
    
    position: relative;

`

export const Content_main_box_icon = styled.img`
    position: relative;
    width: 100%;
    height: 50%;
    object-fit: contain;
    justify-self: end;
`

export const Content_main_box_title = styled.p`
    
    position: relative;
    font-size: 24px;
    font-weight: bold;
    white-space: pre-wrap;
    text-align: center;

    color: white;
`

export const Content_main_descrypt = styled.p`
    position: relative;
    font-size: 14px;    
    white-space: pre-wrap;
    text-align: center;
    line-height: 1.4rem;

    color: white;
`

