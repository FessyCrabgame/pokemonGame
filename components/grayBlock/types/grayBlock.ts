export interface GrayBlockProps {
  white?: boolean;
  index?: number;
  isOver?: boolean;
  onDragOver?: (e: React.DragEvent, index: number) => void;
  onDrop?: (e: React.DragEvent, index: number) => void;
  onDragLeave?: () => void;
}
