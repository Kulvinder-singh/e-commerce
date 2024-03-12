import React from "react";
import footerlogo from "../assets/footer-logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import GlobeImage from "../assets/globe-free-img.png";
import LockImage from "../assets/lock-free-img.png";
import QualityImage from "../assets/quality-free-img.png";
import TagImage from "../assets/tag-free-img.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="container-fluid" style={{ width: "98.7vw" }}>
      <div
        className="d-flex justify-content-around text-center align-items-center bg-light mt-4"
        style={{ height: "60vh" }}
      >
        <div>
          <img className="f-image" src={GlobeImage} alt="img" />
          <h5>Worldwide Shipping</h5>
          <text>
            It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </text>
        </div>
        <div>
          <img className="f-image" src={QualityImage} alt="img" />

          <h5>Best Quality</h5>
          <text>
            It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </text>
        </div>
        <div>
          <img className="f-image" src={TagImage} alt="img" />

          <h5>Best Offers</h5>
          <text>
            It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </text>
        </div>
        <div>
          <img className="f-image" src={LockImage} alt="img" />

          <h5>Secure Payments</h5>
          <text>
            It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </text>
        </div>
      </div>
      <hr />
      <footer className="py-5 text-center">
        <div className="row">
          <div className="col-12">
            <h3>
              SALE UP TO 70% OFF FOR ALL CLOTHES & FASHION ITEMS, ON ALL BRANDS.
            </h3>
          </div>
        </div>

        <hr />
        <div className="row py-6 my-4">
          <div className="col-5">
            <img src={footerlogo} alt="" style={{ height: "30px" }} />
            <h4 className="m-2">The best look anytime, anywhere.</h4>
          </div>
          <div className="col-2">
            <h5>For Her</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">Women Jeans</li>
              <li className="nav-item mb-2">Tops and Shirts</li>
              <li className="nav-item mb-2">Women Jackets</li>
              <li className="nav-item mb-2">Heels and Flats</li>
              <li className="nav-item mb-2">Women Accessories</li>
            </ul>
          </div>

          <div className="col-2">
            <h5>For Him</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">Men Jeans</li>
              <li className="nav-item mb-2">Men Shirts</li>
              <li className="nav-item mb-2">Men Shoes</li>
              <li className="nav-item mb-2">Men Accessories</li>
              <li className="nav-item mb-2">Men Jackets</li>
            </ul>
          </div>

          <div className="col-2">
            <form>
              <h5>Subscribe</h5>
              <input
                type="text"
                placeholder=" Your email address...."
              /> <br /> <br />
              <button
                className=" bg-primary text-white"
                type="button"
                style={{
                  border: "none",
                  height: "40px",
                  width: "120px",
                }}
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
        <hr />
        <div className="d-flex py-2 my-2 m-4  justify-content-between">
          <p>Copyright © 2024 Brandstore. Powered by Brandstore.</p>
          <ul className="list-unstyled d-flex ">

            <Link target="_blank" rel="noreferrer noopener" to='https://www.facebook.com/'>
            <li className="ms-3">
              <FaFacebookF style={{color:"black"}} />
            </li>
            </Link>
            <Link target="_blank" to='https://www.youtube.com/'>
            <li className="ms-3">
              <FaYoutube  style={{color:"black"}}/>
            </li>
            </Link>
            <Link target="_blank" to='https://twitter.com/i/flow/login'>  
            <li className="ms-3">
              <FaTwitter  style={{color:"black"}}/>
            </li>
            </Link>
            <Link target="_blank" to='https://www.instagram.com/'>
            <li className="ms-3">
              <FaInstagram style={{color:"black"}} />
            </li>
            </Link>
            <Link target="_blank" to='https://www.google.com/'>
            <li className="ms-3">
              <FaGoogle st style={{color:"black"}}yle={{color:"black"}}/>
            </li>
            </Link>
          </ul>
        </div>
      </footer>
    </footer>
  );
};

export default Footer;
