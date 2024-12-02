'use client'
import styled from 'styled-components'

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

export function BackgroundAnimation() {
  return (
    <>
      <GlowingBackground />
      <SparkleOverlay />
    </>
  )
} 