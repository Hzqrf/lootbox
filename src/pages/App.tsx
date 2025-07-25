import "../App.css";
// core styles are required for all packages
import "@mantine/core/styles.css";
import RouterSwitcher from "../config/RouterSwitcher";

function App() {

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
