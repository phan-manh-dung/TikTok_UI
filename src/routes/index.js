import Home from '~/Page/Home';
import Following from '~/Page/Following';
import Profile from '~/Page/Profile';
import Upload from '~/Page/Upload';
import Search from '~/layouts/DefaultLayout';
import Live from '~/Page/Live';
import Discover from '~/Page/Discover';
import config from '~/config';
// public
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.following, component: Following },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.discover, component: Discover },
  { path: config.routes.live, component: Live },
  { path: config.routes.upload, component: Upload, layout: null },
  { path: config.routes.search, component: Search, layout: null },
];

const privateRouter = [];

export { publicRoutes, privateRouter };
