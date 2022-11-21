import { useEffect, useRef, useState } from 'react';
import { select, pie, arc } from 'd3';

const PieChart = () => {
  const [data, setData] = useState([15, 20, 30]);
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = select(svgRef.current).select('g');
    svg.attr('width', 500).attr('height', 500);

    const arcGenerator = arc().innerRadius(10).outerRadius(60).padAngle(0.02).padRadius(100).cornerRadius(4);
    const pieData = pie()(data);

    svg
      .selectAll('path')
      .data(pieData)
      .join('path')
      .attr('fill', 'orange')
      .attr('d', (d) => {
        const generatorInput = {
          //   type이 안맞는것 같음... 없어도 chain에서 해결 해 주는데 안되네 어떻게 해결할지 생각해보자.
          //   innerRadius: 10,
          //   outerRadius: 60,
          startAngle: d.startAngle,
          endAngle: d.endAngle,
        };
        return arcGenerator(generatorInput);
      });
  });

  return (
    <div>
      <svg ref={svgRef}>
        <g transform='translate(100, 65)'></g>
      </svg>
    </div>
  );
};

export default PieChart;
