package craft_demo.crowdfunding.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import java.util.Set;


@Entity
@Table(name = "Users")
public class User {

    @Id
    @Column(nullable = false, updatable = false)
    private String username;

    @Column
    private String name;

    @Column
    private String email;

    @Column
    private String password;

    @OneToMany(mappedBy = "createdBy")
    private Set<Project> createdByProjects;

    @OneToMany(mappedBy = "donor")
    private Set<Donation> donorDonations;

    public String getUsername() {
        return username;
    }

    public void setUsername(final String username) {
        this.username = username;
    }

    public String getName() {
        return name;
    }

    public void setName(final String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(final String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(final String password) {
        this.password = password;
    }

    public Set<Project> getCreatedByProjects() {
        return createdByProjects;
    }

    public void setCreatedByProjects(final Set<Project> createdByProjects) {
        this.createdByProjects = createdByProjects;
    }

    public Set<Donation> getDonorDonations() {
        return donorDonations;
    }

    public void setDonorDonations(final Set<Donation> donorDonations) {
        this.donorDonations = donorDonations;
    }

}
