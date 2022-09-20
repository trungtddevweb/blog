import { useState } from 'react';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import CategoryItem from '~/components/CategoryItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBriefcase,
    faHeart,
    faMusic,
    faNotesMedical,
    faPaw,
    faReceipt,
    faStore,
    faUserGroup,
} from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Sidebar = () => {
    const initCategory = [
        {
            title: 'Âm nhạc',
            to: '/categories/music',
            icon: <FontAwesomeIcon icon={faMusic} />,
        },
        {
            title: 'Thời trang',
            to: '/categories/fashion',
            icon: <FontAwesomeIcon icon={faStore} />,
        },
        {
            title: 'Lắng nghe',
            to: '/categories/confidence',
            icon: <FontAwesomeIcon icon={faUserGroup} />,
        },
        {
            title: 'Công thức',
            to: `/categories/receipt`,
            icon: <FontAwesomeIcon icon={faReceipt} />,
        },
        {
            title: 'Sức khỏe',
            to: `/categories/health`,
            icon: <FontAwesomeIcon icon={faNotesMedical} />,
        },
        {
            title: 'Công việc',
            to: '/categories/work',
            icon: <FontAwesomeIcon icon={faBriefcase} />,
        },
        {
            title: 'Động vật',
            to: '/categories/animals',
            icon: <FontAwesomeIcon icon={faPaw} />,
        },

        {
            title: 'Tình cảm',
            to: '/categories/heart',
            icon: <FontAwesomeIcon icon={faHeart} />,
        },
    ];

    // eslint-disable-next-line no-unused-vars
    const [category, setCategory] = useState(initCategory);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('section')}>
                <h4 className={cx('title')}>Thể loại</h4>
                <div className={cx('list')}>
                    {category.map((category) => (
                        <CategoryItem data={category} key={category.title} />
                    ))}
                </div>
            </div>
            <div className={cx('section')}>
                <h4 className={cx('title')}>Thông tin cá nhân</h4>
                <Link to={'/profile/trungtran'}>
                    <div className={cx('list')}>
                        <div className={cx('avatar')}>
                            <Image
                                alt="Nickname"
                                className={cx('img')}
                                src="https://c8.alamy.com/comp/2E10A88/unrecognized-man-hand-holding-rose-flower-on-white-background-2E10A88.jpg"
                            />
                        </div>
                        <div className={cx('info')}>
                            <h5>Tran Dinh Trung</h5>
                            <p className={cx('birthday')}>02/03/2001</p>
                            <p className={cx('bio')}>
                                Muốn được tự do, đi du lịch thật nhiều nơi, trải nghiệm thật nhiều thứ trong cuộc sống
                            </p>
                            <p className={cx('total-posts')}>
                                <span>10</span>bài viết
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
