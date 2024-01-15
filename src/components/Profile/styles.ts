import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    margin-top: 8rem;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
`;

const imageAnimation = keyframes`
  0% {
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
  }

  50% {
    border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
  }

  100% {
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
  }
`;

export const ProfileImage = styled.div`
  background: url("/portfolio/assets/images/me.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow: inset 0 0 0 9px rgb(255, 255, 255 / 30%);
  justify-self: center;
  width: 300px;
  height: 300px;
  animation: ${imageAnimation} 8s ease-in-out infinite 1s;
  transition: 0.2s;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }

  @media screen and (max-width: 768px) {
    width: 400px;
    height: 400px;
  }
`;

export const AnchorImage = styled(motion.a)`
  height: 320px;
  display: flex;
  align-items: flex-end;
`;

export const Name = styled(motion.h2)`
  font-size: 3.125rem;
  font-weight: bold;
  color: #6b21a8;

  @media screen and (max-width: 768px) {
    font-size: 3.5rem;
  }
`;

export const DescriptionProfile = styled(motion.span)`
  font-size: 1.25rem;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const WelcomeText = styled(motion.h3)`
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 500;
`;

export const ColorizedText = styled.span`
  color: #a855f7;
`;

interface ButtonProps {
  transparent?: boolean;
}

export const Button = styled(motion.a)<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  padding: 1rem;
  min-width: 11rem;
  border-radius: 0.625rem;
  border: 1px solid rgb(63 63 70);
  cursor: pointer;
  transition: 0.2s;
  background: transparent;

  &:hover {
    color: #a855f7;
  }

  @media screen and (max-width: 768px) {
    min-width: 15rem;
    padding: 1.5rem;
    font-size: 1.25rem;
    border-radius: 1rem;
  }
`;

export const ButtonsGroup = styled.div`
  display: flex;
  gap: 2rem;
`;
