import { Box } from "@chakra-ui/layout";
import { motion } from "framer-motion";
import { FC } from "react";
import { useDrag } from "react-dnd";
interface ColorItemProps {
  item: IItem;
  type: string;
  index: number;
  onItemDrag: (item: { color: string; id: string; type: string }) => void;
}

const ColorItem: FC<ColorItemProps> = ({ item, type, index, onItemDrag }) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: type,
    item: () => ({ ...item }),
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();

      if (item && dropResult && index === 0) {
        console.log(dropResult);

        onItemDrag({ ...item, type: type });
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  return (
    <Box
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, height: 0 }}
      as={motion.div}
      ref={dragRef}
      boxSize="100px"
      bg={item.color}
      border="1px solid #ccc"
      opacity={isDragging ? 0.5 : 1}
    />
  );
};
export default ColorItem;
