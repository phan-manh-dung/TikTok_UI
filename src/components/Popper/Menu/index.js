import Tippy from '@tippyjs/react/headless';
import AccountItem from '~/components/AccountItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';
const cx = classNames.bind(styles);
const defaultFn = () => {};
function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1]; // lấy phần tử cuối

  const renderItems = () => {
    // render lựa chọn cấp 1 cấp 2
    return current.data.map((item, index) => {
      const isParent = !!item.children;

      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };

  return (
    <Tippy
      // visible: hiện
      interactive
      delay={(0, 700)}
      offset={[12, 8]}
      hideOnClick={hideOnClick}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('menu-popper')}>
            {history.length > 1 && (
              <Header
                title="Ngôn ngữ"
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1)); // back quay dề
                }}
              />
            )}
            <div className={cx('menu-body')}> {renderItems()}</div>
          </PopperWrapper>
        </div>
      )}
      onHide={() => setHistory((prev) => prev.slice(0, 1))} // xóa hết thằng sau đi lấy phần tử đầu tiên
    >
      {children}
    </Tippy>
  );
}

export default Menu;
