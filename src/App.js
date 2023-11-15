import "./App.css";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import { useEffect } from "react";
import { auth } from "./firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./feautures/userSlice";
import { useNavigate } from "react-router-dom";

function App() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });

    // Clean up the listener when the component unmounts
    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={user ? <HomeScreen /> : <Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
