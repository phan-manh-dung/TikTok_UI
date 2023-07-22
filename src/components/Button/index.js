import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
  to,
  primary = false,
  outline = false,
  text = false,
  disabled = false,
  rounded = false,
  small = false,
  large = false,
  href,
  leftIcon,
  rightIcon,
  children,
  onClick,
  className,
  ...passProps
}) {
  let Comp = 'button';
  const props = {
    onClick,
    ...passProps,
  };
  // loại bỏ sự kiện
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }

  const wrapperBtn = cx('wrapper-btn');
  const classes = cx('wrapper', {
    [className]: className,
    primary,
    outline,
    small,
    text,
    rounded,
    disabled,
    large,
    [wrapperBtn]: true,
  });
  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
  );
}

export default Button;
