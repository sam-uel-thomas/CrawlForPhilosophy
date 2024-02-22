import Navbar from "./Components/navbar";
import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <Navbar />
            <div className="flex flex-col items-center h-screen pt-16">
                <h1 className="text-5xl font-bold pb-5">CrawlForPhilosophy</h1>
                <p className="text-lg">It's found that around 97% page of Wikipedia pages lead to philosophy following the first valid link</p>
                <p className="text-lg">Prove it yourself by crawling your way through wiki pages</p>
                <Link href="/crawl">
                    <button className="mt-12 px-4 py-4 text-white bg-blue-500 rounded hover:bg-blue-700">
                        Start Crawling
                    </button>
                </Link>
            </div>
        </div>
    );
}