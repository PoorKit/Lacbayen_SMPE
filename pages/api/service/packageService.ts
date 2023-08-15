import { Package } from '../model/packageModel';
import { createPackageRepo, getAllPackagesRepo, retrievePackageRepo } from '../repository/packageRepository';

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

export async function retrievePackageService({package_id, warehouse_id, package_type_id}) {
  try{
    return await retrievePackageRepo(package_id, warehouse_id, package_type_id);
  }catch(err: any){
    throw new Error(err.sqlMessage || err.message || "Something went wrong, Try Again later.")
  }
}
