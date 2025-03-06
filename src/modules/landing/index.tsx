import { useEffect, useState } from "react";
import styled from "styled-components";
import QuickLinks from "./quick-links";

const TypingWrapper = styled.div`
  .typing-animation {
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    width: auto;
    animation: blink 0.75s step-end infinite;

    &[data-typing="true"] {
      border-right: 3px solid var(--color-gray-400);
    }
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
`

const TypingEffect = ({ fullText }: { fullText: string }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    let index = 0;
    let prevText = '';

    const interval = setInterval(() => {
      prevText += fullText[index];
      setText(prevText);
      index++;

      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <TypingWrapper >
      <div className="typing-animation" data-typing={text !== fullText}>{text}</div>
    </TypingWrapper>
  );
};

export default function LandingPage() {
  return (
    <div>
      <div className="text-4xl sm:text-6xl lg:text-8xl font-bold uppercase">
        <h1>Noelito Calma</h1>
      </div>

      <div className="text-xl sm:text-2xl md:text-3xl font-bold uppercase min-h-10">
        <TypingEffect fullText={"Senior Frontend Developer"} />
      </div>

      <div className="relative mt-10">
        <QuickLinks />
      </div>
    </div>
  )
}