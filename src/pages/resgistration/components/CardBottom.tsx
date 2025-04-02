import React from "react";
import { ICardTypeProps } from "../../../types/Registration.type";
import { chakra } from "@chakra-ui/react";
const Link = chakra("a");

const getFooterContent = (type: string) => {
  if (type === "login") {
    return (
      <>
        <Link
          color="whiteAlpha.700"
          href="https://chakra-ui.com"
          display="inline-block"
          textAlign="center"
        >
          {" "}
          Forgot password?{" "}
        </Link>

        <Link
          color="whiteAlpha.700"
          href="/signup"
          display="inline-block"
          textAlign="center"
        >
          Not a member? <span>Sign Up!</span>
        </Link>
      </>
    );
  } else if (type === "signup") {
    return (
      <>
        <Link
          color="whiteAlpha.700"
          href="/login"
          display="inline-block"
          textAlign="center"
        >
          Already a member? <span>Login!</span>
        </Link>
      </>
    );
  }
};

const CardBottom: React.FC<ICardTypeProps> = ({ type }) => {
  return getFooterContent(type);
};

export default CardBottom;
