import { useEffect, useState } from "react";
import VictoryBarDiagram from "./VictoryChartDiagram";
import VictoryLineChart from "./victoryLineChart";
import VictoryPieChart from "./VictoryPieChart";

const Victory = () => {
    const [data, setData] = useState<{ quarter: number; earnings: number }[]>();

    useEffect(() => {
        setTimeout(() => {
            setData([
                { quarter: 1, earnings: 130 },
                { quarter: 2, earnings: 165 },
                { quarter: 3, earnings: 142 },
                { quarter: 4, earnings: 190 },
            ]);
        }, 2000);

        setTimeout(() => {
            setData([
                { quarter: 1, earnings: 160 },
                { quarter: 2, earnings: 195 },
                { quarter: 3, earnings: 242 },
                { quarter: 4, earnings: 290 },
            ]);
        }, 10000);
    }, []);

    if (data === undefined) {
        return <div>Loading</div>;
    }

    return (
        <div className="flex gap-10">
            <VictoryBarDiagram data={data} />
            <VictoryLineChart
                data={data.map((d) => ({ x: d.quarter, y: d.earnings }))}
            />
            <VictoryPieChart
                data={data.map((d) => ({ x: d.quarter, y: d.earnings }))}
            />
        </div>
    );
};

export default Victory;
