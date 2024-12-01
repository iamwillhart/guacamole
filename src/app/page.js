'use client'
import styled from 'styled-components'
import Image from 'next/image'

const MainContainer = styled.div`
  min-height: 100vh;
  background: transparent;
  color: white;
  position: relative;
  overflow: hidden;
`

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem 1rem;
`

const Title = styled.h1`
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: bold;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #fda4af, #6ee7b7, #c084fc);
  -webkit-background-clip: text;
  color: transparent;
  text-align: center;
  animation: sparkleText 2s linear infinite;

  @keyframes sparkleText {
    0%, 100% {
      text-shadow: 0 0 5px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.3);
    }
    50% {
      text-shadow: 0 0 10px rgba(255, 255, 255, 0.7), 0 0 20px rgba(255, 255, 255, 0.5);
    }
  }
`

const Subtitle = styled.h2`
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  color: #6ee7b7;
  text-align: center;
`

const HedgehogsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`

const HedgehogCard = styled.div`
  position: relative;
  aspect-ratio: 1;
  border-radius: 0.5rem;
  overflow: hidden;
  background: ${({ $gradientColor }) => `linear-gradient(to bottom, ${$gradientColor}10, transparent)`};
  opacity: ${({ $isActive }) => $isActive ? 1 : 0.4};
  transition: transform 0.3s ease;

  &:hover {
    transform: ${({ $isActive }) => $isActive ? 'scale(1.05)' : 'none'};
  }
`

const CardContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
`

const CardTitle = styled.h3`
  color: ${props => props.color};
  font-weight: 600;
  margin-bottom: 0.25rem;
`

const CardSubtitle = styled.p`
  color: ${props => props.color};
  font-size: 0.875rem;
  opacity: 0.8;
`

const SignupSection = styled.section`
  text-align: center;
  padding: 4rem 1rem;
`

const SignupText = styled.p`
  font-size: 1.25rem;
  color: #6ee7b7;
  margin-bottom: 1.5rem;
`

const Footer = styled.footer`
  text-align: center;
  padding: 2rem;
  color: #94a3b8;
`

const CardLink = styled.a`
  text-decoration: none;
  display: block;
`

const SocialGrid = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-top: 2rem;
`

const SocialIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.4;
  transition: opacity 0.3s ease;

  svg {
    width: 24px;
    height: 24px;
    margin-bottom: 0.5rem;
    fill: #6ee7b7;
  }

  span {
    font-size: 0.875rem;
    color: #6ee7b7;
  }
`

const QuantumDivider = styled.div`
  height: 1px;
  max-width: 200px;
  margin: 2rem auto;
  background: linear-gradient(
    to right,
    transparent,
    #6ee7b7,
    transparent
  );
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    background: #6ee7b7;
    border-radius: 50%;
    box-shadow: 0 0 15px #6ee7b7;
  }
`

const GlowingBackground = styled.div`
  position: absolute;
  top: -50%;
  left: -50%;
  right: -50%;
  bottom: -50%;
  width: 200%;
  height: 200%;
  background: 
    radial-gradient(circle at 20% 20%, rgba(253, 164, 175, 0.15) 0%, transparent 40%),
    radial-gradient(circle at 80% 80%, rgba(110, 231, 183, 0.15) 0%, transparent 40%),
    radial-gradient(circle at 50% 50%, rgba(192, 132, 252, 0.15) 0%, transparent 40%),
    radial-gradient(circle at 80% 20%, rgba(253, 164, 175, 0.12) 0%, transparent 35%),
    radial-gradient(circle at 20% 80%, rgba(110, 231, 183, 0.12) 0%, transparent 35%),
    radial-gradient(circle at 65% 35%, rgba(192, 132, 252, 0.12) 0%, transparent 35%);
  transform-origin: center center;
  animation: rotateBackground 15s ease-in-out infinite;
  pointer-events: none;
  z-index: 1;

  @keyframes rotateBackground {
    0% {
      transform: translate(10%, 10%) rotate(0deg);
    }
    33% {
      transform: translate(-5%, 15%) rotate(120deg);
    }
    66% {
      transform: translate(15%, -5%) rotate(240deg);
    }
    100% {
      transform: translate(10%, 10%) rotate(360deg);
    }
  }
`

// Optional: Add a sparkle overlay
const SparkleOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 50% 50%, white 1%, transparent 1%);
  background-size: 100px 100px;
  opacity: 0.03;
  animation: twinkle 4s ease-in-out infinite;
  pointer-events: none;
  z-index: 2;

  @keyframes twinkle {
    0%, 100% { opacity: 0.03; }
    50% { opacity: 0.05; }
  }
`

const ValueSection = styled.section`
  text-align: center;
  padding: 2rem 1rem;
  max-width: 1000px;
  margin: 0 auto;
`

const ValueHeader = styled.div`
  margin-bottom: 2rem;
  
  h3 {
    color: #fda4af; // Milly's rose gold color
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1rem;
  }
`

const ValueGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ValueItem = styled.div`
  padding: 1.5rem;
  background: rgba(253, 164, 175, 0.03); // Milly's color with low opacity
  border-radius: 0.5rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(253, 164, 175, 0.1);
  
  h3 {
    color: #fda4af;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }
  
  p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9rem;
    line-height: 1.5;
  }
`

const ContentWrapper = styled.div`
  position: relative;
  z-index: 3;
`

export default function Home() {
  const hedgehogs = [
    {
      name: 'Milly Naire',
      title: 'The Mindful Mentor',
      image: '/millynaire.jpg',
      color: '#fda4af',
      isActive: true,
      link: 'https://fun.virtuals.io/agents/0xEf116a5A11b07c10e5044a9034b833e2FEFbc6aC'
    },
    {
      name: 'Coming Soon',
      title: 'The Systems Sage',
      image: '/billynaire.jpg',
      color: '#93c5fd',
      isActive: false
    },
    {
      name: 'Coming Soon',
      title: 'The Pattern Prophet',
      image: '/trillynaire.jpg',
      color: '#c084fc',
      isActive: false
    }
  ]

  return (
    <MainContainer>
    <GlowingBackground />
    <SparkleOverlay />
    <ContentWrapper>
      <HeroSection>
        <Title>HEDGE HOG FUND AMENTALS</Title>
        <Subtitle>Roll Safer, Think Sharper: Market-Proof Your Mind</Subtitle>
      </HeroSection>

      <HedgehogsGrid>
        {hedgehogs.map((hedgehog, index) => (
          hedgehog.isActive ? (
            <CardLink href={hedgehog.link} key={index} target="_blank" rel="noopener noreferrer">
              <HedgehogCard
                $gradientColor={hedgehog.color}
                $isActive={hedgehog.isActive}
              >
                <Image
                  src={hedgehog.image}
                  alt={hedgehog.name}
                  layout="fill"
                  objectFit="contain"
                />
                <CardContent>
                  <CardTitle color={hedgehog.color}>{hedgehog.title}</CardTitle>
                  <CardSubtitle color={hedgehog.color}>{hedgehog.name}</CardSubtitle>
                </CardContent>
              </HedgehogCard>
            </CardLink>
          ) : (
            <HedgehogCard
              key={index}
              $gradientColor={hedgehog.color}
              $isActive={hedgehog.isActive}
            >
              <Image
                src={hedgehog.image}
                alt={hedgehog.name}
                layout="fill"
                objectFit="contain"
              />
              <CardContent>
                <CardTitle color={hedgehog.color}>{hedgehog.title}</CardTitle>
                <CardSubtitle color={hedgehog.color}>{hedgehog.name}</CardSubtitle>
              </CardContent>
            </HedgehogCard>
          )
        ))}
      </HedgehogsGrid>

      <ValueSection>
  <ValueHeader>
    <h3>Meet Milly: The Mindful Mentor</h3>
    <p>Your guide to emotional intelligence in the digital age</p>
  </ValueHeader>
  <ValueGrid>
    <ValueItem>
      <h3>Emotional Intelligence Training</h3>
      <p>Learn to recognize and manage FOMO, FUD, and other emotional triggers that impact your decision-making journey.</p>
    </ValueItem>
    <ValueItem>
      <h3>Mindful Pattern Recognition</h3>
      <p>Develop a balanced approach to understanding market psychology through nature-inspired metaphors and practical examples.</p>
    </ValueItem>
    <ValueItem>
      <h3>Psychological Resilience</h3>
      <p>Build emotional strength and critical thinking skills to navigate market volatility with confidence and clarity.</p>
    </ValueItem>
    <ValueItem>
      <h3>Foundation Building</h3>
      <p>Start your journey with strong fundamentals, combining technical understanding with emotional awareness.</p>
    </ValueItem>
  </ValueGrid>
</ValueSection>

      <SignupSection>
        <SignupText>Join Our Quantum Community</SignupText>
        <QuantumDivider />
        <SocialGrid>
          <SocialIcon>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
            <span>Coming Soon</span>
          </SocialIcon>
          <SocialIcon>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            <span>Coming Soon</span>
          </SocialIcon>
          <SocialIcon>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.374 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.626-5.374-12-12-12z"/>
            </svg>
            <span>Coming Soon</span>
          </SocialIcon>
        </SocialGrid>
      </SignupSection>

      <Footer>
        <p>Crypto education reimagined for the AI agent age</p>
      </Footer>
    </ContentWrapper>
  </MainContainer>
  )
}

