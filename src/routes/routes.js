import config from '~/config';

// Layout

// Page
import HomePage from '~/pages/Home/HomePage';
import ProfilePage from '~/pages/Profile/ProfilePage';
import AboutPage from '~/pages/About/AboutPage';
import ContactPage from '~/pages/Contact/ContactPage';
import PostPage from '~/pages/Post/PostPage';
import WritePage from '~/pages/Write/WritePage';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: HomePage },
    { path: config.routes.about, component: AboutPage },
    { path: config.routes.contact, component: ContactPage },
    { path: config.routes.post, component: PostPage },
    { path: config.routes.write, component: WritePage },
    { path: config.routes.profile, component: ProfilePage },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
