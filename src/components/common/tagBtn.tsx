// 각 컨텐츠의 항목에 해당하는 버튼의 스타일 모음 대조를 담당합니다.
// 목업데이터의 tag 항목에서 id를 props로 받고 자동으로 크기, 색, 텍스트를 주입합니다.

const pcTagTypes = [
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
    text: '선교지',
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
    text: '이벤트',
    className:
      'bg-secondary-blue text-white-solid flex justify-center items-center rounded-4',
  },
  {
    id: 9,
    text: '해외지사',
    className:
      'bg-secondary-pink text-white-solid flex justify-center items-center rounded-4',
  },
  {
    id: 10,
    text: '기타',
    className:
      'bg-grey-200 text-white-solid flex justify-center items-center rounded-4',
  },
  {
    id: 11,
    text: '후원',
    className:
      'bg-secondary-pink text-white-solid flex justify-center items-center rounded-4',
  },
  {
    id: 12,
    text: '후원영상',
    className:
      'bg-secondary-pink text-white-solid flex justify-center items-center rounded-4',
  },
];

const tagMode = [
  {
    mode: 'mode1',
    className: 'w-62 h-32 text-bold14',
  },
  {
    mode: 'mode2',
    className: 'w-72 h-32 text-bold14',
  },
  {
    mode: 'mode3',
    className: 'w-88 h-48 text-bold18',
  },
];

// 뱃지 버튼
const TagIcon = ({ id = 1, text = '', mode = 'mode1' }) => {
  const tagFind = pcTagTypes.find(tag => tag.id === id);
  const modeFind = tagMode.find(obj => obj.mode === mode);

  return (
    <>
      <span
        className={`tag-btn ${modeFind && modeFind.className} ${tagFind && tagFind.className} flex items-center justify-center`}
      >
        {!text.length ? text : tagFind.text}
      </span>
    </>
  );
};

export default TagIcon;
