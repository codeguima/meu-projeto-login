import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f9;
`;

export const WelcomeMessage = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

export const LogoutButton = styled.button`
  background-color: #f44336;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #d32f2f;
  }
`;
