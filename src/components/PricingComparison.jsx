import React from "react";
import { Box, Flex, Text, Heading } from "@chakra-ui/react";

const PricingComparison = ({ assets }) => {
  const calculateSkyeWay = (asset) => {
    return asset.cost * 0.9;
  };

  const calculateNormalWay = (asset) => {
    return asset.cost;
  };

  return (
    <Box my={10}>
      <Heading size="md" mb={4}>
        Pricing Strategy Comparison
      </Heading>
      {assets.map((asset, index) => (
        <Flex justifyContent="space-between" p={5} boxShadow="md" borderRadius="md" bg="gray.100" mb={3} key={index}>
          <Text fontWeight="bold">{asset.type}</Text>
          <Flex justifyContent="space-between" w="full">
            <Box w="50%">
              <Text as="span" fontWeight="bold">
                Normal Way:
              </Text>
              <Text as="span" ml={2}>
                ${calculateNormalWay(asset)}
              </Text>
            </Box>
            <Box w="50%">
              <Text as="span" fontWeight="bold">
                The Skye Way:
              </Text>
              <Text as="span" ml={2} color="blue.500">
                ${calculateSkyeWay(asset)}
              </Text>
            </Box>
          </Flex>
        </Flex>
      ))}
    </Box>
  );
};

export default PricingComparison;
