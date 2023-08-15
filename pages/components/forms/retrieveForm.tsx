import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { toast } from "react-toastify";

const RetrieveForm = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [packages, setPackages] = useState([]);
    const [selectedPackages, setSelectedPackages] = useState("");
    const [selectedTypes, setSelectedTypes] = useState("");
    const [selectedWarehouse, setSelectedWarehouse] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/Retrieve', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    package_id: selectedPackages,
                    warehouse_id: selectedWarehouse,
                    package_type_id: selectedTypes
                }),
              });
              if (response.ok) {
                const responseData = await response.json();
                toast.success(responseData.message);
                setModalIsOpen(false);
              } else {
                const responseData = await response.json();
                toast.error(responseData.error);
              }
        } catch (error) {
            toast.error(error);
        }
    };

    useEffect(() => {
        async function fetchPackageTypes() {
            try {
                const response = await fetch("/api/Packages");
                if (response.ok) {
                    const responseData = await response.json();
                    const filteredPackages = responseData.filter(packageElement => packageElement.retrievedAt === null);
                    setPackages(filteredPackages);
                } else {
                    console.error("Error fetching packages");
                }
            } catch (error) {
                console.error("Error fetching packages:", error);
            }
        }
        fetchPackageTypes();
    }, []);

    useEffect(()=> {
        if (selectedPackages) {
            // Find the selected package in the packages array
            const selectedPackage = packages.find(pkg => pkg.id === selectedPackages);
            if (selectedPackage) {
                setSelectedTypes(selectedPackage.package_type_id);
                setSelectedWarehouse(selectedPackage.warehouse_id);
            }
        }
    },[selectedPackages])

    return (
        <div>
            <button
                onClick={() => setModalIsOpen(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Retrieve Package
            </button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                contentLabel="Package Form Modal"
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
                <h2 className="text-2xl mb-4">Retrieve Form</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block">Package:</label>
                        <select
                            required
                            value={selectedPackages}
                            onChange={(e) =>
                                setSelectedPackages(e.target.value)
                            }
                            className="w-full p-2 border rounded"
                        >
                            <option value="">Select a package</option>
                            {packages.map((single_package) => (
                                <option key={single_package.id} value={single_package.id}>
                                    {single_package.id}
                                </option>
                            ))}
                        </select>
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

export default RetrieveForm;
