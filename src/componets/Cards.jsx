import { motion as Motion } from 'framer-motion';

const Cards = ({ style, text, image, containerRef }) => {
  return image && !text ? (
    <Motion.img
      className="absolute w-16"
      src={image}
      style={{ ...style, cursor: 'grab' }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
      whileHover={{ scale: 1.05 }}
      whileTap={{ cursor: 'grabbing' }}
    />
  ) : (
    <Motion.div
      className="absolute px-3 py-2 text-sm sm:text-base text-center rounded-full ring ring-gray-700 font-light bg-storm w-[12rem]"
      style={{ ...style, cursor: 'grab' }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
      whileHover={{ scale: 1.05 }}
      whileTap={{ cursor: 'grabbing' }}
    >
      {text}
    </Motion.div>
  );
};

export default Cards;
