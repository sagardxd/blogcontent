import { createContext, useState } from "react";
import baseUrl from "../baseUrl"


export const AppContext = createContext(); 

export function AppContextProvider({children}){
    
    const[loading, setLoading] = useState(false);
    const[page, setPage] = useState(1);
    const[totalPages, setTotalPages] = useState(null);
    const[posts, setPosts] = useState([]);

async function fetchBlogsPost(page = 1){
    setLoading(true);
    let url = `${baseUrl}?page=${page}`;

    try{
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);
            setPage(data.page);
            setTotalPages(data.totalPages);
            setPosts(data.posts);
    }
    catch(error){
            console.log("Error in fetching data");
            setPage(1);
            setPosts([]);
            setTotalPages(null);
    }
    setLoading(false);
}

function handlePageChange(page){
    setPage(page);
    fetchBlogsPost(page);
}
    

    const value = {
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        posts,
        setPosts,
        fetchBlogsPost,
        handlePageChange
    };

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}
