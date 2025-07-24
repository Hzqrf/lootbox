import {
  Container,
  Group,
  Text,
  Card,
  Stack,
  Tabs,
  Select,
  TextInput,
} from "@mantine/core";
import { useState, useEffect } from "react";
import { DataTable, type DataTableColumn, type DataTableSortStatus } from "mantine-datatable";
import "mantine-datatable/styles.layer.css";
import sortBy from "lodash/sortBy";

interface Company {
  order_id: string;
  reference_id: string;
  user_id: string;
  email: string;
  product_name: string;
  item_name: string;
  amount: number;
  trans_date: string;
  created_date: string;
  status: string;
}

const companies: Company[] = [
  {
    order_id: "1",
    reference_id: "1323addd-a4ac-4dd2-8de2-6f934969a0f1",
    user_id: "13242",
    email: "	dsgdsrgr@gmail.com",
    product_name: "Mobile Legend (MY)",
    item_name: "	14 Diamonds (13 + 1 Bonus)",
    amount: 1.06,
    trans_date: "124325",
    created_date: "231124",
    status: "Success",
  },
  {
    order_id: "2",
    reference_id: "1323addd-a4ac-4dd2-8de2-6f934969a0f1",
    user_id: "23242",
    email: "	dsgdsrgr@gmail.com",
    product_name: "Mobile Legend (MY)",
    item_name: "	14 Diamonds (13 + 1 Bonus)",
    amount: 1.06,
    trans_date: "124325",
    created_date: "231124",
    status: "Success",
  },
  {
    order_id: "3",
    reference_id: "1323addd-a4ac-4dd2-8de2-6f934969a0f1",
    user_id: "33242",
    email: "	dsgdsrgr@gmail.com",
    product_name: "Mobile Legend (MY)",
    item_name: "	14 Diamonds (13 + 1 Bonus)",
    amount: 1.06,
    trans_date: "124325",
    created_date: "231124",
    status: "Success",
  },
  {
    order_id: "4",
    reference_id: "1323addd-a4ac-4dd2-8de2-6f934969a0f1",
    user_id: "43242",
    email: "	dsgdsrgr@gmail.com",
    product_name: "Mobile Legend (MY)",
    item_name: "	14 Diamonds (13 + 1 Bonus)",
    amount: 1.06,
    trans_date: "124325",
    created_date: "231124",
    status: "Success",
  },
  {
    order_id: "5",
    reference_id: "1323addd-a4ac-4dd2-8de2-6f934969a0f1",
    user_id: "53242",
    email: "	dsgdsrgr@gmail.com",
    product_name: "Mobile Legend (MY)",
    item_name: "	14 Diamonds (13 + 1 Bonus)",
    amount: 1.06,
    trans_date: "124325",
    created_date: "231124",
    status: "Success",
  },
  {
    order_id: "6",
    reference_id: "1323addd-a4ac-4dd2-8de2-6f934969a0f1",
    user_id: "63242",
    email: "	dsgdsrgr@gmail.com",
    product_name: "Mobile Legend (MY)",
    item_name: "	14 Diamonds (13 + 1 Bonus)",
    amount: 1.06,
    trans_date: "124325",
    created_date: "231124",
    status: "Success",
  },
  {
    order_id: "7",
    reference_id: "1323addd-a4ac-4dd2-8de2-6f934969a0f1",
    user_id: "73242",
    email: "	dsgdsrgr@gmail.com",
    product_name: "Mobile Legend (MY)",
    item_name: "	14 Diamonds (13 + 1 Bonus)",
    amount: 1.06,
    trans_date: "124325",
    created_date: "231124",
    status: "Success",
  },
  {
    order_id: "8",
    reference_id: "1323addd-a4ac-4dd2-8de2-6f934969a0f1",
    user_id: "83242",
    email: "	dsgdsrgr@gmail.com",
    product_name: "Mobile Legend (MY)",
    item_name: "	14 Diamonds (13 + 1 Bonus)",
    amount: 1.06,
    trans_date: "124325",
    created_date: "231124",
    status: "Success",
  },
  {
    order_id: "9",
    reference_id: "1323addd-a4ac-4dd2-8de2-6f934969a0f1",
    user_id: "93242",
    email: "	dsgdsrgr@gmail.com",
    product_name: "Mobile Legend (MY)",
    item_name: "	14 Diamonds (13 + 1 Bonus)",
    amount: 1.06,
    trans_date: "124325",
    created_date: "231124",
    status: "Success",
  },
  {
    order_id: "10",
    reference_id: "1323addd-a4ac-4dd2-8de2-6f934969a0f1",
    user_id: "23242",
    email: "	dsgdsrgr@gmail.com",
    product_name: "Mobile Legend (MY)",
    item_name: "	14 Diamonds (13 + 1 Bonus)",
    amount: 1.06,
    trans_date: "124325",
    created_date: "231124",
    status: "Success",
  },
  {
    order_id: "11",
    reference_id: "1323addd-a4ac-4dd2-8de2-6f934969a0f1",
    user_id: "23242",
    email: "	dsgdsrgr@gmail.com",
    product_name: "Mobile Legend (MY)",
    item_name: "	14 Diamonds (13 + 1 Bonus)",
    amount: 1.06,
    trans_date: "124325",
    created_date: "231124",
    status: "Success",
  },
  {
    order_id: "12",
    reference_id: "1323addd-a4ac-4dd2-8de2-6f934969a0f1",
    user_id: "23242",
    email: "	dsgdsrgr@gmail.com",
    product_name: "Mobile Legend (MY)",
    item_name: "	14 Diamonds (13 + 1 Bonus)",
    amount: 1.06,
    trans_date: "124325",
    created_date: "231124",
    status: "Success",
  },
];

const objColumnOrdList: DataTableColumn<Company>[] = [
  {
    accessor: "order_id",
    title: "Order ID",
    textAlign: "left",
    sortable: true,
  },
  {
    accessor: "reference_id",
    title: "Reference ID",
    textAlign: "left",
    sortable: true,
  },
  {
    accessor: "user_id",
    title: "User ID",
    textAlign: "left",
    sortable: true,
  },
  {
    accessor: "email",
    title: "Email",
    textAlign: "left",
    sortable: true,
  },
  {
    accessor: "product_name",
    title: "Product Name",
    textAlign: "left",
    sortable: true,
  },
  {
    accessor: "item_name",
    title: "Item Name",
    textAlign: "left",
    sortable: true,
  },
  {
    accessor: "amount",
    title: "Amount",
    textAlign: "left",
    sortable: true,
  },
  {
    accessor: "trans_date",
    title: "Transaction Date",
    textAlign: "left",
    sortable: true,
  },
  {
    accessor: "created_date",
    title: "Created Date",
    textAlign: "left",
    sortable: true,
  },
  {
    accessor: "status",
    title: "Status",
    textAlign: "left",
    sortable: true,
  }
];

const PAGE_SIZE = 10;

const OrderList = () => {
  const [activeTab, setActiveTab] = useState<string | null>("all");
  const [entriesPerPage, setEntriesPerPage] = useState<string | null>("10");
  const perPageNumber = parseInt(entriesPerPage || "10", 10);
  const [searchQuery, setSearchQuery] = useState("");

  // for sorting
  const [sortStatus, setSortStatus] = useState<DataTableSortStatus<Company>>({
    columnAccessor: "name",
    direction: "asc",
  });

  const [page, setPage] = useState(1);
  const [records, setRecords] = useState(companies.slice(0, PAGE_SIZE));

  // for pagination
  useEffect(() => {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE;
    setRecords(companies.slice(from, to));
  }, [page]);

  // for sorting
  useEffect(() => {
    const data = sortBy(companies, sortStatus.columnAccessor) as Company[];
    setRecords(sortStatus.direction === "desc" ? data.reverse() : data);
  }, [sortStatus]);

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
            <Card shadow="sm" padding="lg" radius="md" withBorder h={800}>
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
                      value={entriesPerPage?.toString()}
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

                {/* Table */}
                <DataTable
                  textSelectionDisabled
                  height={600}
                  columns={objColumnOrdList}
                  // for pagination
                  records={records}
                  totalRecords={companies.length}
                  recordsPerPage={perPageNumber}
                  page={page}
                  onPageChange={(p) => setPage(p)}
                  // for sorting
                  sortStatus={sortStatus}
                  onSortStatusChange={setSortStatus}
                />
              </div>
            </Card>
          </Group>
        </Stack>
      </Container>
    </>
  );
};

export default OrderList;
