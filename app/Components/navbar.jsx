import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between p-6 bg-blue-500">
            <Link href="/">
                <span className="text-2xl font-bold text-white cursor-pointer">CrawlForPhilosophy</span>
            </Link>
        </nav>
    );
}