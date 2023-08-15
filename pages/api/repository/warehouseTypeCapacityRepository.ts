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

export async function getWarehouseData(WarehouseID: string) {
  const warehouseQuery = `SELECT w.id AS warehouse_id, w.name AS warehouse_name,
                            wtc.package_type_id, wtc.total_capacity
                            FROM warehouses w
                            LEFT JOIN warehouse_type_capacity wtc ON w.id = wtc.warehouse_id
                            WHERE w.id = ?`;
  
  return new Promise((resolve, reject) => {
    db.query(warehouseQuery, [WarehouseID], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

export async function getPackagesData(WarehouseID: string) {
  const packagesQuery = `SELECT package_type_id, retrievedAt
                            FROM packages
                            WHERE warehouse_id = ?`;

  return new Promise((resolve, reject) => {
    db.query(packagesQuery, [WarehouseID], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

export async function getSingleWarehouseTypeCapacityRepo(WarehouseID: string) {
  try {
    // const warehouseResult: any = await getWarehouseData(WarehouseID);
    const packagesResult: any = await getPackagesData(WarehouseID);
    return packagesResult;

    // Calculate available_capacity
    // const warehouseDataWithCapacity = warehouseResult.map((warehouseRow) => {
    //   const matchingPackages = packagesResult.filter(
    //     (packageRow) => packageRow.package_type_id === warehouseRow.package_type_id
    //   );

    //   let availableCapacity = 0;

    //   matchingPackages.forEach((packageRow) => {
    //     if (packageRow.retrievedAt === null) {
    //       availableCapacity += warehouseRow.total_capacity;
    //     }
    //     availableCapacity -= packageRow.total_capacity;
    //   });

    //   return {
    //     ...warehouseRow,
    //     available_capacity: availableCapacity,
    //   };
    // });

    // return warehouseDataWithCapacity;
  } catch (error) {
    throw error;
  }
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
