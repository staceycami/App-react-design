import React from 'react';
import { Button } from './Button';
import './Pricing.css';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'>Get the right plan for future product.</h1>
          <div className='pricing__container'>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <FaFire />
                </div>
                <h3>Starter</h3>
                <h4>Free</h4>
                <ul className='pricing__container-features'>
                  <li>1 Website</li>
                  <li>5 GB Hosting</li>
                  <li>Limitid Support</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  GetStarted
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <BsXDiamondFill />
                </div>
                <h3>Premium</h3>
                <h4>$29</h4>
                <p>per month</p>
                <ul className='pricing__container-features'>
                  <li>10 Website</li>
                  <li>15 GB Hosting</li>
                  <li>Premium Support</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='blue'>
                  GetStarted
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <GiCrystalize />
                </div>
                <h3>Enterprise</h3>
                <h4>$49</h4>
                <p>per month</p>
                <ul className='pricing__container-features'>
                  <li>Unlimited Website</li>
                  <li>5% Cash Back</li>
                  <li>Unlimited Spending</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  GetStarted
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;
