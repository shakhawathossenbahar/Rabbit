import React from "react";

const ProductDetails = () => {
  const selectedProduct = {
    name: "Stylish Jacket",
    price: 123,
    originalPrice: 150,
    description: "This a stylish jacket perfect for any occasion",
    brand: "FashionBrand",
    material: "Leather",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Red", "Black"],
    images: [
      {
        url: "http://picsum.photos/500/500?random=1",
        altText: "Stylish Jacket 1",
      },
      {
        url: "http://picsum.photos/500/500?random=2",
        altText: "Stylish Jacket 2",
      },
    ],
  };

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row">
          {/* LEFT THUMBNAILS */}
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText}
                className="w-20 h-20 object-cover rounded-lg cursor-pointer border"
                draggable="false"
              />
            ))}
          </div>

          {/* MAIN IMAGE */}
          <div className="md:w-1/2">
            <div className="mb-4">
              <img
                src={selectedProduct.images[0].url}
                alt="Main Product"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>

          {/* MOBILE THUBNAIL */}
          <div className="md:hidden flex overscroll-x-scroll space-x-4 mb-4">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText}
                className="w-20 h-20 object-cover rounded-lg cursor-pointer border"
                draggable="false"
              />
            ))}
          </div>

          {/* RIGHT SIDE */}
          
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
