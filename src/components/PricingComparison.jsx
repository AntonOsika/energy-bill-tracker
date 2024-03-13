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
      {assets.map((asset, index) => {
        return (
          <Flex justifyContent="space-between" p={5} boxShadow="md" borderRadius="md" bg="gray.100" mb={3} key={index}>
            <Text fontWeight="bold">{asset.type}</Text>
            <Flex justifyContent="space-between" w="full">
              <Flex direction="column" w="48%" mr={1}>
                <Text fontWeight="bold">Normal Way:</Text>
                <Text>${calculateNormalWay(asset)}</Text>
              </Flex>
              <Flex direction="column" w="48%" ml={1}>
                <Text fontWeight="bold" color="blue.500">
                  The Skye Way:
                </Text>
                <Text color="blue.500">${calculateSkyeWay(asset)}</Text>
              </Flex>
            </Flex>
          </Flex>
        );
      })}
    </Box>
  );
};

export default PricingComparison;
