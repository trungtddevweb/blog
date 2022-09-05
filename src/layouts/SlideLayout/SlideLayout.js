import PropTypes from 'prop-types';
import styles from './SlideLayout.module.scss';
import classNames from 'classnames/bind';

// Comp
import Header from '../components/Header';
import Search from '../components/Search';

const cx = classNames.bind(styles);

const SlideLayout = ({ children }) => {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <Search />
            <div className={cx('container')}>{children}</div>
        </div>
    );
};

SlideLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default SlideLayout;
