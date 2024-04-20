import React from 'react';
import MainPage from './pages/mainPage/MainPage';
import NotFound from './pages/notFound/NotFound';
import Login from './pages/auth/login/Login';
import Register from './pages/auth/register/Register';
import {Route, Routes } from 'react-router-dom';
import DefaultLayout from './components/layout/defaultLayout/DefaultLayout';
import EditPage from './pages/EditPage/EditPage'
import ListOfUser from './pages/ListOfUser/ListOfUser'
import NewsPage from './pages/newsPage/NewsPage';
import UkraineNews from './pages/UkraineNews/UkraineNews';
import ITNews from './pages/ITNews/ITNews';
import Profile from './components/Page/Profile/Profile';
import { useDispatch } from 'react-redux';
import { authUser } from './store/reducers/userReducer/actions';

const App = () => {
    const dispatch = useDispatch();
    const token = localStorage.getItem('token');

    if (token != null) {
        dispatch(authUser(JSON.parse(token)));
    }
    return (
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<MainPage />}/>
            <Route path="login" element={<Login />}/>
            <Route path="register" element={<Register />}/>
            <Route path="editing" element={<EditPage />} />
            <Route path="ukraine" element={<UkraineNews />} />
            <Route path="it" element={<ITNews />} />
            <Route path="list" element={<ListOfUser  />} />
            <Route path="profile" element={<Profile  />} />
            <Route path="news/:index" element={<NewsPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
    );
}

export default App;