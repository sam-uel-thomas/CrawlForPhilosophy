// crawlWiki.js
export default async function crawlWiki(pageName) {
    const response = await fetch(`http://127.0.0.1:5000/run_spider?start_url=https://en.wikipedia.org/wiki/${pageName}`);
    const data = await response.json(); // assuming the response is in JSON format
    return data;
}