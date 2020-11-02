import React, {useEffect} from 'react';
import {addResponseMessage, Widget} from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import logo from './avatar.png'
import {CHAT_URL} from "../constants";

function Chatbot(props) {
    useEffect(() => {
    addResponseMessage('Well come to BigB movies');
  }, []);

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    fetch(CHAT_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "message": newMessage,
            "sender": "vishnu",
            "token" : "en"

        })
    }).then((response) => {
        console.log(JSON.stringify(response));
        response.json().then((jsonResponse) => {
            console.log(jsonResponse);
            jsonResponse.map(value =>
            {
                console.log(value['text']);
                addResponseMessage(value['text'])
            })


        });
    })

  };

    return (
      <div className="App">
        <Widget
          handleNewUserMessage={handleNewUserMessage}
          profileAvatar={logo}
          title="Big B"
          subtitle="An Intelligent Assistance..."
        />
      </div>
    );
}

export default Chatbot;