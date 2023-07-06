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

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
    labels,
    datasets: [
        {
            label: "Dataset 1",
            data: labels.map(() => Math.floor(Math.random() * 1000)),
            borderColor: "rgb(132, 99, 255)",
            backgroundColor: "rgba(132, 99, 255, 0.5)",
        },
    ],
};

const RC2BarDiagram = () => {
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
