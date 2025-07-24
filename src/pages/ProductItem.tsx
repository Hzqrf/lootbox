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
  game: string;
  product_id: string;
  name: string;
  price: number;
  retail_price: number;
  sell_price: number;
  enabled: boolean;
  hot_item: boolean;
}

const companies: Company[] = [
  {
    game: "Ace Racer",
    product_id: "	2790",
    name: "60+5 Tokens",
    price: 3.45,
    retail_price: 3.61,
    sell_price: 3.8,
    enabled: true,
    hot_item: false,
  },
  {
    game: "Mobile Legend (MY/SG)",
    product_id: "2720",
    name: "38 + 4 Diamonds",
    price: 3.07,
    retail_price: 3.22,
    sell_price: 3.38,
    enabled: false,
    hot_item: true,
  },
  {
    game: "Ace Racer",
    product_id: "	2790",
    name: "60+5 Tokens",
    price: 3.45,
    retail_price: 3.61,
    sell_price: 3.8,
    enabled: true,
    hot_item: false,
  },
];

const objColumnOrdList: DataTableColumn<Company>[] = [
  {
    accessor: "game",
    title: "Game",
    textAlign: "left",
    sortable: true,
  },
  {
    accessor: "product_id",
    title: "Product ID",
    textAlign: "left",
    sortable: true,
  },
  {
    accessor: "name",
    title: "Name",
    textAlign: "left",
    sortable: true,
  },
  {
    accessor: "price",
    title: "Price",
    textAlign: "left",
    sortable: true,
  },
  {
    accessor: "retail_price",
    title: "Retail Price",
    textAlign: "left",
    sortable: true,
  },
  {
    accessor: "sell_price",
    title: "Sell Price",
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
    accessor: "hot_item",
    title: "Hot Item",
    textAlign: "left",
    sortable: true,
    render: (record) => (
      <Badge color={record.hot_item ? "green" : "red"} variant="filled">
        {record.hot_item ? "Enabled" : "Disabled"}
      </Badge>
    ),
  },
  {
    accessor: "action",
    textAlign: "left",
    title: <Box mr={6}>Action</Box>,
    render: (com) => (
      <Group gap={4} justify="center" wrap="nowrap">
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
              Product Items
            </Text>
            <Text size="sm">Admin / Product Items</Text>
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
