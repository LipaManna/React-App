import React from "react";
import { ICardTypeProps } from "../../../types/Registration.type";
import { Input, Button } from "@chakra-ui/react";
import { Field } from "../../../components/ui/field";

const getCardFieldContent = (type: string) => {
  if (type === "login") {
    return (
      <form action="" className="formWrap">
        <Field label="Email ID">
          <Input placeholder="" type="email" />
        </Field>
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
      <form action="" className="formWrap">
        <Field label="Full Name">
          <Input placeholder="" type="text" />
        </Field>
        <Field label="Email ID" mt="5">
          <Input placeholder="" type="email" />
        </Field>
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
