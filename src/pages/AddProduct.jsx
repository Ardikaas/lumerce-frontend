// import React, { useState } from "react";
import Footer from "../components/Footer";
import Form from "../components/FormProduct";
import Header from "../components/Header";

const CreateProduct = () => {
  // const [product, setProduct] = useState({
  //   name: "",
  //   overview: "",
  //   detail: "",
  //   category: "",
  //   image: "",
  //   quantity: "",
  //   price: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setProduct((prevProduct) => ({
  //     ...prevProduct,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch("https://gjq3q54r-8080.asse.devtunnels.ms/api/products", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(product),
  //     });

  //     if (response.ok) {
  //       console.log("Product created successfully");
  //       // Lakukan sesuatu setelah produk berhasil dibuat, seperti mengosongkan formulir atau menavigasi ke halaman lain
  //     } else {
  //       const responseBody = await response.text();
  //       console.error("Response body:", responseBody);
  //       console.error("Failed to create product");
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };
  const navTit = "Add Product";
  return (
    <div>
      <Header navTit={navTit}/>
      <Form />
      <Footer />
    </div>
  );
};

export default CreateProduct;

// <div className="form-container">
//   <form onSubmit={handleSubmit}>
//     <input type="text" name="name" value={product.name} onChange={handleChange} />
//     <textarea name="overview" value={product.overview} onChange={handleChange} />
//     <input type="text" name="category" value={product.category} onChange={handleChange} />
//     <textarea name="detail" value={product.detail} onChange={handleChange} />
//     <input type="text" name="image" value={product.image} onChange={handleChange} />
//     <input type="number" name="quantity" value={product.quantity} onChange={handleChange} />
//     <input type="number" name="price" value={product.price} onChange={handleChange} />
//     <button type="submit">Create Product</button>
//   </form>
// </div>