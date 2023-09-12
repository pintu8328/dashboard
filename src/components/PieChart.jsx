import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

const PieChart = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const width = svg.attr("width");
    const height = svg.attr("height");
    const radius = Math.min(width, height) / 2;

    // Create a pie layout
    const pie = d3.pie().value((d) => d.likelihood);

    // Define color scale
    const color = d3
      .scaleOrdinal()
      .domain(data.map((d) => d.sector))
      .range(d3.schemeCategory10);

    // Create an arc generator
    const arc = d3.arc().innerRadius(0).outerRadius(radius);

    // Create a group for the pie chart and center it
    const pieGroup = svg
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);

    // Generate pie chart slices
    const arcs = pie(data);

    // Create path elements for the pie slices
    const path = pieGroup
      .selectAll("path")
      .data(arcs)
      .enter()
      .append("path")
      .attr("d", arc)
      .attr("fill", (d) => color(d.data.sector));

    // Add labels to the pie chart
    pieGroup
      .selectAll("text")
      .data(arcs)
      .enter()
      .append("text")
      .attr("transform", (d) => `translate(${arc.centroid(d)})`)
      .attr("text-anchor", "middle")
      .text((d) => d.data.sector);
  }, [data]);

  return <svg ref={svgRef} width={400} height={400}></svg>;
};

export default PieChart;
