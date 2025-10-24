import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { createTicket } from '../../../api/ticketApi';
import { useNavigate } from 'react-router-dom';

const CreateTicketPage: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createTicket({ title, description });
    navigate('/');
  };

  return (
    <Container className="my-4">
      <h2>Create Ticket</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control value={title} onChange={(e) => setTitle(e.target.value)} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} />
        </Form.Group>

        <Button type="submit">Create</Button>
      </Form>
    </Container>
  );
};

export default CreateTicketPage;
