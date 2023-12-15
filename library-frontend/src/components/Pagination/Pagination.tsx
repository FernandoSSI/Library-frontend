import './Pagination.css'

interface PaginationProps {
    totalPages: any,
    currentPage: number|undefined,
    changePage: any
}

export function Pagination({ totalPages, currentPage, changePage }: PaginationProps) {
    const pageNumber = []
    for (let i = 1; i <= totalPages; i++) {
        pageNumber.push(i)
    }


    return (
        <>
            <div className='pagination-container'>
                <ul>
                    {pageNumber.map(e =>
                        <li className='page'>
                            <p>{e}</p>
                        </li>)}
                </ul>
            </div>

        </>
    )
}