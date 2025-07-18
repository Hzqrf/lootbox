import { Flex, AppShell, Burger, Button, Paper, Center, Group, Text } from "@mantine/core";

const Header = ({ mobileOpened, toggleMobile, desktopOpened, toggleDesktop }: any) => {
  return (
    <AppShell.Header>
      <Group h="100%" px="md">
        <Burger
          opened={mobileOpened}
          onClick={toggleMobile}
          hiddenFrom="sm"
          size="sm"
        />
        <Burger
          opened={desktopOpened}
          onClick={toggleDesktop}
          visibleFrom="sm"
          size="sm"
        />
        {/* <MantineLogo size={30} /> */}
      </Group>
      <Flex
        justify="space-between"
        align="center"
        style={{ padding: "10px 20px" }}
      >
        {/* <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" /> */}
        <Text>Title</Text>
      </Flex>
    </AppShell.Header>
  );
};

export default Header;
