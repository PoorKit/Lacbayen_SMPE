import { Package } from '../model/packageModel';
import { createPackageRepo, getAllPackagesRepo } from '../repository/packageRepository';

export async function getAllPackagesService() {
  return await getAllPackagesRepo();
}

export async function createPackageService(newPackage: Package) {
  try{
    return await createPackageRepo(newPackage);
  }catch (err: any) {
    throw new Error(err.sqlMessage || err.message || "Something went wrong, Try Again later.")
}
}
