package com.ppa.portfolioservice;

import java.time.Instant;
import java.util.Date;
import java.util.List;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.ppa.portfolioservice.project.Project;


@SpringBootApplication
@RestController
public class PortfolioServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(PortfolioServiceApplication.class, args);
	}

	@GetMapping
	public List <Project> hello() {

		return List.of(
			new Project(
				1L,
				2L,
				"Placeholder Project",
				"ARCHIVED",
				"ShortDesc",
				"Normal description is here",
				List.of("url1", "url2"),
				List.of("id", "id2"),
				List.of("tag1", "tag2"),
				Date.from(Instant.now()),
				Date.from(Instant.now())
			)
		);
	}

}
