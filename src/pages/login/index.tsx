
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from "react-hook-form";
import { Container, Form, Title, InputGroup, Error, Button } from "./styles";
import { api } from '../../config/axios';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

type FormData = {
  email: string;
  password: string;
};

const schema = yup.object({
  email: yup.string().email('E-mail não é válido').required('Campo Obrigatório'),
  password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo Obrigatório'),
}).required();

const Login = () => {
  const navigate = useNavigate();

  const { control, handleSubmit, formState: { errors, isValid } } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const handleClickSignIn = () => {
    navigate('/feed');
  };

  const onSubmit = async (formData: FormData) => {
    try {
     
      const { data } = await api.get(`/users?email=${formData.email}&senha=${formData.password}`);
      
      if (data.length === 1) {
        handleClickSignIn();
      } else {
        alert('E-mail ou senha incorretos');
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      alert('Houve um erro, tente novamente');
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>Login</Title>

        <InputGroup>
          <label htmlFor="email">Email</label>
          <Controller
            name="email"
            control={control}
            
            render={({ field }) => (
              <input
                {...field}
                placeholder="E-mail"
                
              />
            )}
          />
          {errors.email && <Error>{errors.email.message}</Error>}
        </InputGroup>

        <InputGroup>
          <label htmlFor="password">Senha</label>
          <Controller
            name="password"
            control={control}
            
            render={({ field }) => (
              <input
                {...field}
                type="password"
                placeholder="Senha"
              />
            )}
          />
          {errors.password && <Error>{errors.password.message}</Error>}
        </InputGroup>

        <Button type="submit" disabled={!isValid}>Entrar</Button>
      </Form>
    </Container>
  );
};

export { Login };
