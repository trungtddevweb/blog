import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import Search from '../Search';

const cx = classNames.bind(styles);

const Header = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('logo')}>Logo</div>
                <Search />
                <div className={cx('navigation')}>navigation</div>
            </div>
        </div>
    );
};

export default Header;
