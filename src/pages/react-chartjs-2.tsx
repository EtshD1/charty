import PageTemplate from "@/components/pageTemplate";
import RC2Page from "@/components/react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

const ReactChartjs2 = () => {
    ChartJS.register(ArcElement, Tooltip, Legend);
    return (
        <PageTemplate title="Rechart">
            <RC2Page />
        </PageTemplate>
    );
};

export default ReactChartjs2;
