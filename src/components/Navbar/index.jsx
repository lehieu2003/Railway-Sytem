import { Nav, NavLink, Bars, NavMenu, Title } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Title>
          <h3>Railway E-Ticketing Service</h3>
        </Title>
        <Bars />
        <NavMenu>
          <NavLink to="/home" activestyle>
            Home
          </NavLink>
          <NavLink to="/login" activestyle>
            Login
          </NavLink>
          <NavLink to="/register" activestyle>
            Register
          </NavLink>
          <NavLink to="/verify-ticket" activestyle>
            Verify Ticket
          </NavLink>
          <NavLink to="/contact-us" activestyle>
            Contact Us
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
