import Email from '../../assets/icons/envelope-regular.svg';
import LinkedIn from '../../assets/icons/linkedin-brands.svg';
import Twitter from '../../assets/icons/twitter-square-brands.svg';
import Github from '../../assets/icons/github-square-brands.svg';

import './PageFooter.scss';

function PageFooter() {
    return (
        <>
            <div className='footer__container'>
                <p className='footer__copyright'>© jims.codes 2021</p>
                <a className='footer__icon' href='mailto:jims.codes@gmail.com'>
                    <img src={Email} alt='email icon' className='footer__icon'></img>
                </a>
                <a className='footer__icon' href='https://www.linkedin.com/in/jim-lougheed/'>
                    <img src={LinkedIn} alt='linkedin icon' className='footer__icon'></img>
                </a>
                <a className='footer__icon' href='https://twitter.com/JimsCodes'>
                    <img src={Twitter} alt='twitter icon' className='footer__icon'></img>
                </a>
                <a className='footer__icon' href='https://github.com/jim-lougheed'>
                    <img src={Github} alt='github icon' className='footer__icon'></img>
                </a>
            </div>
        </>
    )
}

export default PageFooter;