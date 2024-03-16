import styled from "styled-components"
import {mobile} from "../responsive";


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0),rgba(255,255,255,0)), url("https://i.ibb.co/xXskj7f/pexels-frank-cone-3279307.jpg") center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content:center;
`

const Wrapper = styled.div`
    width:25%;
    padding: 20px;
    background-color: white;
    ${mobile({ width: "75%" })}
`
const Title = styled.h1`
    font-size:24px;
    font-weight: 300;
`

const Form = styled.form`
    display: flex;
    flex-direction:column;

`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin:10px 0px;
    padding: 10px;
`
const Link = styled.a`
    font-size: 12px;
    margin: 5px 0px;
    text-decoration: underline;
    cursor: pointer;
`

const Button = styled.button`
    width: 40%;
    border:none;
    padding: 15px 20px;
    background-color:#7E57C2;
    font-color: white;
    cursor: pointer;
    margin-bottom: 10px;
`
const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
            <Input placeholder="username"/>
            <Input placeholder="password"/>
            <Button>LOGIN</Button>
            <Link>
                DO NOT YOU REMEMBER THE PASSWORD?
            </Link>
            <Link>
                CREATE A NEW ACCOUNT
            </Link>
           
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
