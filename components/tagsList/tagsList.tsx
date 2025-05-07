"use client";

import { useState } from "react";
import styles from "./TagsList.module.css";

interface WrapperProps {
  selectedTags: string[];
  setSelectedTags: (tags: string[]) => void;
}

export const TagsList: React.FC<WrapperProps> = ({
  selectedTags,
  setSelectedTags,
}) => {
  const tagsList = ["Ягода", "Покеболл"];
  const [dropDownMenu, setDropdownMenu] = useState(false);

  const handleRemoveTag = (tag: string) => {
    setSelectedTags(selectedTags.filter((el) => tag != el));
  };

  const handleSelectTag = (tag: string) => {
    setSelectedTags([...selectedTags, tag]);
    setDropdownMenu(false);
  };

  return (
    <div className={styles.wrapper}>
      <div
        onClick={() => setDropdownMenu(!dropDownMenu)}
        className={styles.selectArea}
      >
        {selectedTags.length === 0 && (
          <span className={styles.placeholder}>Выберите теги...</span>
        )}

        {selectedTags.map((tag) => (
          <div key={tag} className={styles.tag}>
            {tag}
            <span
              onClick={(e) => {
                e.stopPropagation();
                handleRemoveTag(tag);
              }}
              className={styles.removeTag}
            >
              ×
            </span>
          </div>
        ))}
      </div>

      {dropDownMenu && (
        <ul className={styles.dropdown}>
          {tagsList
            .filter((tag) => !selectedTags.includes(tag))
            .map((tag) => (
              <li
                key={tag}
                className={styles.dropdownItem}
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
