import PeopleItem from "./PeopleItem";
import { motion } from "framer-motion";

const PeopleList = ({ peoples }) => {
  return (
    <motion.ul
      variants={{
        hidden: { y: 10, opacity: 0.5 },
        visible: {
          y: 0,
          opacity: 1,
          transition: { staggerChildren: 0.05 },
        },
      }}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
    >
      {peoples.results.map((people) => (
        <motion.li
          variants={{
            hidden: { y: 10, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
          key={people.id}
        >
          <PeopleItem people={people} />
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default PeopleList;
