import { Container, Spacer, Text } from "@nextui-org/react";
import NextLink from "next/link";
import React from "react";
import { Routes } from "../lib/Routes";

type LayoutProps = Record<string, never>;

export default function Layout({
  children,
}: React.PropsWithChildren<LayoutProps>) {
  return (
    <>
      <Spacer />
      <Container
        justify="center"
        alignItems="center"
        display="flex"
        direction="column"
        fluid
      >
        <NextLink href={Routes.home}>
          <a>
            <Text h1>Lightsats⚡</Text>
          </a>
        </NextLink>
      </Container>
      <Container
        justify="center"
        alignItems="center"
        display="flex"
        direction="column"
      >
        {children}
      </Container>
      <Spacer />
    </>
  );
}
