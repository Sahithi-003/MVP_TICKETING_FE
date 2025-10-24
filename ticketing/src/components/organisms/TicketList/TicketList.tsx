import React from 'react';
import TicketCard from '../../molecules/Ticket/TicketCard';

interface Ticket {
  id: number;
  title: string;
  description: string;
  status: string;
}

interface Props {
  tickets: Ticket[];
  onUpdateStatus: (id: number, status: string) => void;
}

const TicketList: React.FC<Props> = ({ tickets, onUpdateStatus }) => {
  return (
    <>
      {tickets.map((ticket) => (
        <TicketCard key={ticket.id} {...ticket} onUpdateStatus={onUpdateStatus} />
      ))}
    </>
  );
};

export default TicketList;
