import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import MainPageMovies from "./components/MainPageMovies"
import MovieInfo from "./components/MovieInfo"
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import styles from "./App.module.css"

import { Routes, Route, useNavigate } from 'react-router-dom'
import ListMovies from "./components/ListMovies"
import Register from "./components/register/Register"

import { AuthProvider } from './contexts/AuthContext'
import Login from "./components/login/Login";
import EditProfileDetails from "./components/editProfileDetails/EditProfileDetails";
import CelebrityInfo from "./components/CelebrityInfo";
import AllReviews from "./components/allReviews/AllReviews";
import ListPeople from "./components/ListPeople";

function App() {

    return (
        <AuthProvider>
            <div>
                <Header />

                <Routes>
                    <Route path="/" element={<MainPageMovies />} />
                    <Route path="/movies/:movieId/details" element={<MovieInfo />}  />
                    <Route path="/movies/:sectionName" element={<ListMovies />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/users/me" element={<EditProfileDetails />} />
                    <Route path="/people" element={<ListPeople />} />
                    <Route path="/people/:personId" element={<CelebrityInfo />} />
                    <Route path="/movies/:movieId/reviews" element={<AllReviews />} />
                </Routes>

                <Footer />
            </div>
        </AuthProvider>
    )
}

export default App;
