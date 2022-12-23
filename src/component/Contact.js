import React from "react";
import "../scss/Contact.scss";
import { FaRegEnvelope } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";

const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <div className="contact-textBox">
          <br />
          <div className="contact-detail-intro">
            구인 관련 및 궁금한 점이 있으시다면, 아래 연락처를 통해 연락
            바랍니다.
          </div>
        </div>
        <div className="contact-iconBox">
          <div className="contact-phoneBox">
            <div className="contact-phone">
              <a href="tel:010-7542-2441">
                <FaMobileAlt size="25" />
              </a>
            </div>
            <div className="contact-detail">+82 010-7542-2441</div>
          </div>
          <div className="contact-mailBox">
            <div className="contact-mail">
              <a href="mailto:jin0201948@gmail.com">
                <FaRegEnvelope size="25" />
              </a>
            </div>
            <div className="contact-detail">jin0201948@gmail.com</div>
          </div>

          <div className="contact-gitBox">
            <div className="contact-git">
              <a
                href="https://github.com/Nohkii"
                target="_blank"
                rel="noreferrer"
              >
                <GoMarkGithub size="25" />
              </a>
            </div>
            <div className="contact-detail">https://github.com/Nohkii</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
