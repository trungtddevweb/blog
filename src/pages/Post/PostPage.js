// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './PostPage.module.scss';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faUser } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const PostPage = () => {
    const { postId } = useParams();
    const [postDetail, setPostDetail] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    // Fetching API
    useEffect(() => {
        const fetchPostDetail = async () => {
            setIsLoading(true);
            const result = await axios.get(`http://localhost:3001/api/post/${postId}`);
            const { data } = result;
            setPostDetail(data);
            setIsLoading(false);
        };
        fetchPostDetail();
    }, [postId]);
    const categories = postDetail.category;
    const published = postDetail.createdAt;

    return (
        <div className={cx('wrapper')}>
            {isLoading ? (
                <div className={cx('loadingio-spinner-dual-ball-3f6tj67ctil')}>
                    <div className={cx('ldio-be45kgc28r4')}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            ) : (
                <div className={cx('container')}>
                    <Image alt={postDetail.title} className={cx('img')} src={postDetail.image} />
                    <div className={cx('wrapper-post')}>
                        <h3 className={cx('title')}>{postDetail.title}</h3>
                        <article className={cx('content')}>{postDetail.content}</article>
                        <div className={cx('category')}>
                            Thể loại:
                            {categories ? (
                                categories.map((c, i) => (
                                    <span key={i} className={cx('category-item')}>
                                        {c}
                                    </span>
                                ))
                            ) : (
                                <span className={cx('category-item')}></span>
                            )}
                        </div>
                        <div className={cx('date')}>
                            <FontAwesomeIcon color="orange" icon={faCalendarDays} />
                            {published ? <span className={cx('time')}>{published.slice(0, 10)}</span> : <span></span>}
                        </div>
                        <div className={cx('author')}>
                            <FontAwesomeIcon color="gray" icon={faUser} />
                            <span>{postDetail.userId}</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PostPage;
