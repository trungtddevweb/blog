import config from '~/config';

// Layout
import DefaultLayout, { SlideLayout } from '~/layouts';
// Page
import HomePage from '~/pages/Home';
import ProfilePage from '~/pages/Profile';
import ContactPage from '~/pages/Contact';
import PostPage from '~/pages/Post';
import WritePage from '~/pages/Write/';
import LoginPage from '~/pages/Login';
import CategoryPage from '~/pages/Category';
import Register from '~/pages/Register';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: HomePage, layout: SlideLayout },
    { path: config.routes.contact, component: ContactPage },
    { path: config.routes.category, component: CategoryPage },
    { path: config.routes.post, component: PostPage },
    { path: config.routes.write, component: WritePage, layouts: null },
    { path: config.routes.profile, component: ProfilePage },
    { path: config.routes.login, component: LoginPage, layouts: null },
    { path: config.routes.register, component: Register, layouts: DefaultLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
