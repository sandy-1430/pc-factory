import React from 'react'
import '../styles/home.scss'
import banner_img from '../images/banner_speaker.png';
import shipping_icon from '../images/shipping_icon.png';
import support_icon from '../images/support_icon.png';
import warranty_icon from '../images/warranty_icon.png';
import gaming_icon from '../images/gaming_icon.png';
import gaming_spec from '../images/gaming_spec.png';


export default function Home() {

  return (
    <section className='home-page'>
        <div className="banner-sec">
            <div className="container">
                <div className="d-flx algn-cntr">
                    <div className="banner-sub-sec">
                        <h1>We build People <br className='hide-mob' /> before <br className='hide-mob' /> we build <span>PC</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br className='hide-mob' /> tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="btn-container">
                            <button type='button' className='btn primary-btn'>Get Quotes</button>
                        </div>
                    </div>
                    <div className="banner-sub-sec">
                        <div className="txt-cntr">
                            <img src={banner_img} alt="speaker" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="spec-tab-sec">
            <div className="container">
                <div className="d-flx algn-cntr gap-32">
                    <div className="spec-tab-nav d-flx algn-cntr just-cntr">
                       <div>
                            <img src={gaming_icon} alt="" />
                            <p>GAMING</p>
                       </div>
                    </div> 
                    <div className="spec-tab-nav d-flx algn-cntr just-cntr">
                       <div>
                            <img src={gaming_icon} alt="" />
                            <p>VIDEO PRODUCTION</p>
                       </div>
                    </div> 
                    <div className="spec-tab-nav d-flx algn-cntr just-cntr">
                       <div>
                            <img src={gaming_icon} alt="" />
                            <p>ENGINEERING WORKS</p>
                       </div>
                    </div> 
                    <div className="spec-tab-nav d-flx algn-cntr just-cntr">
                       <div>
                            <img src={gaming_icon} alt="" />
                            <p>DATA SCIENCE</p>
                       </div>
                    </div>  
                </div>
                <div className="spec-tab-detail">
                    <div className="d-flx">
                        <div className="spec-tab-det-sub">
                            <h2>GAMING</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit essdwde cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
                            <div className="btn-container">
                                <button type='button' className='btn'>Get Quote</button>
                            </div>
                        </div>
                        <div className="spec-tab-det-sub">
                            <div className="txt-cntr">
                                <img src={gaming_spec} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="specs-sec">
            <marquee>WHATWE<span>OFFER</span>WHATWE<span>OFFER</span>WHATWE<span>OFFER</span>WHATWE<span>OFFER</span>WHATWE<span>OFFER</span></marquee>
            <div className="container">
                <div className="d-flx algn-cntr gap-40">
                    <div className="specs-sub-box">
                        <div className="linear-bg-box d-flx algn-cntr just-cntr">
                            <img src={shipping_icon} alt="" />
                        </div>
                        <p>Free Shipping <br className='hide-mob' /> National wide</p>
                    </div>
                    <div className="specs-sub-box">
                        <div className="linear-bg-box d-flx algn-cntr just-cntr">
                            <img src={support_icon} alt="" />
                        </div>
                        <p>Life time <br className='hide-mob' /> technique Support</p>
                    </div>
                    <div className="specs-sub-box">
                        <div className="linear-bg-box d-flx algn-cntr just-cntr">
                            <img src={warranty_icon} alt="" />
                        </div>
                        <p>One year on-site Warranty in Metro Cities</p>
                    </div>
                </div> 
            </div>             
        </div>
    </section>
  )
}
