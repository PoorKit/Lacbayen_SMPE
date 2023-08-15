import { ErrorMessage } from './helper/ErrorHandler';
import { NextApiRequest, NextApiResponse } from 'next';
import { retrievePackageService } from './service/packageService';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {

    case 'POST':
      try {
        if (!req.body.package_id || !req.body.warehouse_id || !req.body.package_type_id) {
          throw new Error('Missing required fields.');
        }
        const newPackage = req.body;
        const packageType = await retrievePackageService(newPackage);
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
