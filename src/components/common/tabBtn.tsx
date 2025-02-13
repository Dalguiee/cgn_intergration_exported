import { tidingsMockup } from '@/db/mockup';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const TabBtn = ({ category, setData }) => {
  const [highlight, setHighlight] = useState('');

  const filtering = selected => {
    setHighlight(selected.id);
    setData(
      tidingsMockup.filter(item => {
        return item.tag.some(obj => obj.text === selected.type);
      })
    );
  };

  const location = useLocation();
  const paramsSearch = new URLSearchParams(location.search);
  const paramsData = Object.fromEntries(paramsSearch);
  console.log(paramsData);

  return (
    <section className={`flex w-full items-center justify-center gap-8`}>
      <button
        onClick={() => {
          setHighlight('');
          setData(tidingsMockup);
        }}
        className={`${highlight === '' ? 'border-primary-400 text-primary-500' : ''} text-regular16 h-48 w-120 rounded-999 border-1 border-grey-200 text-grey-300`}
      >
        전체
      </button>

      {category.map(item => (
        <button
          onClick={() => {
            filtering(item);
          }}
          key={item.id}
          className={`${item.id == highlight ? 'border-primary-400 text-primary-500' : ''} text-regular16 h-48 w-120 rounded-999 border-1 border-grey-200 text-grey-300`}
        >
          {item.type}
        </button>
      ))}
    </section>
  );
};

export default TabBtn;
