import { Container, HStack } from "@chakra-ui/layout";
import { useState } from "react";
import Headers from "./components/Headers";
import ItemContainer from "./components/ItemContainer";
const App = () => {
  const cIds = ["container-1", "container-2", "container-3", "container-4"];

  const [containers, setContainers] = useState<IContainer[]>([
    {
      id: cIds[0],
      type: cIds[0],
      accept: cIds.filter((id) => id !== cIds[0]),
      items: [
        { id: "red-1", color: "red" },
        { id: "red-2", color: "red" },
        { id: "green-3", color: "green" },
      ],
    },
    {
      id: cIds[1],
      type: cIds[1],
      accept: cIds.filter((id) => id !== cIds[1]),
      items: [
        { id: "red-4", color: "red" },
        { id: "red-5", color: "yellow" },
        { id: "green-6", color: "green" },
      ],
    },
    {
      id: cIds[2],
      type: cIds[2],
      accept: cIds.filter((id) => id !== cIds[2]),
      items: [
        { id: "green-7", color: "green" },
        { id: "yellow-8", color: "yellow" },
        { id: "yellow-9", color: "yellow" },
      ],
    },
    {
      id: cIds[3],
      type: cIds[3],
      accept: cIds.filter((id) => id !== cIds[3]),
      items: [],
    },
  ]);
  const [containerId, setContainerId] = useState<string>();

  const getContainerId = (id: string) => {
    setContainerId(id);
  };

  const onItemDrag = (item: { type: string; color: string; id: string }) => {
    // const droppedToContainer = containers.find((container) => {
    //   return container.type === containerId;
    // });
    // const draggedFromContainer = containers.find((container) => {
    //   return container.type === item.type;
    // });

    setContainers((prev) => {
      return prev.map((container) => {
        if (container.id === item.type) {
          return {
            ...container,
            items: container.items.filter((data) => item.id !== data.id),
          };
        } else if (container.id === containerId) {
          return {
            ...container,
            items: [item, ...container.items],
          };
        } else {
          return container;
        }
      });
    });
  };

  return (
    <>
      <Container>
        <Headers heading="REACT DND MULTIPLE TARGET" />

        <HStack justify="center">
          {containers.map((container) => (
            <ItemContainer
              getContainerId={getContainerId}
              accept={container.accept}
              id={container.id}
              onItemDrag={onItemDrag}
              type={container.type}
              items={container.items}
              key={container.id}
            />
          ))}
        </HStack>
      </Container>
    </>
  );
};

export default App;
