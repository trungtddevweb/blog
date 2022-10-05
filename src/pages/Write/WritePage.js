import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styles from './WritePage.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import config from '~/config';

const cx = classNames.bind(styles);

const WritePage = () => {
    const [value, setValue] = useState('');

    const user = true;

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <div className={cx('wrapper')}>
            {!user ? (
                <div className={cx('must-login')}>
                    <p className={cx('heading')}>Bạn phải đăng nhập để có thể viết bài</p>
                    <Button className={cx('btn')} to={config.routes.login}>
                        Đăng nhập
                    </Button>
                </div>
            ) : (
                <div className={cx('container')}>
                    <div className={cx('content')}>
                        <p className={cx('heading')}>
                            - Write down your feelings so that others can read them and respond. Together, let's live a
                            happy life!
                        </p>
                        <input type="text" placeholder="Title Article" autoFocus className={cx('write-input')} />
                        <div className={cx('editorContainer')}>
                            <ReactQuill className={cx('editor')} theme="snow" value={value} onChange={setValue} />
                        </div>
                        <Button onclick={handleSubmit} className={cx('btn-publish')} primary>
                            Publish
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WritePage;
