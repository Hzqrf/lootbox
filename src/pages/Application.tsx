import {
  Container,
  Group,
  Text,
  Card,
  Stack,
  Tabs,
  Select,
  TextInput,
  Button,
  Box,
  ActionIcon,
  Badge,
} from "@mantine/core";
import { useState, useEffect, useMemo } from "react";
import {
  DataTable,
  type DataTableColumn,
  type DataTableSortStatus,
} from "mantine-datatable";
import "mantine-datatable/styles.layer.css";
import sortBy from "lodash/sortBy";
import { TbEdit } from "react-icons/tb";

interface Company {
  app_id: string;
  user_id: string;
  user_name: string;
  email: string;
  user_phone: string;
  type: string;
  target: string;
  social_status: boolean;
  status: boolean;
}

const companies: Company[] = [
  {
    app_id: "1",
    user_id: "12423",
    user_name: "Haziq Irfan",
    email: "haziq@gmail.com",
    user_phone: "01895432423",
    type: "Individual",
    target: "Family and Friends",
    social_status: true,
    status: true,
  },
  {
    app_id: "2",
    user_id: "12423",
    user_name: "Haziq Irfan",
    email: "haziq@gmail.com",
    user_phone: "01895432423",
    type: "Individual",
    target: "Family and Friends",
    social_status: true,
    status: true,
  },
  {
    app_id: "3",
    user_id: "12423",
    user_name: "Haziq Irfan",
    email: "irfan@gmail.com",
    user_phone: "01895432423",
    type: "Individual",
    target: "Family and Friends",
    social_status: false,
    status: true,
  },
  {
    app_id: "3",
    user_id: "12423",
    user_name: "Haziq Irfan",
    email: "irfan@gmail.com",
    user_phone: "01895432423",
    type: "Individual",
    target: "Family and Friends",
    social_status: false,
    status: true,
  },
  {
    app_id: "3",
    user_id: "12423",
    user_name: "Haziq Irfan",
    email: "irfan@gmail.com",
    user_phone: "01895432423",
    type: "Individual",
    target: "Family and Friends",
    social_status: false,
    status: true,
  },
  {
    app_id: "4",
    user_id: "432323",
    user_name: "Chris",
    email: "Hemsworth@gmail.com",
    user_phone: "01895432423",
    type: "Individual",
    target: "Family and Friends",
    social_status: false,
    status: true,
  },
  {
    app_id: "4",
    user_id: "432323",
    user_name: "Chris",
    email: "Hemsworth@gmail.com",
    user_phone: "01895432423",
    type: "Individual",
    target: "Family and Friends",
    social_status: false,
    status: true,
  },
  {
    app_id: "4",
    user_id: "432323",
    user_name: "Chris",
    email: "Hemsworth@gmail.com",
    user_phone: "01895432423",
    type: "Individual",
    target: "Family and Friends",
    social_status: false,
    status: true,
  },
  {
    app_id: "4",
    user_id: "432323",
    user_name: "Chris",
    email: "Hemsworth@gmail.com",
    user_phone: "01895432423",
    type: "Individual",
    target: "Family and Friends",
    social_status: false,
    status: true,
  },
  {
    app_id: "4",
    user_id: "432323",
    user_name: "Chris",
    email: "Hemsworth@gmail.com",
    user_phone: "01895432423",
    type: "Individual",
    target: "Family and Friends",
    social_status: false,
    status: true,
  },
  {
    app_id: "4",
    user_id: "432323",
    user_name: "Chris",
    email: "Hemsworth@gmail.com",
    user_phone: "01895432423",
    type: "Individual",
    target: "Family and Friends",
    social_status: false,
    status: true,
  },
  {
    app_id: "12",
    user_id: "12423",
    user_name: "Aizat Hamdan",
    email: "aizat@gmail.com",
    user_phone: "01895432423",
    type: "Individual",
    target: "Family and Friends",
    social_status: true,
    status: false,
  },
];

const objColumnOrdList: DataTableColumn<Company>[] = [
  {
    accessor: "app_id",
    title: "ID",
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
    accessor: "user_name",
    title: "Name",
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
    accessor: "user_phone",
    title: "Phone",
    textAlign: "left",
    sortable: true,
  },
  {
    accessor: "type",
    title: "Type",
    textAlign: "left",
    sortable: true,
  },
  {
    accessor: "target",
    title: "Target",
    textAlign: "left",
    sortable: true,
  },
  {
    accessor: "social_status",
    title: "Social Media Status",
    textAlign: "left",
    sortable: true,
    render: (record) => (
          <Badge size="xs" color={record.social_status ? "green" : "red"} variant="filled">
            {record.social_status ? "True" : "False"}
          </Badge>
        ),
  },
  {
    accessor: "status",
    title: "Status",
    textAlign: "left",
    sortable: true,
    render: (record) => (
          <Badge size="xs" color={record.status ? "green" : "#f0b54d"} variant="filled">
            {record.status ? "Approved" : "Pending"}
          </Badge>
        ),
  },
  {
      accessor: "action",
      textAlign: "left",
      title: <Box mr={6}>Action</Box>,
      render: () => (
        <Group gap={4} justify="center" wrap="nowrap">
          <ActionIcon size="lg" variant="filled" color="#556ee6">
            <TbEdit size={20} />
          </ActionIcon>
        </Group>
      ),
    },
];

const PAGE_SIZE = [10, 25, 50, 100];

const Application = () => {
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
              Application List
            </Text>
            <Text size="sm">Admin / Application List</Text>
          </Group>

          {/* Table  */}
          <Group justify="space-between" grow>
            <Card shadow="sm" padding="lg" radius="md" withBorder h={800}>
              <Text size="lg" fw={600} mb="md" ta={"left"}>
                Application List
              </Text>
              <div style={{ width: "100%", height: 300 }}>
                {/* Tab list */}
                <Tabs value={activeTab} onChange={setActiveTab} mb="lg">
                  <Tabs.List>
                    <Tabs.Tab value="all">All</Tabs.Tab>
                    <Tabs.Tab value="approved">Approved</Tabs.Tab>
                    <Tabs.Tab value="pending">Pending</Tabs.Tab>
                    <Tabs.Tab value="rejected">Rejected</Tabs.Tab>
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

                <Group pb={25} gap="xs">
                  <Button size="xs" color={"#556ee6"} variant="filled">
                    Excel
                  </Button>
                  <Button size="xs" color={"#f46b6c"} variant="filled">
                    PDF
                  </Button>
                  <Button size="xs" color={"#73788c"} variant="filled">
                    Print
                  </Button>
                </Group>

                {/* Table */}
                <DataTable
                  withTableBorder
                  textSelectionDisabled
                  height={500}
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

export default Application;
