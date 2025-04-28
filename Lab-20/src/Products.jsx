import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductCRUD = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 50000, category: "Electronics", brand: "Dell", stock: 10 },
    { id: 2, name: "Phone", price: 20000, category: "Electronics", brand: "Samsung", stock: 15 },
    { id: 3, name: "Tablet", price: 30000, category: "Electronics", brand: "Apple", stock: 5 },
    { id: 4, name: "Smartwatch", price: 10000, category: "Electronics", brand: "Fitbit", stock: 20 },
    { id: 5, name: "Headphones", price: 5000, category: "Accessories", brand: "Sony", stock: 25 }
  ]);

  const [newProduct, setNewProduct] = useState({ name: "", price: "", category: "", brand: "", stock: "" });
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddEdit = () => {
    if (editId === null) {
      const newProductWithId = { ...newProduct, id: products.length + 1 };
      setProducts([...products, newProductWithId]);
    } else {
      setProducts(
        products.map((product) =>
          product.id === editId ? { ...product, ...newProduct } : product
        )
      );
    }
    setNewProduct({ name: "", price: "", category: "", brand: "", stock: "" });
    setEditId(null);
  };

  const handleEdit = (id) => {
    const productToEdit = products.find((product) => product.id === id);
    setNewProduct({ ...productToEdit });
    setEditId(id);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Product List</h2>
      
      {/* Product Form */}
      <div className="mb-4">
        <input type="text" className="form-control mb-2" placeholder="Name" name="name" value={newProduct.name} onChange={handleChange} />
        <input type="number" className="form-control mb-2" placeholder="Price" name="price" value={newProduct.price} onChange={handleChange} />
        <input type="text" className="form-control mb-2" placeholder="Category" name="category" value={newProduct.category} onChange={handleChange} />
        <input type="text" className="form-control mb-2" placeholder="Brand" name="brand" value={newProduct.brand} onChange={handleChange} />
        <input type="number" className="form-control mb-2" placeholder="Stock" name="stock" value={newProduct.stock} onChange={handleChange} />
        <button className="btn btn-primary" onClick={handleAddEdit}>{editId !== null ? "Edit" : "Add"} Product</button>
      </div>

      {/* Display Products */}
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Brand</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>₹{product.price}</td>
                <td>{product.category}</td>
                <td>{product.brand}</td>
                <td>{product.stock}</td>
                <td>
                  <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(product.id)}>Edit</button>
                  <button className="btn btn-danger btn-sm" onClick={() => deleteProduct(product.id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">No products available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductCRUD;
