import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="absolute w-full flex items-center justify-between p-6 text-text dark:text-dark-text">
            <Link href="/">
                <span className="text-2xl font-bold cursor-pointer">CrawlForPhilosophy</span>
            </Link>
        </nav>
    );
}