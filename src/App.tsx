import { Route, Routes } from "react-router-dom";
import SignUp from "./components/auth/signup/Signup";
import Login from "./components/auth/login/Login";
import ErrorBoundary from "./components/shared/ErrorBoundary";
import Dashboard from "./components/dashboard/Dashboard";
import ProfileContentWrap from "./components/dashboard/profile/ProfileContentWrap";
import AppWrapper from "./components/shared/appWrapper/AppWrapper";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ErrorBoundary children={<Login />} fallback={<></>}></ErrorBoundary>
        }
      />
      <Route
        path="/login"
        element={
          <ErrorBoundary children={<Login />} fallback={<></>}></ErrorBoundary>
        }
      />
      <Route
        path="/signup"
        element={
          <ErrorBoundary children={<SignUp />} fallback={<></>}></ErrorBoundary>
        }
      />
      <Route element={<AppWrapper />}>
        <Route
          path="/dashboard"
          element={
            <ErrorBoundary fallback={<></>}>
            <Dashboard />
          </ErrorBoundary>
          }
        />
        <Route
          path="/profile"
          element={
            <ErrorBoundary
              children={<ProfileContentWrap />}
              fallback={<></>}
            ></ErrorBoundary>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
