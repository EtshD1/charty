import { useEffect, useState } from "react";
import LineChartDiagram from "./linechart";
import PieChartDiagram from "./piechart";

const Rechart = () => {
    const [data, setData] = useState<{ name: string; number: number }[]>();

    useEffect(() => {
        setTimeout(() => {
            setData([
                { name: "Jan", number: 100 },
                { name: "Feb", number: 200 },
                { name: "Mar", number: 400 },
                { name: "April", number: 600 },
                { name: "May", number: 900 },
            ]);
        }, 2000);

        setTimeout(() => {
            setData([
                { name: "Jan", number: 200 },
                { name: "Feb", number: 350 },
                { name: "Mar", number: 400 },
                { name: "April", number: 600 },
                { name: "May", number: 1200 },
            ]);
        }, 10000);
    }, []);

    if (data === undefined) {
        return <div>Loading</div>;
    }

    return (
        <div className="flex gap-10">
            <LineChartDiagram data={data} />
            <PieChartDiagram data={data} />
        </div>
    );
};

export default Rechart;
