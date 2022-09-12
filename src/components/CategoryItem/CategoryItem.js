import PropTypes from 'prop-types';
import styles from './CategoryItem.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const CategoryItem = ({ data }) => {
    return (
        <div className={cx('wrapper')}>
            <Link to={data.to}>
                <div className={cx('container')}>
                    <i>{data.icon}</i>
                    <h5 className={cx('title')}>{data.title}</h5>
                </div>
            </Link>
        </div>
    );
};

CategoryItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default CategoryItem;
