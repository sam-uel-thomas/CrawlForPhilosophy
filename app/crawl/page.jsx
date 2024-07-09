"use client"
import React, { useState } from 'react';
import Navbar from '../Components/navbar';
import useFetchWikipedia from '../api/useFetchWikipedia';
import Loading from '../Components/Loading.jsx';
import PageInput from '../Components/PageInput';
import crawlWiki from '../api/crawlWiki';
import CrawlResults from '../Components/CrawlResults';

export default function Home() {
    const [inputText, setInputText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState(null);
    const [visited_links, setVisitedLinks] = useState(null);

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const pageExists = useFetchWikipedia(inputText);

    const handleButtonClick = async () => {
        if (pageExists) {
            setIsLoading(true);
            const result = await crawlWiki(inputText);
            setMessage(result.message);
            setVisitedLinks(result.visited_links);
            setIsLoading(false);
        }
        else {
            alert("Page does not exist");
        }
    };

    return (
        <div className="min-h-screen bg-neutral-800 flex flex-col">
            <Navbar />
            {isLoading ? <Loading /> : 
                message && visited_links ? <CrawlResults message={message} visited_links={visited_links} /> : 
                <PageInput inputText={inputText} handleInputChange={handleInputChange} handleButtonClick={handleButtonClick} />}
        </div>
    );
}