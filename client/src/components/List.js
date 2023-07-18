// page pagination referenced from: https://www.youtube.com/watch?v=ja4yIn2pCzw

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './List.css'
import { 
    clear, sortByName, sortByPrice, sortByYear, fetchItems } from '../actions';
import { Button } from './styles/Button.styled';
import { ButtonContainer } from './styles/ButtonContainer.styled';
import Card from './Card';

export default function List() {
    // const [page, setPage] = useState(1)
    // const [pageCount, setPageCount] = useState(0)

    const list = useSelector(state => state.list)
    const dispatch = useDispatch()
    const clearList = () => {
        dispatch(clear())
    }

    const sortListByName = () => {
        dispatch(sortByName())
        // dispatch(sortByName(page))
    }

    const sortListByPrice = () => {
        dispatch(sortByPrice())
        // dispatch(sortByName(page))
    }

    const sortListByYear = () => {
        dispatch(sortByYear())
        // dispatch(sortByName(page))
    }

    useEffect(() => {
        dispatch(fetchItems())
        // dispatch(sortByName(page))
    }, [])

    // const handlePrevious = () => {
    //     console.log('page --')
    //     setPage((p) => {
    //         if (p === 1) return p
    //         return p-1
    //     })
    // }

    // const handleNext = () => {
    //     console.log('page ++')
    //     setPage((p) => {
    //         if (p === pageCount) return p
    //         return p+1
    //     })
    // }

    // useEffect(() => {
    //     if (list) {
    //         setPageCount(list.pagination.pageCount)
    //         console.log(list.pagination.pageCount)
    //     }
    // }, [list])

    return (
        <div className='album-list'>
            
            <h2 className='list-header'>Seventeen Album List</h2>
            <h4 className='list-header'>Current # of the albums: {list.length}</h4>
            <ButtonContainer>
                {/* <Button type="button" onClick={clearList}>Clear List</Button> */}
                <Button type="button" onClick={sortListByName}>Sort List By Name</Button>
                <Button type="button" onClick={sortListByPrice}>Sort List By Price</Button>
                <Button type="button" onClick={sortListByYear}>Sort List By Year</Button>
            </ButtonContainer>
            <br></br>
            
            <div style={{display:"flex", justifyContent: "center", flexWrap: "wrap"}}>
            {list.map((item) => (
                <Card key={item._id} item={item} />
                ))}
            </div>
            {/* <footer>
                <ButtonContainer>
                    <Button disabled={page === 1} onClick={handlePrevious}>
                        Previous
                    </Button>
                    <Button disabled={page === pageCount} onClick={handleNext}>
                        Next
                    </Button>
                </ButtonContainer>
            </footer> */}
        </div>
      );
}