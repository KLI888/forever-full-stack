import React, { useState } from 'react';
import { assets } from '../assets/assets';
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Add = ({ token }) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);
  
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Foot Wear");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestseller", bestseller);
      formData.append("sizes", JSON.stringify(sizes));
      
      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const response = await axios.post(
        backendUrl + "/api/product/add", 
        formData, 
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        setName('');
        setDescription('');
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setPrice('');
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className='max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md'>
      <h2 className='text-xl font-semibold mb-4'>Add New Product</h2>
      <form onSubmit={onSubmitHandler} className='flex flex-col gap-4'>
        <div>
          <p className='font-medium mb-2'>Upload Images</p>
          <div className='grid grid-cols-2 sm:grid-cols-4 gap-2'>
            {[setImage1, setImage2, setImage3, setImage4].map((setImage, index) => (
              <label key={index} className='cursor-pointer'>
                <img
                  className='w-24 h-24 object-cover rounded-lg border border-gray-300'
                  src={!eval(`image${index + 1}`) ? assets.upload_area : URL.createObjectURL(eval(`image${index + 1}`))}
                  alt='Upload'
                />
                <input 
                  type='file' 
                  hidden 
                  onChange={(e) => setImage(e.target.files[0])} 
                />
              </label>
            ))}
          </div>
        </div>
        
        <div>
          <label className='font-medium'>Product Name</label>
          <input className='w-full p-2 border rounded' type='text' value={name} onChange={(e) => setName(e.target.value)} required/>
        </div>
        
        <div>
          <label className='font-medium'>Product Description</label>
          <textarea className='w-full p-2 border rounded' value={description} onChange={(e) => setDescription(e.target.value)} required/>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
          <div>
            <label className='font-medium'>Category</label>
            <select className='w-full p-2 border rounded' onChange={(e) => setCategory(e.target.value)}>
              <option value='Men'>Men</option>
              <option value='Women'>Women</option>
              <option value='Agriculture'>Agriculture</option>
              <option value='Vegetables'>Vegetables</option>
              <option value='Household Essentials'>Household Essentials</option>
              <option value='Furniture'>Furniture</option>
            </select>
          </div>

          <div>
            <label className='font-medium'>Sub Category</label>
            <select className='w-full p-2 border rounded' onChange={(e) => setSubCategory(e.target.value)}>
              <option value='Foot Wear'>Foot Wear</option>
              <option value='Cloths'>Cloths</option>
              <option value='Farming Tools'>Farming Tools</option>
              <option value='Vegetables'>Vegetables</option>
              <option value='Kitchen Tools'>Kitchen Tools</option>
            </select>
          </div>

          <div>
            <label className='font-medium'>Price</label>
            <input className='w-full p-2 border rounded' type='number' value={price} onChange={(e) => setPrice(e.target.value)} required/>
          </div>
        </div>

        <div>
          <p className='font-medium'>Select Quantity</p>
          <div className='flex gap-2'>
            {[1, 2, 5, 10, 15].map((qty) => (
              <div 
                key={qty} 
                className={`px-3 py-1 cursor-pointer rounded ${sizes.includes(qty) ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                onClick={() => setSizes(prev => prev.includes(qty) ? prev.filter(item => item !== qty) : [...prev, qty])}
              >
                {qty}
              </div>
            ))}
          </div>
        </div>

        <div className='flex items-center gap-2'>
          <input type='checkbox' id='bestseller' checked={bestseller} onChange={() => setBestseller(prev => !prev)} />
          <label htmlFor='bestseller' className='cursor-pointer'>Add to Bestseller</label>
        </div>

        <button type='submit' className='w-full sm:w-32 py-2 bg-black text-white rounded-md hover:bg-gray-800'>ADD</button>
      </form>
    </div>
  );
};

export default Add;
