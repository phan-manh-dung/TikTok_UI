import Home from '~/Page/Home';
import Following from '~/Page/Following';
import Profile from '~/Page/Profile';
import Upload from '~/Page/Upload';
// public
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/profile', component: Profile },
  { path: '/upload', component: Upload, layout: null },
];

const privateRouter = [];

export { publicRoutes, privateRouter };
