import { lazy, Suspense } from "react";
// import Loading from "@comp/Loading/Loading";
import Loading from "./component/Loading";

const LazyLoad = (importFunc) => {
  // const LazyComponent = lazy(importFunc);
  const LazyComponent = lazy(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(importFunc());
      }, 2000);
    });
  });
  // eslint-disable-next-line react/display-name
  return (props) => (
    <>
      <Suspense fallback={<Loading />}>
        <LazyComponent {...props} />
      </Suspense>
    </>
  );
};

export default LazyLoad;
