import React from 'react';
import { Link } from 'react-router-dom';
import {
  BsGithub,
  BsYoutube,
  BsInstagram,
  BsTwitter,
  BsFacebook,
} from 'react-icons/bs';
import './Footer.scss';
const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="../../images/newsletter.png" alt="newsletter" />
                <h2 className="mb-0 text-white">Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white fs-6">
                  Hno : 250 Kim Giang, <br /> Hoang Mai, Ha Noi <br />
                  PinCode: 19A
                </address>
                <a
                  href="tel:+91 8264954234"
                  className="mt-3 d-block mb-1 text-white"
                >
                  +91 8264954234
                </a>
                <a
                  href="mailto:navdeepdahiya753@gmail.com"
                  className="mt-2 d-block mb-0 text-white"
                >
                  buivananh01072003@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-15 mt-4">
                  <a className="text-white icon-app" href="/s">
                    <BsFacebook className="fs-6" />
                  </a>
                  <a className="text-white icon-app" href="/s">
                    <BsInstagram className="fs-6" />
                  </a>
                  <a className="text-white icon-app" href="/s">
                    <BsGithub className="fs-6" />
                  </a>
                  <a className="text-white icon-app" href="/s">
                    <BsYoutube className="fs-6" />
                  </a>
                  <a className="text-white icon-app" href="/s">
                    <BsTwitter className="fs-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-link d-flex flex-column">
                <Link to="/privacy-policy" className="text-white py-2 mb-1">
                  Privacy Policy
                </Link>
                <Link to="/refund-policy" className="text-white py-2 mb-1">
                  Refund Policy
                </Link>
                <Link to="/shipping-policy" className="text-white py-2 mb-1">
                  Shipping Policy
                </Link>
                <Link to="/term-conditions" className="text-white py-2 mb-1">
                  Terms & Conditions
                </Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Our App</h4>
              <p className="text-white">
                Dowload our App and get extra 15% Discount on your first
                Order..!
              </p>
              <div className="col-12 mt-3">
                <img
                  className="col-5 app-image"
                  src="../../images/google-play.png"
                  alt=""
                />
                <img
                  className="col-5 app-image"
                  src="../../images/app-store.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Powered by VanhDev
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
