import {Route} from "react-router-dom";
import Home from './Home'
import HomePage from "./components/HomePage";
import LazyLoad from "@comp/LazyLoading/LazyLoad";

export default (
    <Route path="/" element={<Home/>}>
        <Route index element={<HomePage/>}/>
        <Route
            path="/category/:type"
            element={LazyLoad(() => import("@/pages/Home/components/Categories/Category"))()}
        />
        <Route path="/products/:id"
               element={LazyLoad(() => import("@/pages/Home/components/ProductItems/ProductItem"))()}/>
    </Route>
);
