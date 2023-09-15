import Navbar from "./components/Navbar/Navbar";
import {Routes, Route} from "react-router-dom";
import {useEffect, createContext} from 'react';
import LazyLoad from "@comp/LazyLoading/LazyLoad";
import {useDispatch, useSelector} from 'react-redux';
import actions from './stores/actions';

export const RootContext = createContext();

function App() {
    const dispatch = useDispatch();
    const store = useSelector(store => store)
    /* Gửi token lên server và lưu thông tin vào user store */
    useEffect(() => {
        dispatch(actions.userActions.authenToken())
    }, [])
    return (
        <>
            <Navbar/>
            <RootContext.Provider value={
                {
                    userStore: store.userStore,
                    dispatch
                }
            }>
                <Routes>
                    <Route
                        path="/"
                        element={LazyLoad(() => import("@/pages/Home/Home"))()}
                    />

                    <Route
                        path="/login"
                        element={LazyLoad(() => import("@/pages/Login/Login"))()}
                    />
                    <Route
                        path="/register"
                        element={LazyLoad(() => import("@/pages/Register/Register"))()}
                    />
                    <Route
                        path="/category/:type"
                        element={LazyLoad(() => import("@/pages/Home/components/Categories/Category"))()}
                    />
                </Routes>
            </RootContext.Provider>
        </>
    );
}

export default App;
