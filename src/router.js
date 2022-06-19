import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Components/Header/index.jsx";
import routesData from "./constants/routesData.js";

const Router = ({ isLoggedIn }) => {

  function PrivateRoute({ children , path}) {
    if (isLoggedIn) {
			return children;
		} else {
			return <Navigate to="/" />;
		}
  }

  return (
    <BrowserRouter>
        <ToastContainer autoClose={2000} />
       <Header />
       <Routes>
          {routesData.map((route, index) => {
            let { path, Component, exact, publicRoute } = route;
            return (
              <Route
                key={index}
                exact={exact}
                path={path}
                element={
                  publicRoute ? (
                    <Component />
                  ) : (
                    <PrivateRoute path={path}>
                      <Component />
                    </PrivateRoute>
                  )
                }
              />
            );
          })}
        </Routes>
    </BrowserRouter>
  );

}

export default Router;
