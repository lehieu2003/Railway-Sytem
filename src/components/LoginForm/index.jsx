import{
    Container,
    Heading,
    Button,
    Form,
    NavLink,
    ButtonAndNavLinkBox,
} from "./LoginFormElement"
import React from 'react';

const styles = {
    styleHeading: {
        color: "#fff",
        textAlign: "center",
        fontSize: "30px",
    },
    style: {
        display: "flex",
        flexDirection: "column",
        padding: "80px 0px 80px 0px",
    },
    styleInput: {
        height: "40px",
        padding: "0px 0px 0px 10px",
        border: "1px solid #000",
    },
    styleLabel: {
        padding: "0px 0px 0px 0px",
    },
    styleHr: {
        background: "transparent",
        color: "transparent",
        margin: "0",
        borderStyle: "none",
        height: "1vw",
    },
};

const LoginForm = () => {
    return (
        <div style={styles.style}>
            <Container>
                <Heading>
                    <h2 style={styles.styleHeading}>User Login</h2>
                </Heading>

                <Form>
                    <label style={styles.styleLabel}>Email</label>
                    <hr style={styles.styleHr}></hr>
                    <input 
                        style={styles.styleInput}  
                        type="text" 
                        placeholder="Enter Email" />
                    <br ></br>

                    <label style={styles.styleLabel}>Password</label>
                    <hr style={styles.styleHr}></hr>
                    <input 
                        style={styles.styleInput} 
                        type="password" 
                        placeholder="Password" />
                    <br></br>

                    <ButtonAndNavLinkBox>
                        <Button>Login</Button>
                        <NavLink to='/login' activeStyle> Forgot Password? </NavLink>
                    </ButtonAndNavLinkBox>
                </Form>

            </Container>

        </div>
    )
}

export default LoginForm;