import { VictoryChart, VictoryLine, VictoryTheme } from "victory";

interface Props {
    data: {
        x: number;
        y: number;
    }[];
}

const VictoryLineChart = ({ data }: Props) => {
    return (
        <VictoryChart
            animate={true}
            theme={VictoryTheme.material}
            height={400}
            width={400}
        >
            <VictoryLine
                style={{
                    data: { stroke: "#c43af1" },
                    parent: { border: "1px solid #ccc" },
                }}
                data={data}
                animate={true}
            />
        </VictoryChart>
    );
};

export default VictoryLineChart;
