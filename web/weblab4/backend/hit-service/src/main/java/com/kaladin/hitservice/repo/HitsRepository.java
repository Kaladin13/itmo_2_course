package com.kaladin.hitservice.repo;

import com.kaladin.hitservice.entity.Hit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
public interface HitsRepository extends JpaRepository<Hit, Long> {
    Collection<Hit> findAllByAuthor(String author);
}
