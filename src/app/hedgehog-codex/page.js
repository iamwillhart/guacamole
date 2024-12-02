'use client'
import styled from 'styled-components'
import { cyberFont } from '../fonts'
import React, { useState } from 'react';
import GenesisPrompt from './GenesisPrompt';
import ConversationModal from './ConversationModal';
import { BackgroundAnimation } from '../components/BackgroundAnimation';


const CodexContainer = styled.div`
  position: relative; 
  min-height: 100vh; 
  width: 100%;      
  margin: 0 auto;
  padding: 2rem;
  color: white;
  overflow: hidden; 
`

const CodexHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`

const CodexTitle = styled.h1`
  font-family: ${cyberFont.style.fontFamily}, sans-serif;
  font-size: clamp(2rem, 5vw, 3rem);
  text-align: center;
  margin: 2rem 0;
  background: linear-gradient(to right, #fda4af, #6ee7b7);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`

const CodexSubtitle = styled.p`
  font-family: ${cyberFont.style.fontFamily}, sans-serif;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.2rem;
  margin-top: 1rem;
` 

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin: 4rem 0;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`

const NavButton = styled.button`
  width: 80%;
  max-width: 300px;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, rgba(253, 164, 175, 0.3), rgba(110, 231, 183, 0.3));
  border: 2px solid rgba(253, 164, 175, 0.5);
  border-radius: 0.5rem;
  color: white;
  font-family: ${cyberFont.style.fontFamily}, sans-serif;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    background: linear-gradient(135deg, rgba(253, 164, 175, 0.5), rgba(110, 231, 183, 0.5));
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
`

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  
  &:hover {
    color: white;
  }
`;

export default function HedgehogCodex() {
    const [showPrompt, setShowPrompt] = useState(false);
    const [showConversation, setShowConversation] = useState(false);
  
    return (
        <CodexContainer>
            <BackgroundAnimation />
            <CloseButton onClick={() => window.location.href = '/'}>×</CloseButton>
            <CodexHeader>
                <CodexTitle>The Naire Codex</CodexTitle>
                <CodexSubtitle>A Quantum Journey Through Market Wisdom</CodexSubtitle>
            </CodexHeader>
  
            <ButtonContainer>
                <NavButton onClick={() => setShowPrompt(true)}>
                    Genesis Prompt 🌌
                </NavButton>
                <NavButton onClick={() => setShowConversation(true)}>
                    Genesis Dialogue 💫
                </NavButton>
            </ButtonContainer>
  
            {showPrompt && <GenesisPrompt onClose={() => setShowPrompt(false)} />}
            {showConversation && <ConversationModal onClose={() => setShowConversation(false)} />}
        </CodexContainer>
    );
  }