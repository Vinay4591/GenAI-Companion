import React, {useState} from 'react';

function ImageGenerator(){
    const [prompt, setPrompt] = useState("");
    const [imageUrl, setImageUrl] = useState([]);
    const generateImage = async() => {
        try{
            const response = await fetch(`http://http://localhost:8080/generate-image?prompt=${prompt}`);
            const urls = await response.json();
            console.log("Generated image URLs:", urls);
            setImageUrl(urls);
        }
        catch(err){
            console.error("Error generating image:", err);
        }
    }
    return(
        <div className='tab-content'>
            <h2>Generate Image</h2>
            <input
                type = "text"
                value = {prompt}
                onChange={(e) => setPrompt(e.target.value)}    
                placeholder='Enter Prompt for Image...'
            />
            <button onClick={generateImage}>Generate Image</button>
            <div className='image-grid'>
                {imageUrl.map((url, index) => (
                    <img key={index} src={url} alt={`Generated ${index}`}/>
                ))}
                {[...Array(4 - imageUrl.length)].map((_, index) => (
                    <div key={index + imageUrl.length} className='empty-img-slot'></div>
                ))}
            </div>
        </div> 
    )
}

export default ImageGenerator;