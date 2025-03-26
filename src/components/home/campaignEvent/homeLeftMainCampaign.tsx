// 훅
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// 컴포넌트
import TagIcon from '@/components/common/tagIcon';

// 모션 변수
const fadeUpY = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
};

const HomeLeftMainCampaign = ({ firstItem }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={`hidden`}
      animate={`visible`}
      variants={fadeUpY}
      className={`flex h-full w-[59.42%] shrink-0 items-center justify-center max-lg:h-245 max-lg:w-full`}
    >
      <button
        data-under-dark-gradient
        onClick={() => {
          navigate(
            `/news/${firstItem?.category}/detail?articleId=${firstItem?.id}`
          );
        }}
        style={{
          filter: `opacity(0.9999)`,
        }}
        className={`relative flex h-full w-full flex-col items-start justify-between overflow-hidden rounded-16 px-24 pb-33 pt-24 max-lg:rounded-8 max-lg:px-16 max-lg:py-16`}
      >
        {firstItem?.tag?.map((tag, key) => {
          if (tag?.id === 1 || tag?.id === 3) {
            return (
              <TagIcon
                key={key}
                id={tag?.id}
                mode={'mode1'}
                className={`z-[1]`}
              />
            );
          }
        })}
        <div
          className={`absolute left-0 top-0 h-full w-full bg-cover bg-center bg-no-repeat hover:scale-110`}
          style={{
            backgroundImage: `url("${firstItem?.src}")`,
            transition: `0.8s`,
          }}
        ></div>
        <p
          className={`text-bold32 max-lg:text-bold16 z-10 ml-19 text-left text-white-solid max-lg:ml-0`}
        >
          {firstItem?.title}
        </p>
      </button>
    </motion.div>
  );
};
export default HomeLeftMainCampaign;
