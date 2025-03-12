import React from 'react';

const Checkbox = props => {
  const { label, isChecked, setIsChecked, className = `` } = props;

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className={`flex select-none items-center`}>
      <input
        type='checkbox'
        className='hidden'
        checked={isChecked}
        onChange={handleChange}
      />
      <div
        className={`${className && className} flex h-32 w-32 cursor-pointer items-center justify-center rounded-4 border border-[black] bg-white-solid`}
      >
        {isChecked && (
          <img
            src={`${import.meta.env.VITE_PUBLIC_URL}images/icon/checkBox.svg`}
            alt=''
            className='h-24 w-24'
          />
        )}
      </div>
      {label && <div className='text-regular14 ml-8'>{label}</div>}
    </label>
  );
};

export default Checkbox;
