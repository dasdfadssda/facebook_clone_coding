import Login from "../components/Login";
import Footer from "../components/Footer";
import styled from 'styled-components';

function LoginPage(){
    const LoginPageComponent = styled.div`
        
    `;
    return (
        <LoginPageComponent>
            <Login/>
            <Footer />
        </LoginPageComponent>
    );
}

export default LoginPage;