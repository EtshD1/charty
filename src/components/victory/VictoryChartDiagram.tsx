import { VictoryBar, VictoryChart } from "victory";

interface Props {
    data: {
        quarter: number;
        earnings: number;
    }[];
}

const VictoryBarDiagram = ({ data }: Props) => (
    <VictoryChart
        theme={{
            axis: {
                style: {
                    axis: {
                        stroke: "#fff",
                        fill: "#fff",
                        color: "#fff",
                    },
                    axisLabel: {
                        color: "#fff",
                        fill: "#fff",
                        stroke: "#fff",
                        background: "#fff",
                    },
                    ticks: {
                        fill: "#fff",
                        color: "#fff",
                    },
                    grid: {
                        stroke: "#ffffff44",
                        color: "#fff",
                    },
                    tickLabels: {
                        fill: "#fff",
                    },
                },
            },
        }}
        animate={true}
        domainPadding={20}
        height={400}
        width={400}
    >
        <VictoryBar
            style={{
                data: { fill: "#14b8a6" },
                labels: { fill: "#fff" },
            }}
            animate={true}
            data={data}
            labels={({ datum }) => `${datum.earnings}`}
            x="quarter"
            y="earnings"
        />
    </VictoryChart>
);

export default VictoryBarDiagram;
