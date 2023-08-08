import React, { useState } from 'react';

const ProductCategory = () => {
    const [activeCategory, setActiveCategory] = useState('T-Shirt');

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
    };

    return (
        <div className='w-[400px]'>
            <div>
                <p className='text-[#7C7979] text-[20px] font-semibold'>Category</p>
                <div className='mt-3 flex justify-between'>
                    <button
                        className={`text-[#7B7B7B] text-[20px] font-normal ${activeCategory === 'T-Shirt' ? 'font-semibold text-gray-900' : ''
                            }`}
                        onClick={() => handleCategoryClick('T-Shirt')}
                    >
                        T-Shirt
                    </button>
                    <button
                        className={`text-[#7B7B7B] text-[22px] font-normal ${activeCategory === 'Hoodies' ? 'font-semibold text-gray-900' : ''
                            }`}
                        onClick={() => handleCategoryClick('Hoodies')}
                    >
                        Hoodies
                    </button>
                    <button
                        className={`text-[#7B7B7B] text-[22px] font-normal ${activeCategory === 'Jackets' ? 'font-semibold text-gray-900' : ''
                            }`}
                        onClick={() => handleCategoryClick('Jackets')}
                    >
                        Jackets
                    </button>
                    <button
                        className={`text-[#7B7B7B] text-[22px] font-normal ${activeCategory === 'Sweatshirts' ? 'font-semibold text-gray-900' : ''
                            }`}
                        onClick={() => handleCategoryClick('Sweatshirts')}
                    >
                        Sweatshirts
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCategory;
