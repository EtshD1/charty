import { Doughnut } from "react-chartjs-2";
import { RC2Data } from ".";

const RC2DoughnutDiagram = ({ data }: { data: RC2Data }) => {
    return (
        <div className="w-96 h-96">
            <Doughnut data={data} />
        </div>
    );
};

export default RC2DoughnutDiagram;
