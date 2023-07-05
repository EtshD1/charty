import { ContentType } from "recharts/types/component/Tooltip";

const renderTooltipContent: ContentType<string, number> = (o) => {
    const { payload } = o;

    return (
        <div className="bg-slate-900 p-2 rounded-sm border-2 border-solid border-slate-800">
            {payload &&
                payload.map((i, idx) => {
                    return (
                        <div key={`item-${idx}`} className="flex gap-4">
                            {i.payload ? (
                                <>
                                    <div className="font-bold">
                                        {i.payload.name}:
                                    </div>
                                    <div style={{ color: i.color }}>
                                        {i.payload.number}
                                    </div>
                                </>
                            ) : (
                                ""
                            )}
                        </div>
                    );
                })}
        </div>
    );
};

export default renderTooltipContent;
