import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';

const cx = classNames.bind(styles);

const Search = () => {
    return (
        <HeadlessTippy interactive visible>
            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    <input
                        className={cx('search-input')}
                        spellCheck={false}
                        type="text"
                        placeholder="Search for articles, categories... "
                    />
                    <FontAwesomeIcon className={cx('search-icon')} icon={faSearch} />
                </div>
            </div>
        </HeadlessTippy>
    );
};

export default Search;
