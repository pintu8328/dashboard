import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

const LineChart = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const margin = { top: 20, right: 30, bottom: 40, left: 40 };
    const width = svg.attr("width") - margin.left - margin.right;
    const height = svg.attr("height") - margin.top - margin.bottom;

    // Extract x and y values from your data
    const xValues = data.map((d) => d.country);
    const yValues = data.map((d) => d.relevance);

    // Define x and y scales
    const xScale = d3
      .scaleBand()
      .domain(xValues)
      .range([margin.left, width - margin.right])
      .padding(0.1);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(yValues)])
      .nice()
      .range([height - margin.bottom, margin.top]);

    // Define a line generator
    const line = d3
      .line()
      .x((d, i) => xScale(xValues[i]) + xScale.bandwidth() / 2)
      .y((d) => yScale(d))
      .curve(d3.curveMonotoneX); // You can choose a different curve type

    // Create the line path
    svg
      .append("path")
      .datum(yValues)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 2)
      .attr("d", line);

    // Create x-axis
    svg
      .append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(xScale));

    // Create y-axis
    svg
      .append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(yScale).ticks(5));
  }, [data]);

  return <svg ref={svgRef} width={1200} height={300}></svg>;
};

export default LineChart;
