import { useState, useEffect } from 'react';
import styles from './HomePage.module.scss';
import classNames from 'classnames/bind';
import Sidebar from '~/layouts/components/Sidebar';
import Post from '~/components/Post';

const cx = classNames.bind(styles);

const HomePage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => setPosts(data))
            .catch((err) => console(err));
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <div className={cx('newfeed')}>
                        <h4 className={cx('heading')}>Recent</h4>
                        <div className={cx('list-post')}>
                            {posts.map((post) => (
                                <Post post={post} key={post.id} />
                            ))}
                        </div>
                    </div>
                </div>
                <Sidebar />
            </div>
        </div>
    );
};

export default HomePage;
