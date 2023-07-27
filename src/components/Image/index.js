import { useState, forwardRef } from 'react';
import images from '~/assets/image';
import styles from './Image.module.scss';
import classNames from 'classnames';
import { PropTypes } from 'prop-types';

const Image = forwardRef(({ src, className, fallback: customFallback = images.noImage, ...props }, ref) => {
  const [fallback, setFallback] = useState('');

  const handleError = () => {
    setFallback(customFallback);
  };

  // eslint-disable-next-line jsx-a11y/alt-text
  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <img
      className={classNames(styles.wrapper, className)}
      ref={ref}
      src={fallback || src}
      {...props}
      onError={handleError}
    />
  );
});

Image.propTypes = {
  src: PropTypes.string,
  className: PropTypes.string,
  fallback: PropTypes.string,
};

export default Image;
