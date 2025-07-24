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
  Box,
  ActionIcon,
  Badge
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
import { useEffect, useState } from "react";
import TableScrollArea from "../components/tableScroll";
import {
  DataTable,
  type DataTableColumn,
  type DataTableSortStatus,
} from "mantine-datatable";
import { sortBy } from "lodash";
import { TbGift, TbList, TbEdit } from "react-icons/tb";

interface Company {
  game_id: string;
  title: string;
  genre: string;
  publisher: string;
  category: string;
  ordering: string;
  enabled: boolean;
}

const companies: Company[] = [
  {
    game_id: "1",
    title: "1323addd-a4ac-4dd2-8de2-6f934969a0f1",
    genre: "13242",
    publisher: "	dsgdsrgr@gmail.com",
    category: "Mobile Legend (MY)",
    ordering: "	14 Diamonds (13 + 1 Bonus)",
    enabled: true,
  },
  {
    game_id: "2",
    title: "1323addd-a4ac-4dd2-8de2-6f934969a0f1",
    genre: "13242",
    publisher: "	dsgdsrgr@gmail.com",
    category: "Mobile Legend (MY)",
    ordering: "	14 Diamonds (13 + 1 Bonus)",
    enabled: false,
  },
  {
    game_id: "3",
    title: "1323addd-a4ac-4dd2-8de2-6f934969a0f1",
    genre: "13242",
    publisher: "	dsgdsrgr@gmail.com",
    category: "Mobile Legend (MY)",
    ordering: "	14 Diamonds (13 + 1 Bonus)",
    enabled: true,
  },
  {
    game_id: "4",
    title: "1323addd-a4ac-4dd2-8de2-6f934969a0f1",
    genre: "13242",
    publisher: "	dsgdsrgr@gmail.com",
    category: "Mobile Legend (MY)",
    ordering: "	14 Diamonds (13 + 1 Bonus)",
    enabled: false,
  },
  {
    game_id: "5",
    title: "1323addd-a4ac-4dd2-8de2-6f934969a0f1",
    genre: "13242",
    publisher: "	dsgdsrgr@gmail.com",
    category: "Mobile Legend (MY)",
    ordering: "	14 Diamonds (13 + 1 Bonus)",
    enabled: true,
  },
];

const objColumnOrdList: DataTableColumn<Company>[] = [
  {
    accessor: "game_id",
    title: "Game ID",
    textAlign: "left",
    sortable: true,
  },
  {
    accessor: "title",
    title: "Title",
    textAlign: "left",
    sortable: true,
  },
  {
    accessor: "genre",
    title: "Genre",
    textAlign: "left",
    sortable: true,
  },
  {
    accessor: "publisher",
    title: "Publisher",
    textAlign: "left",
    sortable: true,
  },
  {
    accessor: "category",
    title: "Category",
    textAlign: "left",
    sortable: true,
  },
  {
    accessor: "ordering",
    title: "Item Ordering",
    textAlign: "left",
    sortable: true,
  },
  {
    accessor: "enabled",
    title: "Enabled",
    textAlign: "left",
    sortable: true,
    render: (record) => (
      <Badge color={record.enabled ? "green" : "red"} variant="filled">
        {record.enabled ? "Enabled" : "Disabled"}
      </Badge>
    ),
  },
  {
    accessor: "action",
    textAlign: "left",
    title: <Box mr={6}>Row actions</Box>,
    render: (com) => (
      <Group gap={4} justify="right" wrap="nowrap">
        <ActionIcon size="lg" variant="filled" color="#f2b24e">
          <TbGift size={20} />
        </ActionIcon>
        <ActionIcon size="lg" variant="filled" color="#32c28d">
          <TbList size={20} />
        </ActionIcon>
        <ActionIcon size="lg" variant="filled" color="#556ee6">
          <TbEdit size={20} />
        </ActionIcon>
      </Group>
    ),
  },
];

const PAGE_SIZE = 10;

const ProductList = () => {
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
              Product List
            </Text>
            <Text size="sm">Admin / Product List</Text>
          </Group>

          {/* Table  */}
          <Group justify="space-between" grow>
            <Card shadow="sm" padding="lg" radius="md" withBorder h={800}>
              <Text size="lg" fw={600} mb="md" ta={"left"}>
                Product List
              </Text>
              <div style={{ width: "100%", height: 300 }}>
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
                </Paper>
              </div>
            </Card>
          </Group>
        </Stack>
      </Container>
    </>
  );
};

export default ProductList;
