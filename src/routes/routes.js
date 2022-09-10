import config from '~/config';

// Layout
import { SlideLayout } from '~/layouts';
// Page
import HomePage from '~/pages/Home';
import ProfilePage from '~/pages/Profile';
import AboutPage from '~/pages/About';
import ContactPage from '~/pages/Contact';
import PostPage from '~/pages/Post';
import WritePage from '~/pages/Write/';
import LoginPage from '~/pages/Login';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: HomePage, layout: SlideLayout },
    { path: config.routes.about, component: AboutPage, layouts: null },
    { path: config.routes.contact, component: ContactPage },
    { path: config.routes.post, component: PostPage },
    { path: config.routes.write, component: WritePage, layouts: null },
    { path: config.routes.profile, component: ProfilePage },
    { path: config.routes.login, component: LoginPage, layouts: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
