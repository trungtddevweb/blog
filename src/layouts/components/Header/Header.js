import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import Search from '../Search';
import imgs from '~/assets/imgs';
import { Link } from 'react-router-dom';
import config from '~/config';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const cx = classNames.bind(styles);

const Header = () => {
    const user = false;
    const [showBars, setShowBars] = useState(false);
    const toggleBars = () => {
        setShowBars((prev) => !prev);
    };
    return (
        <header className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <Link className={cx('link')} to={config.routes.home}>
                        <img className={cx('logo')} src={imgs.logo} alt="Memory" />
                    </Link>
                    <Search />
                    <FontAwesomeIcon onClick={toggleBars} className={cx('bars')} icon={faBars} />
                    <div
                        className={cx('navigation', {
                            showBars,
                        })}
                    >
                        <ul className={cx('list')}>
                            <Button className={cx('item')} to={config.routes.home}>
                                Trang chủ
                            </Button>
                            <Button className={cx('item')} to={config.routes.contact}>
                                Liên hệ
                            </Button>
                            <Button className={cx('item')} to={config.routes.write}>
                                Viết blog
                            </Button>
                            <Button className={cx('item')} to={config.routes.category}>
                                Thể loại
                            </Button>
                            {!user ? (
                                <Button className={cx('item')} to={config.routes.login}>
                                    Đăng nhập
                                </Button>
                            ) : (
                                <Button className={cx('item')} to={config.routes.login}>
                                    Đăng xuất
                                </Button>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
