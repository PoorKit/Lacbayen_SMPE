import { ErrorMessage } from './helper/ErrorHandler';
import { NextApiRequest, NextApiResponse } from 'next';
import {
  createCustomerService,
  getAllCustomersService,
} from './service/customerService';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const customers = await getAllCustomersService();
        res.status(200).json(customers);
      } catch (error) {
        ErrorMessage(res, error);
      }
      break;

    case 'POST':
      try {
        if (
          !req.body.first_name ||
          !req.body.last_name ||
          !req.body.contact_number
        ) {
          throw new Error('Missing required fields.');
        }
        const newCustomer = req.body;
        const customer = await createCustomerService(newCustomer);
        res.status(200).json(customer);
      } catch (error) {
        ErrorMessage(res, error);
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
