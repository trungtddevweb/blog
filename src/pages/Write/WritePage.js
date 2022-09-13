import styles from './WritePage.module.scss';
import classNames from 'classnames/bind';
import Image from '~/components/Image';
import imgs from '~/assets/imgs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

const WritePage = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <Image className={cx('img')} src={imgs.writeImage} alt="Background" />
                <div className={cx('content')}>
                    <p className={cx('heading')}>
                        - Write down your feelings so that others can read them and respond. Together, let's live a
                        happy life!
                    </p>
                    <form className={cx('form')}>
                        <div className={cx('write-group')}>
                            <label htmlFor="fileInput">
                                <FontAwesomeIcon className={cx('icon')} icon={faPlus} />
                            </label>
                            <input type="file" id="fileInput" className={cx('choose-file')} />
                            <input type="text" placeholder="Title Article" autoFocus className={cx('write-input')} />
                        </div>
                        <div className={cx('write-group')}>
                            <textarea className={cx('textarea')} placeholder="Content"></textarea>
                        </div>
                        <Button className={cx('btn-publish')} primary>
                            Publish
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default WritePage;
