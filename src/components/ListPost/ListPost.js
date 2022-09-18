import classNames from 'classnames/bind';
import Post from '../Post';
import styles from './ListPost.module.scss';
import PropTypes from 'prop-types';

import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

const cx = classNames.bind(styles);

const ListPost = ({ posts }) => {
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 5;

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(posts.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(posts.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, posts]);

    const goTop = () => {
        window.scrollTo({
            top: 500,
            behavior: 'smooth',
        });
    };
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % posts.length;
        setItemOffset(newOffset);
        goTop();
    };

    return (
        <>
            <div className={cx('wrapper')}>
                {currentItems.map((item) => (
                    <Post data={item} key={item.id} />
                ))}
            </div>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
                className={cx('page-item')}
                activeClassName={cx('page-active')}
                disabledLinkClassName={cx('page-disabled-link')}
            />
        </>
    );
};

ListPost.propTypes = {
    posts: PropTypes.array.isRequired,
};

export default ListPost;
