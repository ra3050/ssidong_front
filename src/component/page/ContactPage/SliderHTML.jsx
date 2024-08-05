import styled, { keyframes } from "styled-components";

/**
 * 화면 캡쳐
 */
export const Wrapper = styled.div`
    width: 464px;
    height: 464px;
    margin: 0 0 64px 0;

    position: relative;
    align-self: flex-start;

    overflow-x: hidden;
`

/**
 * 직접 움직이는 슬라이더
 */
export const Slider = styled.div`
    width: ${() => `${window.innerWidth}px`};
    height: 464px;
    margin: 0 0 64px 0;

    @media ${({ theme }) => theme.device.mobile_big} {
        height: 200px;
        height: 200px;
        margin: 0 0 64px 0;
    };

    @media ${({ theme }) => theme.device.mobile_small} {
        height: 264px;
        height: 200px;
        margin: 0 0 64px 0;
    };

    position: relative;
    display: inline;
    white-space: nowrap;

    touch-action: none;
    ::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;
`

const outOfBox = keyframes`
    from {
        transform: translateX(0px);
    }
    to {
        transform: translateX(-3000px);
    }
`

/**
 * 슬라이더 이미지
 */
export const Image = styled.img`
    width: 400px;
    height: 400px;
    margin: 32px;

    @media ${({ theme }) => theme.device.mobile_big} {
        width: 200px;
        height: 200px;
        margin: 8px;
    };

    @media ${({ theme }) => theme.device.mobile_small} {
        width: 200px;
        height: 200px;
        margin: 8px;
    };

    position: relative;
    display: inline;

    object-fit: cover; 
    /* transition: animation 10000ms linear; */
    /* animation: ${() => outOfBox} 10s linear; */
`