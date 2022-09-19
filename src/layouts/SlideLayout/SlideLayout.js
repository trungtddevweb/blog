import PropTypes from 'prop-types';
import styles from './SlideLayout.module.scss';
import classNames from 'classnames/bind';

// Comp
import Header from '../components/Header';
import Footer from '../components/Footer';
import Slide from '../components/Slide';

const cx = classNames.bind(styles);

const SlideLayout = ({ children }) => {
    return (
        <div className={cx('wrapper')}>
            <Header />
            {/* <Slide /> */}
            {/* <div className={cx('container')}>{children}</div> */}
            {/* <Footer /> */}
        </div>
    );
};

SlideLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default SlideLayout;
