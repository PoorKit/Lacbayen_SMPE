import { WarehouseTypeCapacity } from "../model/warehouseTypeCapacityModel";
import { getAllWarehouseTypeCapacityRepo, createWarehouseTypeCapacityRepo, getAvailableCapacityRepo } from "../repository/warehouseTypeCapacityRepository";
import { NumberCase } from "../utils/inputValidation";

// SELECT (GET ALL)
export async function getAllWarehouseTypeCapacityService() {
    return await getAllWarehouseTypeCapacityRepo();
}

// SELECT (GET)
export async function getSingleWarehouseTypeCapacityService(WarehouseID: string) {
    try {
      const warehouseDataWithCapacity = await getAvailableCapacityRepo(WarehouseID);
      return warehouseDataWithCapacity;
    } catch (error) {
      throw error;
    }
  }

// INSERT (POST)
export async function createWarehouseTypeCapacityService(WarehouseTypeCapacityParams: WarehouseTypeCapacity) {
    try {
        WarehouseTypeCapacityParams.capacity = NumberCase(WarehouseTypeCapacityParams.capacity);
        return await createWarehouseTypeCapacityRepo(WarehouseTypeCapacityParams);
    } catch (err: any) {
        throw new Error(err.sqlMessage || err.message || "Something went wrong, Try Again later.")
    }
}

// UPDATE (PUT)
export async function updateWarehouseTypeCapacityService(WarehouseTypeCapacityParams: WarehouseTypeCapacity) {
}

// DELETE (DELETE)
export async function deleteWarehouseTypeCapacityService(WarehouseTypeCapacityParams: WarehouseTypeCapacity) {
}
