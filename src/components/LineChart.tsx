import { axisBottom, line, scaleLinear, select } from 'd3';
import React, { useEffect, useRef, useState } from 'react';

const LineChart = () => {
  const [data, setData] = useState([10, 30, 20, 15, 80]);
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = select(svgRef.current);
    const myLine = line()
      .x((value, index) => {
        return xScale(index);
      })
      .y((value, index) => {
        return yScale(value[1]);
      });

    const xScale = scaleLinear()
      .domain([0, data.length - 1])
      .range([0, 300]);
    const xAxis = axisBottom(xScale);

    const yScale = scaleLinear().domain([0, 80]).range([150, 0]);
    svg
      .selectAll('path')
      .data([data])
      .join('path')
      .attr('d', (data, idx) => {
        const newData = data.map((d, idx): [number, number] => [idx, d]);
        return myLine(newData);
      })
      .attr('fill', 'none')
      .attr('stroke', 'blue');
  }, [data]);

  return (
    <div>
      <button
        onClick={() => {
          setData((prev) => prev.map((value) => value + 5));
        }}
      >
        update data
      </button>
      <svg ref={svgRef}>
        <g className='x-axis' />
      </svg>
    </div>
  );
};

export default LineChart;
