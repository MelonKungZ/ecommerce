import React from 'react';
import { AiFillInstagram, AiOutlineFacebook} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Chanathip Headphones All rights reserverd</p>
      <p className="icons">
        <a href="https://www.instagram.com/j.qqz_/" target='_blank'><AiFillInstagram /></a>
        <a href="https://www.facebook.com/jab.chowapong.5/"><AiOutlineFacebook /></a>
      </p>
    </div>
  )
}

export default Footer