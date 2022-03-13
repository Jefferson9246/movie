package com.frontend_react.dsmovie.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.frontend_react.dsmovie.dto.MovieDTO;
import com.frontend_react.dsmovie.dto.ScoreDTO;
import com.frontend_react.dsmovie.entities.Movie;
import com.frontend_react.dsmovie.entities.Score;
import com.frontend_react.dsmovie.entities.User;
import com.frontend_react.dsmovie.repositories.MovieRepository;
import com.frontend_react.dsmovie.repositories.ScoreRepository;
import com.frontend_react.dsmovie.repositories.UserRepository;

@Service
public class ScoreService {
	@Autowired
	private MovieRepository movieRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private ScoreRepository scoreRepository;

	@Transactional
	public MovieDTO saveScore(ScoreDTO dto) {
		
		User user = userRepository.findByEmail(dto.getEmail());
		if(user == null) {
			user = new User();
			user.setEmail(dto.getEmail());
			user = userRepository.saveAndFlush(user);
		}
		
		Movie movie = movieRepository.findById(dto.getMovieId()).get(); //current movie by Id vai ser um objeto analisado
		
		Score score = new Score();
		score.setMovie(movie);
		score.setUser(user);
		score.setValue(dto.getScore());
		
		score = scoreRepository.saveAndFlush(score); //para salvar e já atualizar os dados save and flush
		
		double sum = 0.0;
		for(Score s : movie.getScores()) { //for nos scores do current movie
			sum = sum + s.getValue(); //fazendo a soma por valor
		}
		
		double avg = sum / movie.getScores().size(); //pegando a media
		 
		movie.setScore(avg); //setando novo score
		movie.setCount(movie.getScores().size()); //setando novo size
		
		movie = movieRepository.save(movie);
		
		return new MovieDTO(movie);
	}
}
