import { Route, Routes } from "react-router-dom";
import SignUp from "./components/auth/signup/Signup";
import Login from "./components/auth/login/Login";
import ErrorBoundary from "./components/shared/ErrorBoundary";
import ProtectedRoute from "./components/shared/ProtectedRoute";
import PublicRoute from "./components/shared/PublicRoute";
import Dashboard from "./components/dashboard/Dashboard";
import ProfileContentWrap from "./components/dashboard/profile/ProfileContentWrap";
import Layout from "./Layout";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PublicRoute>
            <ErrorBoundary children={<Login />}/>
          </PublicRoute>
        }
      />
      <Route
        path="/login"
        element={
          <PublicRoute>
            <ErrorBoundary children={<Login />}/>
          </PublicRoute>
        }
      />
      <Route
        path="/signup"
        element={
          <PublicRoute>
            <ErrorBoundary children={<SignUp />}/>
          </PublicRoute>
        }
      />
      <Route element={
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      }>
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
