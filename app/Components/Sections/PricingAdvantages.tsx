// PricingBoxWithAdvantages.tsx
import React from 'react';
import FuturisticPriceBox from './Pricing';

const advantages = [
  { icon: '🚀', text: 'Launch faster with pre-built components' },
  { icon: '💻', text: 'Easily customizable with modern tools' },
  { icon: '📦', text: 'Reusable for multiple projects' },
  { icon: '🔒', text: 'Secure and reliable architecture' },
  { icon: '🌍', text: 'Global accessibility and performance' }
];

const PricingBoxWithAdvantages = () => (
    <div className='flex justify-center items-center '>
    <FuturisticPriceBox 
        title='Pro Plan' 
        price={99} 
        period='month' 
        advantages={advantages}
    />
    </div>
);

export default PricingBoxWithAdvantages;
