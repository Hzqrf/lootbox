import "../App.css";
// core styles are required for all packages
import "@mantine/core/styles.css";
import { AppShell, AppShellFooter, Text, Container } from "@mantine/core";
import RouterSwitcher from "../config/RouterSwitcher";
import LeftSidebar from "./LeftSidebar";
import Header from "./Header";
import { useDisclosure } from "@mantine/hooks";
import Footer from "./Footer";

function App() {
  // const [opened, { toggle }] = useDisclosure();
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure(true);
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  return (
    // <AppShell
    //   layout="alt"
    //   header={{ height: 70 }}
    //   navbar={{
    //     width: { sm: 200, lg: 250 },
    //     breakpoint: "sm",
    //     collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
    //   }}
    //   // aside={{ width: 300, breakpoint: 'md', collapsed: { desktop: false, mobile: true } }}
    // >
    //   <LeftSidebar />
    //   <Container size="xl">
    //     {" "}
    //     {/* This controls the max width */}
    //     <AppShell.Main>
    //       <Header
    //         mobileOpened={mobileOpened}
    //         desktopOpened={desktopOpened}
    //         toggleMobile={toggleMobile}
    //         toggleDesktop={toggleDesktop}
    //       />
    //   <RouterSwitcher />
    //       <Footer />
    //     </AppShell.Main>
    //   </Container>
    // </AppShell>
    <RouterSwitcher />
  );
}

export default App;
