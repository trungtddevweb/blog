import { useState, useEffect } from 'react';
import styles from './HomePage.module.scss';
import classNames from 'classnames/bind';
import Sidebar from '~/layouts/components/Sidebar';
import axios from 'axios';
import ListPost from '~/components/ListPost';

const cx = classNames.bind(styles);

const HomePage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            const result = await axios.get('https://fakestoreapi.com/products');
            const { data } = result;
            setPosts(data);
        };
        fetchAPI();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <div className={cx('newfeed')}>
                        <h4 className={cx('heading')}>Recent</h4>
                        <div className={cx('list-post')}>
                            <ListPost posts={posts} />
                        </div>
                    </div>
                </div>
                <Sidebar />
            </div>
        </div>
    );
};

export default HomePage;
