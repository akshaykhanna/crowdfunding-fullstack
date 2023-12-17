package craft_demo.crowdfunding.repos;

import craft_demo.crowdfunding.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;


public interface UserRepository extends JpaRepository<User, String> {

    boolean existsByUsernameIgnoreCase(String username);

}
