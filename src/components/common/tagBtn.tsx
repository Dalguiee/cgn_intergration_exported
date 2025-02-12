const pcTagTypes = [
  {
    id: 0,
    text: '이벤트',
    className:
      'bg-secondary-blue text-white-solid flex justify-center items-center rounded-4',
  },
  {
    id: 1,
    text: '진행중',
    className:
      'bg-primary-500 text-white-solid flex justify-center items-center rounded-4',
  },
  {
    id: 2,
    text: '캠페인',
    className:
      'bg-secondary-brown text-white-solid flex justify-center items-center rounded-4',
  },
  {
    id: 3,
    text: '종료',
    className:
      'bg-grey-900 text-grey-300 flex justify-center items-center rounded-4',
  },
  {
    id: 4,
    text: '선교사기도',
    className:
      'bg-secondary-brown text-white-solid flex justify-center items-center rounded-4',
  },
  {
    id: 5,
    text: '선교자',
    className:
      'bg-secondary-pink text-white-solid flex justify-center items-center rounded-4',
  },
  {
    id: 6,
    text: 'CGN',
    className:
      'bg-primary-500 text-white-solid flex justify-center items-center rounded-4',
  },
  {
    id: 7,
    text: '진행중',
    className:
      'bg-primary-500 text-white-solid flex justify-center items-center rounded-4',
  },
  {
    id: 8,
    text: '종료',
    className:
      'bg-primary-500 text-white-solid flex justify-center items-center rounded-4',
  },
];

const tagMode = [
  {
    type: 'mode1',
    className: 'w-62 h-32 text-bold14',
  },
  {
    type: 'mode2',
    className: 'w-72 h-32 text-bold14',
  },
  {
    type: 'mode3',
    className: 'w-88 h-48 text-bold18',
  },
];

// 뱃지 버튼
const TagIcon = ({ text = '', mode = 'mode1' }) => {
  const tagFind = pcTagTypes.find(tag => tag.text === text);
  const modeFind = tagMode.find(obj => obj.type === mode);

  return (
    <>
      <span
        className={`tag-btn ${modeFind && modeFind.className} ${tagFind && tagFind.className} flex items-center justify-center`}
      >
        {text && text}
      </span>
    </>
  );
};

export default TagIcon;
