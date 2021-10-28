import React from 'react';
import { ICdiscord, ICfacebook, ICgithub, ICinstragram, ICtelegram, ICtwitter, LogoVs } from '../../../assets';
import './footer.scss';

const Icon = ({img})=>{
  return (
    <div className="icon-wrapper">
      <img className="icon-medsos" src={img} alt="icon" />
    </div>
  )
}
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div>
          <img className="logo" src={LogoVs} alt="logo" />
        </div>
        <div className="social-wrapper">
          <Icon img={ICfacebook} />
          <Icon img={ICtwitter} />
          <Icon img={ICinstragram} />
          <Icon img={ICtelegram} />
          <Icon img={ICdiscord} />
          <Icon img={ICgithub} />
        </div>
      </div>
      <div className="copyright">
        <p>Copyright</p>
      </div>
    </div>
  )
}

export default Footer
