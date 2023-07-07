import { useEffect, useState } from "react";
import RC2BarDiagram from "./bar";
import RC2DoughnutDiagram from "./doughnut";
import RC2LineDiagram from "./line";

export interface RC2Data {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
        backgroundColor: string[];
        borderColor: string[];
        borderWidth: number;
    }[];
}

const RC2Page = () => {
    const [data, setData] = useState<RC2Data>();

    useEffect(() => {
        setTimeout(() => {
            setData({
                labels: [
                    "Page 1",
                    "Page 2",
                    "Page 3",
                    "Page 4",
                    "Page 5",
                    "Page 6",
                ],
                datasets: [
                    {
                        label: "# of Votes",
                        data: [15, 22, 6, 8, 6, 7],
                        backgroundColor: [
                            "rgba(255, 99, 132, 0.5)",
                            "rgba(54, 162, 235, 0.5)",
                            "rgba(255, 206, 86, 0.5)",
                            "rgba(75, 192, 192, 0.5)",
                            "rgba(153, 102, 255, 0.5)",
                            "rgba(255, 159, 64, 0.5)",
                        ],
                        borderColor: [
                            "rgba(255, 99, 132, 1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(255, 206, 86, 1)",
                            "rgba(75, 192, 192, 1)",
                            "rgba(153, 102, 255, 1)",
                            "rgba(255, 159, 64, 1)",
                        ],
                        borderWidth: 2,
                    },
                ],
            });
        }, 10000);

        setTimeout(() => {
            setData({
                labels: [
                    "Page 1",
                    "Page 2",
                    "Page 3",
                    "Page 4",
                    "Page 5",
                    "Page 6",
                ],
                datasets: [
                    {
                        label: "# of Votes",
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                            "rgba(255, 99, 132, 0.5)",
                            "rgba(54, 162, 235, 0.5)",
                            "rgba(255, 206, 86, 0.5)",
                            "rgba(75, 192, 192, 0.5)",
                            "rgba(153, 102, 255, 0.5)",
                            "rgba(255, 159, 64, 0.5)",
                        ],
                        borderColor: [
                            "rgba(255, 99, 132, 1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(255, 206, 86, 1)",
                            "rgba(75, 192, 192, 1)",
                            "rgba(153, 102, 255, 1)",
                            "rgba(255, 159, 64, 1)",
                        ],
                        borderWidth: 2,
                    },
                ],
            });
        }, 2000);
    }, []);

    if (data === undefined) return <div>Loading</div>;

    return (
        <div className="flex gap-10">
            <RC2DoughnutDiagram data={data} />
            <RC2LineDiagram data={data} />
            <RC2BarDiagram data={data} />
        </div>
    );
};

export default RC2Page;
