import React from 'react';
import { Card, Badge, Button } from 'react-bootstrap';

interface Props {
  id: number;
  title: string;
  description: string;
  status: string;
  onUpdateStatus: (id: number, status: string) => void;
}

const TicketCard: React.FC<Props> = ({ id, title, description, status, onUpdateStatus }) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Badge bg={status === 'done' ? 'success' : status === 'in-progress' ? 'primary' : 'secondary'}>
          {status}
        </Badge>
        <div className="mt-2">
          {status !== 'done' && (
            <Button size="sm" className="me-2" onClick={() => onUpdateStatus(id, 'in-progress')}>
              In Progress
            </Button>
          )}
          {status !== 'done' && (
            <Button size="sm" onClick={() => onUpdateStatus(id, 'done')}>
              Done
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default TicketCard;
