import React from "react";
import { ChakraProvider, Box, Flex, Text, Heading, List, ListItem, ListIcon, IconButton, Stack, Button, theme } from "@chakra-ui/react";
import PricingComparison from "../components/PricingComparison";
import { FaWater, FaWind, FaSun, FaChartLine, FaSignInAlt, FaSignOutAlt, FaEdit } from "react-icons/fa";

const assets = [
  { type: "Water", kwh: 5000, cost: 4500, icon: FaWater },
  { type: "Wind", kwh: 3000, cost: 3200, icon: FaWind },
  { type: "Solar", kwh: 7000, cost: 6500, icon: FaSun },
  { type: "Spot Market", kwh: 2000, cost: 2800, icon: FaChartLine },
  { type: "Spot Market 2", kwh: 1, cost: 2800, icon: FaChartLine },
];

const Index = () => {
  const marketPrice = 0.12; // Example average market price per kwh

  return (
    <ChakraProvider theme={theme}>
      <Box minWidth="100vh" p={5}>
        <Flex justifyContent="space-between" alignItems="center" mb={5}>
          <Heading>Electricity Bill Inventory</Heading>
          <Stack direction="row" spacing={4}>
            <Button leftIcon={<FaSignInAlt />} colorScheme="teal" variant="solid">
              Sign In
            </Button>
            <Button leftIcon={<FaSignOutAlt />} colorScheme="teal" variant="outline">
              Sign Out
            </Button>
          </Stack>
        </Flex>

        <List spacing={3}>
          {assets.map((asset, index) => (
            <ListItem key={index} p={5} boxShadow="md" borderRadius="md" bg="gray.50">
              <Flex alignItems="center" justifyContent="space-between">
                <Flex alignItems="center">
                  <ListIcon as={asset.icon} color="green.500" w={5} h={5} />
                  <Text fontWeight="bold">{asset.type}</Text>
                </Flex>
                <Flex alignItems="center">
                  <Text mr={2}>{asset.kwh} kWh</Text>
                  <Text as="span" color="gray.500">
                    @{marketPrice.toFixed(2)}/kWh
                  </Text>
                </Flex>
                <Flex alignItems="center">
                  <Text fontWeight="bold" mr={2}>
                    ${asset.cost}
                  </Text>
                  <IconButton aria-label="Edit asset" icon={<FaEdit />} size="sm" variant="ghost" />
                </Flex>
              </Flex>
            </ListItem>
          ))}
        </List>
        <PricingComparison assets={assets} />
      </Box>
    </ChakraProvider>
  );
};

export default Index;
