import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';
import { faCheck, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function AccountPreview() {
  return (
    <div className={cx('wrapper')}>
      <header className={cx('header')}>
        <img
          alt=""
          src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/9c758275ec6fc5e875925d99d861fa1a~c5_100x100.jpeg?x-expires=1690707600&x-signature=KJSASOdvxac%2BV3uWdaTS9P9dgyo%3D"
          className={cx('avatar')}
        />
        <Button primary className={cx('follow-btn')}>
          Follow
        </Button>
      </header>
      <div className={cx('body')}>
        <p className={cx('nickname')}>
          <strong>phanmanhdung</strong>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </p>
        <p className={cx('name')}>Phan Mạnh Dũng</p>
        <p className={cx('analytics')}>
          <strong className={cx('value')}>10.2M </strong>
          <span className={cx('label')}>Follower </span>
          <strong className={cx('value')}>12M </strong>
          <span className={cx('label')}>Likes </span>
        </p>
      </div>
    </div>
  );
}

export default AccountPreview;
