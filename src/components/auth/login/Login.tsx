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
import { useFieldArray, useForm } from "react-hook-form";
import RegistrationError from "../../shared/RegistrationError";
import { emailSchema, passwordSchema } from "../../constants/schema";

const Login = () => {
  const navigate = useNavigate();
  const form = useForm({
    mode: "onTouched",
  });
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;
  const submit = (data: any) => {
    console.log(data);
  };


  return (
    <div className="auth_wrapper">
      <div className="auth_block">
        <div>
          <h2>Welcome Back!</h2>
          <p className="sub_heading">Enter your email and password to sign in</p>
          <Form onSubmit={handleSubmit(submit)}>
            <TextField type="email">
              <Label>Email</Label>
              <Input
                placeholder="Enter your email address"
                {...register("email", {
                  ...emailSchema,
                })}
                className={errors.email ? "error_input" : ""}
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
            <Switch>
              <div className="indicator" />
              Remember Me
            </Switch>
            <Button className="primary_button" type="submit">
              Login
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
