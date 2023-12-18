package craft_demo.crowdfunding.repos;

import craft_demo.crowdfunding.domain.Donation;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


public interface DonationRepository extends JpaRepository<Donation, Long> {
    // add findByProjectId method
    List<Donation> findByProjectId(Long projectId);
}
