import { ErrorMessage } from './helper/ErrorHandler';
import { NextApiRequest, NextApiResponse } from 'next';
import { createPackageService, getAllPackagesService } from './service/packageService';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const packages = await getAllPackagesService();
        res.json(packages);
      } catch (error) {
        ErrorMessage(res, error);
      }
      break;

    case 'POST':
      try {
        if (!req.body.package_type_id || !req.body.warehouse_id || !req.body.customer_id) { 
          throw new Error('Missing required fields.');
        }
        const newPackage = req.body;
        const packageType = await createPackageService(newPackage);
        res.json(packageType);
      } catch (error) {
        ErrorMessage(res, error);
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
