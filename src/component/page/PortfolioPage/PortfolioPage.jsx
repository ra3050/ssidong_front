import { useEffect, useRef, useState } from "react"
import PortfolioDetail from "./PortfolioDetail";
import { Wrapper, Title, PortfolioBox, PfCategoryBox, PfCategory, PfContentBox, PfContent, PfContentImg } from "./ProtfolioHTML"
import { requestPortfolio } from "../../../request/requestAPI"

var portfolioList;
var pfFilterList;

/**
 * 포트폴리오를 화면에 보여주도록합니다.
 * 썸네일은 ./resource/portfolio로 저장합니다
 * @param {*} portfolioList 포트폴리오 정보
 * @param {*} value 포트폴리오 카테고리
 */
const makeContentList = (portfolioList, value, handle) => {
    const concernList = []
    const currentPFList = []
    const pfcontentWidth = (window.innerWidth * 0.7 - 180) / 3 - 32;
    const pfcontentHeight = pfcontentWidth * 9 / 16;

    if (!portfolioList) return []

    for (let i = 0; i < portfolioList.length; i++) {
        if (value === '전체' || value === portfolioList[i].category) {
            const num = concernList.length
            currentPFList.push(portfolioList[i])
            concernList.push(
                <PfContent title={portfolioList[i].title} width={pfcontentWidth} height={pfcontentHeight} onClick={() => handle({ rows: num })} key={i}>
                    <PfContentImg src={portfolioList[i].thumnailLink} />
                </PfContent>
            );
        }
    }
    pfFilterList = currentPFList;
    return concernList;
}

const PortfolioPage = () => {
    const [contentList, setContentList] = useState([]);
    const [detail, setDetail] = useState(<></>);
    const categoryRef = [useRef(), useRef(), useRef(), useRef(), useRef()]
    const pfboxWidth = window.innerWidth * 0.7 - 180;

    useEffect(() => {
        requestPortfolio((data) => {
            if (!data) {
                portfolioList = [];
                return;
            } else {
                categoryRef[0].current.style.opacity = 1;
                portfolioList = data;
                const newContentList = makeContentList(portfolioList, '전체', handleContent);

                setContentList(newContentList);
            }
        });
    }, []);

    /**
     * PfCategory handle
     * 색상 스타일 변경, 콘텐츠 생성
     */
    const handlePfCategory = (e) => {
        for (let i = 0; i < categoryRef.length; i++) {
            categoryRef[i].current.style.opacity = 0.5;
            console.log(categoryRef[i].current.value)
        }
        e.target.style.opacity = 1;

        const chooseCategory = e.target.value;
        const newContentList = makeContentList(portfolioList, chooseCategory, handleContent);
        setContentList(newContentList);
    };

    const handleContent = (e) => {
        const rows = e.rows
        console.log(rows)
        setDetail(<PortfolioDetail handleDetailDrop={handleDetailDrop} portfolio={pfFilterList} rows={rows} scrolltoTop={document.documentElement.scrollTop || document.body.scrollTop} />)
    }

    const handleDetailDrop = () => {
        console.log('click')
        setDetail(<></>);
    }

    return (
        <Wrapper>
            {detail}

            <Title>WORKS</Title>
            <PortfolioBox>
                <PfCategoryBox>
                    <PfCategory ref={categoryRef[0]} onClick={handlePfCategory} value='전체'>{"전체"}</PfCategory>
                    <PfCategory ref={categoryRef[1]} onClick={handlePfCategory} value='광고&바이럴'>광고&바이럴</PfCategory>
                    <PfCategory ref={categoryRef[2]} onClick={handlePfCategory} value='유튜브콘텐츠'>유튜브콘텐츠</PfCategory>
                    <PfCategory ref={categoryRef[3]} onClick={handlePfCategory} value='모션그래픽'>모션그래픽</PfCategory>
                    <PfCategory ref={categoryRef[4]} onClick={handlePfCategory} value='시동을 걸다'>시동을 걸다</PfCategory>
                </PfCategoryBox>

                <PfContentBox width={pfboxWidth}>
                    {contentList}
                </PfContentBox>
            </PortfolioBox>
        </Wrapper>
    )
}

export default PortfolioPage