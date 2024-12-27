import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, WelcomeMessage, LogoutButton } from './styles';

const Feed = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  
  const handleLogout = () => {
    
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <Container>
      {isLoggedIn ? (
        <>
          <WelcomeMessage>Bem-vindo! Você está logado com sucesso.</WelcomeMessage>
          <LogoutButton onClick={handleLogout}>Sair</LogoutButton>
        </>
      ) : (
        <WelcomeMessage>Você foi desconectado.</WelcomeMessage>
      )}
    </Container>
  );
};

export {Feed};
