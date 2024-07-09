import { useState, useEffect } from 'react';

/**
 * Custom hook to fetch data from Wikipedia API based on the input.
 *
 * @param {string} input - The input to search for in Wikipedia.
 * @returns {boolean|null} - Returns true if the page exists, false if it doesn't, and null if the request is still in progress.
 */
const useFetchWikipedia = (input) => {
    const [pageExists, setPageExists] = useState(null);

    useEffect(() => {
        const fetchWikipedia = async () => {
            const url = `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${input}&origin=*`;
            try {
                const response = await fetch(url);
                const data = await response.json();
                const pages = data.query.pages;
                const pageId = Object.keys(pages)[0];
                setPageExists(pageId !== "-1");
            } catch (error) {
                setPageExists(false);
            }
        };

        fetchWikipedia();
    }, [input]); // Fetch again when the input changes

    return pageExists;
};

export default useFetchWikipedia;