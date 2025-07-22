import {
  Container,
  Group,
  Text,
  Card,
  SimpleGrid,
  Button,
  Flex,
  ThemeIcon,
  Stack,
  Anchor,
  Tabs,
  Select,
  TextInput,
  Paper,
  Table,
  ScrollArea,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import {
  TbShoppingCart,
  TbCurrencyDollar,
  TbPackage,
  TbUser,
} from "react-icons/tb";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useState } from "react";
import TableScrollArea from "../components/tableScroll";
import { DataTable } from 'mantine-datatable';

interface Order {
  id: number;
  referenceId: string;
  userId: string;
  email: string;
  productName: string;
  itemId: number;
  amount: number;
  transactionDate: string;
  createdDate: string;
}

const mockOrders: Order[] = [
  {
    id: 818,
    referenceId: "LBFB9A035A8E5DBAG12112569",
    userId: "",
    email: "tharshan1804@gmail.com",
    productName: "121",
    itemId: 2569,
    amount: 25.7,
    transactionDate: "-",
    createdDate: "5/9/2025, 8:0",
  },
  {
    id: 823,
    referenceId: "LBAEB8FF81279DB1G12112586",
    userId: "",
    email: "darwishiman906@gmail.com",
    productName: "121",
    itemId: 2586,
    amount: 85.52,
    transactionDate: "-",
    createdDate: "5/9/2025, 8:0",
  },
  {
    id: 824,
    referenceId: "LB56063A72B877AOG12112577",
    userId: "32",
    email: "hakimazmal_27@yahoo.com",
    productName: "121",
    itemId: 2577,
    amount: 34.26,
    transactionDate: "-",
    createdDate: "5/9/2025, 8:0",
  },
  {
    id: 825,
    referenceId: "LBFOFA32346464I6G12112563",
    userId: "",
    email: "hafizbujang00@gmail.com",
    productName: "121",
    itemId: 2563,
    amount: 21.42,
    transactionDate: "-",
    createdDate: "5/9/2025, 8:0",
  },
  {
    id: 829,
    referenceId: "LB6BB9A8B693C9E9G12112582",
    userId: "",
    email: "doremyfas0@gmail.com",
    productName: "121",
    itemId: 2582,
    amount: 51.36,
    transactionDate: "-",
    createdDate: "5/9/2025, 8:1",
  },
  {
    id: 834,
    referenceId: "LB80C2B60122010BG12112597",
    userId: "88",
    email: "shafiq.haha@gmail.com",
    productName: "121",
    itemId: 2597,
    amount: 256.67,
    transactionDate: "-",
    createdDate: "5/9/2025, 8:2",
  },
  {
    id: 835,
    referenceId: "LBA417E912A89F2CG12112547",
    userId: "",
    email: "Farhanimran4k@gmail.com",
    productName: "121",
    itemId: 2547,
    amount: 1.75,
    transactionDate: "-",
    createdDate: "5/9/2025, 8:2",
  },
  {
    id: 836,
    referenceId: "LBDAC9F364858AAOG12112566",
    userId: "",
    email: "Thevaneshkuill@gmail.com",
    productName: "121",
    itemId: 2566,
    amount: 22.03,
    transactionDate: "-",
    createdDate: "5/9/2025, 8:2",
  },
];

const OrderList = () => {
  const [activeTab, setActiveTab] = useState<string | null>("processing");
  const [entriesPerPage, setEntriesPerPage] = useState<string | null>("10");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredOrders = mockOrders.filter(
    (order) =>
      order.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.referenceId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.id.toString().includes(searchQuery)
  );

  const rows = filteredOrders.map((order) => (
    <Table.Tr key={order.id}>
      <Table.Td>{order.id}</Table.Td>
      <Table.Td>
        <Anchor href="#" c="blue" size="sm">
          {order.referenceId}
        </Anchor>
      </Table.Td>
      <Table.Td>{order.userId || "-"}</Table.Td>
      <Table.Td>{order.email}</Table.Td>
      <Table.Td>{order.productName}</Table.Td>
      <Table.Td>{order.itemId}</Table.Td>
      <Table.Td>{order.amount.toFixed(2)}</Table.Td>
      <Table.Td>{order.transactionDate}</Table.Td>
      <Table.Td>{order.createdDate}</Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <Container fluid>
        <Stack gap="xl">
          {/* Title Page */}
          <Group justify="space-between">
            <Text fw={500} size="lg">
              Order List
            </Text>
            <Text size="sm">Admin / Orders</Text>
          </Group>

          {/* Table  */}
          <Group justify="space-between" grow>
            <Card shadow="sm" padding="lg" radius="md" withBorder h={500}>
              <Text size="lg" fw={600} mb="md" ta={"left"}>
                Orders
              </Text>
              <div style={{ width: "100%", height: 300 }}>
                {/* Tab list */}
                <Tabs value={activeTab} onChange={setActiveTab} mb="lg">
                  <Tabs.List>
                    <Tabs.Tab value="all">All Orders</Tabs.Tab>
                    <Tabs.Tab value="pending">Pending Payment</Tabs.Tab>
                    <Tabs.Tab value="paid">Paid</Tabs.Tab>
                    <Tabs.Tab value="processing">Processing</Tabs.Tab>
                    <Tabs.Tab value="success">Success</Tabs.Tab>
                    <Tabs.Tab value="failed">Failed</Tabs.Tab>
                    <Tabs.Tab value="refunded">Refunded</Tabs.Tab>
                  </Tabs.List>
                </Tabs>

                {/* Select */}
                <Group justify="space-between" mb="md">
                  <Group gap="xs">
                    <Text size="sm" c="gray.7">
                      Show
                    </Text>
                    <Select
                      value={entriesPerPage}
                      onChange={setEntriesPerPage}
                      data={["10", "25", "50", "100"]}
                      w={70}
                      size="sm"
                    />
                    <Text size="sm" c="gray.7">
                      entries
                    </Text>
                  </Group>

                  {/* Textbox for search */}
                  <Group gap="xs">
                    <Text size="sm" c="gray.7">
                      Search:
                    </Text>
                    <TextInput
                      value={searchQuery}
                      onChange={(event) =>
                        setSearchQuery(event.currentTarget.value)
                      }
                      placeholder=""
                      size="sm"
                      w={200}
                    />
                  </Group>
                </Group>

                <Paper withBorder>
                  <Table.ScrollContainer minWidth={500} maxHeight={300}>
                    <Table striped highlightOnHover>
                      <Table.Thead>
                        <Table.Tr>
                          <Table.Th>ID</Table.Th>
                          <Table.Th>Reference ID</Table.Th>
                          <Table.Th>User ID</Table.Th>
                          <Table.Th>Email</Table.Th>
                          <Table.Th>Product Name</Table.Th>
                          <Table.Th>Item ID</Table.Th>
                          <Table.Th>Amount</Table.Th>
                          <Table.Th>Transaction Date</Table.Th>
                          <Table.Th>Created Date</Table.Th>
                        </Table.Tr>
                      </Table.Thead>
                      <Table.Tbody>{rows}</Table.Tbody>
                    </Table>
                  </Table.ScrollContainer>
                </Paper>
              </div>
            </Card>
          </Group>
        </Stack>
      </Container>
    </>
  );
};

export default OrderList;
