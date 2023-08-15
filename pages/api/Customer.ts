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
  if (req.method === 'POST') {
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
  } else {
    try {
      const customers = await getAllCustomersService();
      res.status(200).json(customers);
    } catch (error) {
      ErrorMessage(res, error);
    }
  }
}
