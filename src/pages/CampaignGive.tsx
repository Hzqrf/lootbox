import {
  Container,
  Group,
  Text,
  Card,
  Button,
  Stack,
  Select,
  TextInput,
  Paper,
  Box,
  Badge,
} from "@mantine/core";
import { useEffect, useMemo, useState } from "react";
import {
  DataTable,
  type DataTableColumn,
  type DataTableSortStatus,
} from "mantine-datatable";
import { sortBy } from "lodash";
import { TbCirclePlusFilled, TbEye } from "react-icons/tb";

interface Company {
  user_id: number;
  email: string;
  prod_name: string;
  item_name: string;
  amt: number;
  date: string;
  status: boolean;
}

// mockup data for the table
const companies: Company[] = [
  {
    user_id: 1,
    email: "test@gmail.ccom",
    prod_name: "Mobile Legend (MY)",
    item_name: "14 Diamonds (13 + 1 Bonus)",
    amt: 0.0,
    date: "3/22/2025, 11:19:45 AM",
    status: true,
  },
  {
    user_id: 2,
    email: "test@gmail.ccom",
    prod_name: "Mirage: Perfect Skyline",
    item_name: "3280 Jades",
    amt: 0.0,
    date: "3/22/2025, 11:19:45 AM",
    status: false,
  },
  {
    user_id: 1,
    email: "test@gmail.ccom",
    prod_name: "Mobile Legend (MY)",
    item_name: "14 Diamonds (13 + 1 Bonus)",
    amt: 0.0,
    date: "3/22/2025, 11:19:45 AM",
    status: true,
  },
  {
    user_id: 2,
    email: "test@gmail.ccom",
    prod_name: "Mirage: Perfect Skyline",
    item_name: "3280 Jades",
    amt: 0.0,
    date: "3/22/2025, 11:19:45 AM",
    status: false,
  },
  {
    user_id: 1,
    email: "test@gmail.ccom",
    prod_name: "Mobile Legend (MY)",
    item_name: "14 Diamonds (13 + 1 Bonus)",
    amt: 0.0,
    date: "3/22/2025, 11:19:45 AM",
    status: true,
  },
  {
    user_id: 2,
    email: "irfan@gmail.ccom",
    prod_name: "Mirage: Perfect Skyline",
    item_name: "3280 Jades",
    amt: 0.0,
    date: "3/22/2025, 11:19:45 AM",
    status: false,
  },
  {
    user_id: 1,
    email: "irfan@gmail.ccom",
    prod_name: "Mobile Legend (MY)",
    item_name: "14 Diamonds (13 + 1 Bonus)",
    amt: 0.0,
    date: "3/22/2025, 11:19:45 AM",
    status: true,
  },
  {
    user_id: 2,
    email: "irfan@gmail.ccom",
    prod_name: "Mirage: Perfect Skyline",
    item_name: "3280 Jades",
    amt: 0.0,
    date: "3/22/2025, 11:19:45 AM",
    status: false,
  },
  {
    user_id: 1,
    email: "irfan@gmail.ccom",
    prod_name: "Mobile Legend (MY)",
    item_name: "14 Diamonds (13 + 1 Bonus)",
    amt: 0.0,
    date: "3/22/2025, 11:19:45 AM",
    status: true,
  },
  {
    user_id: 2,
    email: "haziq@gmail.ccom",
    prod_name: "Mirage: Perfect Skyline",
    item_name: "3280 Jades",
    amt: 0.0,
    date: "3/22/2025, 11:19:45 AM",
    status: false,
  },
  {
    user_id: 1,
    email: "haziq@gmail.ccom",
    prod_name: "Mobile Legend (MY)",
    item_name: "14 Diamonds (13 + 1 Bonus)",
    amt: 0.0,
    date: "3/22/2025, 11:19:45 AM",
    status: true,
  },
  {
    user_id: 2,
    email: "haziq@gmail.ccom",
    prod_name: "Mirage: Perfect Skyline",
    item_name: "3280 Jades",
    amt: 0.0,
    date: "3/22/2025, 11:19:45 AM",
    status: false,
  },
  {
    user_id: 1,
    email: "haziq@gmail.ccom",
    prod_name: "Mobile Legend (MY)",
    item_name: "14 Diamonds (13 + 1 Bonus)",
    amt: 0.0,
    date: "3/22/2025, 11:19:45 AM",
    status: true,
  },
  {
    user_id: 2,
    email: "haziq@gmail.ccom",
    prod_name: "Mirage: Perfect Skyline",
    item_name: "3280 Jades",
    amt: 0.0,
    date: "3/22/2025, 11:19:45 AM",
    status: false,
  },
  {
    user_id: 1,
    email: "haziq@gmail.ccom",
    prod_name: "Mobile Legend (MY)",
    item_name: "14 Diamonds (13 + 1 Bonus)",
    amt: 0.0,
    date: "3/22/2025, 11:19:45 AM",
    status: true,
  },
  {
    user_id: 2,
    email: "haziq@gmail.ccom",
    prod_name: "Mirage: Perfect Skyline",
    item_name: "3280 Jades",
    amt: 0.0,
    date: "3/22/2025, 11:19:45 AM",
    status: false,
  },
];

// object of column table
const objColumnOrdList: DataTableColumn<Company>[] = [
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
    accessor: "prod_name",
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
    accessor: "amt",
    title: "Amount",
    textAlign: "left",
    sortable: true,
  },
  {
    accessor: "date",
    title: "Giveaway Date",
    textAlign: "left",
    sortable: true,
  },
  {
      accessor: "status",
      title: "Status",
      textAlign: "left",
      sortable: true,
      render: (e) => (
        <Badge color={e.status ? "green" : "red"} variant="filled">
          {e.status ? "Success" : "Failed"}
        </Badge>
      ),
    },
];

const PAGE_SIZE = [10, 25, 50, 100];

const CampaignGiveaways = () => {
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
              Giveaway List
            </Text>
            <Text size="sm">Admin / Giveaway List</Text>
          </Group>

          {/* Table  */}
          <Group justify="space-between" grow>
            <Card shadow="sm" padding="lg" radius="md" withBorder h={800}>
              <Text size="lg" fw={600} mb="md" ta={"left"}>
                Giveaway List
              </Text>
              <Group w={200} pb={20}>
                <Button leftSection={<TbCirclePlusFilled />}>
                  Create Giveaway
                </Button>
              </Group>
              <div style={{ width: "100%", height: 300 }}>
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

                <Group pb={20} gap={0}>
                  <Button
                    color="gray"
                    style={{
                      borderTopRightRadius: "0px",
                      borderBottomRightRadius: "0px",
                    }}
                  >
                    Copy
                  </Button>
                  <Button color="gray" style={{ borderRadius: "0px" }}>
                    Excel
                  </Button>
                  <Button color="gray" style={{ borderRadius: "0px" }}>
                    PDF
                  </Button>
                  <Button
                    color="gray"
                    style={{
                      borderTopLeftRadius: "0px",
                      borderBottomLeftRadius: "0px",
                    }}
                  >
                    Column Visiblity
                  </Button>
                </Group>

                <Paper withBorder>
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
                </Paper>
              </div>
            </Card>
          </Group>
        </Stack>
      </Container>
    </>
  );
};

export default CampaignGiveaways;
