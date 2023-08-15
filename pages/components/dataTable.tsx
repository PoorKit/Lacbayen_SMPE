import { useState } from 'react';
import DataTable from 'react-data-table-component';
const DynamicDataTable = () => {
  const [activeDataSet, setActiveDataSet] = useState('Customer');

  const dataSets = {
    Customer: [], // Your customer data array
    Packages: [], // Your packages data array
    Warehouse: [], // Your warehouse data array
  };

  const columns = [];

  const handleDataSetChange = (dataSetName) => {
    setActiveDataSet(dataSetName);
  };
  return (
    <>
      <div className="flex space-x-4">
        {Object.keys(dataSets).map((dataSetName) => (
          <button
            key={dataSetName}
            onClick={() => handleDataSetChange(dataSetName)}
            className={`bg-blue-500 text-white px-4 py-2 rounded ${
              activeDataSet === dataSetName ? 'bg-blue-600' : ''
            }`}
          >
            {dataSetName}
          </button>
        ))}
      </div>
      <DataTable
        data={dataSets[activeDataSet]}
        columns={columns}
        pagination
        highlightOnHover
        striped
      />
    </>
  );
};

export default DynamicDataTable;
