import Rechart from "@/components/rechart";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <div
            className={[
                inter.className,
                "pt-10 flex items-center flex-col",
            ].join(" ")}
        >
            <div>
                <Link
                    href="/rechart"
                    className="text-sky-400 text-xl font-bold hover:underline"
                >
                    Rechart
                </Link>
            </div>
        </div>
    );
}
