import renderTooltipContent from "@/lib/helpers/recharts/renderTooltopContent";
import {
    LineChart,
    Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
} from "recharts";

const LineChartDiagram = ({ data }: { data: Data[] }) => {
    return (
        <div>
            <LineChart width={400} height={400} data={data}>
                <XAxis color="#f0f" dataKey="name" />
                <YAxis color="#0ff" />
                <CartesianGrid stroke="#444" strokeDasharray="10 10" />
                <Tooltip content={renderTooltipContent} />
                <Line type="monotone" dataKey="number" stroke="#88a8fa" />
            </LineChart>
        </div>
    );
};

export default LineChartDiagram;
