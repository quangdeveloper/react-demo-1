import React, {Component, useState} from "react";
import Pagination from "react-js-pagination";



export default function PaginationCustom(){

    const [activePage, setActivePage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [totalItem, setTotalItem] = useState(200);
    const [pageRangeDisplay, setPageRangeDisplay] = useState(10);

    return(
        <div>
            <Pagination
                activePage={activePage}
                itemsCountPerPage={pageSize}
                totalItemsCount={totalItem}
                pageRangeDisplayed={pageRangeDisplay}
                onChange={setActivePage}
            />
        </div>

    )
}
