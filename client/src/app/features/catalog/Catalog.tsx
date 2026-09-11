import ProductList from "./ProductList";
import { useFetchProductsQuery } from "./catalogApi";

export default function Catalog() {
  const { data, isLoading } = useFetchProductsQuery();

  if (isLoading || !data) return <div>Loading...</div>;
  if (isLoading) return <div>Loading...</div>;

  if (!data) return <div>No products found</div>;

  return (
    <>
      <ProductList products={data} />
    </>
  );
}