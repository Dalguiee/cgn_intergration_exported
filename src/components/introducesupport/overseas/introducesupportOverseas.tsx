import React from 'react';
import BranchesCard from '@/components/introducesupport/overseas/branchesCard';

//  해외지사 후원 페이지
const IntroducesupportOverseas = () => {
  const branchesList = [
    {
      name: 'AMERICA',
      data: [
        { title: 'Account Number', detail: '8-310890' },
        { title: 'Account Holder', detail: 'CGN AMERICA' },
        { title: 'Name of Bank', detail: 'Bank of Hope City Center' },
        {
          title: 'Bank Address',
          detail: '3600 Wilshire Blvd Suite 100-A, Los Angeles, CA, 90010',
        },
        { title: 'Swift Code', detail: 'NARAUS6L090' },
      ],
      website: 'www.cgnfoundation.com',
      donate: 'url 기입',
    },
    {
      name: 'JAPAN',
      data: [{ title: 'Email', detail: 'japan.cgnfamily@gmail.com' }],
      website: 'japan.cgntv.net',
      donate: 'url 기입',
    },
    {
      name: 'INDONESIA',
      data: [
        { title: 'Account Number', detail: '1440-538-1211' },
        { title: 'Account Holder', detail: 'CGNTV Indonesia' },
        { title: 'Name of Bank', detail: 'KEB Hana Bank' },
        {
          title: 'Bank Address',
          detail: `Mangkuluhur City Tower One , Jl Jendral Gatot\nSubroto Kav. 1-3, Jakarta, 12930`,
        },
        { title: 'Swift Code', detail: 'HNBNIDJA' },
      ],
      website: 'www.cgnindonesia.com',
      donate: '',
    },
    {
      name: 'TAIWAN',
      data: [
        { title: 'Account Number', detail: '074-03-500489-4' },
        {
          title: 'Account Holder',
          detail: 'CGNTV CHINESE (社團法人中華基督環球福音網協會)',
        },
        {
          title: 'Name of Bank',
          detail: `CATHAY UNITED BANK,\nHUACHIANG BRANCH (國泰世華銀行(013)華江分行)`,
        },
        {
          title: 'Bank Address',
          detail: `No. 43, Zhuangjing Rd., Banqiao Dist.,\nNew Taipei City 220, Taiwan (R.O.C.), 22042`,
        },
        { title: 'Swift Code', detail: 'UWCBTWTP' },
      ],
      website: 'chinese.cgntv.net',
      donate: 'url 기입',
    },
    {
      name: 'THAILAND',
      data: [
        { title: 'Account Number', detail: '289-224424-4' },
        {
          title: 'Account Holder',
          detail: 'FOUNDATION CGNTV THAI',
        },
        {
          title: 'Name of Bank',
          detail: `Siam Commercial Bank PCL`,
        },
        {
          title: 'Bank Address',
          detail: `Unit Fl. 4 MBK, 444 Phayathai Rd, Pathumwan,\nBangkok 10330, Thailand`,
        },
        { title: 'Swift Code', detail: 'SICOTHBK' },
      ],
      website: 'cgnthai.net',
      donate: '',
    },
    {
      name: 'FRANCE',
      data: [
        {
          title: 'IBAN(ACCOUNT NUMBER)',
          detail: 'FR76 3000 4002 1000 0010 2030 816',
        },
        {
          title: 'RIB',
          detail: '30004 00210 00001020308 16',
        },
        {
          title: 'BIC(SWIFT)',
          detail: `BNPAFRPPXXX`,
        },
        {
          title: 'Name of Bank',
          detail: `BNP PARIBAS`,
        },
        {
          title: 'Bank Address',
          detail: '41 Rue de la Convention, Paris, 75015',
        },
      ],
      website: '',
      donate: '',
    },
  ];

  return (
    <div className='flex w-full flex-col items-center bg-primary-50 pb-160 max-lg:pb-46'>
      <div className='w-full max-w-1232 px-16'>
        <img
          src={`${import.meta.env.VITE_PUBLIC_URL}images/introducesupport/pc_oberseas_map.png`}
          alt=''
          className='w-full max-lg:hidden'
        />
        <img
          src={`${import.meta.env.VITE_PUBLIC_URL}images/introducesupport/mo_oberseas_map.png`}
          alt=''
          className='ml-[-16px] hidden min-w-[calc(100%+32px)] max-lg:block'
        />
        <div className='w-full pt-120 max-lg:pt-0'>
          <div className='mb-120 aspect-[1200/570] w-full max-w-1200 bg-[url(/public/images/introducesupport/pc_oberseas_bg.png)] bg-cover bg-no-repeat pe-30 pt-60 max-lg:mb-60 max-lg:bg-none max-lg:pe-0'>
            <div className='text-bold40 max-lg:text-bold24 mb-12'>
              Media Mission Together!
            </div>
            <div className='text-bold18 max-lg:text-bold16 mb-12 max-w-810'>
              CGN was established in 2005 to provide spiritual nourishment to
              missionaries spreading the Gospel in all corners of the world and
              the Korean diaspora. CGN has been able to uphold the purity of its
              mission by not allowing commercial advertising and relying solely
              on donations from the Christian community.
            </div>
            <div className='text-regular18 max-lg:text-regular14 max-w-940 text-gray-500'>
              CGN broadcasts daily 24/7 in 170 countries around the world. Its
              six overseas branches spread the Gospel and provide educational
              contents tailored to each region.
              <br />
              <br />
              Please join CGN’s media mission to spread His love and Word.
              <br />
              <br />
              Foreign residents may send their CGN donations to the following
              bank accounts.
            </div>
          </div>
          <div className='w-full max-w-1200'>
            <div className='text-bold32 max-lg:text-bold24 mb-24 w-full'>
              HQ
            </div>
            <BranchesCard
              name='KOREA'
              data={[
                { title: 'Account Number', detail: '573-910002-67804' },
                {
                  title: 'Account Holder',
                  detail: 'ONNURI MISSION FOUNDATION',
                },
                { title: 'Name of Bank', detail: 'KEB Hana Bank SEOBINGGO BR' },
                {
                  title: 'Bank Address',
                  detail: '352, Ichon-ro, Yongsan-gu, Seoul, Korea 04428',
                },
                { title: 'Bank Code', detail: 'KOEXKRSE' },
              ]}
              website='www.cgntv.net'
              donate='url 기입'
            />
            <div className='text-bold32 max-lg:text-bold24 mb-24 mt-60 w-full max-lg:mt-40'>
              BRANCHES
            </div>
            <div className='flex flex-wrap gap-60 max-lg:gap-16'>
              {branchesList.map((item, index) => {
                return (
                  <BranchesCard
                    key={index}
                    name={item.name}
                    data={item.data}
                    website={item.website}
                    donate={item.donate}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroducesupportOverseas;
