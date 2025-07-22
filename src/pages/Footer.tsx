

import { Group, Text } from "@mantine/core";

const Footer = () => {
  return (
     <footer style={{ marginTop: 32, padding: 16, bottom: 0 }}>
      <Group justify="space-between" style={{ width: "100%" }}>
        <Text size="sm" color="dimmed">
          2025 © Vamos.
        </Text>
        <Text size="sm" color="dimmed">
          Vamos Asia - Admin Panel
        </Text>
      </Group>
    </footer>
  );
};

export default Footer;
