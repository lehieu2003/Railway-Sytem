import {
  Container,
  Button,
  Heading,
  Form,
  NavLink,
  ButtonAndNavLinkBox,
} from "./RegistrationFormElement";

import React from "react";

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
    }
const RegistrationForm = () => {
    return (
      <div style={styles.style}>
        <Container>
          <Heading>
            <h2 style={styles.styleHeading}>User Registration</h2>
          </Heading>

          <Form>
            <label style={styles.styleLabel}>Name</label>
            <hr style={styles.styleHr}></hr>
            <input
              style={styles.styleInput}
              type="text"
              placeholder="Enter Full name"
            />
            <br></br>

            <label style={styles.styleLabel}>NID</label>
            <hr style={styles.styleHr}></hr>
            <input
              style={styles.styleInput}
              type="number"
              placeholder="Enter National ID"
            />
            <br></br>

            <label style={styles.styleLabel}>Email</label>
            <hr style={styles.styleHr}></hr>
            <input
              style={styles.styleInput}
              type="text"
              placeholder="Enter Email"
            />
            <br></br>

            <label style={styles.styleLabel}>Mobile</label>
            <hr style={styles.styleHr}></hr>
            <input
              style={styles.styleInput}
              type="number"
              placeholder="Enter Mobile No"
            />
            <br></br>

            <label style={styles.styleLabel}>Password</label>
            <hr style={styles.styleHr}></hr>
            <input
              style={styles.styleInput}
              type="password"
              placeholder="Password"
            />
            <br></br>

            <label style={styles.styleLabel}>Confirm Password</label>
            <hr style={styles.styleHr}></hr>
            <input
              style={styles.styleInput}
              type="password"
              placeholder="Confirm Password"
            />
            <br></br>
            <hr style={styles.styleHr}></hr>

            <ButtonAndNavLinkBox>
              <Button>Sign Up</Button>
              <NavLink to="/login" activeStyle>
                {" "}
                Already Registerd?{" "}
              </NavLink>
            </ButtonAndNavLinkBox>
          </Form>
        </Container>
      </div>
    );
  }
export default RegistrationForm;
