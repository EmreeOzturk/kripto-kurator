import React from 'react'
import { TypewriterEffect } from './ui/typewriter-effect';
const HeroTitle = () => {

    const words = [
        {
            text: "Welcome",
        },
        {
            text: "to",
        },
        {
            text: "the",
        },
        {
            text: "Kripto",
            className: "text-blue-500 dark:text-blue-500",
        },
        {
            text: "Küratör",
            className: "text-blue-500 dark:text-blue-500",
        },
        {
            text: "NFT"
        }
    ];
    return (
        <TypewriterEffect words={words} />
    )
}

export default HeroTitle