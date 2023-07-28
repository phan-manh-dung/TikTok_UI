import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './SuggestedAccount.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
  const renderPreview = (props) => {
    return (
      <div tabIndex="-1" {...props}>
        <PopperWrapper>
          {' '}
          {/* cái này là bóng đổ */}
          <AccountPreview />
        </PopperWrapper>
      </div>
    );
  };

  return (
    <div>
      <Tippy
        interactive // để tương tác được với content ở bên trong
        delay={[800, 0]} // đọc doc tippy để biết thêm chi tiết
        offset={[-20, 0]}
        placement="bottom"
        render={renderPreview}
      >
        <div className={cx('account-item')}>
          <img
            className={cx('avatar')}
            alt=""
            src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/9c758275ec6fc5e875925d99d861fa1a~c5_100x100.jpeg?x-expires=1690707600&x-signature=KJSASOdvxac%2BV3uWdaTS9P9dgyo%3D"
          />
          <div className={cx('item-info')}>
            <p className={cx('nickname')}>
              <strong>phanmanhdung</strong>
              <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </p>
            <p className={cx('name')}>Phan Mạnh Dũng</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

AccountItem.propTypes = {};

export default AccountItem;
