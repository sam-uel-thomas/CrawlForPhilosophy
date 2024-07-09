/**
 * Crawls the Wikipedia page for the given page name.
 * @param {string} pageName - The name of the Wikipedia page to crawl.
 * @returns {Promise<{ message: string, visited_links: string[] }>} - A promise that resolves to an object containing the message and visited links.
 */
export default async function crawlWiki(pageName) {
    const response = await fetch(`http://127.0.0.1:5000/run_spider?start_url=https://en.wikipedia.org/wiki/${pageName}`);
    const data = await response.json();

    const { message, visited_links } = data;

    return { message, visited_links };
}