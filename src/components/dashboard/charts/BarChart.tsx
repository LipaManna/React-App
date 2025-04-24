import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const Barchart: React.FC = () => {
    const svgRef = useRef<SVGSVGElement | null>(null);
    const data = React.useMemo(() => [100, 200, 300, 400, 500], []); // Sample data

    useEffect(() => {
        if (!svgRef.current) return;

        // Dimensions and margins
        const width = 620;
        const height = 300;
        const margin = { top: 20, right: 20, bottom: 30, left: 40 };

        // Clear any previous content
        d3.select(svgRef.current).selectAll("*").remove();

        // Create the SVG container
        const svg = d3.select(svgRef.current)
            .attr("width", width)
            .attr("height", height);

        // Scales
        const x = d3.scaleBand()
            .domain(data.map((_, index) => index.toString()))
            .range([margin.left, width - margin.right])
            .padding(0.93);

        const y = d3.scaleLinear()
            .domain([0, d3.max(data) as number])
            .nice()
            .range([height - margin.bottom, margin.top]);

        // Draw bars
        svg.append("g")
            .selectAll("rect")
            .data(data)
            .join("rect")
                .attr("x", (_, index) => x(index.toString()) as number)
                .attr("y", d => y(d))
                .attr("height", d => y(0) - y(d))
                .attr("width", x.bandwidth())
                .attr("fill", "#fff")
                .attr("rx", 4)
                .attr("ry", 4)

        // Add x-axis
        // svg.append("g")
        //     .attr("transform", `translate(0,${height - margin.bottom})`)
        //     .call(d3.axisBottom(x).tickFormat((d, i) => (i + 1).toString()))
        //     .attr("font-size", "12px");

        // Add y-axis
            svg.append("g")
                .attr("transform", `translate(${margin.left},0)`)
                .call(d3.axisLeft(y).ticks(5))
                .call(g => {
                    g.select(".domain").remove();              // Remove axis line
                    g.selectAll(".tick line").remove();
                    g.selectAll(".tick text").attr("fill", "#fff")
                })
                .attr("font-size", "12px")

    }, [data]);

    return (
        <div className="common_component_wrap">
            <svg ref={svgRef} className='bar_chart'></svg>
        </div>
    );
};

export default Barchart;