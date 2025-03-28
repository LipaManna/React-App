import { Card, Container, Stack } from "@chakra-ui/react";
import React from "react";
import CardHeader from "./components/CardHeader";
import CardFields from "./components/CardFields";
import CardBottom from "./components/CardBottom";

const SignUp = () => {
  return (
    <Container px="2" className="mainContainer formContainer">
      <Card.Root
        className="formCard"
        variant={"outline"}
        backgroundColor={"blackAlpha.400"}
        p="10"
      >
        <Stack gap="4" w="full">
          <CardHeader type="signup" />
          <CardFields type="signup" />
          <CardBottom type="signup" />
        </Stack>
      </Card.Root>
    </Container>
  );
};

export default SignUp;
