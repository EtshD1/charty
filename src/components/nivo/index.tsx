import { useEffect, useState } from "react";
import NivoPie from "./NivoPie";

const Nivo = () => {
    const [data, setData] =
        useState<
            { id: string; value: number; label: string; color: string }[]
        >();

    useEffect(() => {
        setTimeout(() => {
            setData([
                {
                    id: "css",
                    label: "css",
                    value: 0,
                    color: "hsl(210, 70%, 50%)",
                },
                {
                    id: "stylus",
                    label: "stylus",
                    value: 572,
                    color: "hsl(233, 70%, 50%)",
                },
                {
                    id: "go",
                    label: "go",
                    value: 170,
                    color: "hsl(299, 70%, 50%)",
                },
                {
                    id: "sass",
                    label: "sass",
                    value: 518,
                    color: "hsl(151, 70%, 50%)",
                },
                {
                    id: "rust",
                    label: "rust",
                    value: 444,
                    color: "hsl(196, 70%, 50%)",
                },
            ]);
        }, 2000);
    }, []);

    if (data === undefined) {
        return <div>Loading</div>;
    }

    return (
        <div className="flex gap-10">
            <NivoPie data={data} />
        </div>
    );
};

export default Nivo;
