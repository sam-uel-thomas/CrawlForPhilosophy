import React, { useState } from 'react';
import { ForceGraph2D } from 'react-force-graph';

export default function CrawlResults({ message, visited_links }) {
    const [showLinks, setShowLinks] = useState(false);

    const getLinkText = (link) => {
        let url = new URL(link);
        let pathParts = url.pathname.split('/');
        let name = pathParts[pathParts.length - 1];
        name = name.replace(/_/g, ' ');

        return name.split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    const graphData = {
        nodes: visited_links.map((link, index) => ({ id: index, name: getLinkText(link) })),
        links: visited_links.slice(0, -1).map((link, index) => ({ source: index, target: index + 1 }))
    };

    return (
        <div className='justify-center flex flex-col p-4'>
            <h1 className='font-bold text-5xl mb-8 mt-24'>{message}</h1>
            <button className='mb-4 bg-blue-500 hover:bg-blue-700 text-text dark:text-dark-text font-bold py-2 px-4 rounded' onClick={() => setShowLinks(!showLinks)}>
                {showLinks ? 'Hide Links' : 'Show Links'}
            </button>
            {showLinks && (
                <ForceGraph2D 
                    graphData={graphData}
                    nodeLabel="name"
                    linkDirectionalParticles="value"
                />
            )}
        </div>
    );
}