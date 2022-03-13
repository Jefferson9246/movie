package com.frontend_react.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.frontend_react.dsmovie.entities.Score;
import com.frontend_react.dsmovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository <Score, ScorePK>{

}
