import React from "react";
import data from "./../products";
import Product from "./../components/Product";

function Home() {
  // Add validation for data
  if (!data || !Array.isArray(data)) {
    console.error("Invalid data:", data);
    return <div>Error: Products data is not available</div>;
  }

  return (
    <ul className="mx-auto container lg:p-8 mt-8 grid gap-8 sm:grid-cols-2 overflow-hidden lg:grid-cols-4">
      {data.map((product) => {
        // Add validation for each product
        if (!product || !product._id) {
          console.error("Invalid product:", product);
          return null;
        }

        return (
          <div key={product._id} className="p-3">
            <Product product={product} />
          </div>
        );
      })}
    </ul>
  );
}

export default Home;
