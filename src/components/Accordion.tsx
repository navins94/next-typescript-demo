import React, { useState } from 'react';

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleItemClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={index} className="my-4">
          <button
            className={`flex w-full justify-between text-lg uppercase lg:text-2xl ${
              activeIndex === index ? 'active' : ''
            }`}
            onClick={() => handleItemClick(index)}
          >
            <span className="w-3/4 text-left">{item.title}</span>
            <span className="accordion-item__icon">
              {activeIndex === index ? '-' : '+'}
            </span>
          </button>
          {activeIndex === index && (
            <div className="py-4">
              <p className="text-md opacity-70 lg:text-lg">{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
