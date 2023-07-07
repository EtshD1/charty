import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { RC2Data } from ".";

export const options = {
    plugins: {
        legend: {
            position: "top" as const,
        },
        title: {
            display: true,
            text: "Chart.js Line Chart",
        },
    },
};

const RC2LineDiagram = ({ data }: { data: RC2Data }) => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

    return (
        <div className="w-96 h-96">
            <Line
                height={400}
                width={400}
                style={{ height: "100%" }}
                options={options}
                data={data}
            />
        </div>
    );
};

export default RC2LineDiagram;
