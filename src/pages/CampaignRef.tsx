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
import { useEffect, useMemo, useState } from "react";
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
    cam_id: 1,
    cam_tier: 1,
    cam_title: "NEWBIE",
    cam_desc: "10% 5,000 Sales",
    cam_percentage: 10,
  },
  {
    cam_id: 1,
    cam_tier: 1,
    cam_title: "NEWBIE",
    cam_desc: "10% 5,000 Sales",
    cam_percentage: 10,
  },
  {
    cam_id: 1,
    cam_tier: 1,
    cam_title: "NEWBIE",
    cam_desc: "10% 5,000 Sales",
    cam_percentage: 10,
  },
  {
    cam_id: 1,
    cam_tier: 1,
    cam_title: "NEWBIE",
    cam_desc: "10% 5,000 Sales",
    cam_percentage: 10,
  },
  {
    cam_id: 1,
    cam_tier: 1,
    cam_title: "NEWBIE",
    cam_desc: "10% 5,000 Sales",
    cam_percentage: 10,
  },
  {
    cam_id: 1,
    cam_tier: 1,
    cam_title: "NEWBIE",
    cam_desc: "10% 5,000 Sales",
    cam_percentage: 10,
  },
  {
    cam_id: 1,
    cam_tier: 1,
    cam_title: "NEWBIE",
    cam_desc: "10% 5,000 Sales",
    cam_percentage: 10,
  },
  {
    cam_id: 1,
    cam_tier: 1,
    cam_title: "NEWBIE",
    cam_desc: "10% 5,000 Sales",
    cam_percentage: 10,
  },
  {
    cam_id: 1,
    cam_tier: 1,
    cam_title: "NEWBIE",
    cam_desc: "10% 5,000 Sales",
    cam_percentage: 10,
  },
  {
    cam_id: 1,
    cam_tier: 1,
    cam_title: "NEWBIE",
    cam_desc: "10% 5,000 Sales",
    cam_percentage: 10,
  },
  {
    cam_id: 1,
    cam_tier: 1,
    cam_title: "NEWBIE",
    cam_desc: "10% 5,000 Sales",
    cam_percentage: 10,
  },
  {
    cam_id: 1,
    cam_tier: 1,
    cam_title: "NEWBIE",
    cam_desc: "10% 5,000 Sales",
    cam_percentage: 10,
  },
  {
    cam_id: 1,
    cam_tier: 1,
    cam_title: "irfan",
    cam_desc: "10% 5,000 Sales",
    cam_percentage: 10,
  },
  {
    cam_id: 1,
    cam_tier: 1,
    cam_title: "NEWBIE",
    cam_desc: "10% 5,000 Sales",
    cam_percentage: 10,
  },
  {
    cam_id: 1,
    cam_tier: 1,
    cam_title: "NEWBIE",
    cam_desc: "10% 5,000 Sales",
    cam_percentage: 10,
  },
  {
    cam_id: 1,
    cam_tier: 1,
    cam_title: "NEWBIE",
    cam_desc: "10% 5,000 Sales",
    cam_percentage: 10,
  },
  {
    cam_id: 1,
    cam_tier: 1,
    cam_title: "haziq",
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
        <Button
          size="xs"
          variant="filled"
          color="#556ee6"
          leftSection={<TbEye />}
        >
          View
        </Button>
        {/* <ActionIcon size="lg" variant="filled" color="#556ee6">
          <TbEye size={20} />
        </ActionIcon> */}
      </Group>
    ),
  },
];

const PAGE_SIZE = [10, 25, 50, 100];

const CampaignReferral = () => {
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
              <Group w={200} pb={20}>
                <Button leftSection={<TbCirclePlusFilled />}>
                  Create New Campaign
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

export default CampaignReferral;
