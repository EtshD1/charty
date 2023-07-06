import { Inter } from "next/font/google";
import Head from "next/head";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const Nav = ({ title, href }: { title: string; href: string }) => {
    return (
        <Link
            href={href}
            className="px-2 py-1 bg-opacity-5 border-2 border-solid border-white border-opacity-10 rounded-md bg-white text-sky-400 text-xl font-bold hover:underline hover:bg-opacity-10 hover:border-opacity-20"
        >
            {title}
        </Link>
    );
};

export default function Home() {
    return (
        <div
            className={[
                inter.className,
                "pt-10 flex items-center flex-col",
            ].join(" ")}
        >
            <Head>
                <title>Charts Demo</title>
            </Head>
            <div className="flex flex-col gap-8">
                <Nav href="/rechart" title="Rechart" />
                <Nav href="/victory" title="Victory" />
                <Nav href="/react-chartjs-2" title="React-Chartjs-2" />
            </div>
        </div>
    );
}
