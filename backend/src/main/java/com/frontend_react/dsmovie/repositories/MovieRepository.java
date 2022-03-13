package com.frontend_react.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.frontend_react.dsmovie.entities.Movie;

public interface MovieRepository extends JpaRepository <Movie, Long>{

}
