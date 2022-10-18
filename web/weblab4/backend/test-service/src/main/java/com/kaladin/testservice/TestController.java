package com.kaladin.testservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.stream.Stream;

@Component
class CLR implements CommandLineRunner {
    private final UserRepository userRepository;

    @Autowired
    public CLR(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        Stream.of("max").forEach(n -> this.userRepository.save(new User123(n)));
    }
}

@RestController
public class TestController {

    private final UserRepository userRepository;

    @Autowired
    public TestController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/user")
    public User123 getUser() {
        return this.userRepository.findByStr("max");
    }
}

@Repository
interface UserRepository extends JpaRepository<User123, Long> {
    User123 findByStr(String str);
}


@Entity
class User123 {

    @Id
    @GeneratedValue
    private Long id;

    private String str;

    public User123() {
    }

    public User123(String str) {
        this.str = str;
    }

    public Long getId() {
        return id;
    }

    public String getStr() {
        return str;
    }
}
