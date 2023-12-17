package craft_demo.crowdfunding.model;

import jakarta.validation.constraints.Size;


public class UserDTO {

    @Size(max = 255)
    private String username;

    @Size(max = 255)
    private String name;

    @Size(max = 255)
    private String email;

    @Size(max = 255)
    private String password;

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

}
