import renderTooltipContent from "@/lib/helpers/recharts/renderTooltopContent";
import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

const BarchartDiagram = ({ data }: { data: Data[] }) => {
    return (
        <BarChart
            width={400}
            height={400}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip content={renderTooltipContent} />
            <Legend
                content={(e) => {
                    console.log(e.payload);
                    return (
                        <div className="flex items-center justify-center">
                            {e.payload &&
                                e.payload.map((item, idx) => {
                                    return (
                                        <div
                                            className="flex gap-2 capitalize"
                                            key={`item-${idx}-${item.value}`}
                                            style={{ color: item.color }}
                                        >
                                            <div className="flex items-center justify-center">
                                                <div
                                                    className="rounded-full p-1"
                                                    style={{
                                                        background: item.color,
                                                    }}
                                                ></div>
                                            </div>
                                            <div>{item.value}</div>
                                        </div>
                                    );
                                })}
                        </div>
                    );
                }}
            />
            <Bar dataKey="number" fill="#2563eb" />
        </BarChart>
    );
};

export default BarchartDiagram;
