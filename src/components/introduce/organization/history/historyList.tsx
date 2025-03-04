// 훅
import HTMLReactParser from 'html-react-parser';
import React from 'react';

const HistoryList = ({
  selectedDataIdx,
  setSelectedDataIdx,
  historyDataYears,
  historyData,
}) => {
  return (
    <div className={`flex w-full items-start justify-start`}>
      <div className={`h-fit w-full max-w-181`}>
        <div className={`flex flex-col items-end justify-start`}>
          {historyDataYears?.map((item, key) => (
            <button
              onClick={() => {
                setSelectedDataIdx(item?.id);
              }}
            >
              <p
                className={`text-regular78 ${selectedDataIdx === item?.id ? 'text-grey-900' : 'text-grey-200'} flex items-center justify-end`}
                key={key}
              >
                <span
                  className={`${selectedDataIdx === item?.id ? 'block' : 'hidden'}`}
                >
                  {item?.frontNum}
                </span>
                {item?.year}
              </p>
            </button>
          ))}
        </div>
      </div>
      <div
        className={`ml-240 flex w-full flex-col items-start justify-start gap-24 px-66 pt-15`}
      >
        {historyData?.[selectedDataIdx]?.map((item, key) => (
          <div className={`flex items-start justify-start`} key={key}>
            <p
              className={`text-bold16 flex w-88 items-center justify-start text-grey-500`}
            >
              <span className={`text-bold24 text-grey-900`}>{item?.time}</span>
              월
            </p>
            <p
              className={`text-regular18 flex items-center justify-start text-grey-500`}
            >
              {HTMLReactParser(item?.text)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryList;
