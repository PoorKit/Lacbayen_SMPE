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

export async function getAvailableCapacityRepo(warehouse_id: string) {
  return new Promise((resolve, reject) => {
    db.query(
      `SELECT wtc.warehouse_id, w.name AS warehouse_name, t.name AS package_type_name,
       wtc.total_capacity, wtc.available_capacity
       FROM warehouse_type_capacity wtc
       INNER JOIN warehouses w ON wtc.warehouse_id = w.id
       LEFT JOIN type t ON wtc.package_type_id = t.id
       WHERE wtc.warehouse_id = ?
       GROUP BY wtc.warehouse_id, wtc.package_type_id`,
      [warehouse_id],
      (err, results: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(results); // Return the results
        }
      }
    );
  });
}


export async function createWarehouseTypeCapacityRepo(
  newWarehouseTypeCapacity: WarehouseTypeCapacity
) {
  console.log(newWarehouseTypeCapacity.warehouse_id,
    newWarehouseTypeCapacity.package_type_id,
    newWarehouseTypeCapacity.capacity,)
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
