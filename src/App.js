import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';

import SlideLayout, { NullLayout } from '~/layouts';
import DefaultLayout from '~/layouts';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        let Layout = SlideLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === DefaultLayout) {
                            Layout = DefaultLayout;
                        } else if (route.layout === null) {
                            Layout = NullLayout;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
