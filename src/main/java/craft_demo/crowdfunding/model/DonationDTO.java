package craft_demo.crowdfunding.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Digits;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import java.math.BigDecimal;


public class DonationDTO {

    private Long id;

    @NotNull
    @Digits(integer = 12, fraction = 2)
    @JsonFormat(shape = JsonFormat.Shape.STRING)
    @Schema(type = "string", example = "10.08")
    private BigDecimal donationAmount;

    private Long project;

    @Size(max = 255)
    private String donor;

    public Long getId() {
        return id;
    }

    public void setId(final Long id) {
        this.id = id;
    }

    public BigDecimal getDonationAmount() {
        return donationAmount;
    }

    public void setDonationAmount(final BigDecimal donationAmount) {
        this.donationAmount = donationAmount;
    }

    public Long getProject() {
        return project;
    }

    public void setProject(final Long project) {
        this.project = project;
    }

    public String getDonor() {
        return donor;
    }

    public void setDonor(final String donor) {
        this.donor = donor;
    }

}
