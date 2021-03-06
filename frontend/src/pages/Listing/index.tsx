import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils/requests";

function Listing() {

    const [page, setPage] = useState <MoviePage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true
    });
    const [pageNumber, setPageNumber] = useState(0); /* mantem o estado do componente */
    useEffect(() => { //vai executar a function somente quando o componente estiver terminado 
        axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=title`).then(
            response => {
                const data = response.data as MoviePage;
                setPage(data);
                /* setPageNumber(data.number);
                console.log(response.data); */
            }
        )
    },[pageNumber]) //sempre que esse objeto mudar será feito uma nova requisição o que corrobora com o onclick e onchange dinamicamente

    const handlePageChange = (newPageNumber : number) => {
        setPageNumber(newPageNumber)
    }

    return (
        <>
            <Pagination page={page} onChange={handlePageChange}/>
            <div className="container">
                <div className="row">
                    {page.content.map(movie => (
                        <div key ={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3"> {/* bootstrap limitando o tamanho de cada card pelos pixels da tela (o maximo é 12)*/}
                            <MovieCard movie={movie} />
                        </div>
                    )
                    )}
                    
                </div>
            </div>
        </>
    )
}
export default Listing;