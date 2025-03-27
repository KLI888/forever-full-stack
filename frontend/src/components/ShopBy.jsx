import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";


const categories = [

    { name: "Women", image: "https://m.media-amazon.com/images/I/51qzVsV2n2S._AC_UF1000,1000_QL80_.jpg" },
    { name: "Agriculture", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0hefZ6F4ucniuzFdzR6stCV2G-JK-iz1GiQ&s" },
    { name: "Vegetables", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXxglYDv9uXp5S8XJk2_EtSRqRmu9lrphGCg&s" },
    { name: "Furniture", image: "https://www.worldfurnitureonline.com/wp-content/uploads/2021/10/World-Furniture-Online_39.jpg" },
    { name: "Men", image: "https://cdn.shopify.com/s/files/1/0759/0890/7283/files/different_type_of_women_footwear.jpg?v=1709710499" },
    { name: "Household", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcRej2tkRE4N417I4l8--2nErljDKagw94_g&s" },
];

const ShopBy = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + bannerImages.length) % bannerImages.length
    );
  };

  return (
    <>
    <section className="py-10 px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center mb-6">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition">
              <img src={category.image} alt={category.name} className="w-32 h-32 object-cover rounded-full mb-4" />
              <h3 className="text-lg font-semibold">{category.name}</h3>
            </div>
          ))}
        </div>
    </section>
    </>
  );
};

export default ShopBy;
