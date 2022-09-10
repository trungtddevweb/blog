import styles from './Slide.module.scss';
import classNames from 'classnames/bind';
import imgs from '~/assets/imgs';

const cx = classNames.bind(styles);

const Slide = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('desc')}>
                <div className={cx('content')}>
                    <h3>Sharing about your day, your life, your pain,... everything you desire</h3>
                    <q>
                        To make oneself happier, don't keep your emotions to yourself. instead, express them to others.
                    </q>
                </div>
            </div>
            <img src={imgs.slideBackground} className={cx('background')} alt="Background" />
        </div>
    );
};

export default Slide;
