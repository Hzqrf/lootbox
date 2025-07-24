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
} from "@mantine/core";
import { useEffect, useState } from "react";
import {
  DataTable,
  type DataTableColumn,
  type DataTableSortStatus,
} from "mantine-datatable";
import { sortBy } from "lodash";
import { TbCirclePlusFilled, TbEye } from "react-icons/tb";

interface Company {
  cam_id: number;
  cam_tier: number;
  cam_title: string;
  cam_desc: string;
  cam_percentage: number;
}

// mockup data for the table
const companies: Company[] = [
  {
    cam_id:1,
    cam_tier:1,
    cam_title: "NEWBIE",
    cam_desc: "10% 5,000 Sales",
    cam_percentage: 10,
  },
];

// object of column table
const objColumnOrdList: DataTableColumn<Company>[] = [
  {
    accessor: "cam_id",
    title: "ID",
    textAlign: "left",
    sortable: true,
  },
  {
    accessor: "cam_tier",
    title: "Tier",
    textAlign: "left",
    sortable: true,
  },
  {
    accessor: "cam_title",
    title: "Title",
    textAlign: "left",
    sortable: true,
  },
  {
    accessor: "cam_desc",
    title: "Description",
    textAlign: "left",
    sortable: true,
  },
  {
    accessor: "cam_percentage",
    title: "Percentage",
    textAlign: "left",
    sortable: true,
  },
  {
    accessor: "action",
    textAlign: "left",
    title: <Box mr={6}>Action</Box>,
    render: () => (
      <Group gap={4} justify="center" wrap="nowrap">
        <Button size="xs" variant="filled" color="#556ee6" leftSection={<TbEye/>}>
          View
        </Button>
        {/* <ActionIcon size="lg" variant="filled" color="#556ee6">
          <TbEye size={20} />
        </ActionIcon> */}
      </Group>
    ),
  },
];

const PAGE_SIZE = 10;

const CampaignReferral = () => {
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
              Referral Campaigns
            </Text>
            <Text size="sm">Admin / Referral Campaigns</Text>
          </Group>

          {/* Table  */}
          <Group justify="space-between" grow>
            <Card shadow="sm" padding="lg" radius="md" withBorder h={800}>
              <Text size="lg" fw={600} mb="md" ta={"left"}>
                Referral Campaign List
              </Text>
              <Group w={200} pb={20} >
                <Button leftSection={<TbCirclePlusFilled/>}>Create New Campaign</Button>
              </Group>
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

export default CampaignReferral;
