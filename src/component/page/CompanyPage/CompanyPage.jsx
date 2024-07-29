import { Wrapper, BackgroundImg, Bulkhead, DescryptionBox, Title, Descrypt, Background_right_logo } from './CompanyHTML';
import bgImg from "../../../resource/company/company.png"
import backLogo from "../../../resource/contact/contact_logo.png";

const CompanyPage = () => {
    var mobile = (/iphone|ipad|ipod|android/i.test(navigator.userAgent.toLowerCase()));
    const dpBoxWidth = window.innerWidth * 11 / 12;
    const dpBoxHeight = window.innerHeight;

    return (
        <Wrapper>
            <BackgroundImg src={bgImg}/>
            <Bulkhead/>
            <DescryptionBox width={dpBoxWidth} height={dpBoxHeight}>
                <Title>프레임에 가치를 담는<br/>미디어 프로덕션<br/>시동입니다.</Title>
                <Descrypt>
                    <p>시동 프로덕션은 영상콘텐츠를 기획 및 제작합니다<br/><br/></p>
                    기업의 홍보&바이럴 영상부터<br/>
                    다큐멘터리, 유튜브, 모션그래픽 등<br/>
                    다양한 분야에서의 미디어활동을 이어나가고 있으며,<br/>
                    시동만의 색과 감각을 영상에 담아내는<br/>
                    작업들을 진행하고 있습니다
                {!mobile && <Background_right_logo src={backLogo}/>}
                </Descrypt>
            </DescryptionBox>
        </Wrapper>
    )
}

export default CompanyPage