import Link from "next/link";

const PageTemplate = ({
    children,
}: {
    children?: JSX.Element | JSX.Element[];
}) => {
    return (
        <div className="pt-10 flex items-center gap-4 flex-col">
            <div className="flex gap-2 items-center ">
                <Link
                    href="/"
                    className="text-blue-600 hover:underline bg-slate-950 px-1 rounded border border-solid border-slate-700"
                >
                    Home
                </Link>
                <h2 className="text-sky-400 text-2xl font-bold">Rechart</h2>
            </div>
            {children}
        </div>
    );
};

export default PageTemplate;
