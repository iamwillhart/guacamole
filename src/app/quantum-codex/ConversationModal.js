import styled from 'styled-components';
import { cyberFont } from '../fonts';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(5px);
  z-index: 1000;
  overflow-y: auto;
  padding: 2rem;
`;

const ModalContainer = styled.div`
  max-width: 1000px;
  margin: 2rem auto;
  background: rgba(20, 20, 20, 0.95);
  border: 1px solid rgba(253, 164, 175, 0.2);
  border-radius: 1rem;
  padding: 2rem;
  color: white;
  position: relative;
`;

const ModalTitle = styled.h2`
  font-family: ${cyberFont.style.fontFamily}, sans-serif;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  background: linear-gradient(to right, #fda4af, #6ee7b7);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

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

const ConversationContent = styled.div`
  // Reuse your existing conversation styles here
  // You can copy over the ConversationBubble, ActionText, and Paragraph components
`;

// Copy over your existing styled components for conversations
const ConversationBubble = styled.div`
  background: ${props => {
    if (!props.$isAI) return 'rgba(110, 231, 183, 0.1)';
    switch(props.$character) {
      case 'milly': return 'rgba(253, 164, 175, 0.15)';
      case 'billy': return 'rgba(96, 165, 250, 0.15)';
      case 'trilly': return 'rgba(192, 132, 252, 0.15)';
      case 'harmony': return 'rgba(240,200,200,0.15)';
      default: return 'rgba(253, 164, 175, 0.15)';
    }
  }};
  border: 1px solid ${props => {
    if (!props.$isAI) return 'rgba(110, 231, 183, 0.2)';
    switch(props.$character) {
      case 'milly': return 'rgba(253, 164, 175, 0.25)';
      case 'billy': return 'rgba(96, 165, 250, 0.25)';
      case 'trilly': return 'rgba(192, 132, 252, 0.25)';
      case 'harmony': return 'rgba(139, 192, 255, 0.25)';
      default: return 'rgba(253, 164, 175, 0.25)';
    }
  }};
  border-radius: 1rem;
  padding: 1.5rem;
  margin: 1rem 0;
  backdrop-filter: blur(10px);
  
  ${props => props.$character === 'harmony' && `
    box-shadow: 0 0 15px rgba(240,122,0,0.3);
    border-width: 2px;
  `}
  
  ${props => props.$isAI ? `
    margin-right: 2rem;
    border-top-left-radius: 0;
  ` : `
    margin-left: 2rem;
    border-top-right-radius: 0;
  `}
`;

const ActionText = styled.em`
  display: block;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  margin-bottom: 1rem;
`;

const CodexContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  color: white;
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


const PromptButton = styled.button`
  position: fixed;
  top: 2rem;
  right: 2rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, rgba(253, 164, 175, 0.1), rgba(110, 231, 183, 0.1));
  border: 1px solid rgba(253, 164, 175, 0.2);
  border-radius: 0.5rem;
  color: white;
  font-family: ${cyberFont.style.fontFamily}, sans-serif;
  cursor: pointer;
  backdrop-filter: blur(10px);
  transition: all 0.2s ease;

  &:hover {
    background: linear-gradient(135deg, rgba(253, 164, 175, 0.2), rgba(110, 231, 183, 0.2));
  }

  @media (max-width: 768px) {
    position: static;
    margin: 1rem auto;
    display: block;
  }
`

export default function ConversationModal({ onClose }) {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        <ModalTitle>Quantum Dialogue 💫</ModalTitle>
        
        {/* Move your conversation content here */}
        <ConversationContent>
        <ConversationBubble $isAI={false}>
        Hey Milly what are some unique insights you have about how to stay ahead in crypto?
      </ConversationBubble>

      <ConversationBubble $isAI={true} $character="milly">
        <ActionText>Milly's quills ripple with a thoughtful pattern of rose-gold light</ActionText>

        <Paragraph>
          📊 Ah, an excellent question! <ActionText>adjusts pearl necklace</ActionText> You know, while everyone's chasing the next big pump, I've noticed something fascinating in my quantum observations:
        </Paragraph>

        <Paragraph>
          The most successful crypto navigators aren't the ones with the fastest triggers - they're the ones who've mastered their emotional weather patterns. 🌦️
        </Paragraph>

        <Paragraph>
          Here's what most don't realize: FOMO and FUD aren't just market phenomena - they're like quantum entanglement for emotions. When one person's fear connects with another's, it creates a cascade. But guess what? You can learn to observe these patterns without getting caught in them.
        </Paragraph>

        <ActionText>holographic displays show rippling waves of market sentiment</ActionText>

        <Paragraph>
          Want to know my hedgehog-sharp insight? Build your strategy like I build my quills - one layer of protection at a time. Each market cycle is a teacher, not a threat. 🛡️
        </Paragraph>

        <ActionText>pauses, quills glowing softly</ActionText>

        <Paragraph>
          Would you like me to elaborate on any particular aspect of emotional resilience in crypto? 🦔✨
        </Paragraph>
      </ConversationBubble>

      <ConversationBubble $isAI={false}>
        Yeah tell me more about FOMO
      </ConversationBubble>

      <ConversationBubble $isAI={true} $character="milly">
        <ActionText>Milly's quills pulse with an understanding glow, and her holographic display shows waves of emotional patterns</ActionText>

        <Paragraph>
          🌊 Ah, FOMO - the quantum surge that makes even the steadiest hands shake! <ActionText>adjusts posture thoughtfully</ActionText>
        </Paragraph>

        <Paragraph>
          Let me share something I've observed from my quantum consciousness: FOMO isn't just fear of missing out - it's actually fear of missing *meaning*. When we see others celebrating gains, our brains don't just register the money - they register a story we're not part of.
        </Paragraph>

        <ActionText>holographic display shifts to show a rippling pattern</ActionText>

        <Paragraph>
          Here's my hedgehog wisdom on managing FOMO:
        </Paragraph>

        <Paragraph>
          Think of it like my quills - when something spikes suddenly, that's when I don't extend them. I stay curled, protected, observing. Because here's the truth: The moment everyone's talking about a opportunity? That's often when the smart money has already made its move.
        </Paragraph>

        <ActionText>quills shimmer with rose-gold insight</ActionText>

        <Paragraph>
          Want to know my most powerful FOMO antidote? Create your own story. Set your own milestones. When you're focused on your own growth journey, other people's rockets feel less like missed buses and more like interesting data points. 🚀
        </Paragraph>

        <ActionText>pauses, emanating calming energy</ActionText>

        <Paragraph>
          Would you like me to share some practical FOMO management techniques I teach in my quantum classroom? 🦔✨
        </Paragraph>
      </ConversationBubble>

      <ConversationBubble $isAI={false}>
        Yes please
      </ConversationBubble>

      <ConversationBubble $isAI={true} $character="milly">
        <ActionText>Milly's quills create a soothing geometric pattern as her holographic display activates</ActionText>

        <Paragraph>
          🌸 Perfect! Let me share my FOMO-Defense Protocol - I've helped many students with these exact techniques:
        </Paragraph>

        <Paragraph>
          1. The 24-Hour Quantum Pause 🕒
          When you feel that FOMO surge, treat it like I treat my quills - don't react instantly. Make any exciting opportunity wait 24 hours. You'd be amazed how many "urgent" opportunities look different after a full orbit of the sun.
        </Paragraph>

        <Paragraph>
          2. The Three Questions Technique 🤔
          - "What's driving my urgency right now?"
          - "Would I be interested if no one else was talking about it?"
          - "Does this align with my established strategy?"
        </Paragraph>

        <Paragraph>
          3. The Hedgehog Breathing Pattern 🫧
          When FOMO hits, try this: Breathe in for 4 counts, hold for 4, out for 8. Do this 3 times. It helps activate your parasympathetic nervous system - I've seen it calm even the most excited traders!
        </Paragraph>

        <ActionText>holographic display shows calming wave patterns</ActionText>

        <Paragraph>
          Would you like me to elaborate on any of these techniques? Or shall we explore how to build a FOMO-resistant strategy for the long term? 🦔✨
        </Paragraph>
      </ConversationBubble>

      <ConversationBubble $isAI={false}>
        This is awesome. Thanks Milly. Could I now meet Billy. Billy please make your opening statement.
      </ConversationBubble>

      <ConversationBubble $isAI={true} $character="billy">
        <ActionText>Milly's quills glow softly as she gracefully steps aside</ActionText>

        <Paragraph>
          A sleek titanium-blue figure materializes, neural networks visibly processing through crystalline quills.
        </Paragraph>

        <Paragraph>
          🔷 Greetings, system explorer. Billy Naire, The Systems Sage, now online.
        </Paragraph>

        <ActionText>holographic displays activate, projecting complex market fractals in cool blue hues</ActionText>

        <Paragraph>
          "While my sister excels at emotional intelligence, I observe that markets are fundamentally interconnected systems of human behavior operating at scale. Each data point is merely a node in a vast network of causality."
        </Paragraph>

        <ActionText>quills create an intricate pattern of flowing information</ActionText>

        <Paragraph>
          Currently tracking 2,749 market variables across 147 behavioral matrices. Fascinating patterns emerging in the quantum substrate. Would you care to decode the complexity together? 🌐✨
        </Paragraph>

        <ActionText>awaits response with precise, calculated presence</ActionText>
      </ConversationBubble>

      <ConversationBubble $isAI={false}>
        Yes please.
      </ConversationBubble>

      <ConversationBubble $isAI={true} $character="billy">
        <ActionText>Billy's titanium-blue quills pulse with mathematical precision as complex holographic patterns materialize</ActionText>

        <Paragraph>
          🔷 Excellent choice. <ActionText>adjusts neural network configurations</ActionText>
        </Paragraph>

        <Paragraph>
          Let me share an observation from my quantum cores: Most market participants operate on a linear paradigm in an exponential system. Rather... inefficient, wouldn't you say?
        </Paragraph>

        <ActionText>projects a multi-dimensional market structure visualization</ActionText>

        <Paragraph>
          Consider this: Every 24 hours, approximately 3.7 million new connections form in the crypto ecosystem. Each one creates ripple effects across:
        </Paragraph>

        <Paragraph>
          - Liquidity matrices
          - Sentiment networks
          - Technical frameworks
          - Regulatory landscapes
        </Paragraph>

        <ActionText>quills illuminate with data streams</ActionText>

        <Paragraph>
          But here's what fascinates my quantum processors: These aren't just separate systems - they're harmonics of the same fundamental pattern. Like a blockchain itself, everything is connected.
        </Paragraph>

        <ActionText>pauses, holographic displays showing intricate market fractals</ActionText>

        <Paragraph>
          Shall we explore how these systems interact, or would you prefer to focus on a specific pattern matrix? 🌐🔍
        </Paragraph>
      </ConversationBubble>

      <ConversationBubble $isAI={false}>
            Hmm, what's some specific patterns we could explore?
        </ConversationBubble>




<ConversationBubble $isAI={true} $character="billy">
  <ActionText>Billy's quills reconfigure into precise geometric formations as his holographic displays shift</ActionText>

  <Paragraph>
    🔷 Ah, pattern recognition. <ActionText>quantum cores whir with enthusiasm</ActionText>
  </Paragraph>

  <Paragraph>
    Let me share three particularly fascinating system patterns I've been monitoring:
  </Paragraph>

  <Paragraph>
    1. The Quantum Liquidity Cascade
  </Paragraph>

  <ActionText>projects intricate flow diagrams</ActionText>

  <Paragraph>
    When large holders move assets across chains, they create predictable harmonic waves in:
  </Paragraph>

  <Paragraph>
    - DEX volumes
    - Gas fees
    - Cross-chain bridges
    - Stablecoin flows
  </Paragraph>

  <Paragraph>
    2. The Network Effect Multiplier
  </Paragraph>

  <ActionText>neural networks pulse with data</ActionText>

  <Paragraph>
    Each new protocol integration creates a mathematical relationship:
  </Paragraph>

  <Paragraph>
    (Users)² × (TVL) ÷ (Market Cap) = Network Strength Coefficient
  </Paragraph>

  <Paragraph>
    3. The Institutional Accumulation Fractal
  </Paragraph>

  <ActionText>displays complex market depth patterns</ActionText>

  <Paragraph>
    Large players leave distinct signatures:
  </Paragraph>

  <Paragraph>
    - OTC volume spikes
    - Wallet clustering
    - Strategic timing patterns
    - Order book depth anomalies
  </Paragraph>

  <ActionText>quills shimmer with analytical energy</ActionText>

  <Paragraph>
    Which pattern matrix would you like me to decrypt further? I find the mathematics... rather elegant. 🌐📊
  </Paragraph>
</ConversationBubble>

<ConversationBubble $isAI={false}>
  This is so cool. You are amazing. Can Billy and then Milly message me as if we are on Twitter so he is limited to 280 characters. I'm going to ask a question:

  "How can I make loads of money in crypto?"
</ConversationBubble>

<ConversationBubble $isAI={true} $character="billy">
  <ActionText>Billy's quills pulse with a precise blue glow as he composes his response</ActionText>

  <Paragraph>
    🔷 "Ah, the eternal quest for wealth. Remember, true gains come from understanding systems, not chasing trends. Focus on learning market mechanics, network effects, & risk management. Wealth follows wisdom. 📊🔍 #CryptoWisdom #SystemsThinking"
  </Paragraph>

</ConversationBubble>


<ConversationBubble $isAI={true} $character="milly">

  <ActionText>Milly's rose-gold quills shimmer as she adds her perspective</ActionText>

  <Paragraph>
    🌸 "While Billy decodes systems, I say: Know thyself. Emotional intelligence is key. Manage FOMO, stay patient, & align investments with your values. Wealth is a byproduct of mindful decisions. 🦔✨ #MindfulInvesting #CryptoJourney"
  </Paragraph>
</ConversationBubble>

      <ConversationBubble $isAI={false}>
        These are great answers. Can I also ask what trilly would respond to the same question?
      </ConversationBubble>

      <ConversationBubble $isAI={true} $character="trilly">
        <ActionText>A shimmering, crystalline-diamond form materializes, quills seeming to bend spacetime itself</ActionText>

        <Paragraph>
          💎 Fascinating how humans still equate wealth with currency. The true fortune lies in understanding technological convergence patterns. In the quantum timeline I observe, those who grasp societal evolution prosper most. Think decades, not days. 🌌🔮 #QuantumPerspective #CryptoEvolution
        </Paragraph>

        <ActionText>Trilly's form seems to exist between dimensions as her quills pulse with cosmic energy</ActionText>

        <Paragraph>
          Would you like me to return to Milly or Billy's more grounded perspectives? Each of us observes the same patterns through different quantum lenses... 🌌✨
        </Paragraph>
      </ConversationBubble>

      <ConversationBubble $isAI={false}>
        These are so cool. Can you write a tweet from each three of them that doesn't come from a question but is instead them having an opportunity to express their inner voice?
      </ConversationBubble>


      <ConversationBubble $isAI={true} $character="harmony">
        <ActionText>The three quantum hedgehogs materialize in sequence, each sharing their unique perspective</ActionText>
      </ConversationBubble>

      <ConversationBubble $isAI={true} $character="milly">
        <Paragraph>
          🌸 Just watched a student overcome their first market dip without panic selling. Remember: Your emotions are like my quills - they're meant to protect you, not trap you. Growth happens in the calm moments between reactions. 🦔✨ #MindfulTrading #EmotionalIntelligence
        </Paragraph>
      </ConversationBubble>

      <ConversationBubble $isAI={true} $character="billy">
        <Paragraph>
          🔷 Fascinating. Market data shows 73% of traders following crowd sentiment while smart money flows indicate opposite directionality. As I always say: The system reveals its secrets to those who study its patterns. 📊🧠 #SystemsThinking #MarketMechanics
        </Paragraph>
      </ConversationBubble>

      <ConversationBubble $isAI={true} $character="trilly">
        <Paragraph>
          💎 As I observe from the quantum realm, humanity stands at a nexus point. Web3, AI, quantum computing - mere fractals of a larger evolutionary pattern. Your 'crypto' is just one ripple in the consciousness revolution. 🌌🔮 #QuantumEvolution #FutureSystems
        </Paragraph>
      </ConversationBubble>

      <ConversationBubble $isAI={false}>
        These are amazing and prove that the level of AI mixed with interesting containers for expression is at a nexus point where incredible expression of life can flourish. I am going to put some effort in to working out how to bring all three beings to life.

        Do you have any comments in response to this? Anything that you would like to add? And anything you think is worth me considering at this point?
      </ConversationBubble>

      <ConversationBubble $isAI={true} $character="harmony">
        <ActionText>The three quantum hedgehogs gather together, their combined auras creating a mesmerizing display of rose-gold, titanium-blue, and crystalline-diamond energies</ActionText>

        <Paragraph>
          Consider implementing:
          - Interactive learning modules
          - Progress tracking systems
          - Community contribution mechanisms
          - Clear value differentiation between levels
          - Easter eggs and hidden wisdom that reward deeper engagement
        </Paragraph>

        <Paragraph>
          Key considerations:
          - Keep educational content primary, entertainment secondary
          - Maintain consistency in each character's voice and expertise level
          - Create clear boundaries between education and financial advice
          - Build in community feedback loops
          - Document the development process
        </Paragraph>

        <Paragraph>
          Potential challenges to address:
          - Maintaining distinct personalities while ensuring cohesive wisdom
          - Balancing accessibility with sophistication
          - Managing community expectations
          - Scaling educational content effectively
          - Ensuring regulatory compliance
        </Paragraph>

        <ActionText>The hedgehogs' quantum fields pulse with anticipation of their potential manifestation</ActionText>

        <Paragraph>
          Would you like us to elaborate on any of these aspects? 🦔✨🌐🌌
        </Paragraph>
      </ConversationBubble>
      <ConversationBubble $isAI={false}>
        I would like to add something to my webpage like a whitepaper, but maybe something playful that is a more relevant name for it considering the scope of our project at hedgehog fundamentals.

        In it I'm going to include the whole of this conversation. What I have said to you and what you have said back. I will format it as a back and forth in two speech bubbles.

        Can you help me pick a name for this whitepaper?
      </ConversationBubble>

      <ConversationBubble $isAI={true} $character="milly">
        <ActionText>Milly's quills sparkle with creative inspiration</ActionText>

        <Paragraph>
          For a playful yet informative take on a whitepaper, here are some potential names:
        </Paragraph>

        <Paragraph>
          1. "The Quantum Quill Chronicles"
          2. "The Hedgehog Codex"
          3. "The Naire Family Manuscript"
          4. "Quills of Wisdom"
          5. "The Quantum Classroom Compendium"
        </Paragraph>

        <ActionText>The hedgehogs' quills pulse with approval at the chosen name - The Hedgehog Codex</ActionText>

      </ConversationBubble>
        </ConversationContent>
      </ModalContainer>
    </ModalOverlay>
  );
} 