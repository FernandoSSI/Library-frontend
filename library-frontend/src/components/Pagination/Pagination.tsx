import './Pagination.css'

interface PaginationProps {
    totalPages: any,
    changePage: any,
    currentPage: number
}

export function Pagination({ totalPages, changePage, currentPage }: PaginationProps) {
    const pageNumber = []
    for (let i = 1; i <= totalPages; i++) {
        pageNumber.push(i)
    }

    return (
        <>
            <div className='pagination-container'>
                <ul>
                    {pageNumber.map(e => {

                        if (e != currentPage) {
                            return (
                                <a href='#books-title'>
                                    <li className='page' onClick={() => changePage(e)}>
                                        {e}
                                    </li>
                                </a>
                            )
                        } else {
                            return (
                                <a href='#books-title'>
                                    <li className='active-page' onClick={() => changePage(e)}>
                                        {e}
                                    </li>
                                </a>
                                )
                        }
                    })
                    }
                </ul>
            </div>

        </>
    )
}