import PropTypes from 'prop-types';
import styles from './Post.module.scss';
import classNames from 'classnames/bind';
import Image from '../Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';

const cx = classNames.bind(styles);

const Post = ({ data }) => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h4 className={cx('title')}>{data.title}</h4>
                <Image className={cx('img')} src={data.img} alt={data.title} />
                <div className={cx('content')}>
                    <p className={cx('desc')}>{data.excerpt}</p>
                    <p className={cx('category')}>Category: {data.category}</p>
                    <div className={cx('updatedAt')}>
                        <FontAwesomeIcon color="orange" icon={faCalendarDays} />
                        <time>{data.publishedAt}</time>
                    </div>

                    <p className={cx('author')}>
                        Author: <span>{data.author}</span>
                    </p>
                    <Button to={`/post/${data.id}`} className={cx('btn')}>
                        Read more
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
