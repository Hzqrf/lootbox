import React from "react";

import { Group, Text } from "@mantine/core";

const Footer = () => {
  return (
    <footer style={{ marginTop: 32, padding: 16, background: '#f1f1f1' }}>
      <Group>
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
      </Group>
    </footer>
  );
};

export default Footer;
