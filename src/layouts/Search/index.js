import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect, useRef } from 'react';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faSignIn } from '@fortawesome/free-solid-svg-icons'; // Thêm dòng này

import HeadlessTippy from '@tippyjs/react/headless';

import AccountItem from '~/components/AccountItem';
import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { useDebounce } from '~/hooks';
import * as searchService from '~/services/searchService';
const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const deboucedValue = useDebounce(searchValue, 500); // người dùng ngừng gõ 500s thì mới nhận giá trị

  const inputRef = useRef();

  useEffect(() => {
    if (!deboucedValue.trim()) {
      setSearchResult([]); // Nếu searchValue trống, đặt kết quả tìm kiếm về rỗng
      return;
    }

    const fetchApi = async () => {
      setLoading(true);
      const result = await searchService.search(deboucedValue);
      setSearchResult(result);
      setLoading(false);
    };

    fetchApi();

    setLoading(true); // Bắt đầu tải dữ liệu, đặt loading thành true
  }, [deboucedValue]);

  const handClear = () => {
    setSearchValue('');
    setSearchResult([]);
    inputRef.current.focus();
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(' ')) {
      setSearchValue(searchValue);
    }
  };

  return (
    //
    <div>
      <HeadlessTippy
        interactive
        appendTo={() => document.body}
        visible={showResult && searchResult.length > 0}
        render={(attrs) => (
          <PopperWrapper>
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
              <h4 className={cx('search-title')}>Account</h4>
              {searchResult.map((result) => (
                <AccountItem key={result.id} data={result} />
              ))}
            </div>
          </PopperWrapper>
        )}
        onClickOutside={handleHideResult}
      >
        <div className={cx('search')}>
          <input
            ref={inputRef}
            value={searchValue}
            placeholder="Search account and videos"
            spellCheck={false}
            onChange={handleChange}
            onFocus={() => setShowResult(true)}
          />
          {!!searchValue && !loading && (
            <button
              className={cx('clear')}
              onClick={() => {
                setSearchValue('');
                inputRef.current.focus();
              }}
            >
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}
          {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

          <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default Search;
