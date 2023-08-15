import { ErrorMessage } from './helper/ErrorHandler';
import { NextApiRequest, NextApiResponse } from 'next';
import {
    getAllWarehouseTypeCapacityService,
    createWarehouseTypeCapacityService,
    getSingleWarehouseTypeCapacityService
} from './service/warehouseCapacityService';


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                if (req.query.id) {
                    const warehouseCapacity = await getSingleWarehouseTypeCapacityService(req.query.id as string);
                    res.json(warehouseCapacity);
                } else {
                    const warehouseCapacity = await getAllWarehouseTypeCapacityService();
                    res.json(warehouseCapacity);
                }
            } catch (error) {
                ErrorMessage(res, error);
            }
            break;

        case 'POST':
            try {
                if (
                    !req.body.warehouse_id ||
                    !req.body.package_type_id ||
                    !req.body.capacity
                ) {
                    throw new Error("Missing required fields.");
                }
                const newWarehouseTypeCapacityParams = req.body;
                const warehouseTypeCapacity = await createWarehouseTypeCapacityService(
                    newWarehouseTypeCapacityParams
                );
                res.json(warehouseTypeCapacity);
            } catch (error) {
                ErrorMessage(res, error);
            }
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}
