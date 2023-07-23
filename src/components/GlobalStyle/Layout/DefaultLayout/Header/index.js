import styles from './Header.module.scss';
import classNames from 'classnames/bind';
// Ví dụ import emotion

import images from '~/assets/image';
import { useEffect, useState } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
  faSignIn,
  faEllipsisVertical,
  faEarthAsia,
  faCircleQuestion,
  faKeyboard,
  faPlus,
  faMoon,
  faCloudMoon,
  faCloudUpload,
  faUser,
  faBookmark,
  faRightToBracket,
} from '@fortawesome/free-solid-svg-icons'; // Thêm dòng này
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
    children: {
      title: 'Ngôn ngữ',
      data: [
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng việt',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Trợ giúp & phản hồi',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Bàn phím ',
  },
  {
    icon: <FontAwesomeIcon icon={faCloudMoon} />,
    title: 'Chế độ tối',
  },
];

const currentUser = true;

function Header() {
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  }, []);

  // menu logic
  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case 'language':
        //handle chang language
        break;
      default:
    }
  };

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'Xem hồ sơ',
      to: '',
    },
    {
      icon: <FontAwesomeIcon icon={faBookmark} />,
      title: 'Yêu thích',
      to: '',
    },
    {
      icon: <FontAwesomeIcon icon={faTiktok} />,
      title: 'Nhận xu',
      to: '',
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faRightToBracket} />,
      title: 'Đăng xuất',
      to: '',
      separate: true, // thằng nào có này là có vạch(đang định nghĩa class cho nó)
    },
  ];

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="TikTok" />
        </div>

        <HeadlessTippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <PopperWrapper>
              <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                <h4 className={cx('search-title')}>Account</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </div>
            </PopperWrapper>
          )}
        >
          <div className={cx('search')}>
            <input placeholder="Search account and videos" spellCheck={false} />
            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

            <button className={cx('search-btn')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </HeadlessTippy>

        <div className={cx('actions')}>
          {currentUser ? (
            // <div className={cx('current-user')}>
            <>
              <Tippy delay={200} content="Tải lên video" placement="bottom">
                <button className={cx('actions-btn')}>
                  <FontAwesomeIcon icon={faCloudUpload} />
                </button>
              </Tippy>
            </>
          ) : (
            //</div>
            <>
              <Button upload>
                <FontAwesomeIcon icon={faPlus} style={{ fontSize: '14px', marginRight: '8px' }} />
                Tải lên
              </Button>
              <Button primary>Log in</Button>
            </>
          )}

          <Menu items={currentUser ? userMenu : MENU_ITEMS} onChangge={handleMenuChange}>
            {currentUser ? (
              <img
                className={cx('user-avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/6505b76571a9be14a37f7cb7eee96add.jpeg?x-expires=1690264800&x-signature=ZFPFxKXYHphMrVfbBvcfNIQC%2Bwk%3D"
                alt="Nguyễn Thị Xuân Hiệp"
              />
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
