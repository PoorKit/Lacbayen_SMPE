import { Warehouse } from "../model/warehouseModel";

import { createWarehouseRepo, getAllWarehousesRepo, getSingleWarehouseRepo } from "../repository/warehouseRepository";
import { ContainsNoSpecialCharacters, WordCase } from "../utils/inputValidation";

// SELECT (GET ALL)
export async function getAllWarehousesService() {
    return await getAllWarehousesRepo();
}

// SELECT (GET)
export async function getSingleWarehouseService(WarehouseID: string) {
    try{
        ContainsNoSpecialCharacters(WarehouseID);
        return await getSingleWarehouseRepo(WarehouseID);
    }catch (err: any) {
        throw new Error(err.sqlMessage || err.message || "Something went wrong, Try Again later.")
    }
}

// INSERT (POST)
export async function createWarehouseService(WarehouseParams: Warehouse) {
    try {
        WarehouseParams.name = WordCase(WarehouseParams.name);
        return await createWarehouseRepo(WarehouseParams);
    } catch (err: any) {
        throw new Error(err.sqlMessage || err.message || "Something went wrong, Try Again later.")
    }
}

// UPDATE (PUT)
export async function updateWarehouseService(WarehouseParams: Warehouse) {
}

// DELETE (DELETE)
export async function deleteWarehouseService(WarehouseParams: Warehouse) {
}
