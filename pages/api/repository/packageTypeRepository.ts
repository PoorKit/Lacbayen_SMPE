import db from '../db';
import { PackageType } from '../model/packageTypeModel';

export async function getAllPackageTypesRepo() {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM type', (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

export async function createPackageTypeRepo(newPackageType: PackageType) {
  return new Promise((resolve, reject) => {
    db.query(
      'CALL InsertPackageType(?, @generated_id)',
      [newPackageType.name],
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
                  name: newPackageType.name,
                };

                const response = {
                  message: 'Successfully created package type.',
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
