import React from "react";
import "../scss/About.scss";

const About = () => {
  return (
    <div className="about-container">
      <div className="leftBox">
        <div className="photo"></div>
        <div className="name">
          노은기
          <br />
          학력사항~<br/>
        </div>
      </div>
      <div className="rightBox">
        <div className="carrer">
          <span>경력</span>
          <br />
          <br />
         
            <p></p>- 현대카드 어린이집 2020.3~2022.3 근무<br />
            - ncsoft 어린이집 2022.3~2022.9 근무
          
          
        </div>
        <div className="introduce">
          <span>소개</span>
          <br />
          <br />
          안녕하세요 저는 노은기입니다~~ 저의 설명~~ 1분 자기소개 내용 복붙~~
        </div>
      </div>
    </div>
  );
};

export default About;
