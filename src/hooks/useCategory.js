import { useState, useEffect } from "react";
import qs from "query-string";

export default function useCategory() {
    const [category, setCategory] = useState("all");

    function changeCategory(category) {
        setCategory(category);
        window.history.pushState(
          { category },
          "",
          `${window.location.pathname}?${qs.stringify({ category })}`
        )
    }

    function manageCategory() {
        const { category } = qs.parse(window.location.search);
        const target = category == null ? "all" : category;
        setCategory(target);
    }

    useEffect(() => { // 뒤로가기시 카테고리 변경
        window.addEventListener('popstate', manageCategory);
        return () => {
          window.removeEventListener('popstate', manageCategory);
        }
    }, []);

    useEffect(() => {
        manageCategory();
    }, []);

    return [category, changeCategory];
};