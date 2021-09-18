import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import Cookies from "ts-cookies";
import Artists from "./components/Artists/Artists";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Reviews from "./components/Reviews/Reviews";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Users from "./components/Users/Users";
import MainLayout from "./Layout/MainLayout/MainLayout";
import "./App.scss";

const App: React.FC = () => {
  
  const history = useHistory();
  const location = useLocation();
  const [show, setShow] = useState<boolean>(false);
  const roleToken = localStorage.getItem("role");
  
  useEffect(() => {
    if(location.pathname.includes('/mainpage')) {
      setShow(true);
    } else {
      setShow(false);
    }
    
    if(Cookies.get("token") && 
    (location.pathname === "/" || 
    location.pathname === "/signin" || 
    location.pathname === "/signup")) {
      history.push("/mainpage/artists");
    }
  }, [location, history]);

  return (
    <div className="App">
      {show ? (
        <Header />
      ) : (
        null
      )}
       <main>
        <Switch>
          <Route exact path="/" component={MainLayout} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path="/mainpage/artists" component={Artists} />
          <Route path="/mainpage/reviews" component={Reviews} />
          {roleToken === "Admin" ? (
          <Route path="/mainpage/users" component={Users} />
          ) : (
            null
          )}
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

export default App;
