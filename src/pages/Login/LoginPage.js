import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './LoginPage.module.scss';
import { Link } from 'react-router-dom';
import config from '~/config';

const cx = classNames.bind(styles);

const LoginPage = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <form className={cx('form')}>
                    <h3 children={cx('title')}>Login</h3>
                    <div className={cx('row')}>
                        <i>
                            <FontAwesomeIcon icon={faUser} />
                        </i>
                        <input className={cx('input')} type="email" required placeholder="Email" />
                    </div>
                    <div className={cx('row')}>
                        <i>
                            <FontAwesomeIcon icon={faLock} />
                        </i>
                        <input className={cx('input')} type="password" placeholder="Password" />
                    </div>
                    <p className={cx('text')}>Forgot Password?</p>
                    <Button className={cx('btn-login')}>Login</Button>
                    <p className={cx('text-with')}>Or login with</p>
                    <div className={cx('social-login')}>
                        <div className={cx('col')}>
                            <i>
                                <FaFacebookF />
                            </i>
                            <p>Facebook</p>
                        </div>
                        <div className={cx('col')}>
                            <i>
                                <FaInstagram />
                            </i>
                            <p>Instagram</p>
                        </div>
                    </div>
                    <div className={cx('text')}>
                        <p>
                            Don't have a account?{' '}
                            <Link className={cx('link')} to={config.routes.register}>
                                SignUp now
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
