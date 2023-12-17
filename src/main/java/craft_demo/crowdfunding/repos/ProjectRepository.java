package craft_demo.crowdfunding.repos;

import craft_demo.crowdfunding.domain.Project;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ProjectRepository extends JpaRepository<Project, Long> {
}
