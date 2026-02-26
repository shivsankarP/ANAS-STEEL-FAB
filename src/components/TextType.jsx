'use client';

import { useEffect, useState, useMemo } from 'react';
import './TextType.css';

/**
 * TextType - A robust typing effect component
 * @param {Array|string} text - Text(s) to type
 * @param {number} typingSpeed - Speed of typing in ms
 * @param {number} pauseDuration - How long to wait when text is fully typed (in ms)
 * @param {number} deletingSpeed - Speed of deleting in ms
 * @param {boolean} loop - Whether to loop through texts
 * @param {string} cursorCharacter - Character to use as cursor
 */
const TextType = ({
    text,
    as: Component = 'span', // eslint-disable-line no-unused-vars
    typingSpeed = 75,
    pauseDuration = 5000,
    deletingSpeed = 30,
    loop = true,
    className = '',
    showCursor = true,
    cursorCharacter = '|',
    cursorClassName = '',
    ...props
}) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    // Stable reference for the text array
    const textArray = useMemo(() => (Array.isArray(text) ? text : [text]), [text]);

    useEffect(() => {
        // Validation to prevent errors if textArray is empty
        if (textArray.length === 0) return;

        let timeout;
        const currentFullText = textArray[currentTextIndex] || "";

        const handleTyping = () => {
            if (!isDeleting) {
                if (displayedText.length < currentFullText.length) {
                    // CONTINUE TYPING
                    timeout = setTimeout(() => {
                        setDisplayedText(currentFullText.slice(0, displayedText.length + 1));
                    }, typingSpeed);
                } else if (loop || currentTextIndex < textArray.length - 1) {
                    // FULLY TYPED: Wait for pauseDuration before deleting
                    timeout = setTimeout(() => {
                        setIsDeleting(true);
                    }, pauseDuration);
                }
            } else {
                if (displayedText.length > 0) {
                    // CONTINUE DELETING
                    timeout = setTimeout(() => {
                        setDisplayedText(currentFullText.slice(0, displayedText.length - 1));
                    }, deletingSpeed);
                } else {
                    // FULLY DELETED: Move to next text
                    setIsDeleting(false);
                    setCurrentTextIndex((prev) => (prev + 1) % textArray.length);
                }
            }
        };

        handleTyping();

        return () => {
            if (timeout) clearTimeout(timeout);
        };
    }, [
        displayedText,
        isDeleting,
        currentTextIndex,
        textArray,
        typingSpeed,
        deletingSpeed,
        pauseDuration,
        loop
    ]);

    return (
        <Component
            className={`text-type-root ${className}`}
            {...props}
        >
            <span className="text-type-content">{displayedText}</span>
            {showCursor && (
                <span className={`text-type-cursor ${cursorClassName}`}>
                    {cursorCharacter}
                </span>
            )}
        </Component>
    );
};

export default TextType;
