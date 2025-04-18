import React, { FormEvent, useState } from "react";
import { ICardTypeProps } from "../../../types/Registration.type";
import { Input, Button, Text } from "@chakra-ui/react";
import { Field } from "../../../components/ui/field";
import { emailValidator } from "../../../utils/EmailValidator";
import { login } from "../../../services/login.service";
import { signup } from "../../../services/signup.service";

const getCardFieldContent = (
  type: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleSubmit: (e: any) => void,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleSubmitSignup: (e: any) => void,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleEmailBlur: (e: any) => void,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handlePasswordBlur: (e: any) => void,
  error: string
) => {
  if (type === "login") {
    return (
      <form action="" className="formWrap" onSubmit={handleSubmit}>
        <Field label="Email ID">
          <Input placeholder="" type="email" onBlur={handleEmailBlur} />
        </Field>
        {error && (
          <Text color="red" mt="2">
            {error}
          </Text>
        )}
        <Field label="Password" mt="5">
          <Input placeholder="" type="password" onBlur={handlePasswordBlur} />
        </Field>
        <Button
          rounded="sm"
          type="submit"
          mt="5"
          _hover={{
            borderColor: "whiteAlpha.700",
            bg: "transparent",
            color: "whiteAlpha.700",
          }}
          mx="auto"
          display="block"
          size={"lg"}
          w={"100%"}
        >
          Login
        </Button>
      </form>
    );
  } else if (type === "signup") {
    return (
      <form   className="formWrap">
        <Field label="Full Name">
          <Input placeholder="" type="text" />
        </Field>
        <Field label="Email ID" mt="5" onBlur={handleEmailBlur}>
          <Input placeholder="" type="email" />
        </Field>
        {error && (
          <Text color="red" mt="2">
            {error}
          </Text>
        )}
        <Field label="Password" mt="5">
          <Input placeholder="" type="password" />
        </Field>
        <Field label="Confirm Password" mt="5">
          <Input placeholder="" type="password" />
        </Field>
        <Button
          rounded="sm"
          type="button"
          mt="5"
          _hover={{
            borderColor: "whiteAlpha.700",
            bg: "transparent",
            color: "whiteAlpha.700",
          }}
          mx="auto"
          display="block"
          size={"lg"}
          w={"100%"}
          onClick={handleSubmitSignup}
        >
          Sign Up
        </Button>
      </form>
    );
  }
};

const CardFields: React.FC<ICardTypeProps> = ({ type }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await login(email, password);
    
  };

  const handleSubmitSignup = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await signup(email, password);
   
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleEmailBlur = (e: any) => {
    setEmail(e.target.value);
    console.log(e.target.value)
    if (!emailValidator(e.target.value)) {
      setError("Invalid Email!");
    } else {
      setError("");
    }
  };

  const handlePasswordBlur = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e: any) => {
    setPassword(e.target.value);
  };

  return getCardFieldContent(
    type,
    handleSubmit,
    handleEmailBlur,
    handlePasswordBlur,
    handleSubmitSignup,
    error
  );
};

export default CardFields;
