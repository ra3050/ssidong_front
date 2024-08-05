import { Wrapper, Banner } from "./MainHTML";
import { AboutBox, Title, ContentBox, ContentGroup, Content_main_box, Content_main_subBox, Content_main_box_icon, Content_main_box_title, Content_main_descrypt } from "./MainHTML";
import { Mobile_icon_table, Mobile_icon } from "./Main_Mobile_HTML";
import banner from "../../../resource/home_/banner.mp4"
import advance from "../../../resource/home_/advance.png"
import comunity from "../../../resource/home_/comunity.png"
import trend from "../../../resource/home_/trend.png"
import { useRef } from "react";


const MainPage = () => {
    const contentRef = [useRef(), useRef(), useRef()];
    var mobile = (/iphone|ipad|ipod|android/i.test(navigator.userAgent.toLowerCase()));

    const handle_mobile_icon = (index) => {
        contentRef.forEach(ref => {
            ref.current.style.height = 0
            ref.current.style.opacity = 0;
        })

        contentRef[index].current.style.height = `${contentRef[index].current.scrollWidth}px`
        contentRef[index].current.style.opacity = 1;
    }

    return (
        <Wrapper>
            <Banner src={banner} autoPlay muted loop playsInline />
            <AboutBox>
                <Title>ABOUT US</Title>
                {!mobile ? (
                    <ContentBox>
                        <ContentGroup>
                            <Content_main_box >
                                <Content_main_box_title>TREND</Content_main_box_title>
                                <Content_main_descrypt>'트렌디'한 감각을 담아내다</Content_main_descrypt>
                                <Content_main_box_icon src={trend} />
                            </Content_main_box>
                            <Content_main_subBox>
                                <Content_main_descrypt>{"고객사와 시청자 모두가 만족할 수 있는 영상을 제작합니다\n고객이 원하는 방향과 목적을 바탕으로 기획안을 도출,\n원활한 고통을 통해 효율적인 제작 방향을 제시하고,\n시동만의 감각을 담아낸 영상을 제공합니다"}</Content_main_descrypt>
                            </Content_main_subBox>
                        </ContentGroup>

                        <ContentGroup>
                            <Content_main_box>
                                <Content_main_box_title>COMMUNITY</Content_main_box_title>
                                <Content_main_descrypt>'함께'의 가치를 공유하다</Content_main_descrypt>
                                <Content_main_box_icon src={comunity} />
                            </Content_main_box>
                            <Content_main_subBox>
                                <Content_main_descrypt>{"고객사와 시청자 모두가 만족할 수 있는 영상을 제작합니다\n고객이 원하는 방향과 목적을 바탕으로 기획안을 도출,\n원활한 고통을 통해 효율적인 제작 방향을 제시하고,\n시동만의 감각을 담아낸 영상을 제공합니다"}</Content_main_descrypt>
                            </Content_main_subBox>
                        </ContentGroup>

                        <ContentGroup>
                            <Content_main_box>
                                <Content_main_box_title>ADVANCE</Content_main_box_title>
                                <Content_main_descrypt>계속해서 '나아가다'</Content_main_descrypt>
                                <Content_main_box_icon src={advance} />
                            </Content_main_box>
                            <Content_main_subBox>
                                <Content_main_descrypt>{"고객사와 시청자 모두가 만족할 수 있는 영상을 제작합니다\n고객이 원하는 방향과 목적을 바탕으로 기획안을 도출,\n원활한 고통을 통해 효율적인 제작 방향을 제시하고,\n시동만의 감각을 담아낸 영상을 제공합니다"}</Content_main_descrypt>
                            </Content_main_subBox>
                        </ContentGroup>
                    </ContentBox>
                ) : (
                    <>
                        <Mobile_icon_table>
                            <button onClick={() => handle_mobile_icon(0)}><Mobile_icon src={trend} /></button>
                            <button onClick={() => handle_mobile_icon(1)}><Mobile_icon src={comunity} /></button>
                            <button onClick={() => handle_mobile_icon(2)}><Mobile_icon src={advance} /></button>
                        </Mobile_icon_table>

                        <ContentBox>
                            <ContentGroup ref={contentRef[0]}>
                                <Content_main_box>
                                    <Content_main_box_title>TREND</Content_main_box_title>
                                    <Content_main_descrypt>'트렌디'한 감각을 담아내다</Content_main_descrypt>
                                    <Content_main_box_icon src={trend} />
                                </Content_main_box>
                                <Content_main_subBox>
                                    <Content_main_descrypt>{"고객사와 시청자 모두가 만족할 수 있는 영상을 제작합니다\n고객이 원하는 방향과 목적을 바탕으로 기획안을 도출,\n원활한 고통을 통해 효율적인 제작 방향을 제시하고,\n시동만의 감각을 담아낸 영상을 제공합니다"}</Content_main_descrypt>
                                </Content_main_subBox>
                            </ContentGroup>

                            <ContentGroup ref={contentRef[1]}>
                                <Content_main_box>
                                    <Content_main_box_title>COMMUNITY</Content_main_box_title>
                                    <Content_main_descrypt>'함께'의 가치를 공유하다</Content_main_descrypt>
                                    <Content_main_box_icon src={comunity} />
                                </Content_main_box>
                                <Content_main_subBox>
                                    <Content_main_descrypt>{"고객사와 시청자 모두가 만족할 수 있는 영상을 제작합니다\n고객이 원하는 방향과 목적을 바탕으로 기획안을 도출,\n원활한 고통을 통해 효율적인 제작 방향을 제시하고,\n시동만의 감각을 담아낸 영상을 제공합니다"}</Content_main_descrypt>
                                </Content_main_subBox>
                            </ContentGroup>

                            <ContentGroup ref={contentRef[2]}>
                                <Content_main_box>
                                    <Content_main_box_title>ADVANCE</Content_main_box_title>
                                    <Content_main_descrypt>계속해서 '나아가다'</Content_main_descrypt>
                                    <Content_main_box_icon src={advance} />
                                </Content_main_box>
                                <Content_main_subBox>
                                    <Content_main_descrypt>{"고객사와 시청자 모두가 만족할 수 있는 영상을 제작합니다\n고객이 원하는 방향과 목적을 바탕으로 기획안을 도출,\n원활한 고통을 통해 효율적인 제작 방향을 제시하고,\n시동만의 감각을 담아낸 영상을 제공합니다"}</Content_main_descrypt>
                                </Content_main_subBox>
                            </ContentGroup>
                        </ContentBox>
                    </>

                )}
            </AboutBox>
        </Wrapper>
    )
}

export default MainPage