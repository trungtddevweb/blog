import { useState, useEffect } from 'react';
import styles from './HomePage.module.scss';
import classNames from 'classnames/bind';
import Sidebar from '~/layouts/components/Sidebar';
import * as request from '~/ultils/httpRequest';
import ListPost from '~/components/ListPost';
import axios from 'axios';

const cx = classNames.bind(styles);

const HomePage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //     setIsLoading(true);
    //     const fetchAPI = async () => {
    //         const result = await request.get('post/');
    //         setPosts(result);
    //         setIsLoading(false);
    //     };
    //     fetchAPI();
    // }, []);

    useEffect(() => {
        setIsLoading(true);
        const fetchPost = async () => {
            const result = await axios.get('/post');
            setPosts(result.data);
            setIsLoading(false);
        };
        fetchPost();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <div className={cx('newfeed')}>
                        <h4 className={cx('heading')}>Gần đây</h4>
                        <div className={cx('list-post')}>
                            {isLoading ? (
                                <div className={cx('loadingio-spinner-spin-35yb8wurz1r')}>
                                    <div className={cx('ldio-kbsxq5qomag')}>
                                        <div>
                                            <div></div>
                                        </div>
                                        <div>
                                            <div></div>
                                        </div>
                                        <div>
                                            <div></div>
                                        </div>
                                        <div>
                                            <div></div>
                                        </div>
                                        <div>
                                            <div></div>
                                        </div>
                                        <div>
                                            <div></div>
                                        </div>
                                        <div>
                                            <div></div>
                                        </div>
                                        <div>
                                            <div></div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <ListPost posts={posts} />
                            )}
                        </div>
                    </div>
                </div>
                <Sidebar />
            </div>
        </div>
    );
};

export default HomePage;
