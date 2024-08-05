import styled from "styled-components";

export const Wrapper = styled.div`
    top: ${({ theme }) => `calc(${theme.windowSource.header_height})`};
    width: 100%;
    
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background-color: #050c1a;

    ::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;
`

export const Title = styled.p`
    margin: 48px 0;

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

export const CenterContactBox = styled.div`
    width: 100%;
    height: 650px;
    margin: 0 0 48px 0;

    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Center_Left_Logo_Box = styled.div`
    width: 25%;
    height: 100%;
    margin: 0 32px;

    @media ${({ theme }) => theme.device.mobile_big} {
        width: 0;
        margin: 0;
    };

    @media ${({ theme }) => theme.device.mobile_small} {
        width: 0;
        margin: 0;
    };

    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Center_Left_Logo = styled.img`
    width: 50%;

    @media ${({ theme }) => theme.device.mobile_big} {
        width: 0;
    };

    @media ${({ theme }) => theme.device.mobile_small} {
        width: 0;
    };

    position: relative;
    
    object-fit: contain;
`

export const Center_right_contact_box = styled.div`
    width: 25%;
    height: 100%;
    margin: 0 32px;

    @media ${({ theme }) => theme.device.mobile_big} {
        width: 100%;
        margin: 0 16px;
    };

    @media ${({ theme }) => theme.device.mobile_small} {
        width: 100%;
        margin: 0 16px;
    };
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const Center_right_contact_subtitle = styled.p`
    margin: 2px 0 6px 0;
    font-size: 18px;
    
    position: relative;
    color: white;
    opacity: .8;    

    @media ${({ theme }) => theme.device.mobile_big} {
        margin: 6px 0 10px 0;
        font-size: 12px;
    };

    @media ${({ theme }) => theme.device.mobile_small} {
        margin: 6px 0 10px 0;
        font-size: 12px;
    };
`

export const Center_right_contact_select = styled.select`
    width: calc(100%);
    height: 50px; 
    margin: 0 0 16px 0;
    padding-left: 7px;
    
    position: relative;
    font-size: 14px;
    background-color: white;
`

export const Center_right_contact_input = styled.input`
    width: calc(100% - 7px);
    height: 50px; 
    margin: 0 0 16px 0;
    padding: 0;
    padding-left: 7px;

    position: relative;
    font-family: 'Noto Sans KR';
    font-size: 14px;
    border: none;
    
    background-color: white;
`

export const Center_right_contact_sender = styled.button`
    width: 54px;
    height: 36px; 
    right: 16px;
    bottom: 32px;
    border-radius: 8px;
    position: absolute;

    background-color: black;
    color: white;
    font-weight: bold;
`

export const Center_right_contact_descryption = styled.textarea`
    width: calc(100% - 7px);
    height: 150px;
    margin: 0 0 16px 0;
    padding-left: 7px;

    position: relative;
    font-size: 14px;
    
    overflow: hidden;
    border: none; 
    resize: none;
    outline: none;

    ::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;

    background-color: white;
`