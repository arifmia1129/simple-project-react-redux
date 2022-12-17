import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addProducts } from '../../redux/actionCreators/productAction';

const AddProduct = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(addProducts({
            "_id": 9,
            "model": "AMD Ryzen 7 5800X3D Gaming PC",
            "image": "https://live.staticflickr.com/65535/52521844332_5f738162d8_o.jpg",
            "status": true,
            "brand": "amd",
            "keyFeature": [
                "AMD Ryzen 7 5800X3D Processor",
                "ASROCK B550 STEEL LEGEND AMD B550 Chipset Motherboard",
                "32GB DDR4 RAM + 500GB PCIe 3.0 NVMe SSD",
                "Colorful GeForce RTX 4090 NB EX-V 24GB GDDR6X Graphics Card"
            ],
            "price": 399999,
            "rating": 3,
            "spec": [
                {
                    "processor": "AMD Ryzen 7 5800X3D Processor"
                },
                {
                    "motherboard": "ASRock B550 Steel Legend DDR4 AMD AM4 ATX Motherboard"
                },
                {
                    "ram": "Team T-Force Night Hawk RGB 8GB (KIT) 3200MHz DDR4 RAM (4 UNIT)"
                },
                {
                    "graphics": "Colorful GeForce RTX 4090 NB EX-V 24GB GDDR6X Graphics Card"
                },
                {
                    "storage": "Samsung 980 Pro 500GB PCIe 4.0 M.2 NVMe SSD"
                },
                {
                    "casing": "Antec TORQUE Black + Red Aluminum ATX Mid Tower Gaming Casing"
                },
                {
                    "psu": "Antec HCG-750 Gold Series 750W Full Modular Power Supply"
                },
                {
                    "cooler": "Antec Prizm X 120 ARGB 3+C Cooling Fan"
                }
            ]
        }))
    }, [dispatch])
    return (
        <div>
            <h1>This is add product route</h1>
        </div>
    );
};

export default AddProduct;