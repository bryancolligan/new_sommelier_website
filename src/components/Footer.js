import React from "react"
import SbEditable from "storyblok-react"

import cygnilabsImg from '@images/investors/ico-cygnilabs.png'
import standardImg from '@images/investors/ico-standard.png'
import multicoinImg from '@images/investors/ico-multicoin.png'
import alamedaImg from '@images/investors/ico-alameda.png'

import twitterImg from '@images/social/twitter.png'
import githubImg from '@images/social/github.png'
import discordImg from '@images/social/discord.png'
import telegramImg from '@images/social/telegram.png'

const Footer = () => {
  return (
    <footer className="text-center flex flex-col items-center py-20 mx-auto">
      <div className='footer-investors section-container'>
        <h2 className="text-center">Investors</h2>
        <div className='footer-investors__img-container'>
          <img src={cygnilabsImg} width='112' />
          <img src={standardImg} width='134' />
          <img src={multicoinImg} width='271' />
          <img src={alamedaImg} width='261' />
        </div>
      </div>
      <div className='footer_container'>
        <div className='footer-menu-wrapper'>
          <div className='footer-menu-sommelier'>
            <h4>Sommelier</h4>
            <div className='footer-menu-sommelier-wrapper'>
              <a href='/' className='footer-menu-item'>Home</a>
              <a href='/about-us' className='footer-menu-item'>About</a>
              <a href='/blog/' className='footer-menu-item'>Blog</a>
              <a href='/resources' className='footer-menu-item'>Resource</a>
            </div>
          </div>
          <div className='footer-menu-social'>
            <h4>Social</h4>
            <div className='footer-menu-social-wrapper'>
              <a href='https://twitter.com/sommfinance' target='_blank' className='footer-menu-item'>
                <img src={twitterImg} />
              </a>
              <a href='https://github.com/PeggyJV' target='_blank' className='footer-menu-item'>
                <img src={githubImg} />
              </a>
              <a href='https://discord.com/invite/ZcAYgSBxvY' target='_blank' className='footer-menu-item'>
                <img src={discordImg} />
              </a>
              <a href='https://t.me/getsomm' target='_blank' className='footer-menu-item'>
                <img src={telegramImg} />
              </a>
            </div>
          </div>
        </div>
        <p className='copyright'>Copyright © 2021 Sommelier</p>
        <p className='description'>
          Sommelier is alpha software. Sommelier is non-custodial and has no warranties. We also do not endorse any pools that we share on our channels. Pools may be compromised and things on Sommelier break all the time and you may lose your money. We are not giving you investment advice with this update and Sommelier does not control your funds. Again, all our software is alpha and undergoing daily updates and things can break all the time.
        </p>
      </div>
    </footer>
  )
}

export default Footer
