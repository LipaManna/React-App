import React, { useState } from "react";
import {
  Button,
  Card,
  Container,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import { Field } from "../components/ui/field";
import { emailValidator } from "../utils/EmailValidator";

const Login = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };


  const handleEmailBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    setEmail(e.target.value);
    !emailValidator(e.target.value) ? setError("Invalid Email!") : setError("");
  };

  return (
    <Container px="2" className="mainContainer formContainer">
      <Card.Root
        className="formCard"
        variant={"outline"}
        backgroundColor={"blackAlpha.400"}
        p="10"
      >
        <Stack gap="4" w="full">
          <Heading as={"h2"} textAlign={"center"} size={"3xl"}>
            Welcome Back!
          </Heading>
          <form action="" className="formWrap" onSubmit={handleSubmit}>
            <Field label="Email ID">
              <Input
                placeholder=""
                type="email"
                onBlur={handleEmailBlur}
              />
            </Field>
            {error && <p>{error}</p>}
            <Field label="Password" mt="5">
              <Input placeholder="" type="password" />
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
          <a href="#" color="whiteAlpha.700" className="forgotPass">
            Forgot password?
          </a>
        </Stack>
      </Card.Root>
    </Container>
  );
};

export default Login;
