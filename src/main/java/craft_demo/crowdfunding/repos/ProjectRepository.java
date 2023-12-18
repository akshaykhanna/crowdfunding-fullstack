package craft_demo.crowdfunding.repos;

import craft_demo.crowdfunding.domain.Project;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


public interface ProjectRepository extends JpaRepository<Project, Long> {
   List<Project> findByCreatedByUsername(String username);
}
