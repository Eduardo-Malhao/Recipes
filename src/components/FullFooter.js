import React from 'react';
import { useHistory } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import '../styles/footer.css';

function FullFooter() {
  const history = useHistory();

  const eduLinkedin = 'https://www.linkedin.com/in/eduardo-malhao/';
  const eduGitHub = 'https://github.com/Eduardo-Malhao';
  const eduEmail = 'eduardo.malhao@outlook.com';
  const liviaLinkedin = 'https://www.linkedin.com/in/eduardo-malhao/';
  const liviaGitHub = 'https://github.com/Eduardo-Malhao';
  const liviaEmail = 'eduardo.malhao@outlook.com';

  const handleClickEdu = (e) => {
    if (e.target.alt === 'Linkedin') {
      window.open(eduLinkedin, '_blank');
    } else if (e.target.alt === 'Github') {
      window.open(eduGitHub, '_blank');
    } else if (e.target.alt === 'Email') {
      window.open(eduEmail, '_blank');
    }
  }

  return (
    <footer className="footer-container">
      <div
        className="credits"
      >
        <p>
          Site desenvolvido por Livia Boechat e Eduardo Malhão  *  2023
        </p>
        <h5>Quem nós somos</h5>

        <div
          className='footer-links'
        >
          <li>Eduardo Malhão</li>
          <a
            href={eduEmail}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdOutlineEmail
              alt="Email"
              onClick={ handleClickEdu}
            />
          </a>
          <a
            href={eduGitHub}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              alt="Github"
              onClick={ handleClickEdu }
            />
          </a>
          <a 
            href={eduLinkedin}
            target="_blank"
            rel="noopener noreferrer"
            >
            <FaLinkedin
              alt="Linkedin"
              onClick={handleClickEdu}
            />
          </a>

        </div>

        <div
          className='footer-links'
        >
          <li>Livia Boechat</li>
          <a
            href={eduEmail}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdOutlineEmail
              alt="Email"
              onClick={ handleClickEdu}
            />
          </a>
          <a
            href={eduGitHub}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              alt="Github"
              onClick={ handleClickEdu }
            />
          </a>
          <a 
            href={eduLinkedin}
            target="_blank"
            rel="noopener noreferrer"
            >
            <FaLinkedin
              alt="Linkedin"
              onClick={handleClickEdu}
            />
          </a>

        </div>
      </div>

    </footer>
  );
}

export default FullFooter;
