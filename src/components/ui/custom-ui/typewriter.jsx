"use client";
import { useEffect, useState } from "react";

/**
 * Simple typewriter that types & deletes each word in `words`.
 * Props:
 *  - words: string[]
 *  - typingSpeed: number (ms per char)
 *  - deletingSpeed: number (ms per char)
 *  - pause: number (ms before deleting)
 */
export default function Typewriter({
  words = ["Muskan Jaiswal", "Student", "Web Developer", "C++ Coder"],
  typingSpeed = 80,
  deletingSpeed = 40,
  pause = 1200,
}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink(b => !b), 500);
    return () => clearInterval(blinkInterval);
  }, []);

  useEffect(() => {
    if (!isDeleting && subIndex === words[wordIndex].length) {
      // finished typing, pause then delete
      const t = setTimeout(() => setIsDeleting(true), pause);
      return () => clearTimeout(t);
    }

    if (isDeleting && subIndex === 0) {
      // finished deleting, move to next
      setIsDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((i) => i + (isDeleting ? -1 : 1));
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return (
    <span className="inline-flex items-center">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-bold">
        {words[wordIndex].slice(0, subIndex)}
      </span>
      <span className={`ml-1 ${blink ? "opacity-100" : "opacity-40"}`}>|</span>
    </span>
  );
}
