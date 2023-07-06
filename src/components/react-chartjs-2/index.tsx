import RC2BarDiagram from "./bar";
import RC2DoughnutDiagram from "./doughnut";
import RC2LineDiagram from "./line";

const RC2Page = () => {
    return (
        <div className="flex gap-10">
            <RC2DoughnutDiagram />
            <RC2LineDiagram />
            <RC2BarDiagram />
        </div>
    );
};

export default RC2Page;
