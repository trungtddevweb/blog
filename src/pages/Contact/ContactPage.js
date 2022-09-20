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
                <h3 className={cx('contact-text')}>Liên hệ</h3>
                <div className={cx('section')}>
                    <h4 className={cx('question')}>Bạn có bất kì câu hỏi nào? Để lại nó dưới đây</h4>
                    <form className={cx('form')}>
                        <input type="text" required placeholder="Tên" />
                        <input type="email" required placeholder="Email" />
                        <input type="text" placeholder="Hãy để lại câu hỏi" />
                        <Button primary>
                            <FontAwesomeIcon className={cx('icon')} icon={faPaperPlane} />
                        </Button>
                    </form>
                </div>
                <div className={cx('section')}>
                    <h4 className={cx('title')}>Memory - Chia sẻ cuộc sống của bạn</h4>
                    <div className={cx('content')}>
                        <p>Mọi người có thể viết blog trên website này.</p>
                        <p>Chia sẻ cảm xúc của bạn, bao gồm cả niềm vui và nỗi buồn của bạn trong cuộc sống.</p>
                        <p>Mọi người được phép chia sẻ ý tưởng của mình với nhau.</p>
                        <p>Một nơi mà mọi người hỗ trợ lẫn nhau và trưởng thành hơn trong cuộc sống.</p>
                        <p>
                            Hãy tới với Memory, nơi những người khác sẽ lắng nghe bạn và chia sẻ với bạn, một nơi để bạn
                            tự do trải lòng mình tới mọi người.
                        </p>
                    </div>
                </div>
                <div className={cx('section')}>
                    <h4 className={cx('title')}>Điều khoản - Quy tắc</h4>
                    <div className={cx('content')}>
                        <p>Hãy hòa nhập và tránh định kiến lẫn nhau.</p>
                        <p>Đăng nội dung đi ngược lại tiêu chuẩn của cộng đồng đều bị cấm.</p>
                        <p>
                            Cùng nhau, chúng ta hãy tạo ra một không gian nơi các cá nhân có thể cởi mở bày tỏ cảm xúc
                            của họ.
                        </p>
                        <p>Website created by SherWinTran ©copyright 2022</p>
                    </div>
                </div>
                <div className={cx('section')}>
                    <h4 className={cx('title')}>Liên hệ mạng xã hội</h4>
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
                        <Button
                            href="https://www.instagram.com/sherwintran01"
                            color="#e1306c"
                            target="_blank"
                            className={cx('social-item')}
                        >
                            <FaInstagram />
                            <span>Instagram</span>
                        </Button>
                        <Button
                            href="https://www.youtube.com/channel/UCWgAcYbQqpri-nLTEQwiY7g"
                            color="#ff0000"
                            target="_blank"
                            className={cx('social-item')}
                        >
                            <FaYoutube />
                            <span>YouTube</span>
                        </Button>
                        <Button color="#1da1f2" target="_blank" className={cx('social-item')}>
                            <FaTwitter />
                            <span>Twitter</span>
                        </Button>
                        <Button
                            href="https://www.linkedin.com/in/tr%E1%BA%A7n-%C4%91%C3%ACnh-trung-736515244/"
                            color="#0077b5"
                            target="_blank"
                            className={cx('social-item')}
                        >
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
