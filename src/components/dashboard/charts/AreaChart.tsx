import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

type Datum = { date: string; apples: number; bananas: number };

interface StackedAreaChartProps {
  width: number;
  height: number;
  data: { date: string; apples: number; bananas: number }[];
  areaKeys: { [key: string]: string };
}

const StackedAreaChart: React.FC<StackedAreaChartProps> = ({ width, height, data, areaKeys }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!svgRef.current || !areaKeys) return; // Ensure areaKeys is defined

    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    // Clear previous content
    d3.select(svgRef.current).selectAll('*').remove();

    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    const keys = Object.keys(areaKeys); // Get the keys like 'apples' and 'bananas'
    const stackData = data.map(d => {
      return keys.reduce((acc, key) => ({ ...acc, [key]: d[key as keyof Datum] }), {});
    });
    const stack = d3.stack().keys(keys);
    const series = stack(stackData);

    const x = d3.scalePoint()
      .domain(data.map(d => d.date))
      .range([0, innerWidth]);

    const y = d3.scaleLinear()
      .domain([0, d3.max(series[series.length - 1], (d) => d[1]) || 0])
      .nice()
      .range([innerHeight, 0]);

    const area = d3.area<d3.SeriesPoint<Datum>>()
      .x((d, i) => x(data[i].date) ?? 0)
      .y0(d => y(d[0]))
      .y1(d => y(d[1]))
      .curve(d3.curveMonotoneX);

    // Add gradient definitions
    const defs = svg.append("defs");

    // Create the gradients
    Object.keys(areaKeys).forEach((key) => {
      const gradientId = `area-gradient-${key}`;
      const gradient = defs.append("linearGradient")
        .attr("id", gradientId)
        .attr("x1", "0%")
        .attr("y1", "0%")
        .attr("x2", "0%")
        .attr("y2", "100%"); // Vertical gradient (top to bottom)

      // Define gradient stops
      gradient.append("stop")
        .attr("offset", "0%")
        .attr("stop-color", d3.color(areaKeys[key])?.brighter(0.5).toString() || areaKeys[key]);

      gradient.append("stop")
        .attr("offset", "100%")
        .attr("stop-color", areaKeys[key]);
    });

    // Add the stacked areas with gradients
    const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

    g.selectAll("path")
      .data(series)
      .join("path")
      .attr("fill", (d, i) => `url(#area-gradient-${keys[i]})`) // Apply gradient fill to each area
      .attr("d", area as never)
      .attr("opacity", 0.8);

    // X Axis
    g.append("g")
      .attr("transform", `translate(0,${innerHeight})`)
      .call(d3.axisBottom(x).tickSizeOuter(0));

    // Y Axis
    g.append("g")
      .call(d3.axisLeft(y).ticks(5));

  }, [width, height, data, areaKeys]);

  return (
    <div className="common_component_wrap">
      <svg ref={svgRef} />
    </div>
  );
};

export default StackedAreaChart;
