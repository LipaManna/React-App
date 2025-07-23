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
import { useForm } from "react-hook-form";
import RegistrationError from "../../shared/RegistrationError";
import { emailSchema, passwordSchema } from "../../constants/schema";
import { useState } from "react";
import { login, setAuthPersistence } from "../../../services/authService";
import { fetchUserProfile } from "../../../services/userService";


const Login = () => {
  const navigate = useNavigate();
  const form = useForm({
    mode: "onTouched",
  });
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;
  const submit = async (data: any) => {
    console.log(data);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if(!email || !password){
      console.error('email and password are required');
      return;
    }
    
    setIsLoading(true);
    try {
      // Set auth persistence based on "Remember Me" checkbox
      await setAuthPersistence(rememberMe);
      
      const userCred = await login({email, password});
      console.log(userCred);
      const uid = userCred.user.uid;
      const profile = await fetchUserProfile(uid);
      console.log("Logged in!", profile);
      
      // Navigate to dashboard after successful login
      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      // You might want to show an error message to the user here
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="auth_wrapper">
      <div className="auth_block">
        <div>
          <h2>Welcome Back!</h2>
          <p className="sub_heading">Enter your email and password to sign in</p>
          <Form onSubmit={handleLogin}>
            <TextField type="email">
              <Label>Email</Label>
              <Input
                placeholder="Enter your email address"
                {...register("email", {
                  ...emailSchema,
                })}
                className={errors.email ? "error_input" : ""}
                onChange={(e)=>setEmail(e.target.value)}
                disabled={isLoading}
              />
              <RegistrationError
                error={{
                  type: errors?.email?.type
                    ? errors?.email?.type?.toString()
                    : "",
                  message: errors?.email?.message?.toString() ?? "",
                }}
              />
            </TextField>
            <TextField type="password">
              <Label>Password</Label>
              <Input
                placeholder="Enter your password"
                {...register("password", {
                  ...passwordSchema,
                })}
                className={errors.password ? "error_input" : ""}
                onChange={(e)=>setPassword(e.target.value)}
                disabled={isLoading}
              />
              <RegistrationError
                error={{
                  type: errors?.password?.type
                    ? errors?.password?.type?.toString()
                    : "",
                  message: errors?.password?.message?.toString() ?? "",
                }}
              />
            </TextField>
            <Switch 
              isSelected={rememberMe}
              onChange={setRememberMe}
              isDisabled={isLoading}
            >
              <div className="indicator" />
              Remember Me
            </Switch>
            <Button 
              className="primary_button" 
              type="submit"
              isDisabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </Form>
          <div className="no_account">
            Don't have an account?{"  "}
            <Link
              onClick={() => {
                navigate("/signup");
              }}
              target="_blank"
            >
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
