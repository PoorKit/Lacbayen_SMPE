export interface Package {
  id?: string;
  warehouse_id: string;
  package_type_id: string;
  customer_id: string;
  createdAt?: Date;
  storedAt?: Date;
  retrievedAt?: Date;
}
