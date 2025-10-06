import React, { useRef } from 'react'

const ChatForm = ({chatHistory, setChatHistory, generateBotResponse}) => {
  const inputRef = useRef();

  const handleFormSubmit = (e) =>{
    e.preventDefault();

    const userMessage = inputRef.current.value.trim();
    console.log("Message utilisateur:", userMessage); // ← Debug
    if(!userMessage) return;
    // 1. Vider le champ immédiatement
    inputRef.current.value = "";
    
    // 2. Créer le NOUVEL historique avec le message utilisateur
    const newHistoryWithUser = [...chatHistory, { role: "user", text: userMessage }];
    
    // 3. Mettre à jour l'état VISUEL avec "Thinking..."
    setChatHistory([...newHistoryWithUser, { role: "model", text: "Thinking..." }]);

    // 4. Appeler l'API avec SEULEMENT l'historique propre (sans "Thinking...")
    generateBotResponse(newHistoryWithUser);
  };
  
  return (
    <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
             <input ref={inputRef} type="text" placeholder="Write you question here"
             className="message-input" required/>
             <button className='material-symbols-rounded'>
            arrow_upward</button>
          </form>
  )
}

export default ChatForm;
