import RouterError from "./components/RouterError";
import Landing from "./page/Landing/Landing";
import { HashRouter, Route, Routes } from "react-router-dom";
import SignUp from "./components/auth/SignUp";
import Login from "./components/auth/Login";
import UserDashBoard from "./page/Dashboard/UserDashBoard";
import Movies from "./page/Dashboard/Movies";
import Profile from "./page/Dashboard/Profile";
import Description from "./page/Dashboard/Description";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="*" element={<RouterError />} />
        <Route path="/" element={<Landing />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        <Route path="/E-Move" element={<UserDashBoard />}>
          <Route path="" element={<Movies />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/describe" element={<Description />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
