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
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import {
  emailSchema,
  nameSchema,
  passwordSchema,
} from "../../constants/schema";
import RegistrationError from "../../shared/RegistrationError";
import { useState } from "react";
import { setAuthPersistence } from "../../../services/authService";
import { handleSignup } from "../../../services/signupService";

const Signup = () => {
  const navigate = useNavigate();
  const form = useForm({
    mode: "onTouched",
  });
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;
  const submit = (data: any) => {
    console.log(data);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsLoading(true);
    try {
      // Get the full name from the form data
      const formData = form.getValues();
      const fullName = formData.fullName || '';
      
      const result = await handleSignup({
        email,
        password,
        fullName,
        confirmPassword: cPassword
      });
      
      if (result.success) {
        console.log('Signup successful:', result);
        // Navigate to dashboard after successful signup
        navigate("/dashboard");
      } else {
        console.error("Signup failed:", result.error);
        // You might want to show an error message to the user here
      }
    } catch (error) {
      console.error("Signup error:", error);
      // You might want to show an error message to the user here
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="auth_wrapper">
        <div className="auth_block">
          <div>
            <h2>Hi user!</h2>
            <p className="sub_heading">Create a new account</p>
            <Form onSubmit={onSubmit}>
              <TextField type="text">
                <Label>Full Name</Label>
                <Input
                  placeholder="Enter your email address"
                  {...register("fullName", {
                    ...nameSchema,
                  })}
                  className={errors.fullName ? "error_input" : ""}
                />

                <RegistrationError
                  error={{
                    type: errors?.fullName?.type ? errors?.fullName?.type?.toString() : "",
                    message: errors?.fullName?.message?.toString() ?? "",
                  }}
                />
              </TextField>
              <TextField type="email">
                <Label>Email</Label>
                <Input
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={errors.email?'error_input':''}
                />
                <RegistrationError
                  error={{
                    type: errors?.email?.type ? errors?.email?.type?.toString() : "",
                    message: errors?.email?.message?.toString() ?? "",
                  }}
                />
              </TextField>
              <TextField type="password">
                <Label>Password</Label>
                <Input
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={errors.password?'error_input':''}
                />
              <RegistrationError
                  error={{
                    type: errors?.password?.type ? errors?.password?.type?.toString() : "",
                    message: errors?.password?.message?.toString() ?? "",
                  }}
                />
              </TextField>
              <TextField type="password">
                <Label>Confirm Password</Label>
                <Input 
                  placeholder="Confirm your password"
                  value={cPassword}
                  onChange={(e) => setCPassword(e.target.value)}
                />
              </TextField>
              <Button className="primary_button" type="submit" isDisabled={isLoading}>
                {isLoading ? 'Signing up...' : 'Sign up'}
              </Button>
            </Form>

            <div className="no_account">
              Already have an account?{" "}
              <Link
                onClick={() => {
                  navigate("/");
                }}
                target="_blank"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
        <div className="register_img_wrap sign_up_img">
          <h1>Vista Panel.</h1>
        </div>
      </div>
      <DevTool control={control}></DevTool>
    </>
  );
};

export default Signup;
