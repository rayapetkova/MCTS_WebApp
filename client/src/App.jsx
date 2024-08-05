import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "leaflet/dist/leaflet.css";
import styles from "./App.module.css";

import { Routes, Route } from 'react-router-dom';

import Login from "./components/login/Login";
import MovieInfo from "./components/MovieInfo";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ListPeople from "./components/ListPeople";
import ListMovies from "./components/ListMovies";
import UserInfo from "./components/userInfo/UserInfo";
import Register from "./components/register/Register";
import CelebrityInfo from "./components/CelebrityInfo";
import MainPageMovies from "./components/MainPageMovies";
import ContactUs from "./components/contactUs/ContactUs";
import ErrorPage from "./components/errorPage/ErrorPage";
import AllReviews from "./components/allReviews/AllReviews";
import EditProfileDetails from "./components/editProfileDetails/EditProfileDetails";

import AuthGuard from "./routeGuards/AuthGuard";
import LoggedInGuard from "./routeGuards/LoggedInGuard";

import useScrollWindow from "./hooks/useScrollWindow";

import { AuthProvider } from './contexts/AuthContext';

import topWindowArrow from "./assets/top_window_arrow.png";

function App() {
    const [showScrollButton, clickArrowButtonTop] = useScrollWindow()

    return (
        <AuthProvider>
            <div>
                <Header />

                <Routes>
                    <Route path="/" element={<MainPageMovies />} />
                    <Route path="/movies/:movieId/details" element={<MovieInfo />} />
                    <Route path="/movies/:sectionName" element={<ListMovies />} />
                    <Route path="/register" element={<LoggedInGuard><Register /></LoggedInGuard>} />
                    <Route path="/login" element={<LoggedInGuard><Login /></LoggedInGuard>} />
                    <Route path="/users/me" element={<AuthGuard><EditProfileDetails /></AuthGuard>} />
                    <Route path="/people" element={<ListPeople />} />
                    <Route path="/people/:personId" element={<CelebrityInfo />} />
                    <Route path="/movies/:movieId/reviews" element={<AuthGuard><AllReviews /></AuthGuard>} />
                    <Route path="/contactUs" element={<ContactUs />} />
                    <Route path="/users/:userId" element={<AuthGuard><UserInfo /></AuthGuard>} />
                    <Route path="/*" element={<ErrorPage />} />
                </Routes>

                <Footer />

                {showScrollButton && (
                    <button onClick={clickArrowButtonTop} className={styles['scroll-button']}><img src={topWindowArrow} alt="window-arrow" /></button>
                )}
            </div>
        </AuthProvider>
    )
}

export default App;
