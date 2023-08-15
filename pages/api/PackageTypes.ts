import { ErrorMessage } from './helper/ErrorHandler';
import { NextApiRequest, NextApiResponse } from 'next';
import { getAllPackageTypesService, createPackageTypeService } from './service/packageTypeService';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case 'GET':
        try {
            const types = await getAllPackageTypesService();
            res.json(types);
          } catch (error) {
            ErrorMessage(res, error);
          }
      break;

    case 'POST':
        try {
            if (!req.body.name) {
              throw new Error('Missing required fields.');
            }
            const newtype = req.body;
            const type = await createPackageTypeService(newtype);
            res.json(type);
          } catch (error) {
            ErrorMessage(res, error);
          }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
