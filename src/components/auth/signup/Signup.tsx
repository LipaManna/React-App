import {
  TextField,
  Label,
  Input,
  Button,
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
          <h2>Hi user!</h2>
          <p>Create a new account</p>
          <Form>
            <TextField type="email">
              <Label>Email</Label>
              <Input placeholder="Enter your email address" />
            </TextField>
            <TextField type="password">
              <Label>Password</Label>
              <Input placeholder="Enter your password" />
            </TextField>
            <TextField type="password">
              <Label>Confirm Password</Label>
              <Input placeholder="Confirm your password" />
            </TextField>
            <Button className="primary_button">sign up</Button>
          </Form>
          <div className="no_account">
            Already have an account?{" "}
            <Link onClick={() => {navigate('/')}} target="_blank">
             Login
            </Link>
          </div>
        </div>
      </div>
      <div className="register_img_wrap sign_up_img">
        <h1>Vista Panel.</h1>
      </div>
    </div>
  );
};

export default Login;
