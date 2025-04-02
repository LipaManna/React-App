import React from "react";
import { ICardTypeProps } from "../../../types/Registration.type";
import { Heading } from "@chakra-ui/react";

const getHeadingContent = (type:string) => {
  if (type === "login") {
    return "Welcome Back!";
  } else if (type === "signup") {
    return "Hi User!";
  }
};

const CardHeader: React.FC<ICardTypeProps> = ({ type }) => {
  return (
    <Heading as={"h2"} textAlign={"center"} size={"3xl"}>
      {getHeadingContent(type)}
    </Heading>
  );
};

export default CardHeader;
