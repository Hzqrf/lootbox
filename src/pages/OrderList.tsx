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
import { useState, useEffect, useMemo } from "react";
import {
  DataTable,
  type DataTableColumn,
  type DataTableSortStatus,
} from "mantine-datatable";
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
    user_id: "233",
    email: "	haziq@gmail.com",
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
    user_id: "22",
    email: "	irfan@gmail.com",
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
    email: "	bazzi@gmail.com",
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
    email: "	razzi@gmail.com",
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
    email: "	fawzan@gmail.com",
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
  },
];

const PAGE_SIZE = [10, 25, 50, 100];

const OrderList = () => {
  // tabs
  const [activeTab, setActiveTab] = useState<string | null>("all");

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(PAGE_SIZE[0]);

  // Step 1: Filter the companies based on the search term
  const filteredData = useMemo(() => {
    return companies.filter((item) =>
      Object.values(item).some((val) =>
        String(val).toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  // Step 2: Paginate the filtered data
  const paginatedData = useMemo(() => {
    const start = (page - 1) * recordsPerPage;
    return filteredData.slice(start, start + recordsPerPage);
  }, [filteredData, page, recordsPerPage]);

  // Reset to page 1 when search or per-page changes
  const handleSearchChange = (value: string) => {
    setSearch(value);
    setPage(1);
  };

  const handlePerPageChange = (value: string | null) => {
    setRecordsPerPage(Number(value));
    setPage(1);
  };

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
                      value={recordsPerPage.toString()}
                      onChange={handlePerPageChange}
                      data={[
                        { value: "10", label: "10" },
                        { value: "25", label: "25" },
                        { value: "50", label: "50" },
                        { value: "100", label: "100" },
                      ]}
                      size="sm"
                      w={80}
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
                      value={search}
                      onChange={(e) =>
                        handleSearchChange(e.currentTarget.value)
                      }
                      placeholder=""
                      size="sm"
                      w={200}
                    />
                  </Group>
                </Group>

                {/* Table */}
                <DataTable
                  withTableBorder
                  textSelectionDisabled
                  height={600}
                  columns={objColumnOrdList}
                  records={paginatedData}
                  totalRecords={filteredData.length}
                  // for pagination
                  recordsPerPage={recordsPerPage}
                  page={page}
                  onPageChange={setPage}
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
