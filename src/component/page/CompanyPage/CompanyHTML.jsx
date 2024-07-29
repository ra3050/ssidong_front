import styled from "styled-components";

export const Wrapper = styled.div`
    top: ${({ theme }) => `calc(${theme.windowSource.header_height})`};
    width: 100%;
    height: ${() => `calc(${window.innerWidth}px * 973 / 1920)`};
    
    @media ${({ theme }) => theme.device.mobile_big } {
        height: calc(75vh);
    };

    @media ${({ theme }) => theme.device.mobile_small } {
        height: calc(75vh);
    };

    position: relative;
    background-color: #050c1a;
`

export const BackgroundImg = styled.img`
    width: 100%;
    height: 100%;

    position: absolute;
    object-fit: cover;
    z-index: 10;
`

export const Bulkhead = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;

    background-color: black;
    opacity: .7;
    z-index: 12;
`

export const DescryptionBox = styled.div`
    /* top: ${() => `calc(${window.innerWidth}px / 12)`}; */
    left: ${() => `calc(${window.innerWidth}px * 3 / 24)`};
    width: ${(props) => `calc(${props.width}px)`};
    height: 100%;
    
    @media ${({ theme }) => theme.device.mobile_big } {
        left: ${() => `calc(${window.innerWidth}px / 12)`};
    };

    @media ${({ theme }) => theme.device.mobile_small } {
        left: ${() => `calc(${window.innerWidth}px / 12)`};
    };

    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    z-index: 15;
`

export const Title = styled.p`
    position: relative;
    color: white;
    font-size: 54px;
    font-weight: bold;
    line-height: 1.4em;

    @media ${({ theme }) => theme.device.mobile_big } {
        font-size: 36px;
        line-height: 1.4em;
    };

    @media ${({ theme }) => theme.device.mobile_small } {
        font-size: 36px;
        line-height: 1.4em;
    };
`

export const Descrypt = styled.p`
    
    position: relative;
    color: white;
    font-size: 28px;
    white-space: pre-wrap;
    line-height: 1.8em;
    
    @media ${({ theme }) => theme.device.mobile_big } {
        font-size: 16px;
        line-height: 1.8em;
    };

    @media ${({ theme }) => theme.device.mobile_small } {
        font-size: 16px;
        line-height: 1.8em;
    };

    opacity: 0.8;

    & > * {
        :first-child {
            font-weight: bold;
            opacity: 10/8;
        }
    }
`

export const Background_right_logo = styled.img`
    right: ${() => `calc(${window.innerWidth}px * 3 / 24)`};
    bottom: 0;
    width: ${() => `calc(${window.innerWidth}px * 3 / 24)`};
    
    position: absolute;
    object-fit: contain;
    background-color: black;
    opacity: .7;

    z-index: 11;
`