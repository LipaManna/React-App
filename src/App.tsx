import { Route, Routes } from "react-router-dom";
import SignUp from "./components/auth/signup/Signup";
import Login from "./components/auth/login/Login";
import ErrorBoundary from "./components/shared/ErrorBoundary";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    
      <Routes>
        <Route
          path="/"
          element={
            <ErrorBoundary
              children={<Login />}
              fallback={<></>}
            ></ErrorBoundary>
          }
        />
        <Route
          path="/login"
          element={
            <ErrorBoundary
              children={<Login />}
              fallback={<></>}
            ></ErrorBoundary>
          }
        />
        <Route
          path="/signup"
          element={
            <ErrorBoundary
              children={<SignUp />}
              fallback={<></>}
            ></ErrorBoundary>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ErrorBoundary
              children={<Dashboard />}
              fallback={<></>}
            ></ErrorBoundary>
          }
        />
      </Routes>
  );
}

export default App;
