import {Routes, Route} from "react-router-dom";
import {useEffect, createContext} from 'react';
import LazyLoad from "@comp/LazyLoading/LazyLoad";
import {useDispatch, useSelector} from 'react-redux';
import actions from './stores/actions';
import HomeRoute from '@/pages/home/Route'

export const RootContext = createContext();

function App() {
    const dispatch = useDispatch();
    const store = useSelector(store => store)
    useEffect(() => {
        dispatch(actions.categoryActions.findAllCategory())
    }, [])
    /* Gửi token lên server và lưu thông tin vào user store */
    useEffect(() => {
        dispatch(actions.userActions.authenToken())
    }, [])
    return (<>

        <RootContext.Provider value={{
            userStore: store.userStore, categories: store.categoryStore, productStore: store.productStore, dispatch
        }}>
            <Routes>
                {HomeRoute}
                <Route
                    path="/login"
                    element={LazyLoad(() => import("@/pages/Login/Login"))()}
                />
                <Route
                    path="/register"
                    element={LazyLoad(() => import("@/pages/Register/Register"))()}
                />
            </Routes>
        </RootContext.Provider>
    </>);
}

export default App;
