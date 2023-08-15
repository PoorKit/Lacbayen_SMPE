import React from 'react';
import CustomerForm from './forms/customerForm';
import WarehouseForm from './forms/warehouseForm';
import WarehouseCapacityForm from './forms/warehouseCapacityForm';

const ButtonsGroup = ({ activeDataSet }) => {
  return (
    <div>
      {activeDataSet === 'Customer' && <CustomerForm />}
      {activeDataSet === 'Warehouse' && (<div className='flex space-x-2 py-2'><WarehouseForm/><WarehouseCapacityForm/></div>)}
    </div>
  );
};

export default ButtonsGroup;
