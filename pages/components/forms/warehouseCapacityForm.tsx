import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { toast } from "react-toastify";

const WarehouseCapacityForm = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [warehouses, setWarehouses] = useState([]);
    const [selectedWarehouse, setSelectedWarehouse] = useState("");
    const [packageTypes, setPackageTypes] = useState([]);
    const [selectedPackageType, setSelectedPackageType] = useState("");
    const [capacity, setCapacity] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(selectedWarehouse, selectedPackageType, capacity);
            const warehouseTypeCapacityResponse = await fetch(
                "/api/WarehouseCapacity",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        warehouse_id: selectedWarehouse,
                        package_type_id: selectedPackageType,
                        capacity,
                    }),
                }
            );
            if (warehouseTypeCapacityResponse.ok) {
                const warehouseTypeCapacityResponseData = await warehouseTypeCapacityResponse.json();
                toast.success(warehouseTypeCapacityResponseData.message);
                setModalIsOpen(false);
            } else {
                const warehouseTypeCapacityResponseData =
                    await warehouseTypeCapacityResponse.json();
                toast.error(warehouseTypeCapacityResponseData.error);
            }
        } catch (error) {
            toast.error(error);
            // console.error('Error submitting warehouse data:', error);
        }
    };

    useEffect(() => {
        async function fetchPackageTypes() {
            try {
                const response = await fetch("/api/PackageTypes");
                if (response.ok) {
                    const responseData = await response.json();
                    setPackageTypes(responseData);
                } else {
                    console.error("Error fetching package types");
                }
            } catch (error) {
                console.error("Error fetching package types:", error);
            }
        }

        async function fetchWarehouses() {
            try {
                const response = await fetch("/api/Warehouse");
                if (response.ok) {
                    const responseData = await response.json();
                    setWarehouses(responseData);
                } else {
                    console.error("Error fetching warehouses");
                }
            } catch (error) {
                console.error("Error fetching warehouses:", error);
            }
        }

        fetchPackageTypes();
        fetchWarehouses();
    }, []);

    return (
        <div>
            <button
                onClick={() => setModalIsOpen(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Set Capacity
            </button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                contentLabel="Warehouse Form Modal"
                className="bg-white rounded-lg p-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-4 border-blue-300"
                style={{
                    overlay: {
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                    },
                    content: {
                        width: "80%",
                        maxWidth: "600px",
                    },
                }}
            >
                <h2 className="text-2xl mb-4">Warehouse Form</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block">Warehouse Name:</label>
                        <select
                            required
                            value={selectedWarehouse}
                            onChange={(e) => setSelectedWarehouse(e.target.value)}
                            className="w-full p-2 border rounded"
                        >
                            <option value="">Select a warehouse</option>
                            {warehouses.map((warehouse) => (
                                <option key={warehouse.warehouse_id} value={warehouse.warehouse_id}>
                                    {warehouse.warehouse_name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block">Package Type:</label>
                        <select
                            required
                            value={selectedPackageType}
                            onChange={(e) =>
                                setSelectedPackageType(e.target.value)
                            }
                            className="w-full p-2 border rounded"
                        >
                            <option value="">Select a package type</option>
                            {packageTypes.map((packageType) => (
                                <option
                                    key={packageType.id}
                                    value={packageType.id}
                                >
                                    {packageType.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block">Capacity:</label>
                        <input
                            type="number"
                            required
                            value={capacity}
                            onChange={(e) => setCapacity(e.target.value)}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    {/* Buttons */}
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                        >
                            Submit
                        </button>
                        <button
                            onClick={() => setModalIsOpen(false)}
                            className="bg-gray-500 text-white px-4 py-2 rounded ml-2"
                        >
                            Close
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default WarehouseCapacityForm;
