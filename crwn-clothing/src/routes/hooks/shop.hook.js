const { useCallback } = require("react");
const { useNavigate } = require("react-router-dom");

export const useNavigateToCategory = (title, shouldNavigate) => {
  const navigate = useNavigate();

  const navigateToCategory = useCallback(() => {
    if (shouldNavigate) {
      navigate(`/shop/${title}`);
    }
  }, [navigate, shouldNavigate, title]);

  return navigateToCategory;
};
