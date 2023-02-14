import { FaGithub } from 'react-icons/fa';
import { useContext } from 'react';
import {FaTwitter} from 'react-icons/fa'
import { ThemeContext } from '../mainPage/MainPage';
import '../mainPage/mainPage.css'

const Footer = () => {
  const darkTheme = useContext(ThemeContext);
  const style = {
    color: darkTheme ? 'black' : 'white',
    fontSize: '20px',
  };
  return (
    <div className="footerSection">
      <a style={style} href="">
        <FaGithub />
      </a>
      <a style={style} href="">
        <FaTwitter />
      </a>
      <a style={style} href="">
        <FaGithub />
      </a>
    </div>
  );
};

export default Footer;