import { Routes, Route, useLocation, useParams } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import Home from "./Pages/Home";
import "./styles/app.scss";
import AOS from "aos";
import NoAuthHeader from "./components/NoAuthHeader";
import AuthHeader from "./components/AuthHeader";
import SignUp from "./Pages/SignUp";
import NotFound from "./Pages/NotFound";
import { useSelector } from "react-redux";

const App = () => {
  AOS.init({ once: true });
  const status = useSelector((state) => state.auth.status);
  const location = useLocation();
  return (
    <div>
      { status === "Successful" ? (
        <AuthHeader />
      ) : (
        <NoAuthHeader />
      )}

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
export default App;
