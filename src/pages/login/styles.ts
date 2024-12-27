import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
 
`;

export const Form = styled.form`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: auto;
  max-width: 400px;
`;

export const Title = styled.h2`
  font-family: 'Open Sans';
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
`;

export const InputGroup = styled.div`
  margin-bottom: 15px;
  font-family: 'Open Sans';
  
  label {
    display: block;
    font-size: 14px;
    color: #555;
    margin-bottom: 5px;
  }

  input {
    width: 380px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
  }
`;

export const Error = styled.p`
  font-family: 'Open Sans';
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

export const Button = styled.button<{ disabled?: boolean }>`
  width: 100%;
  background-color: ${({ disabled }) => (disabled ? '#cccccc' : '#007bff')};
  color: ${({ disabled }) => (disabled ? '#666666' : 'white')};
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ disabled }) => (disabled ? '#cccccc' : '#0056b3')};
  }
`;