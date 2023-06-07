import React from 'react';

import askNBRlogoIcon from '../assets/askBarLogo.svg';
import userProfileImageIcon from '../assets/userProfileImage.svg';
import dropDownIcon from '../assets/dropDownIcon.svg';


export default function NavBar() {
  return (
    <>
        <nav>
          <div className="navSection1">
            <img src={askNBRlogoIcon} />

            <p>AskNBR</p>
          </div>
          <div className="navSection2">
            <img src={userProfileImageIcon} />
            <div>
              <h3>Md. Nazim Uddin</h3>
              <p>VAT Audit and Intelligence</p>
            </div>
            <img className='navDropDownIcon' src={dropDownIcon} />
          </div>
        </nav>
    </>
  )
}
