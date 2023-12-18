package craft_demo.crowdfunding.rest;

import craft_demo.crowdfunding.model.DonationDTO;
import craft_demo.crowdfunding.service.DonationService;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import jakarta.validation.Valid;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping(value = "/api/donations", produces = MediaType.APPLICATION_JSON_VALUE)
public class DonationResource {

    private final DonationService donationService;

    public DonationResource(final DonationService donationService) {
        this.donationService = donationService;
    }

    @GetMapping
    public ResponseEntity<List<DonationDTO>> getAllDonations(@RequestParam(required = false) Long projectId) {
        if (projectId != null) {
            return ResponseEntity.ok(donationService.findByProjectId(projectId));
        } else {
            return ResponseEntity.ok(donationService.findAll());
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<DonationDTO> getDonation(@PathVariable(name = "id") final Long id) {
        return ResponseEntity.ok(donationService.get(id));
    }

    @PostMapping
    @ApiResponse(responseCode = "201")
    public ResponseEntity<Long> createDonation(@RequestBody @Valid final DonationDTO donationDTO) {
        final Long createdId = donationService.create(donationDTO);
        return new ResponseEntity<>(createdId, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Long> updateDonation(@PathVariable(name = "id") final Long id,
            @RequestBody @Valid final DonationDTO donationDTO) {
        donationService.update(id, donationDTO);
        return ResponseEntity.ok(id);
    }

    @DeleteMapping("/{id}")
    @ApiResponse(responseCode = "204")
    public ResponseEntity<Void> deleteDonation(@PathVariable(name = "id") final Long id) {
        donationService.delete(id);
        return ResponseEntity.noContent().build();
    }

}
