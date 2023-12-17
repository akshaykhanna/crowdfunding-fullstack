package craft_demo.crowdfunding.service;

import craft_demo.crowdfunding.domain.Donation;
import craft_demo.crowdfunding.domain.Project;
import craft_demo.crowdfunding.domain.User;
import craft_demo.crowdfunding.model.DonationDTO;
import craft_demo.crowdfunding.repos.DonationRepository;
import craft_demo.crowdfunding.repos.ProjectRepository;
import craft_demo.crowdfunding.repos.UserRepository;
import craft_demo.crowdfunding.util.NotFoundException;
import java.util.List;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;


@Service
public class DonationService {

    private final DonationRepository donationRepository;
    private final ProjectRepository projectRepository;
    private final UserRepository userRepository;

    public DonationService(final DonationRepository donationRepository,
            final ProjectRepository projectRepository, final UserRepository userRepository) {
        this.donationRepository = donationRepository;
        this.projectRepository = projectRepository;
        this.userRepository = userRepository;
    }

    public List<DonationDTO> findAll() {
        final List<Donation> donations = donationRepository.findAll(Sort.by("id"));
        return donations.stream()
                .map(donation -> mapToDTO(donation, new DonationDTO()))
                .toList();
    }

    public DonationDTO get(final Long id) {
        return donationRepository.findById(id)
                .map(donation -> mapToDTO(donation, new DonationDTO()))
                .orElseThrow(NotFoundException::new);
    }

    public Long create(final DonationDTO donationDTO) {
        final Donation donation = new Donation();
        mapToEntity(donationDTO, donation);
        return donationRepository.save(donation).getId();
    }

    public void update(final Long id, final DonationDTO donationDTO) {
        final Donation donation = donationRepository.findById(id)
                .orElseThrow(NotFoundException::new);
        mapToEntity(donationDTO, donation);
        donationRepository.save(donation);
    }

    public void delete(final Long id) {
        donationRepository.deleteById(id);
    }

    private DonationDTO mapToDTO(final Donation donation, final DonationDTO donationDTO) {
        donationDTO.setId(donation.getId());
        donationDTO.setDonationAmount(donation.getDonationAmount());
        donationDTO.setProject(donation.getProject() == null ? null : donation.getProject().getId());
        donationDTO.setDonor(donation.getDonor() == null ? null : donation.getDonor().getUsername());
        return donationDTO;
    }

    private Donation mapToEntity(final DonationDTO donationDTO, final Donation donation) {
        donation.setDonationAmount(donationDTO.getDonationAmount());
        final Project project = donationDTO.getProject() == null ? null : projectRepository.findById(donationDTO.getProject())
                .orElseThrow(() -> new NotFoundException("project not found"));
        donation.setProject(project);
        final User donor = donationDTO.getDonor() == null ? null : userRepository.findById(donationDTO.getDonor())
                .orElseThrow(() -> new NotFoundException("donor not found"));
        donation.setDonor(donor);
        return donation;
    }

}
