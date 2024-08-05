import styled from "styled-components";
import YouTube from "react-youtube";
import { useEffect } from "react";
import { disableScroll, enableScroll } from "../../../controller/ScrollControl";

const DropWrapper = styled.div`
    /* top: ${props => `calc(${props.scrolltoTop}px)`}; */
    width: 100vw;
    height: calc(${props => props.height}px);

    position: absolute;
    background-color: black;
    opacity: .8;
    z-index: 50;
`

const DetailWrapper = styled.div`
    top: ${props => `calc(${props.scrolltoTop}px + 10vh)`};
    width: 55vw;
    height: 75vh;
    border-radius: 16px;
    

    @media ${({ theme }) => theme.device.mobile_big} {
        width: calc(100vw - 32px);
        height: calc(85vh);
    };

    @media ${({ theme }) => theme.device.mobile_small} {
        width: calc(100vw - 32px);
        height: calc(85vh);
    };
    
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    background-color: white;
    z-index: 100;
`

const DetailTitle = styled.p`
    font-size: 32px;
    font-weight: bold;
    opacity: .8;

    @media ${({ theme }) => theme.device.mobile_big} {
        font-size: 14px;
    };

    @media ${({ theme }) => theme.device.mobile_small} {
        font-size: 14px;
    };
`

const PortfolioDetail = (props) => {
    const { portfolio, rows, scrolltoTop, handleDetailDrop } = props;
    const wrapHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    const dropHeight = window.innerHeight > wrapHeight ? window.innerHeight : wrapHeight;
    var mobile = (/iphone|ipad|ipod|android/i.test(navigator.userAgent.toLowerCase()));

    useEffect(() => {
        if (!mobile) {
            // modal이 떠 있을 땐 스클롤 막음
            // 모바일 환경에서는 안막음
            disableScroll();
            // modal이 닫힐 때 스크롤을 다시 생성함
            return () => enableScroll();
        }

    }, [])

    return (
        <>
            <DropWrapper height={dropHeight} onClick={handleDetailDrop} />
            <DetailWrapper scrolltoTop={scrolltoTop}>
                <DetailTitle>{portfolio[rows].title}</DetailTitle>
                <YouTube
                    videoId={portfolio[rows].movlink}
                    opts={{
                        width: mobile ? window.innerWidth - 64 : 830,
                        height: mobile ? (window.innerWidth - 64) * 9 / 16 : 500,
                        playerVars: {
                            autoplay: 0, //자동재생 O
                            rel: 0, //관련 동영상 표시하지 않음 (근데 별로 쓸모 없는듯..)
                            modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
                        },
                    }}
                    onEnd={(e) => { e.target.stopVideo(0); }} />
            </DetailWrapper>
        </>
    )
}

export default PortfolioDetail