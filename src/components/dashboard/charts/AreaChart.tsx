import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';

type Datum = { date: string; apples: number; bananas: number };

interface StackedAreaChartProps {
  width: string; // "100%", "80%", etc.
  height: number;
  data: Datum[];
  areaKeys: { [key: string]: string };
}

const StackedAreaChart: React.FC<StackedAreaChartProps> = ({ width, height, data, areaKeys }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);

  // Resize observer to track actual width
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver(entries => {
      for (let entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!svgRef.current || !areaKeys || containerWidth === 0) return;

    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const innerWidth = containerWidth - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    // Clear previous content
    d3.select(svgRef.current).selectAll('*').remove();

    const svg = d3.select(svgRef.current)
      .attr("width", "100%")
      .attr("height", height)
      .attr("viewBox", `0 0 ${containerWidth} ${height}`)
      .attr("preserveAspectRatio", "xMidYMid meet");

    const keys = Object.keys(areaKeys);
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

    const defs = svg.append("defs");

    Object.keys(areaKeys).forEach((key) => {
      const gradientId = `area-gradient-${key}`;
      const gradient = defs.append("linearGradient")
        .attr("id", gradientId)
        .attr("x1", "0%")
        .attr("y1", "0%")
        .attr("x2", "0%")
        .attr("y2", "100%");

      gradient.append("stop")
        .attr("offset", "0%")
        .attr("stop-color", d3.color(areaKeys[key])?.brighter(0.5).toString() || areaKeys[key]);

      gradient.append("stop")
        .attr("offset", "100%")
        .attr("stop-color", areaKeys[key]);
    });

    const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

    g.selectAll("path")
      .data(series)
      .join("path")
      .attr("fill", (d, i) => `url(#area-gradient-${keys[i]})`)
      .attr("d", area as never)
      .attr("opacity", 0.8);

    g.append("g")
      .attr("transform", `translate(0,${innerHeight})`)
      .call(d3.axisBottom(x).tickSizeOuter(0));

    g.append("g")
      .call(d3.axisLeft(y).ticks(5));

  }, [containerWidth, height, data, areaKeys]);

  return (
    <div  ref={containerRef} style={{ width }}>
      <svg ref={svgRef} />
    </div>
  );
};

export default StackedAreaChart;
