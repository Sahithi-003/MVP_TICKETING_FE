import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TicketListPage from './../src/components/pages/TicketListPage/TicketListPage';
import CreateTicketPage from './../src/components/pages/CreateTicketPage/CreateTicketPage';
import { Container, Navbar, Nav } from 'react-bootstrap';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">Ticketing MVP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Tickets</Nav.Link>
            <Nav.Link as={Link} to="/create">Create Ticket</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<TicketListPage />} />
        <Route path="/create" element={<CreateTicketPage />} />
      </Routes>
    </Router>
  );
};

export default App;
