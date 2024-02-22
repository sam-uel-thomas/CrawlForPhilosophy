export default function PageInput({ inputText, handleInputChange, handleButtonClick }) {
    return (
        <div className="flex-grow flex flex-col items-center justify-center">
            <div className="flex items-center p-1 text-3xl font-bold mb-4">
                <span className="text-neutral-500">wikipedia.org/wiki/</span>
                <div className="flex-grow flex items-center">
                    <input
                        type="text"
                        className="pl-1 text-neutral-500 bg-transparent outline-none"
                        value={inputText}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <button className="px-4 py-2 text-neutral-500 bg-neutral-200 rounded" onClick={handleButtonClick}>Get Crawling</button>
        </div>
    );
}