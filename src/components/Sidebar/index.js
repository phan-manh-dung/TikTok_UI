import config from '~/config';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Menu, { MenuItem } from './Menu';
import {
  HomeIcon,
  UserGroupIcon,
  CompassIcon,
  LiveIcon,
  HomeActiveIcon,
  UserGroupActiveIcon,
  CompassActiveIcon,
  LiveActiveIcon,
} from '~/components/Icons';
import SuggestedAccount from '../SuggestedAccount/SuggestedAccount';

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem title="For you" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
        <MenuItem
          title="Following"
          to={config.routes.following}
          icon={<UserGroupIcon />}
          activeIcon={<UserGroupActiveIcon />}
        />
        <MenuItem
          title="Discover"
          to={config.routes.discover}
          icon={<CompassIcon />}
          activeIcon={<CompassActiveIcon />}
        />
        <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
      </Menu>
      <SuggestedAccount label="Suggested accounts" />
      {/* <SuggestedAccount label="Following accounts" /> */}
    </aside>
  );
}

export default Sidebar;
