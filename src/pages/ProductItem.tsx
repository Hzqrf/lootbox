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
  ActionIcon,
  Badge,
} from "@mantine/core";
import { useEffect, useMemo, useState } from "react";
import {
  DataTable,
  type DataTableColumn,
  type DataTableSortStatus,
} from "mantine-datatable";
import { sortBy } from "lodash";
import { TbEdit } from "react-icons/tb";

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

const ProductItems = () => {
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
              Product Items
            </Text>
            <Text size="sm">Admin / Product Items</Text>
          </Group>

          {/* Table  */}
          <Group justify="space-between" grow>
            <Card shadow="sm" padding="lg" radius="md" withBorder h={800}>
              <Text size="lg" fw={600} mb="md" ta={"left"}>
                Product Items
              </Text>
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
                    height={600}
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

export default ProductItems;
