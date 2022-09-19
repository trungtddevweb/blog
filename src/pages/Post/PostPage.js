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
            const result = await axios.get(`https://631e0ffccc652771a490d276.mockapi.io/api/collection/post/${postId}`);
            const { data } = result;
            setPostDetail(data);
            setIsLoading(false);
        };
        fetchPostDetail();
    }, [postId]);

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
                    <Image alt={postDetail.title} className={cx('img')} src={postDetail.img} />
                    <div className={cx('wrapper-post')}>
                        <h3 className={cx('title')}>{postDetail.title}</h3>
                        <p className={cx('content')}>{postDetail.content}</p>
                        <p className={cx('category')}>Category: {postDetail.category}</p>
                        <div className={cx('date')}>
                            <FontAwesomeIcon color="orange" icon={faCalendarDays} />
                            <span>{postDetail.publishedAt}</span>
                        </div>
                        <div className={cx('author')}>
                            <FontAwesomeIcon color="gray" icon={faUser} />
                            <span>{postDetail.author}</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PostPage;
