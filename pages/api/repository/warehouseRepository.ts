import db from '../db';
import { Warehouse } from '../model/warehouseModel';

export async function getAllWarehousesRepo() {
  return new Promise((resolve, reject) => {
    db.query(
      `SELECT wtc.warehouse_id, w.name AS warehouse_name, t.name AS package_type_name,
       SUM(CASE WHEN p.retrievedAt IS NULL THEN wtc.total_capacity ELSE 0 END) AS available_capacity
       FROM warehouse_type_capacity wtc
       INNER JOIN warehouses w ON wtc.warehouse_id = w.id
       LEFT JOIN packages p ON wtc.package_type_id = p.package_type_id AND wtc.warehouse_id = p.warehouse_id
       LEFT JOIN type t ON wtc.package_type_id = t.id
       GROUP BY wtc.warehouse_id, wtc.package_type_id`,
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



export async function getSingleWarehouseRepo(WarehouseID: string) {
  return new Promise((resolve, reject) => {
    db.query(
      'SELECT * FROM warehouses WHERE id = ?',
      [WarehouseID],
      (err, results: any) => {
        if (err) {
          reject(err);
        } else {
          if (results.length === 0) {
            throw new Error('Warehouse not found');
          } else {
            resolve(results[0]); // Return the first result
          }
        }
      }
    );
  });
}

export async function createWarehouseRepo(newWarehouse: Warehouse) {
  return new Promise((resolve, reject) => {
    db.query(
      'CALL InsertWarehouse(?, @generated_id)',
      [newWarehouse.name],
      (err, results: any) => {
        if (err) {
          reject(err);
        } else {
          db.query(
            'SELECT @generated_id AS generated_id',
            (err, idResult: any) => {
              if (err) {
                reject(err);
              } else {
                const generatedId = idResult[0].generated_id;

                const insertedData = {
                  id: generatedId,
                  name: newWarehouse.name,
                };

                const response = {
                  message: 'Successfully created warehouse.',
                  data: insertedData,
                };

                resolve(response);
              }
            }
          );
        }
      }
    );
  });
}
