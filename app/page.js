'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({ subsets: ["latin"], weight: "700" });

const LoveMessage = () => {
  const messages = [
    "while (true) { console.log('I love you') }",
    "const love = you.map(moment => moment.forever)",
    "try { love++ } catch { love *= infinity }",
    "git commit -m 'Every day with you is a new feature'",
    "function life() { return better.with(you) }",
    "if (together) { happiness = true }",
    "const heart = () => 'Yours forever'",
    "let us = 'inseparable';",
    "const future = you + me;",
    "import love from 'myHeart';",
  ];

  const [currentMessage, setCurrentMessage] = useState(0);
  const [text, setText] = useState("");
  const fullText = "I love u Didillll 💖"; 
  const speed = 100; 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let index = 0;

    const typeText = () => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        index = 0; 
        setText("");
      }
    };

    const typingInterval = setInterval(typeText, speed);

    return () => clearInterval(typingInterval);
  }, [fullText]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-100 to-purple-100 px-4">
      <motion.h1 
        className={`text-4xl md:text-6xl text-pink-600 ${dancingScript.className}`}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        {text}
      </motion.h1>

      <div className="p-8 mt-8 rounded-lg bg-white shadow-xl max-w-2xl w-full">
        <pre className="text-lg md:text-2xl font-mono text-pink-600 whitespace-pre-wrap text-center">
          {messages[currentMessage]}
        </pre>
      </div>

    </div>
  );
};

const LoveTimeline = () => {
  const timeline = [
    {
      date: "2024-07-24",
      title: "Have an interest sama Didillll",
      description: "I've opened my heart to you"
    },
    {
      date: "2024-10-06",
      title: "Cerita pengalaman masa lalu",
      description: "Pertama kali kamu cerita tentang masa lalu kamu ke aku"
    },
    {
      date: "2024-10-12",
      title: "Pertama kali kita jalan bareng",
      description: "Kamu ngajak aku buat ke Cil Space bareng Yul"
    },
    {
      date: "2024-10-13 s/d 2024-12-27",
      title: "Having fun with Didillll make all memories in Bogor",
      description: "Kita sering jalan bareng ke tempat-tempat seru di Bogor"
    },
    {
      date: "2024-12-27",
      title: "Perpisahann, karena aku harus pulang",
      description: "Sediiiiih banget, tapi aku harus pulang ke Trenggalek, sayangg banget sama kamu"
    },
    {
      date: "2024-12-28 s/d now",
      title: "LDR (Long Distance Relationship)",
      description: "Sabarr yaa, I will come to u"
    },
  ];

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-mono text-center mb-12 text-purple-600">git log --love</h2>
        <div className="space-y-8">
          {timeline.map((event, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="w-32 text-right font-mono text-sm text-gray-500">
                {event.date}
              </div>
              <div className="w-4 h-4 rounded-full bg-pink-400 flex-shrink-0" />
              <div className="flex-1 bg-gray-50 p-4 rounded-lg shadow">
                <h3 className="font-mono text-lg text-purple-600">{event.title}</h3>
                <p className="text-gray-600">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const LoveTerminal = () => {
  const [text, setText] = useState('');
  const [showHeart, setShowHeart] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const terminalRef = useRef(null);
  const finalText = '> Loading love.exe...\n> Analyzing feelings...\n> Generating message...\n> Love u more';

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { rootMargin: '0px', threshold: 0.1 }
    );

    if (terminalRef.current) {
      observer.observe(terminalRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let index = 0;
    setText('');
    setShowHeart(false);

    const typeText = () => {
      if (index < finalText.length) {
        setText(finalText.slice(0, index + 1));
        index++;
        setTimeout(typeText, 50);
      } else {
        setShowHeart(true);
        setTimeout(() => {
          setText('');
          setShowHeart(false);
          index = 0;
          typeText();
        }, 2000);
      }
    };

    typeText();
  }, [isVisible]);

  useEffect(() => {
    setIsSmallScreen(window.innerWidth < 768);
    
    const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-8" ref={terminalRef}>
      <div className="w-full max-w-5xl bg-black rounded-lg p-8 font-mono text-green-400 min-h-[80vh]">
        <div className="flex items-center gap-3 mb-6">
          <Terminal size={24} />
          <span className="text-xl">love_terminal.exe</span>
        </div>
        <div className="whitespace-pre-line text-lg leading-relaxed mb-8">{text}</div>
        {showHeart && (
          <div className="flex justify-center items-center text-center w-full overflow-hidden">
            {isSmallScreen ? (
              <pre className="text-pink-500 text-[clamp(16px,6vw,32px)] font-bold">D I D I L L L 💖</pre>
            ) : (
              <pre className="text-pink-500 text-[clamp(10px,5vw,24px)] leading-[1.2] font-mono whitespace-pre-wrap">
{`
❤️❤️❤️    ❤️❤️   ❤️❤️❤️    ❤️❤️   ❤️         ❤️         ❤️         
❤️    ❤️    ❤️    ❤️    ❤️    ❤️    ❤️         ❤️         ❤️         
❤️    ❤️    ❤️    ❤️    ❤️    ❤️    ❤️         ❤️         ❤️         
❤️    ❤️    ❤️    ❤️    ❤️    ❤️    ❤️         ❤️         ❤️         
❤️    ❤️    ❤️    ❤️    ❤️    ❤️    ❤️         ❤️         ❤️         
❤️❤️❤️    ❤️❤️   ❤️❤️❤️    ❤️❤️    ❤️❤️❤️    ❤️❤️❤️    ❤️❤️❤️    
`}
              </pre>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const LoveRoadmap = () => {
  const photos = [
    { src: "/images/memory1.jpg", caption: "Ur Seminar Proposal 💻" },
    { src: "/images/memory2.jpg", caption: "Movies Date 🎬💖" },
    { src: "/images/memory3.jpg", caption: "Made bricks together 🧱" },
    { src: "/images/memory4.jpg", caption: "Coding date 💻" },
    { src: "/images/memory5.jpg", caption: "Babayy date 🍼" },
    { src: "/images/memory6.jpg", caption: "Mamamm together 🍽️" },
    { src: "/images/memory7.jpg", caption: "First photobox 📸" },
    { src: "/images/memory8.jpg", caption: "Library date 📚" }
  ];

  return (
    <div className="min-h-screen bg-pink-50 py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-mono text-center mb-12 text-purple-600">Memories Roadmap</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {photos.map((photo, index) => (
            <div key={index} className="relative group">
              <img src={photo.src} alt={photo.caption} className="rounded-lg shadow-lg w-full h-48 object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-lg">{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const LoveFooter = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-6">
      <span className='text-xs'>Aku selalu cinta dan sayang kamu tiap hari, bahkan tumbuh terus rasanya</span>
      <p className="text-sm">&copy; 2025 Made with ❤️ by Cabiyaaa</p>
    </footer>
  );
};

const LovePage = () => {
  return (
    <div className="h-screen overflow-y-auto scroll-smooth">
      <div className="snap-start"><LoveMessage /></div>
      <div className="snap-start"><LoveTimeline /></div>
      <div className="snap-start"><LoveTerminal /></div>
      <div className="snap-start"><LoveRoadmap /></div>
      <LoveFooter />
    </div>
  );
};

export default LovePage;
