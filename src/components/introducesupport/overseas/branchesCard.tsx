import React from 'react';

const BranchesCard = props => {
  const { name, data, website, donate } = props;
  return (
    <div
      className={`relative w-[calc(50%-30px)] rounded-16 bg-white-solid pb-24 pl-32 pt-24 drop-shadow-[0_10px_20px_rgba(0,0,0,0.07)] ${donate ? 'pb-88' : ''} pe-24 max-lg:w-full`}
    >
      <img
        src={`${import.meta.env.VITE_PUBLIC_URL}images/donation/branches_card_bar.png`}
        alt=''
        className='absolute left-0 h-155 w-20 max-lg:w-14'
      />
      <div className='text-bold24 max-lg:text-bold18 mb-24'>{name}</div>
      {data?.map((item, index) => {
        return (
          <div className='flex max-lg:gap-8' key={index}>
            <div className='text-bold14 max-lg:text-bold14 w-120 shrink-0 max-lg:w-110'>
              {item.title}
            </div>
            <div className='text-regular16 max-lg:text-regular14 whitespace-pre-wrap text-gray-500'>
              {item.detail}
            </div>
          </div>
        );
      })}
      {website && (
        <div className='flex max-lg:gap-8'>
          <div className='text-bold14 max-lg:text-bold14 w-120 max-lg:w-110'>
            Website
          </div>
          <a
            href={`${website}`}
            className='text-regular16 max-lg:text-regular14 text-gray-500 underline underline-offset-2'
            target='_blank'
            rel='noopener noreferrer'
          >
            {website}
          </a>
        </div>
      )}
      {donate && (
        <a
          href={`https://${donate}`}
          target='_blank'
          rel='noopener noreferrer'
          className='text-bold14 max-lg:text-regular14 absolute bottom-24 left-32 flex h-40 w-94 items-center justify-center rounded-4 bg-gray-900 text-white-solid max-lg:h-32 max-lg:w-69'
        >
          Donate
        </a>
      )}
    </div>
  );
};

export default BranchesCard;
