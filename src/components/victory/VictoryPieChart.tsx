import { VictoryPie, VictoryTheme } from "victory";

interface Props {
    data: {
        x: number;
        y: number;
    }[];
}

const VictoryPieChart = ({ data }: Props) => (
    <VictoryPie theme={VictoryTheme.material} data={data} />
);

export default VictoryPieChart;
