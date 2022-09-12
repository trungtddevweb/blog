import styles from './About.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const AboutPage = () => {
    return <div className={cx('wrapper')}>AboutPage</div>;
};

export default AboutPage;
