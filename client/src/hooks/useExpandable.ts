import { useState } from "react";

export const useExpandable = (initialState = false) => {
  const [isExpanded, setIsExpanded] = useState(initialState);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return { isExpanded, toggleExpand };
};
