import styles from './Footer.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Footer = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                Website created by SherWinTran ©copyright 2022 , list social media to contact
            </div>
        </div>
    );
};

export default Footer;
