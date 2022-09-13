import styles from './PostItem.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const PostItem = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}></div>
        </div>
    );
};

export default PostItem;
