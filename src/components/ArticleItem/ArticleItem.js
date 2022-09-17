import PropTypes from 'prop-types';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Image from '../Image';
import styles from './ArticleItem.module.scss';

const cx = classNames.bind(styles);

const ArticleItem = ({ post }) => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <FontAwesomeIcon className={cx('icon')} icon={faSearch} />
                <Image
                    className={cx('img')}
                    src="https://scontent.fhan4-1.fna.fbcdn.net/v/t39.30808-1/265750675_866650510682927_5248045279842077391_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=ce03ZLUZl6oAX_IIOMQ&_nc_ht=scontent.fhan4-1.fna&oh=00_AT_6ezRXupCXMbYlIGBHj4yguonW11Rp2ZATDat5o3IUgw&oe=63290EC9"
                />
                <div className={cx('content')}>
                    <h4 className={cx('title')}>{post.title}</h4>
                    <p className={cx('author')}>Trung Tran</p>
                </div>
            </div>
        </div>
    );
};

ArticleItem.propTypes = {
    post: PropTypes.object.isRequired,
};

export default ArticleItem;
