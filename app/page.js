'use client';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import useFetchWikipedia from './api/useFetchWikipedia';
import crawlWiki from './api/crawlWiki';
import Modal from './Components/Modal';
import LoadingSpinner from './Components/LoadingSpinner'; // Import the LoadingBar component

export default function Home() {
    const [inputText, setInputText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState(null);
    const [visited_links, setVisitedLinks] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

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
            setIsModalOpen(true);
        } else {
            alert("Page does not exist");
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="min-h-screen bg-[#0472E0] flex flex-col justify-start items-center">
            <div className="flex items-center w-full overflow-hidden">
                <h1 className="w-full text-[22rem] text-center font-bold text-white">CRAWL</h1>
            </div>
            {!isLoading && (
                <div className="w-full text-center mb-10">
                    <input 
                        type="text" 
                        value={inputText} 
                        onChange={handleInputChange} 
                        className="p-2 text-white w-3/4 text-xl font-semibold bg-transparent border-b-4 border-dotted border-white outline-none"
                        placeholder="Enter a starting wikipedia page..."
                    />
                    <button onClick={handleButtonClick} className="ml-2 p-2 rounded-lg bg-white text-black">
                        <FontAwesomeIcon icon={faPaperPlane} />
                    </button>
                </div>
            )}
            {isLoading && <LoadingSpinner />}
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <div className="text-black">
                    <p className='font-semibold font-londrina text-xl pb-2 uppercase'>{message}</p>
                    <ul className='list-disc list-inside'>
                        {visited_links && visited_links.map(link => {
                            const articleName = link.split('/').pop().replace(/_/g, ' ');
                            return (
                                <li key={link}>
                                    <a href={link} target="_blank" rel="noopener noreferrer">{articleName}</a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </Modal>
        </div>
    );
}