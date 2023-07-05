import COLORS from "@/lib/color";
import renderCustomizedLabel from "@/lib/helpers/recharts/renderCustomizedLabel";
import renderTooltipContent from "@/lib/helpers/recharts/renderTooltopContent";
import { Tooltip, PieChart, Pie, Cell } from "recharts";

const PieChartDiagram = ({ data }: { data: Data[] }) => {
    return (
        <div className="relative flex items-center justify-center">
            <div className="font-bold absolute">
                {data.map((e) => e.number).reduce((n, x) => n + x)}
            </div>
            <PieChart width={400} height={400}>
                <Tooltip content={renderTooltipContent} />
                <Pie
                    data={data}
                    innerRadius={40}
                    outerRadius={120}
                    label={renderCustomizedLabel}
                    labelLine={false}
                    dataKey="number"
                >
                    {data.map(({}, index) => (
                        <Cell
                            stroke="#f0f0f077"
                            strokeWidth="2"
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                        />
                    ))}
                </Pie>
            </PieChart>
        </div>
    );
};

export default PieChartDiagram;
