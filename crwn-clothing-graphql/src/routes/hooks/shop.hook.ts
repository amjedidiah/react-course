import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const useNavigateToCategory = (
  title: string,
  shouldNavigate: boolean
) => {
  const navigate = useNavigate();
  return useCallback(() => {
    if (shouldNavigate) {
      navigate(`/shop/${title.toLowerCase()}`);
    }
  }, [navigate, shouldNavigate, title]);
};
