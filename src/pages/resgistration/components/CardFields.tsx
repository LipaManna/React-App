import React, { useState } from "react";
import { ICardTypeProps } from "../../../types/Registration.type";
import { Input, Button, Text } from "@chakra-ui/react";
import { Field } from "../../../components/ui/field";
import { emailValidator } from "../../../utils/EmailValidator";

const getCardFieldContent = (type: string) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleEmailBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    setEmail(e.target.value);
    !emailValidator(e.target.value) ? setError("Invalid Email!") : setError("");
  };
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
  return getCardFieldContent(type);
};

export default CardFields;
