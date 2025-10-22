# 🧠 GenAI Companion

**GenAI Companion** is a full-stack Generative AI application that seamlessly integrates multiple AI capabilities — conversational AI, image generation, and recipe creation — into a single unified platform.

---

## 🌍 Project Overview

The **GenAI Companion** application is built using **Spring Boot (Java)** for the backend and **React.js** for the frontend. It demonstrates how modern AI services can be connected and served through RESTful APIs, enabling users to interact with text, image, and recipe generation models.

This project highlights the power of **Generative AI (GenAI)** by combining:
- 🗨️ **AI Chat** — Interact with a conversational AI assistant.
- 🖼️ **Image Generation** — Generate AI-based images from natural language prompts.
- 🍳 **Recipe Generation** — Create personalized recipes using user-provided ingredients, cuisine types, and dietary restrictions.

---

## 🧩 Key Features

### 💬 AI Chat
Users can ask natural language questions and receive intelligent responses.  
This feature demonstrates **text generation and reasoning** capabilities through AI integration in Spring Boot.

### 🖼️ Image Generator
Transforms a user’s descriptive prompt into a high-quality AI-generated image.  
It uses the backend service to call an **AI image generation API** and dynamically displays results on the frontend.

### 🍽️ Recipe Generator
Generates creative, step-by-step recipes based on:
- Ingredients provided by the user
- Selected cuisine type
- Optional dietary restrictions  

This showcases the use of **prompt engineering** and **domain-specific AI text generation**.

---

## 🏗️ System Architecture

**Frontend:** React.js  
**Backend:** Spring Boot (Java)  
**Integration:** RESTful APIs connecting React to Spring Boot  
**AI Layer:** Spring AI / OpenAI API (for Chat, Image, and Recipe generation)

The architecture follows a modular design:
- The **React frontend** provides an interactive interface with three tabs (Chat, Image Generator, Recipe Generator).
- The **Spring Boot backend** exposes REST endpoints that handle user input and interact with AI models to return generated responses or images.

---

## ⚙️ Components Overview

### Backend (`Spring Boot`)
- **`GenAiController.java`** – Main REST controller connecting frontend requests to AI services.
- **`ChatService.java`** – Handles text-based AI conversations.
- **`ImageService.java`** – Generates images from user prompts.
- **`RecipeService.java`** – Creates recipes based on ingredients and preferences.

### Frontend (`React.js`)
- **`App.js`** – Main component that manages tab navigation.
- **`Chat.js`** – Handles chat interactions with the AI.
- **`ImageGenerator.js`** – Sends prompts to generate and display AI images.
- **`RecipeGenerator.js`** – Collects recipe inputs and displays generated results.

---

## 🎯 Purpose of the Project

The goal of **GenAI Companion** is to provide an interactive demonstration of how different Generative AI capabilities can be combined into one cohesive web application. It showcases:
- Integration between **AI APIs** and a **Java backend**
- Full-stack communication between **Spring Boot and React**
- The versatility of AI models for different creative use cases

This project can serve as:
- A **learning project** for full-stack and AI integration
- A **showcase project** for a portfolio or resume
- A **foundation** for more advanced GenAI applications (e.g., chatbots, creative design tools, recipe assistants)

---

## 🔮 Future Enhancements
- Add authentication and user management
- Store chat/image/recipe history in a database
- Enhance UI/UX with styled components or Material UI
- Deploy backend (Spring Boot) and frontend (React) to cloud platforms
- Add downloadable/exportable image and recipe options

---

## 🧠 Summary

**GenAI Companion** is a demonstration of how Generative AI can be integrated across multiple domains — language, visual creativity, and culinary inspiration — using a robust full-stack architecture.  
It represents a hands-on, practical implementation of AI services in a modern web application environment.

---
