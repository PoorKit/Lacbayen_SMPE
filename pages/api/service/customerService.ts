import { Customer } from '../model/customerModel';
import {
  createCustomerRepo,
  getAllCustomersRepo,
} from '../repository/customerRepository';
import {
  NameValidation,
  NumberValidation,
  WordCase,
} from '../utils/inputValidation';

export async function getAllCustomersService() {
  return await getAllCustomersRepo();
}

export async function createCustomerService(newCustomer: Customer) {
  try {
    newCustomer.first_name = WordCase(newCustomer.first_name);
    newCustomer.last_name = WordCase(newCustomer.last_name);

    NameValidation([newCustomer.first_name, newCustomer.last_name]);
    NumberValidation(newCustomer.contact_number);

    return await createCustomerRepo(newCustomer);
  } catch (err: any) {
    throw new Error(
      err.sqlMessage || err.message || 'Something went wrong, Try Again later.'
    );
  }
}
