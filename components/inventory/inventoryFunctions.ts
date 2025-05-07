import {
  addingElement,
  deletingElement,
} from "@/app/store/slices/inventorySlice";
import { ItemProps } from "@/app/store/slices/types";
import { useMemo, useState } from "react";
import { useDispatch } from "react-redux";

export const findNeededId = (item: ItemProps, locked: number[]): number => {
  if (item.id === undefined) item.id = 0;

  if (
    locked.includes(item.id) ||
    (item.size > 1 &&
      (locked.includes(item.id + 1) ||
        locked.includes(item.id + 5) ||
        locked.includes(item.id + 6)))
  ) {
    return findNeededId({ ...item, id: item.id + 1 }, locked);
  }

  return item.id;
};

export const calculatePositionedItems = (
  inventory: ItemProps[]
): (ItemProps & { finalId: number })[] => {
  const locked: Set<number> = new Set();
  const positioned: (ItemProps & { finalId: number })[] = [];

  inventory.forEach((item) => {
    let startId = item.id ?? 0;

    while (true) {
      const outOfBounds =
        item.size === 2 && (startId % 5 >= 4 || startId + 5 >= 45);

      const isOccupied =
        locked.has(startId) ||
        (item.size > 1 &&
          (locked.has(startId + 1) ||
            locked.has(startId + 5) ||
            locked.has(startId + 6)));

      if (!outOfBounds && !isOccupied) break;
      startId++;
    }

    locked.add(startId);
    if (item.size > 1) {
      locked.add(startId + 1);
      locked.add(startId + 5);
      locked.add(startId + 6);
    }

    positioned.push({ ...item, finalId: startId });
  });

  return positioned;
};

export const canPlaceItem = (
  targetId: number,
  size: number,
  positionedItems: (ItemProps & { finalId: number })[]
): boolean => {
  if (size === 2) {
    const isOutOfBounds = targetId % 5 >= 4 || targetId + 5 >= 45;
    if (isOutOfBounds) return false;

    const cells = [targetId, targetId + 1, targetId + 5, targetId + 6];
    return !positionedItems.some((item) => {
      const occupied = [item.finalId];
      if (item.size > 1) {
        occupied.push(item.finalId + 1, item.finalId + 5, item.finalId + 6);
      }
      return occupied.some((id) => cells.includes(id));
    });
  } else {
    return !positionedItems.some((item) => {
      const occupied = [item.finalId];
      if (item.size > 1) {
        occupied.push(item.finalId + 1, item.finalId + 5, item.finalId + 6);
      }
      return occupied.includes(targetId);
    });
  }
};
export const useInventoryDragAndDrop = (
  inventory: ItemProps[],
  positionedItems: (ItemProps & { finalId: number })[]
) => {
  const [draggedItem, setDraggedItem] = useState<ItemProps | null>(null);
  const [dragOver, setDragOver] = useState<number | null>(null);

  const positioned = useMemo(
    () => calculatePositionedItems(inventory),
    [inventory]
  );

  const handleDragStart = (e: React.DragEvent, item: ItemProps) => {
    setDraggedItem(item);
  };

  const handleDragOver = (e: React.DragEvent, targetId: number) => {
    e.preventDefault();
    if (
      draggedItem &&
      canPlaceItem(targetId, draggedItem.size, positionedItems)
    ) {
      setDragOver(targetId);
    } else {
      setDragOver(null);
    }
  };

  const handleDragLeave = () => {
    setDragOver(null);
  };

  const dispatch = useDispatch();

  const handleDrop = (e: React.DragEvent, targetId: number) => {
    e.preventDefault();
    if (
      !draggedItem ||
      !canPlaceItem(targetId, draggedItem.size, positionedItems)
    )
      return;

    // Проверка на наличие id у draggedItem перед удалением
    if (draggedItem.id !== undefined) {
      // Удаляем старый элемент и добавляем с новым id
      dispatch(deletingElement({ id: draggedItem.id }));
      dispatch(addingElement({ ...draggedItem, id: targetId }));
    }

    setDraggedItem(null);
    setDragOver(null);
  };

  return {
    draggedItem,
    dragOver,
    positioned,
    handleDragStart,
    handleDragOver,
    handleDragLeave,
    handleDrop,
  };
};
