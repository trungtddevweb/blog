import styles from './Footer.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Footer = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>Website created by SherWinTran ┬ęcopyright 2022</div>
        </div>
    );
};

export default Footer;
