import { PackageType } from "../model/packageTypeModel";
import { createPackageTypeRepo, getAllPackageTypesRepo } from "../repository/packageTypeRepository";
import { WordCase } from "../utils/inputValidation";

// SELECT (GET ALL)
export async function getAllPackageTypesService() {
    return await getAllPackageTypesRepo();
}

// SELECT (GET)
export async function getSinglePackageTypeService() {
}

// INSERT (POST)
export async function createPackageTypeService(newPackageType: PackageType) {
    try{
        newPackageType.name = WordCase(newPackageType.name);
        return await createPackageTypeRepo(newPackageType);
    }catch (err: any) {
        throw new Error(err.sqlMessage || err.message || "Something went wrong, Try Again later.")
    }
}

// UPDATE (PUT)
export async function updatePackageTypeService() {
}

// DELETE (DELETE)
export async function deletePackageTypeService() {
}