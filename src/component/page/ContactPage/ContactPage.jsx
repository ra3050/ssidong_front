import { useState } from "react";
import { Wrapper, Title, CenterContactBox, Center_Left_Logo, Center_right_contact_box, Center_right_contact_subtitle,
          Center_right_contact_select, Center_right_contact_input ,Center_right_contact_descryption, Center_right_contact_sender, Center_Left_Logo_Box } from "./ContactHTML";
import ImageSlider from "./ImageSlider";
import { requestSendEmail } from "../../../request/requestAPI";
import logo from "../../../resource/contact/contact_logo.png";

const ContactPage = () => {
    const [inquiry, setInquiry] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [phone, setPhone] = useState('')
    const [projectName, setProjectName] = useState('')
    const [email, setEmail] = useState('')
    const [descrypt, setDescrypt] = useState('')

    const handleSender = (e) => {
        const info = {
            inquiry: inquiry,
            companyName: companyName,
            phone: phone,
            projectName: projectName,
            email: email,
            descrypt: descrypt,
        }

        requestSendEmail(info, data => {
            if (data) alert("문의 메일이 발송되었습니다.")
            else alert("문의메일 발송에 오류가 발생하였습니다.")
        })
    }

    return (
        <Wrapper>
            <Title>CONTACT US</Title>
            <CenterContactBox>
                <Center_Left_Logo_Box>
                    <Center_Left_Logo src={logo}/>
                </Center_Left_Logo_Box>
                <Center_right_contact_box>
                    <Center_right_contact_subtitle>문의</Center_right_contact_subtitle>
                    <Center_right_contact_select onChange={e => setInquiry(e.target.selectedOptions[0].value)}>
                        <option value=''>(선택)</option>
                        <option value="홍보영상">홍보영상</option>
                        <option value="이벤트">이벤트</option>
                        <option value="유튜브콘텐츠">유튜브콘텐츠</option>
                        <option value="etc.">etc.</option>
                    </Center_right_contact_select>
                    <Center_right_contact_subtitle>성명/회사명</Center_right_contact_subtitle>
                    <Center_right_contact_input type="text" onChange={e => setCompanyName(e.target.value)}/>
                    <Center_right_contact_subtitle>연착처</Center_right_contact_subtitle>
                    <Center_right_contact_input type="text" onChange={e => setPhone(e.target.value)}/>
                    <Center_right_contact_subtitle>프로젝트명</Center_right_contact_subtitle>
                    <Center_right_contact_input type="text" onChange={e => setProjectName(e.target.value)}/>
                    <Center_right_contact_subtitle>이메일</Center_right_contact_subtitle>
                    <Center_right_contact_input type="text" onChange={e => setEmail(e.target.value)}/>
                    <Center_right_contact_subtitle>상세내용</Center_right_contact_subtitle>
                    <Center_right_contact_descryption type="text" onChange={e => setDescrypt(e.target.value)}/>
                    <Center_right_contact_sender onClick={handleSender}>보내기</Center_right_contact_sender>
                </Center_right_contact_box>
            </CenterContactBox>
            <ImageSlider/>
        </Wrapper>
    )
}

export default ContactPage