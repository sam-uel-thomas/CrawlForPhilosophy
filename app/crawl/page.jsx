"use client"
import React, { useState } from 'react';
import Navbar from '../Components/navbar';
import useFetchWikipedia from '../api/useFetchWikipedia';
import Loading from '../Components/Loading.jsx';
import PageInput from '../Components/PageInput';
import crawlWiki from '../api/crawlWiki'; // import your API function

export default function Home() {
    const [inputText, setInputText] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const pageExists = useFetchWikipedia(inputText);

    const handleButtonClick = async () => {
        if (pageExists) {
            setIsLoading(true);
            const crawlResult = await crawlWiki(inputText); // call your API function
            console.log(crawlResult); // log the result or do something with it
            setIsLoading(false);
        }
        else {
            alert("Page does not exist");
        }
    };

    return (
        <div className="min-h-screen bg-neutral-800 flex flex-col">
            <Navbar />
            {isLoading ? <Loading /> : <PageInput inputText={inputText} handleInputChange={handleInputChange} handleButtonClick={handleButtonClick} />}
        </div>
    );
}