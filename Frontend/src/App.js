import './App.css';
import React, {useState} from 'react';
import ImageGenerator from './Component/ImageGenerator';
import Chat from './Component/Chat';
import RecipeGenerator from './Component/RecipeGenerator';

function App() {
  const [activeTab, setActiveTab] = useState("image-genrator");
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="App">
      <button className={activeTab === "image-generator" ? "active" : ""} 
      onClick={() => handleTabChange("image-generator")}>Image Genrator</button>
      <button className={activeTab === "chat" ? "active" : ""}
      onClick={() => handleTabChange("chat")}>Chat</button>
      <button className={activeTab === "recipe-generator" ? "active" : ""} 
      onClick={() => handleTabChange("recipe-generator")}>Recipe Genrator</button>

      <div>
        {activeTab === "image-generator" && <ImageGenerator/>}
        {activeTab === "chat" && <Chat/>}
        {activeTab === "recipe-generator" && <RecipeGenerator/>}
      </div>
    </div>
  );
}

export default App;
