import { useEffect } from "react";

const useDocumentTitle = (title: string) => {
    useEffect(() => {
        document.title = `Budget Manager - ${title}`
    }, [title]);
}

export default useDocumentTitle;