import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { getTickets, updateTicketStatus } from '../../../api/ticketApi';
import TicketList from '../../organisms/TicketList/TicketList';

interface Ticket {
  id: number;
  title: string;
  description: string;
  status: string;
}

const TicketListPage: React.FC = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);

  const fetchTickets = async () => {
    const res = await getTickets();
    setTickets(res.data);
  };

  const handleUpdateStatus = async (id: number, status: string) => {
    await updateTicketStatus(id, status);
    fetchTickets();
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  return (
    <Container className="my-4">
      <h2>Tickets</h2>
      <TicketList tickets={tickets} onUpdateStatus={handleUpdateStatus} />
    </Container>
  );
};

export default TicketListPage;
