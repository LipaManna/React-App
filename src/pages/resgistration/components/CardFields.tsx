import React, { useState } from "react";
import { ICardTypeProps } from "../../../types/Registration.type";
import { Input, Button, Text } from "@chakra-ui/react";
import { Field } from "../../../components/ui/field";
import { emailValidator } from "../../../utils/EmailValidator";
import { login } from "../../../services/login.service";
import { useLocation } from "react-router-dom";

const getCardFieldContent = (
  type: string,
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
  handleEmailBlur: (e: React.FocusEvent<HTMLInputElement, Element>) => void,
  handlePasswordBlur: (e: React.FocusEvent<HTMLInputElement, Element>) => void,
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
        >
          Login
        </Button>
      </form>
    );
  } else if (type === "signup") {
    return (
      <form action="" className="formWrap" onSubmit={handleSubmit}>
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
  const location = useLocation();

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await login(email, password);
    if(res.msgId === 401) {
      //use toaster to display res.msg
    } else {
      //redirect to dashboard
      location.pathname = ''
    }
  };

  const handleEmailBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    setEmail(e.target.value);
    if (!emailValidator(e.target.value)) {
      setError("Invalid Email!");
    } else {
      setError("");
    }
  };

  const handlePasswordBlur = (
    e: React.FocusEvent<HTMLInputElement, Element>
  ) => {
    setPassword(e.target.value);
  };

  return getCardFieldContent(
    type,
    handleSubmit,
    handleEmailBlur,
    handlePasswordBlur,
    error
  );
};

export default CardFields;
