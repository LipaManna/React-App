import { Route, Routes } from "react-router-dom";
import SignUp from "./components/auth/signup/Signup";
import Login from "./components/auth/login/Login";
import ErrorBoundary from "./components/shared/ErrorBoundary";

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
      </Routes>
  );
}

export default App;
