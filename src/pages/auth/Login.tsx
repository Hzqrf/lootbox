import {
  Button,
  Checkbox,
  Group,
  Stack,
  PasswordInput,
  TextInput,
  Text,
  Title,
} from "@mantine/core";
import { isEmail, useForm } from "@mantine/form";
import { Navigate, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Stack
          p={20}
          justify="center"
          align="center"
          bg={"white"}
          w={{
            sm: "420px",
          }}
        >
          {/* Welcome Text */}
          <Stack gap={8} ta={"left"}>
            <Title order={2} size="1.5rem" fw={600} c="black">
              Welcome Back !
            </Title>
            <Text c="black" size="sm" ta="center">
              Sign in to continue to Vamos
              <br />
              Admin Panel
            </Text>
          </Stack>
          <Stack w={"100%"} gap={10}>
            <Text size="md" c="black" fw={500} ta={"left"}>
              Email
            </Text>
            <TextInput
              placeholder="Enter Email"
              size="md"
              key={form.key("email")}
              {...form.getInputProps("email")}
            />

            <Text size="md" c="black" fw={500} ta={"left"}>
              Password
            </Text>
            <PasswordInput
              placeholder="Enter Password"
              size="md"
              key={form.key("password")}
              {...form.getInputProps("password")}
            />

            <Group mt="md">
              <Button
                size="md"
                type="submit"
                fullWidth
                variant="gradient"
                gradient={{ from: "#40d7e8", to: "cyan", deg: 90 }}
              >
                Log In
              </Button>
            </Group>
          </Stack>
        </Stack>
        {/* Footer */}
        <Text
          size="sm"
          c="dimmed"
          style={{
            position: "absolute",
            bottom: "20px",
            textAlign: "center",
            width: "100%",
          }}
        >
          © 2025 Vamos. All Rights Reserved
        </Text>
      </div>
    </form>
  );
}

export default Login;
