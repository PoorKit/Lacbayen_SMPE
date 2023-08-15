import db from '../db';
import { WarehouseTypeCapacity } from '../model/warehouseTypeCapacityModel';

export async function getAllWarehouseTypeCapacityRepo() {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM warehouse_type_capacity', (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

export async function createWarehouseTypeCapacityRepo(
  newWarehouseTypeCapacity: WarehouseTypeCapacity
) {
  return new Promise((resolve, reject) => {
    db.query(
      'CALL InsertWarehouseTypeCapacity(?, ?, ?)',
      [
        newWarehouseTypeCapacity.warehouse_id,
        newWarehouseTypeCapacity.package_type_id,
        newWarehouseTypeCapacity.capacity,
      ],
      (err, results: any) => {
        if (err) {
          reject(err);
        } else {
          const response = {
            message: 'Successfully created capacity data',
          };

          resolve(response);
        }
      }
    );
  });
}
