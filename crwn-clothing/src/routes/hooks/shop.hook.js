const { useCallback } = require("react");
const { useNavigate } = require("react-router-dom");

export const useNavigateToCategory = (title, shouldnavigate) => {
    const navigate = useNavigate();

    const navigateToCategory = useCallback(() => {
        if (shouldnavigate) {
            navigate(`/shop/${title}`);
        }
    } , [navigate, shouldnavigate, title]);

    return navigateToCategory;
} 