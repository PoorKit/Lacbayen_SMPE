import React from 'react';
import CustomerForm from './forms/customerForm';
import WarehouseForm from './forms/warehouseForm';
import WarehouseCapacityForm from './forms/warehouseCapacityForm';
import PackageForm from './forms/packageForm';
import TypeForm from './forms/packageTypeForm';
import RetrieveForm from './forms/retrieveForm';

const ButtonsGroup = ({ activeDataSet }) => {
  return (
    <div>
      {activeDataSet === 'Customer' && <CustomerForm />}
      {activeDataSet === 'Packages' && (<div className='flex space-x-2 py-2'><CustomerForm/><PackageForm/><RetrieveForm/></div>)}
      {activeDataSet === 'Warehouse' && (<div className='flex space-x-2 py-2'><WarehouseForm/><WarehouseCapacityForm/><TypeForm/></div>)}
    </div>
  );
};

export default ButtonsGroup;
