import { Box, Button, Text, VStack } from "@chakra-ui/react";
import { ThemedTitleV2 } from "@refinedev/chakra-ui";
import { useLogin } from "@refinedev/core";

import { useTranslate } from "@refinedev/core";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";

export default function Login() {
  const { mutate: login } = useLogin();

  const t = useTranslate();

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <VStack spacing="10" align="stretch">
        <ThemedTitleV2
          collapsed={false}
          wrapperStyles={{
            fontSize: "22px",
          }}
        />

        <Button
          style={{ width: "240px" }}
          colorScheme="blue"
          onClick={() => login({})}
        >
          {t("pages.login.signin", "Sign in")}
        </Button>

        <Text
          justifyContent="center"
          display="inherit"
          fontSize="12px"
          color="gray"
        >
          Powered by
          <img
            style={{ padding: "0 5px" }}
            alt="Google"
            src="https://refine.ams3.cdn.digitaloceanspaces.com/superplate-auth-icons%2Fgoogle.svg"
          />
          Google
        </Text>
      </VStack>
    </Box>
  );
}

Login.noLayout = true;

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  const translateProps = await serverSideTranslations(context.locale ?? "en", [
    "common",
  ]);

  if (session) {
    return {
      props: {},
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      ...translateProps,
    },
  };
};
