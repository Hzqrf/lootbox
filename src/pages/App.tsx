import "../App.css";
// core styles are required for all packages
import "@mantine/core/styles.css";
import { AppShell, Text } from "@mantine/core";
import RouterSwitcher from "../config/RouterSwitcher";
import LeftSidebar from "./LeftSidebar";
import Header from "./Header";
import { useDisclosure } from "@mantine/hooks";

function App() {
  // const [opened, { toggle }] = useDisclosure();
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  return (
    <AppShell
      layout="alt"
      header={{ height: 70 }}
      navbar={{
        width: { sm: 200, lg: 250 },
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      // aside={{ width: 300, breakpoint: 'md', collapsed: { desktop: false, mobile: true } }}
    >
      <LeftSidebar />
      <AppShell.Main>
        <Header
          mobileOpened={mobileOpened}
          toggleMobile={toggleMobile}
          toggleDesktop={toggleDesktop}
        />
        <RouterSwitcher />
      </AppShell.Main>
      <AppShell.Footer>
        <Text
          size="sm"
          color="dimmed"
          ta={"left"}
          pl="30"
          style={{
            bottom: "20px",
            width: "100%",
          }}
        >
          2025 © Vamos.
        </Text>
        <Text
          size="sm"
          color="dimmed"
          ta={"right"}
          pr="30"
          style={{
            top: "20px",
            width: "100%",
          }}
        >
          Lootbox Asia - Admin Panel
        </Text>
      </AppShell.Footer>
    </AppShell>
  );
}

export default App;
