import React from "react";

const products = [
  { 
    id: 1, 
    name: "Laptop", 
    category: "Electronics", 
    price: "$999", 
    description: "High-performance laptop for all your needs.", 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPFkaCYx497Dv5FiHBmF_8TF1IG2TlacaUxA&s"
  },
  { 
    id: 2, 
    name: "Smartphone", 
    category: "Electronics", 
    price: "$499", 
    description: "Latest smartphone ", 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaWoyne-zPSjY15kWab7rzDJndD5dSOEfE6w&s"
  },
  { 
    id: 3, 
    name: "Washing Machine", 
    category: "Appliances", 
    price: "$699", 
    description: "Energy-efficient washing machine for daily use.", 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj2sZouQFbd3HAyCS1CrfyCgpXe47MEVs_LQ&s"
  },
  { 
    id: 4, 
    name: "Headphones", 
    category: "Accessories", 
    price: "$199", 
    description: "Noise-canceling headphones with great sound quality.", 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5iC7JPD2ow9ktMqFH8vwiiArmJk5-nRtMl5GUOmuHEM5QaJcTI3vswOsMeTEroKH3ZeI&usqp=CAU"
  },
  { 
    id: 5, 
    name: "Electric Iron", 
    category: "Electronics", 
    price: "$299", 
    description: "Compact microwave oven with advanced cooking modes.", 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHkURM0KSNVx6NdCTQK-EdqPavJkbhXo4d8Q&s"
  }
];

function ProductTable() {
    return (
      <div className="container">
        <h1 className="text-center my-4"> Product</h1>
        <table className="table table-bordered table-striped text-center">
          <thead className="thead-dark">
            <tr>
              <th>Photo</th>
              <th>Name</th>
              <th>category</th>
              <th>price</th>
              <th>description</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td><img src={product.image} width="50" height="50" className="rounded-circle" /></td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default ProductTable;