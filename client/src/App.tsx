import { useEffect, useState } from 'react';

function App() {

  const [products, setProducts] = useState<{ name: string; price: number }[]>([]);

  useEffect(() => {
    fetch("https://localhost:5001/api/products")
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  const addProduct = () => {
    setProducts(prevState => [
      ...prevState,
      {
        name: "Product" + (prevState.length + 1),
        price: prevState.length * 100 + 100
      }
    ]);
  };

  return (
    <div>
      <h1 style={{ color: "red" }}>Re-store</h1>

      <ul>
        {products.map(item => (
          <li key={item.name}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>

      <button onClick={addProduct}>
        Add Product
      </button>
    </div>
  );
}

export default App;







// import { useEffect, useState } from 'react'
  

// function App() {
//   const [products, setProducts] = useState<{name: string, price: number}[]>([]);

//   useEffect(() => {
//     fetch("https://localhost:5001/api/products")
//       .then(response => response.json())
//       .then(data => setProducts(data))
//   }, []);
// }
   

//   const addProduct = () => {
//     setProducts(prevState => [...prevState, {name: 'Product' + prevState.length+1,
//       price: prevState.length * 100 + 100}])
//   }

//   return (
  
//     <div>
//        <h1 style={{color: 'red'}} >Re-store</h1>
    
//       <ul>  
//       {/* product variable is used to display the products in a list */}
//       {products.map(item => (
//         <li key={item.name}>{item.name} - {item.price}</li>
//       ))}
//       </ul>
//       <button onClick={addProduct}>Add Product</button>
  
//     </div>
//   )
// }

// export default App
// function setProducts(arg0: (prevState: any) => any[]) {
//   throw new Error('Function not implemented.');
// }

