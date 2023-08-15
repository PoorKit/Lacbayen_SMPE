import db from '../db';
import { Package } from '../model/packageModel';

export async function getAllPackagesRepo() {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM packages', (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

export async function createPackageRepo(newPackage: Package) {
  return new Promise((resolve, reject) => {
    db.query(
      'CALL InsertPackages(?, ?, ?, @generated_id)',
      [
        newPackage.package_type_id,
        newPackage.warehouse_id,
        newPackage.customer_id,
      ],
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
                  warehouse_id: newPackage.warehouse_id,
                  package_type_id: newPackage.package_type_id,
                  customer_id: newPackage.customer_id,
                };

                const response = {
                  message: 'Successfully created package.',
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

export async function retrievePackageRepo(package_id: string, warehouse_id: string, package_type_id: string) {
  return new Promise((resolve, reject) => {
    try {
      const query = `CALL RetrieveAndIncrementAvailability('${package_id}', '${warehouse_id}', '${package_type_id}')`;

      db.query(query, (err, results) => {
        if (err) {
          console.error("Error retrieving package and incrementing availability:", err);
          reject(err);
        } else {
          const response = {
            message: 'Successfully retrieved package and incremented availability.',
            data: package_id,
          };
          resolve(response);
        }
      });
    } catch (error) {
      console.error("Error retrieving package and incrementing availability:", error);
      reject(error);
    }
  });
}
