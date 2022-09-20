import { useState, useEffect, useRef } from 'react';
import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Tippy from '@tippyjs/react/headless';
import ArticleItem from '~/components/ArticleItem';
// import axios from 'axios';
import { useDebounce } from '~/hooks';
const cx = classNames.bind(styles);

const Search = () => {
    const init = [
        {
            userId: 1,
            id: 1,
            title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
            body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
        },
        {
            userId: 1,
            id: 2,
            title: 'qui est esse',
            body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
        },
        {
            userId: 1,
            id: 3,
            title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
            body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
        },
    ];
    // State
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const inputRef = useRef();
    const debounced = useDebounce(searchValue, 500);

    // Logic
    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }

        // const fetchPost = async () => {
        //     const result = await axios.get('https://jsonplaceholder.typicode.com/posts/');
        //     const { data } = result;
        //     console.log(data);
        //     setSearchResult(data);
        // };
        // fetchPost();
        setTimeout(() => {
            setSearchResult(init);
        }, 1000);
    }, [debounced]);

    const handleShowResult = () => {
        setShowResult(true);
    };
    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };
    const handleClear = () => {
        setSearchResult([]);
        setSearchValue('');
        inputRef.current.focus();
    };

    return (
        // Using wrapper <div> or <span> tag around the reference element resolves
        // this by creating a new  parentNode context
        <div>
            <Tippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            {searchResult.map((result, i) => (
                                <ArticleItem key={i} post={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={() => setShowResult(false)}
            >
                <div className={cx('wrapper')}>
                    <div className={cx('container')}>
                        <input
                            onChange={handleChange}
                            ref={inputRef}
                            onFocus={handleShowResult}
                            className={cx('search-input')}
                            spellCheck={false}
                            type="text"
                            placeholder="Search for articles, categories... "
                            value={searchValue}
                        />
                        {searchValue && (
                            <FontAwesomeIcon className={cx('clear-icon')} icon={faXmark} onClick={handleClear} />
                        )}
                        <FontAwesomeIcon className={cx('search-icon')} icon={faSearch} />
                    </div>
                </div>
            </Tippy>
        </div>
    );
};

export default Search;
