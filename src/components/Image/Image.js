import PropTypes from 'prop-types';
import styles from './Image.module.scss';
import classNames from 'classnames';
import { forwardRef } from 'react';

const Image = forwardRef(({ src, width, height, alt, className, ...props }, ref) => {
    return (
        <img
            width={width}
            height={height}
            alt={alt}
            ref={ref}
            className={classNames(styles.wrapper, className)}
            src={src}
        />
    );
});

Image.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    src: PropTypes.string,
    alt: PropTypes.string,
    classNames: PropTypes.string,
};

export default Image;
