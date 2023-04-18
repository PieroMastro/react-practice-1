import React, { useState } from "react";

const CardGenerator = () => {
    // Define an array of possible card suits and ranks
    const suits = ["hearts", "diamonds", "clubs", "spades"];
    const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];

    // Use the useState hook to keep track of the currently generated card
    const [card, setCard] = useState({ suit: "", rank: "" });

    // Define a function to generate a new card
    const generateCard = () => {
        const randomSuit = suits[Math.floor(Math.random() * suits.length)];
        const randomRank = ranks[Math.floor(Math.random() * ranks.length)];
        setCard({ suit: randomSuit, rank: randomRank });
    };

    // Render the card and a button to generate a new card
    return (
        <div className="card-generator">
            <h2>Random Card Generator</h2>
            <div className="card">
                <div className={card.suit}>
                    <div className="rank">{card.rank}</div>
                    <div className="suit-icon">{getSuitIcon(card.suit)}</div>
                </div>
            </div>
            <button onClick={generateCard} className="btn btn-dark">Generate New Card</button>
        </div>
    );
};

// Helper function to get the Unicode icon for a given card suit
const getSuitIcon = (suit) => {
    switch (suit) {
        case "hearts":
            return "♥";
        case "diamonds":
            return "♦";
        case "clubs":
            return "♣";
        case "spades":
            return "♠";
        default:
            return "";
    }
};

export default CardGenerator;
