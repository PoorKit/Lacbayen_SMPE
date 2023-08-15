import { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
const DynamicDataTable = () => {
  const [activeDataSet, setActiveDataSet] = useState('Customer');

  const [dataSets, setDataSets] = useState({
    Customer: [],
    Packages: [],
    Warehouse: [],
  });

  const [columns, setColumns] = useState([]);

  const handleDataSetChange = (dataSetName) => {
    setActiveDataSet(dataSetName);
  };

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/${activeDataSet}`);
        const data = await response.json();
        setDataSets((prevDataSets) => ({
          ...prevDataSets,
          activeDataSet: data,
        }));

        // Infer columns from the first data item
        if (data.length > 0) {
          const inferredColumns = Object.keys(data[0]).map((key) => ({
            name: key,
            selector: key,
            sortable: true,
          }));
          setColumns(inferredColumns);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

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
        title={`${activeDataSet} Data`}
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
