package com.frontend_react.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.frontend_react.dsmovie.entities.User;

public interface UserRepository extends JpaRepository <User, Long>{
	
	User findByEmail(String email);

}
