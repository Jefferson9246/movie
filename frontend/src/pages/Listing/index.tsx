import axios from "axios";
import MovieCard from "components/MovieCard";
import MovieScore from "components/MovieScore";
import MovieStar from "components/MovieStars";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils/requests";

function Listing() {

    const [pageNumber, setPageNumber] = useState(0); /* mantem o estado do componente */
    useEffect(() => { //vai executar a function somente quando o componente estiver terminado 
        axios.get(`${BASE_URL}/movies?size=12&page=0`).then(
            response => {
                const data = response.data as MoviePage;
                setPageNumber(data.number);
                console.log(response.data);
            }
        )
    })
    return (
        <>
            <Pagination />
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3"> {/* bootstrap limitando o tamanho de cada card pelos pixels da tela (o maximo é 12)*/}
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Listing;