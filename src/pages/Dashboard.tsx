"use client";

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
} from "@mantine/core";
import { DateInput } from '@mantine/dates';
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

// Sample data for the chart
const salesData = [
  { name: "Jan 01", value: 1000 },
  { name: "Jan 05", value: 1200 },
  { name: "Jan 10", value: 800 },
  { name: "Jan 15", value: 1500 },
  { name: "Jan 20", value: 900 },
  { name: "Jan 25", value: 1800 },
  { name: "Jan 30", value: 1300 },
  { name: "Feb 01", value: 1100 },
  { name: "Feb 05", value: 1600 },
  { name: "Feb 10", value: 1400 },
  { name: "Feb 15", value: 1000 },
  { name: "Feb 20", value: 1200 },
  { name: "Feb 25", value: 800 },
  { name: "Feb 28", value: 900 },
];

const purchaseData = [
  { name: "Week 1", value: 400 },
  { name: "Week 2", value: 600 },
  { name: "Week 3", value: 300 },
  { name: "Week 4", value: 800 },
];

export default function Dashboard() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const breadcrumbItems = [
    { title: "Dashboards", href: "#" },
    { title: "Dashboard", href: "#" },
  ].map((item, index) => (
    <Anchor href={item.href} key={index} c="dimmed" size="sm">
      {item.title}
    </Anchor>
  ));

  const statsData = [
    {
      title: "Total Orders",
      value: "135",
      icon: TbShoppingCart,
      color: "blue",
    },
    {
      title: "Total Sales",
      value: "RM 5543.95",
      icon: TbCurrencyDollar,
      color: "green",
    },
    {
      title: "Available Products",
      value: "82",
      icon: TbPackage,
      color: "orange",
    },
    {
      title: "Total Users",
      value: "264",
      icon: TbUser,
      color: "violet",
    },
  ];

  return (
    <>
      {/* <Header height={60} p="md">
        <Group justify="space-between" h="100%">
          <Group>
            <ActionIcon variant="subtle" size="lg">
              <IconMenu2 size={20} />
            </ActionIcon>
            <ThemeIcon
              size="lg"
              variant="gradient"
              gradient={{ from: "violet", to: "purple" }}
            >
              <Text size="lg" fw={700} c="white">
                S
              </Text>
            </ThemeIcon>
          </Group>

          <Breadcrumbs separator=">" separatorMargin="md">
            {breadcrumbItems}
          </Breadcrumbs>

          <Group>
            <ThemeIcon
              size="lg"
              variant="gradient"
              gradient={{ from: "violet", to: "purple" }}
            >
              <Text size="lg" fw={700} c="white">
                S
              </Text>
            </ThemeIcon>
            <ActionIcon variant="subtle" size="lg">
              <IconSettings size={20} />
            </ActionIcon>
          </Group>
        </Group>
      </Header> */}

      <Container>
        <Stack gap="xl">
          {/* Date Range Section */}
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Text size="sm" fw={500} mb="md" c="dimmed">
              Date Range
            </Text>
            <Flex gap="md" align="end">
              <DateInput
                label="Start Date"
                placeholder="Pick start date"
                value={startDate}
                style={{ flex: 1 }}
              />
              <DateInput
                label="End Date"
                placeholder="Pick end date"
                value={endDate}
                style={{ flex: 1 }}
              />
              <Button variant="filled" color="violet">
                Submit
              </Button>
            </Flex>
          </Card>

          {/* Statistics Cards */}
          <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="lg">
            {statsData.map((stat) => (
              <Card
                key={stat.title}
                shadow="sm"
                padding="lg"
                radius="md"
                withBorder
              >
                <Group justify="space-between" mb="xs">
                  <Text size="sm" c="dimmed" fw={500}>
                    {stat.title}
                  </Text>
                  <ThemeIcon color={stat.color} variant="light" size="lg">
                    <stat.icon size={20} />
                  </ThemeIcon>
                </Group>
                <Text size="xl" fw={700}>
                  {stat.value}
                </Text>
              </Card>
            ))}
          </SimpleGrid>

          {/* Sales Analytics Chart */}
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Text size="lg" fw={600} mb="md">
              Sales Analytics
            </Text>
            <div style={{ width: "100%", height: 400 }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e9ecef" />
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: "#868e96" }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: "#868e96" }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "white",
                      border: "1px solid #e9ecef",
                      borderRadius: "8px",
                      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#7c3aed"
                    strokeWidth={3}
                    dot={{ fill: "#7c3aed", strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, stroke: "#7c3aed", strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Purchase Overview Chart */}
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Text size="lg" fw={600} mb="md">
              Purchase Overview
            </Text>
            <div style={{ width: "100%", height: 300 }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={purchaseData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e9ecef" />
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: "#868e96" }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: "#868e96" }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "white",
                      border: "1px solid #e9ecef",
                      borderRadius: "8px",
                      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#7c3aed"
                    strokeWidth={3}
                    dot={{ fill: "#7c3aed", strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, stroke: "#7c3aed", strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </Stack>
      </Container>
    </>
  );
}
