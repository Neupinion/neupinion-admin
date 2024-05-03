import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const LoginBox = styled.div`
  width: 300px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: white;
`

const Title = styled.h2`
  text-align: center;
  color: #333;
`

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
`

const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`

function LoginPage() {
  return (
    <Container>
      <LoginBox>
        <Title>Login</Title>
        <form>
          <Button type="submit">Login</Button>
        </form>
      </LoginBox>
    </Container>
  )
}

export default LoginPage
