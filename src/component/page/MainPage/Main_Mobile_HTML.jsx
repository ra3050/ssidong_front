import styled from "styled-components";

export const Mobile_icon_table = styled.div`
    width: 100%;
    height: calc(${({theme}) => theme.windowSource.window_width} * 5 / 22);
    position: relative;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

export const Mobile_icon = styled.img`
    position: relative;
    height: calc(${({theme}) => theme.windowSource.window_width} * 5 / 22 / 2);
    object-fit: contain;
    justify-self: end;
`