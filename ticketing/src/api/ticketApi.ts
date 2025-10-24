import api from './axiosClient';

export const getTickets = () => api.get('/tickets');
export const createTicket = (data: { title: string; description: string; status?: string }) =>
  api.post('/tickets', data);
export const updateTicketStatus = (id: number, status: string) =>
  api.patch(`/tickets/${id}/status`, { status });
