import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import Search from '../Search';
import imgs from '~/assets/imgs';
import { Link } from 'react-router-dom';
import config from '~/config';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

const Header = () => {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <Link className={cx('link')} to={config.routes.home}>
                        <img className={cx('logo')} src={imgs.logo} alt="Memory" />
                    </Link>
                    <Search />
                    <div className={cx('navigation')}>
                        <ul className={cx('list')}>
                            <Button to={config.routes.home}>Home</Button>
                            <Button to={config.routes.contact}>Contact</Button>
                            <Button to={config.routes.write}>Write</Button>
                            <Button to={config.routes.login} primary>
                                Login
                            </Button>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
