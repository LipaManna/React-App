import React from "react";
import { Card, Container, Stack } from "@chakra-ui/react";
import CardHeader from "./components/CardHeader";
import CardFields from "./components/CardFields";
import CardBottom from "./components/CardBottom";

const Login = () => {
  return (
    <Container px="2" className="mainContainer formContainer">
      <Card.Root
        className="formCard"
        variant={"outline"}
        backgroundColor={"blackAlpha.400"}
        p="10"
      >
        <Stack gap="4" w="full">
          <CardHeader type="login" />
          <CardFields type="login" />
          <CardBottom type="login" />
        </Stack>
      </Card.Root>
    </Container>
  );
};

export default Login;
