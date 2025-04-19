import {
  TextField,
  Label,
  Input,
  Button,
  Switch,
  Form,
  Link,
} from "react-aria-components";
import "../auth.scss";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="auth_wrapper">
      <div className="auth_block">
        <div>
          <h2>Welcome Back!</h2>
          <p>Enter your email and password to sign in</p>
          <Form>
            <TextField type="email">
              <Label>Email</Label>
              <Input placeholder="Enter your email address" />
            </TextField>
            <TextField type="password">
              <Label>Password</Label>
              <Input placeholder="Enter your password" />
            </TextField>
            <Switch>
              <div className="indicator" />
              Remember Me
            </Switch>
            <Button className="primary_button">Login</Button>
          </Form>
          <div className="no_account">
            Don't have an account?{"  "}
            <Link onClick={() => {navigate('/signup')}} target="_blank">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="register_img_wrap login_img">
        <h1>Vista Panel.</h1>
      </div>
    </div>
  );
};

export default Login;
