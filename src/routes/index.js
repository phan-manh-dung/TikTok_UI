import Home from '~/Page/Home';
import Following from '~/Page/Following';
import Profile from '~/Page/Profile';
import Upload from '~/Page/Upload';
import Search from '~/components/GlobalStyle/Layout/Search';
// public
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/@:nickname', component: Profile },
  { path: '/upload', component: Upload, layout: null },
  { path: 'search', component: Search, layout: null },
];

const privateRouter = [];

export { publicRoutes, privateRouter };
