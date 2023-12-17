package craft_demo.crowdfunding.repos;

import craft_demo.crowdfunding.domain.Donation;
import org.springframework.data.jpa.repository.JpaRepository;


public interface DonationRepository extends JpaRepository<Donation, Long> {
}
