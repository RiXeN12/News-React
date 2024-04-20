import { Button } from "@mui/material";
import React from "react";

const Pagination = ({TotalResult,postsPerPage,setCurrentPage}) => {
    let pages = [];
    console.log(TotalResult+ " " + postsPerPage+ " " + setCurrentPage);

    for (let i = 1; i < Math.ceil(TotalResult/postsPerPage); i++) {
        pages.push(i)
    }

    return (
        <div>
            {
                pages.map((page,index) => {
                    return <Button key={index} onClick={() => setCurrentPage(page)}>{page}</Button>
                })
            }
        </div>
    )
}

export default Pagination;