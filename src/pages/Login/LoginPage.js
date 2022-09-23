import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './LoginPage.module.scss';
import { Link } from 'react-router-dom';
import config from '~/config';
import { useState } from 'react';

const cx = classNames.bind(styles);

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Handle the login
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <form className={cx('form')} method="POST">
                    <h3 children={cx('title')}>Login</h3>
                    <div className={cx('row')}>
                        <i>
                            <FontAwesomeIcon icon={faUser} />
                        </i>
                        <input
                            onChange={handleEmail}
                            className={cx('input')}
                            type="email"
                            required
                            placeholder="Email"
                            value={email}
                        />
                    </div>
                    <div className={cx('row')}>
                        <i>
                            <FontAwesomeIcon icon={faLock} />
                        </i>
                        <input
                            onChange={handlePassword}
                            className={cx('input')}
                            type="password"
                            placeholder="Password"
                            value={password}
                        />
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
