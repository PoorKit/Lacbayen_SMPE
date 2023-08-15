import db from '../db';
import { Customer } from '../model/customerModel';

export async function getAllCustomersRepo() {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM customers', (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

export async function createCustomerRepo(newCustomer: Customer) {
  return new Promise((resolve, reject) => {
    db.query(
      'CALL InsertCustomer(?, ?, ?, @generated_id)',
      [
        newCustomer.first_name,
        newCustomer.last_name,
        newCustomer.contact_number,
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
                  first_name: newCustomer.first_name,
                  last_name: newCustomer.last_name,
                  contact_number: newCustomer.contact_number,
                };

                const response = {
                  message: 'Successfully created customer.',
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
