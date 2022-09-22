import PropTypes from 'prop-types';
import styles from './Post.module.scss';
import classNames from 'classnames/bind';
import Image from '../Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';

const cx = classNames.bind(styles);

const Post = ({ data }) => {
    const categories = data.category;
    const published = data.createdAt;
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h4 className={cx('title')}>{data.title}</h4>
                <Image className={cx('img')} src={data.image} alt={data.title} />
                <div className={cx('content')}>
                    <p className={cx('desc')}>{data.content}</p>
                    <div className={cx('category')}>
                        Thể loại:{' '}
                        <div>
                            {categories.map((category, i) => (
                                <span className={cx('item-category')} key={i}>
                                    {category}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className={cx('updatedAt')}>
                        <FontAwesomeIcon color="orange" icon={faCalendarDays} />
                        <time>{published.slice(0, 10)}</time>
                    </div>

                    <p className={cx('author')}>
                        Tác giả: <span>{data.userId}</span>
                    </p>
                    <Button to={`/post/${data._id}`} className={cx('btn')}>
                        Đọc tiếp
                    </Button>
                </div>
            </div>
        </div>
    );
};

Post.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Post;
