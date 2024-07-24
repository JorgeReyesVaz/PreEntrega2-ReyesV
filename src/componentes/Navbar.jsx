import { CartWidget } from "./CartWidget";

export  const Navbar = () => {
    return(
            // <Navbar bg="dark" data-bs-theme="dark">
            //     <Container>
            //     <Navbar.Brand href="#home">SolarMX</Navbar.Brand>
            //     <Nav className="me-auto">
            //         <Nav.Link href="#home">Paneles</Nav.Link>
            //         <Nav.Link href="#features">Inversores</Nav.Link>
            //         <Nav.Link href="#pricing">Estructura</Nav.Link>
            //     </Nav>
            //     <CartWidget/>
            //     </Container>
            // </Navbar>
            <div className="navbar">
                <div className="container">
                    <div className="brand">
                        SolarMx
                    </div>
                    <ul className="list">
                        <li>Paneles</li>
                        <li>Inversores</li>
                        <li>Estructura</li>
                    </ul>
                    <CartWidget/>
                </div>
            </div>
    );
}