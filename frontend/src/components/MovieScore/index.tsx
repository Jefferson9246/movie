import './styles.css';
import MovieStar from 'components/MovieStars';

export default function MovieScore(){
    const score = 1.5;
    const count = 21;
    return (
    <div className="dsmovie-score-container">
        <p className="dsmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
        <MovieStar />
        <p className="dsmovie-score-count">{count} avaliações</p>
    </div>
    );
}