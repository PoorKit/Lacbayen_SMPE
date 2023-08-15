import { WarehouseTypeCapacity } from "../model/warehouseTypeCapacityModel";
import { getAllWarehouseTypeCapacityRepo, createWarehouseTypeCapacityRepo, getWarehouseData, getPackagesData } from "../repository/warehouseTypeCapacityRepository";
import { NumberCase } from "../utils/inputValidation";

// SELECT (GET ALL)
export async function getAllWarehouseTypeCapacityService() {
    return await getAllWarehouseTypeCapacityRepo();
}

// SELECT (GET)
export async function getSingleWarehouseTypeCapacityService(WarehouseID: string) {
    try {
      const warehouseResult: any = await getWarehouseData(WarehouseID);
      const packagesResult: any = await getPackagesData(WarehouseID);
  
      // Calculate available_capacity
      const warehouseDataWithCapacity = warehouseResult.map((warehouseRow) => {
        const matchingPackages = packagesResult.filter(
          (packageRow) => packageRow.package_type_id === warehouseRow.package_type_id
        );
  
        let availableCapacity = warehouseRow.total_capacity;
  
        matchingPackages.forEach((packageRow) => {
          if (packageRow.retrievedAt === null) {
            availableCapacity--;
          }
        });
  
        return {
          ...warehouseRow,
          available_capacity: availableCapacity,
        };
      });
  
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
