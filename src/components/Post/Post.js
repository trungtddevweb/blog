import styles from './Post.module.scss';
import classNames from 'classnames/bind';
import Image from '../Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';

const cx = classNames.bind(styles);

const Post = ({ post }) => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h4 className={cx('title')}>{post.title}</h4>
                <Image className={cx('img')} src={post.image} />
                <div className={cx('content')}>
                    <p className={cx('desc')}>
                        All the videos, songs, images, and graphics used in the video belong to their respective owners
                        and I do not claim any right over them.All the videos, songs, images, and graphics used in the
                        video belong to their respective owners and I do not claim any right over them.
                    </p>
                    <p className={cx('category')}>Category: {post.category}</p>
                    <div className={cx('updatedAt')}>
                        <FontAwesomeIcon icon={faCalendarDays} />
                        <time>10 days ago</time>
                    </div>

                    <p className={cx('author')}>
                        Author: <span>Trung Tran</span>
                    </p>
                    <Button to={`/post/slug`} className={cx('btn')}>
                        Read more
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Post;
