import styels from './ContactPage.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';

const cx = classNames.bind(styels);

const ContactPage = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h3>Contact</h3>
                <div className={cx('section')}>
                    <h4 className={cx('question')}>Have a question? Leave comment below</h4>
                    <form className={cx('form')}>
                        <input type="text" required placeholder="Name" />
                        <input type="email" required placeholder="Email" />
                        <input type="text" placeholder="Please enter a question" />
                        <Button primary>
                            <FontAwesomeIcon className={cx('icon')} icon={faPaperPlane} />
                        </Button>
                    </form>
                </div>
                <div className={cx('section')}>
                    <h4 className={cx('title')}>Memory - Sharing your life</h4>
                    <div className={cx('content')}>
                        <p>Everybody may blog on this website.</p>
                        <p>Sharing your feelings, including your pleasure and grief in life.</p>
                        <p>Everyone is allowed to share their ideas with one another.</p>
                        <p>A place where everybody supports one another and advances in life</p>
                        <p>
                            Go to Memory, where others will listen to you and share with you, if you don't have anywhere
                            else to do so.
                        </p>
                    </div>
                </div>
                <div className={cx('section')}>
                    <h4 className={cx('title')}>Policy - Rule</h4>
                    <div className={cx('content')}>
                        <p>Be inclusive and refrain from prejudice.</p>
                        <p>Posting content that goes against the community's standards is prohibited.</p>
                        <p>Together, let's create a space where individuals may openly express their emotions.</p>
                        <p>Website created by SherWinTran ©copyright 2022</p>
                    </div>
                </div>
                <div className={cx('section')}>
                    <h4 className={cx('title')}>Social Media Contact</h4>
                    <ul className={cx('social-list')}>
                        <Button
                            href="https://www.facebook.com/trung02032001"
                            color="#1877f2"
                            target="_blank"
                            className={cx('social-item')}
                        >
                            <FaFacebookF />
                            <span>Facebook</span>
                        </Button>
                        <Button color="#e1306c" target="_blank" className={cx('social-item')}>
                            <FaInstagram />
                            <span>Instagram</span>
                        </Button>
                        <Button color="#ff0000" target="_blank" className={cx('social-item')}>
                            <FaYoutube />
                            <span>YouTube</span>
                        </Button>
                        <Button color="#1da1f2" target="_blank" className={cx('social-item')}>
                            <FaTwitter />
                            <span>Twitter</span>
                        </Button>
                        <Button color="#0077b5" target="_blank" className={cx('social-item')}>
                            <FaLinkedin />
                            <span>Linked In</span>
                        </Button>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
