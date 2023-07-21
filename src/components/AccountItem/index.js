import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/42a81079b5885e152707b170d63ba2df~c5_100x100.jpeg?x-expires=1690005600&x-signature=1RUqlFniemAYUskThGgUSWwmZtY%3D"
        alt="anh"
        className={cx('avatar')}
      />
      <div className={cx('info')}>
        <p className={cx('name')}>
          <span>Nguyễn Thị Xuân Hiệp</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </p>
        <span className={cx('username')}>hiepdepgai</span>
      </div>
    </div>
  );
}

export default AccountItem;
