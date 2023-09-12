import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
import { Select, Box, Button, Heading, Input, Flex } from "@chakra-ui/react";
import { Grid, GridItem, ChakraProvider } from "@chakra-ui/react";
import "../App.css";
import BarChart from "../components/TopicIntensityChart";
import LineChart from "./../components/LineChart";
import PieChart from "./../components/PieChart";
const Dashboard = () => {
  // State variables
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    topic: "",
    sector: "",
    country: "",
    region: "",
    source: "",
    end_year: "",
    page: page,
    pestle: "",
  });

  useEffect(() => {
    // Fetch data from the API when the component mounts
    axios
      .get("https://kind-blue-goldfish-hem.cyclic.app/api/user/dashboard")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Function to set the previous page
  const setPreviousPage = () => {
    setPage(page - 1);
    // Construct query parameters for filtering and pagination
    const queryParams = new URLSearchParams();
    queryParams.append("topic", filters.topic);
    queryParams.append("sector", filters.sector);
    queryParams.append("country", filters.country);
    queryParams.append("source", filters.source);
    queryParams.append("region", filters.region);
    queryParams.append("end_year", filters.end_year);
    queryParams.append("page", page);
    queryParams.append("pestle", filters.pestle);
    // Fetch data with updated page and filters
    axios
      .get(`https://kind-blue-goldfish-hem.cyclic.app/api/user/dashboard?${queryParams.toString()}`)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  // Function to set the next page
  const setNextPage = () => {
    setPage(page + 1);
    // Construct query parameters for filtering and pagination
    const queryParams = new URLSearchParams();
    queryParams.append("topic", filters.topic);
    queryParams.append("sector", filters.sector);
    queryParams.append("country", filters.country);
    queryParams.append("source", filters.source);
    queryParams.append("region", filters.region);
    queryParams.append("end_year", filters.end_year);
    queryParams.append("page", page);
    queryParams.append("pestle", filters.pestle);
    // Fetch data with updated page and filters
    axios
      .get(`https://kind-blue-goldfish-hem.cyclic.app/api/user/dashboard?${queryParams.toString()}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  // Function to apply filters and fetch data
  const applyFilters = () => {
    // Construct query parameters for filtering and pagination
    const queryParams = new URLSearchParams();
    queryParams.append("topic", filters.topic);
    queryParams.append("sector", filters.sector);
    queryParams.append("country", filters.country);
    queryParams.append("source", filters.source);
    queryParams.append("region", filters.region);
    queryParams.append("end_year", filters.end_year);
    queryParams.append("pestle", filters.pestle);
    queryParams.append("page", page);

    // Fetch data with applied filters
    axios
      .get(`https://kind-blue-goldfish-hem.cyclic.app/api/user/dashboard?${queryParams.toString()}`)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <ChakraProvider>
      <Heading as="h4" color="blue.500">
        Dashboard
      </Heading>

      {/* Filters Section */}
      <ChakraProvider>
        <Grid templateColumns="repeat(4, 1fr)" gap={4}>
           {/* Input for End Year */}
          <Input
            type="text"
            placeholder="Search by End Year"
            value={filters.end_year}
            onChange={(e) =>
              setFilters({ ...filters, end_year: e.target.value })
            }
          />
          {/* Select Dropdown for Topic */}
          <GridItem colSpan={2}>
            <Select
              placeholder="filter by topic"
              value={filters.topic}
              onChange={(e) =>
                setFilters({ ...filters, topic: e.target.value })
              }
            >
              {/* Add options for topics */}
              <option value="gas">gas</option>
              <option value="oil">oil</option>
              <option value="consumption">consumption</option>
              <option value="market">market</option>
              <option value="gdp">gdp</option>
              <option value="war">war</option>
              <option value="production">production</option>
              <option value="export">export</option>
              <option value="battery">battery</option>
              <option value="biofuel">biofuel</option>
              <option value="policy">policy</option>
              <option value="economy">economy</option>
              <option value="strategy">strategy</option>
              <option value="robot">robot</option>
              <option value="growth">growth</option>
              <option value="administration">administration</option>
            </Select>
          </GridItem>
          {/* Select Dropdown for Sector */}
          <GridItem colSpan={2}>
            <Select
              placeholder="filter by Sector"
              value={filters.sector}
              onChange={(e) =>
                setFilters({ ...filters, sector: e.target.value })
              }
            >
              {/* Add options for sectors */}
              <option value="Energy">Energy</option>
              <option value="Environment">Environment</option>
              <option value="Government">Government</option>
              <option value="Aerospace & defence">Aerospace & defence</option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="Retail">Retail</option>
              <option value="Financial services">Financial services</option>
              <option value="Support services">Support services</option>
              <option value="Information Technology">
                Information Technology
              </option>
              <option value="Healthcare">Healthcare</option>
              <option value="Retail">Retail</option>
            </Select>
          </GridItem>
          {/* Select Dropdown for Country */}
          <GridItem colSpan={2}>
            <Select
              placeholder="filter by Country"
              value={filters.country}
              onChange={(e) =>
                setFilters({ ...filters, country: e.target.value })
              }
            >
              {/* Add options for countries */}
              <option value="United States of America">
                United States of America
              </option>
              <option value="Mexico">Mexico</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Lebanon">Lebanon</option>
              <option value="Russia">Russia</option>
              <option value="Saudi Arabia">Saudi Arabia</option>
              <option value="Angola">Angola</option>
              <option value="Egypt">Egypt</option>
              <option value="South Africa">South Africa</option>
              <option value="India">India</option>
              <option value="Ukraine">Ukraine</option>
              <option value="Azerbaijan">Azerbaijan</option>
              <option value="China">China</option>
              <option value="Colombia">Colombia</option>
              <option value="Niger">Niger</option>
              <option value="Libya">Libya</option>
              <option value="Brazil">Brazil</option>
              <option value="Mali">Mali</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Iran">Iran</option>
              <option value="Iraq">Iraq</option>
            </Select>
          </GridItem>
          {/* Select Dropdown for Region */}
          <GridItem colSpan={2}>
            <Select
              placeholder="filter by Region"
              value={filters.region}
              onChange={(e) =>
                setFilters({ ...filters, region: e.target.value })
              }
            >
              {/* Add options for regions */}
              <option value="Northern America">Northern America</option>
              <option value="Central America">Central America</option>
              <option value="World">World</option>
              <option value="Western Africa">Western Africa</option>
              <option value="Western Asia">Western Asia</option>
              <option value="Eastern Europe">Eastern Europe</option>
              <option value="Central Africa">Central Africa</option>
            </Select>
          </GridItem>
          {/* Select Dropdown for Source */}
          <GridItem colSpan={2}>
            <Select
              placeholder="filter by Source"
              value={filters.source}
              onChange={(e) =>
                setFilters({ ...filters, source: e.target.value })
              }
            >
              {/* Add options for sources */}
              <option value="EIA">EIA</option>
              <option value="sustainablebrands.com">sustainablebrands</option>
              <option value="SBWire">SBWire</option>
              <option value="CleanTechnica">CleanTechnica</option>
              <option value="TRAC News">TRAC News</option>
              <option value="Vanguard News">Vanguard News</option>
              <option value="Avi Melamed">Avi Melamed</option>
              <option value="WSJ">WSJ</option>
              <option value="Abq">Abq</option>
              <option value="Reuters">Reuters</option>
              <option value="Star Tribune">Star Tribune</option>
            </Select>
          </GridItem>
          {/* Select Dropdown for PESTLE */}
          <GridItem colSpan={2}>
            <Select
              placeholder="filter by PEST"
              value={filters.pestle}
              onChange={(e) =>
                setFilters({ ...filters, pestle: e.target.pestle })
              }
            >
              {/* Add options for PESTLE */}
              <option value="Industries">Industries</option>
              <option value="Environmental">Environmental</option>
              <option value="Economic">Economic</option>
              <option value="Political">Political</option>
              <option value="Technological">Technological</option>
              <option value="Organization">Organization</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Social">Social</option>
              <option value="Lifestyles">Lifestyles</option>
              <option value=""></option>
            </Select>
          </GridItem>
        </Grid>
        {/* Apply Filters Button */}
        <Button colorScheme="blue" w="200px" m={6} onClick={applyFilters}>
          Filter
        </Button>
      </ChakraProvider>
      {/* Topics Intensity Report */}
      <Heading as="h4"> Topics Intensity Report </Heading>
      <Box>
        <BarChart data={data} />
      </Box>
      {/* Country Relevance Report */}
      <Heading as="h4"> Country Relevance Report </Heading>
      <Box>
        <LineChart data={data} />
      </Box>
      {/* Sector Likelihood Report */}
      <Heading as="h4"> Sector Likelihood Report </Heading>
      <Box align="center">
        <PieChart data={data} />
      </Box>
      {/* Display Cards */}
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        {data.map((item, index) => (
          <GridItem key={index}>
            <Card data={item} />
          </GridItem>
        ))}
      </Grid>
        {/* Pagination */}
      <ChakraProvider>
        <Flex justify="space-around" align="center" mb={10}>
          <Button
            colorScheme="blue"
            w={300}
            isDisabled={page === 1}
            onClick={setPreviousPage}
          >
            Previous
          </Button>
          <Button colorScheme="blue" w={300} onClick={setNextPage}>
            Next
          </Button>
        </Flex>
      </ChakraProvider>
    </ChakraProvider>
  );
};

export default Dashboard;
