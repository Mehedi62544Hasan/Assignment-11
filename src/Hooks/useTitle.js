import { useEffect } from "react"


const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Online Seller`;
    }, [title])
}

export default useTitle;