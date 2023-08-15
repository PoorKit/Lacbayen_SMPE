import { ErrorMessage } from './helper/ErrorHandler';
import { NextApiRequest, NextApiResponse } from 'next';
import { getAllWarehousesService, createWarehouseService } from './service/warehouseService';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case 'GET':
        try {
            const warehouses = await getAllWarehousesService();
            res.json(warehouses);
          } catch (error) {
            ErrorMessage(res, error);
          }
      break;

    case 'POST':
        try {
            if (!req.body.name) {
              throw new Error('Missing required fields.');
            }
            const newWarehouse = req.body;
            const warehouse = await createWarehouseService(newWarehouse);
            res.json(warehouse);
          } catch (error) {
            ErrorMessage(res, error);
          }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
