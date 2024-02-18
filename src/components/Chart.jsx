import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const MyChart = ({ data, subgroups, containerId, Max }) => {
  useEffect(() => {
    drawChart(data, subgroups, containerId, Max);
  }, [data, subgroups, containerId, Max]);

  const drawChart = (data, subgroups, containerId, Max) => {
    d3.select(containerId).remove();
    const margin = { top: 10, right: 30, bottom: 50, left: 100 },
      width = 500 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    const svg = d3.select(`#${containerId}`)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const groups = ['2020', '2021', '2022'];

    // Add X axis
    const x = d3.scaleBand()
      .domain(groups)
      .range([0, width])
      .padding([0.2])
    svg.append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(x).tickSize(0));

    // Add Y axis
    const y = d3.scaleLinear()
      .domain([0, Max])
      .range([height, 0]);
    svg.append("g")
      .call(d3.axisLeft(y));

    const xSubgroup = d3.scaleBand()
      .domain(subgroups)
      .range([0, x.bandwidth()])
      .padding([0.05])

    const color = d3.scaleOrdinal()
      .domain(subgroups)
      .range(['#e41a1c', '#377eb8', '#4daf4a'])

    const size = 20
    svg.selectAll("mydots")
      .data(subgroups)
      .enter()
      .append("rect")
      .attr("x", 300)
      .attr("y", function (d, i) { return i * (size + 5) })
      .attr("width", size)
      .attr("height", size)
      .style("fill", function (d) { return color(d) })

    svg.selectAll("mylabels")
      .data(subgroups)
      .enter()
      .append("text")
      .attr("x", 300 + size * 1.2)
      .attr("y", function (d, i) { return i * (size + 5) + (size / 2) })
      .style("fill", function (d) { return color(d) })
      .text(function (d) { return d })
      .attr("text-anchor", "left")
      .style("alignment-baseline", "middle")


    svg.append("text")
      .attr("text-anchor", "end")
      .attr("x", width)
      .attr("y", height + margin.top + 20)
      .text("년");

    // Y axis label:
    svg.append("text")
      .attr("text-anchor", "end")
      .attr("transform", "rotate(-90)")
      .attr("y", -margin.left + 20)
      .attr("x", -margin.top)
      .text("백 만원")

    const tooltip = d3.select(`#${containerId}`)
      .append("div")
      .style("position", "absolute")
      .style("visibility", "hidden")
      .style('background', '#CCCCCC')
      .style('padding', '5px')
      ;



    // Show the bars
    svg.append("g")
      .selectAll("g")
      .data(data)
      .join("g")
      .attr("transform", d => `translate(${x(d.group)}, 0)`)
      .selectAll("rect")
      .data(function (d) { return subgroups.map(function (key) { return { key: key, value: d[key] }; }); })
      .join("rect")
      .attr("x", d => xSubgroup(d.key))
      .attr("y", d => y(d.value))
      .attr("width", xSubgroup.bandwidth())
      .attr("height", d => height - y(d.value))
      .attr("fill", d => color(d.key))
      .on("mouseover", function () { return tooltip.style("visibility", "visible").text(`${d3.select(this).data()[0].key}: ${d3.select(this).data()[0].value} 백 만원`); })
      .on("mousemove", function (event) { return tooltip.style("top", (event.pageY + 20) + "px").style("left", (event.pageX + 20) + "px"); })
      .on("mouseout", function () { return tooltip.style("visibility", "hidden"); });
  };

  return <div id={containerId}></div>;
};

export default MyChart;
