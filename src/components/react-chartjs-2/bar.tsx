import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend,
    BarElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";
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

const RC2BarDiagram = ({ data }: { data: RC2Data }) => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    return (
        <div className="w-96 h-96">
            <Bar
                height={400}
                width={400}
                style={{ height: "100%" }}
                options={options}
                data={data}
            />
        </div>
    );
};

export default RC2BarDiagram;
