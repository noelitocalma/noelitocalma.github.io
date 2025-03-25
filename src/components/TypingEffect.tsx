import { useEffect, useState } from "react";
import styled from "styled-components";

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

export const TypingEffect = ({ fullText }: { fullText: string }) => {
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
  }, [fullText]);

  return (
    <TypingWrapper >
      <div className="typing-animation" data-typing={text !== fullText}>{text}</div>
    </TypingWrapper>
  );
};
