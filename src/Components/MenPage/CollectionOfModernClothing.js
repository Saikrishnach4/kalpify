import React, { useState } from 'react';
import Sweatshirts from './Tabs/Sweatshirts';

const CollectionOfModernClothing = () => {
    const [activeTab, setActiveTab] = useState('Sweatshirts');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'T-Shirts':
                return <div>Content for T-Shirts</div>;
            case 'Hoodies':
                return <div>Content for Hoodies</div>;
            case 'Jackets':
                return <div>Content for Jackets</div>;
            case 'Sweatshirts':
                return <div className='grid grid-cols-3 gap-16'>
                    <Sweatshirts />
                    <Sweatshirts />
                    <Sweatshirts />
                    <Sweatshirts />
                    <Sweatshirts />
                    <Sweatshirts />
                    <Sweatshirts />
                    <Sweatshirts />
                    <Sweatshirts />
                </div>;
            default:
                return null;
        }
    };

    return (
        <div className='my-5'>
            <p className='text-center text-[30px] font-medium'>Huge Collection Of Modern Clothing</p>

            <div className='mt-5 font-medium text-[24px] grid grid-cols-4 mx-20 gap-5'>
                <button
                    className={`rounded-[19px] h-[70px] ${activeTab === 'T-Shirts' ? 'bg-[#6F6D6D] text-white' : 'bg-[#D9D9D9]'
                        }`}
                    onClick={() => handleTabClick('T-Shirts')}
                >
                    T-Shirts
                </button>
                <button
                    className={`rounded-[19px] h-[70px] ${activeTab === 'Hoodies' ? 'bg-[#6F6D6D] text-white' : 'bg-[#D9D9D9]'
                        }`}
                    onClick={() => handleTabClick('Hoodies')}
                >
                    Hoodies
                </button>
                <button
                    className={`rounded-[19px] h-[70px] ${activeTab === 'Jackets' ? 'bg-[#6F6D6D] text-white' : 'bg-[#D9D9D9]'
                        }`}
                    onClick={() => handleTabClick('Jackets')}
                >
                    Jackets
                </button>
                <button
                    className={`rounded-[19px] h-[70px] ${activeTab === 'Sweatshirts' ? 'bg-[#6F6D6D] text-white' : 'bg-[#D9D9D9]'
                        }`}
                    onClick={() => handleTabClick('Sweatshirts')}
                >
                    Sweatshirts
                </button>
            </div>

            <div className='my-12'>{renderTabContent()}</div>
        </div>
    );
};

export default CollectionOfModernClothing;
