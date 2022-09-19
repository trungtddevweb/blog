import { useState, useEffect } from 'react';
import styles from './HomePage.module.scss';
import classNames from 'classnames/bind';
import Sidebar from '~/layouts/components/Sidebar';
import axios from 'axios';
import ListPost from '~/components/ListPost';

const cx = classNames.bind(styles);

const HomePage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        const fetchAPI = async () => {
            const result = await axios.get('https://631e0ffccc652771a490d276.mockapi.io/api/collection/post');
            const { data } = result;
            setPosts(data);
            setIsLoading(false);
        };
        fetchAPI();
    }, []);

    return (
        //     <div className={cx('wrapper')}>
        //         <div className={cx('container')}>
        //             <div className={cx('content')}>
        //                 <div className={cx('newfeed')}>
        //                     <h4 className={cx('heading')}>Recent</h4>
        //                     <div className={cx('list-post')}>
        //                         {isLoading ? (
        //                             <div className={cx('loadingio-spinner-spin-35yb8wurz1r')}>
        //                                 <div className={cx('ldio-kbsxq5qomag')}>
        //                                     <div>
        //                                         <div></div>
        //                                     </div>
        //                                     <div>
        //                                         <div></div>
        //                                     </div>
        //                                     <div>
        //                                         <div></div>
        //                                     </div>
        //                                     <div>
        //                                         <div></div>
        //                                     </div>
        //                                     <div>
        //                                         <div></div>
        //                                     </div>
        //                                     <div>
        //                                         <div></div>
        //                                     </div>
        //                                     <div>
        //                                         <div></div>
        //                                     </div>
        //                                     <div>
        //                                         <div></div>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         ) : (
        //                             <ListPost posts={posts} />
        //                         )}
        //                     </div>
        //                 </div>
        //             </div>
        //             <Sidebar />
        //         </div>
        //     </div>
        <div>Hello</div>
    );
};

export default HomePage;
