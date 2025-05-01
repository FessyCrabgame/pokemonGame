"use client";

import { useState } from "react";

interface WrapperProps {
  selectedTags: string[];
  setSelectedTags: (tags: string[]) => void;
}

export const TagsList: React.FC<WrapperProps> = ({
  selectedTags,
  setSelectedTags,
}) => {
  const tagsList = ["tag 1", "tag2", "tag3"];
  const [dropDownMenu, setDropdownMenu] = useState(false);
  const handleRemoveTag = (tag: string) => {
    setSelectedTags(selectedTags.filter((el) => tag != el));
  };
  const handleSelectTag = (tag: string) => {
    setSelectedTags([...selectedTags, tag]);
    setDropdownMenu(false);
  };
  return (
    <div className="w-full border border-[#D9D9D9] p-1 rounded relative bg-white">
      <div
        onClick={() => setDropdownMenu(!dropDownMenu)}
        className="cursor-pointer flex flex-wrap gap-1 min-h-[32px] items-center"
      >
        {selectedTags.length === 0 && (
          <span className="text-gray-400">Выберите теги...</span>
        )}

        {selectedTags.map((tag) => (
          <div
            key={tag}
            className="bg-[#F0F0F0] rounded flex items-center text-sm py-1 px-2"
          >
            {tag}
            <span
              onClick={(e) => {
                e.stopPropagation();
                handleRemoveTag(tag);
              }}
              className="ml-2 cursor-pointer hover:text-red-500"
            >
              ×
            </span>
          </div>
        ))}
      </div>

      {dropDownMenu && (
        <ul className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded mt-1 z-10 shadow">
          {tagsList
            .filter((tag) => !selectedTags.includes(tag))
            .map((tag) => (
              <li
                key={tag}
                className="px-3 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleSelectTag(tag)}
              >
                {tag}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};
