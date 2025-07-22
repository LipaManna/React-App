import { Route, Routes } from "react-router-dom";
import SignUp from "./components/auth/signup/Signup";
import Login from "./components/auth/login/Login";
import ErrorBoundary from "./components/shared/ErrorBoundary";
import Dashboard from "./components/dashboard/Dashboard";
import ProfileContentWrap from "./components/dashboard/profile/ProfileContentWrap";
import Layout from "./Layout";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ErrorBoundary children={<Login />}/>
        }
      />
      <Route
        path="/login"
        element={
          <ErrorBoundary children={<Login />}/>
        }
      />
      <Route
        path="/signup"
        element={
          <ErrorBoundary children={<SignUp />}/>
        }
      />
      <Route element={<Layout />}>
        <Route
          path="/dashboard"
          element={
            <ErrorBoundary children={<Dashboard />}/>
          }
        />
        <Route
          path="/profile"
          element={
            <ErrorBoundary
              children={<ProfileContentWrap />}
            ></ErrorBoundary>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
