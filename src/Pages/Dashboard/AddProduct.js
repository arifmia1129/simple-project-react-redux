import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { postProduct } from '../../features/products/productsSlice';
import { addProducts } from '../../redux/actionCreators/productAction';

const AddProduct = () => {
    const dispatch = useDispatch();

    const handlePostProduct = () => {
        dispatch(postProduct({
            "_id": 1,
            "model": "AMD Ryzen 5 5600X Gaming PC",
            "image": "https://live.staticflickr.com/65535/52522584794_4a9898a992_o.jpg",
            "status": true,
            "brand": "amd",
            "keyFeature": [
                "Gigabyte B550M DS3H AM4 AMD Micro ATX Motherboard",
                "PNY GeForce RTX 3070 8GB UPRISING Dual Fan LHR GDDR6 Graphics Card",
                "AMD RYZEN 5 5600X PROCESSOR",
                "16GB 3200MHz DDR4 RAM+ 128GB M.2 PCIe SSD"
            ],
            "price": 128200,
            "rating": 3,
            "spec": [
                {
                    "processor": "AMD RYZEN 5 5600X PROCESSOR"
                },
                {
                    "motherboard": "Gigabyte B550M DS3H AM4 AMD Micro ATX Motherboard"
                },
                {
                    "ram": "Corsair Vengeance LPX 16GB DDR4 DRAM 3200MHz RAM"
                },
                {
                    "graphics": "PNY GeForce RTX 3070 8GB UPRISING Dual Fan LHR GDDR6 Graphics Card"
                },
                {
                    "storage": "Team MP33 128GB M.2 PCIe SSD Toshiba P300 1TB Desktop PC Internal Hard Drive"
                },
                {
                    "casing": "Antec NX420 Mid Tower ARGB Gaming Case"
                },
                {
                    "psu": "Antec CUPRUM STRIKE CSK 650W 80 Plus Bronze Power Supply"
                },
                {
                    "cooler": "Gamdias Boreas M1-610 ARGB CPU Cooler"
                }
            ]
        }))
    }

    return (
        <div>
            <h1>This is add product route</h1>
            <button className='border' onClick={handlePostProduct}>Add Product</button>
        </div>
    );
};

export default AddProduct;