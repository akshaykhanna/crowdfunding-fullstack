package craft_demo.crowdfunding.service;

import craft_demo.crowdfunding.domain.User;
import craft_demo.crowdfunding.model.UserDTO;
import craft_demo.crowdfunding.repos.UserRepository;
import craft_demo.crowdfunding.util.NotFoundException;
import java.util.List;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;


@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(final UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<UserDTO> findAll() {
        final List<User> users = userRepository.findAll(Sort.by("username"));
        return users.stream()
                .map(user -> mapToDTO(user, new UserDTO()))
                .toList();
    }

    public UserDTO get(final String username) {
        return userRepository.findById(username)
                .map(user -> mapToDTO(user, new UserDTO()))
                .orElseThrow(NotFoundException::new);
    }

    public String create(final UserDTO userDTO) {
        final User user = new User();
        mapToEntity(userDTO, user);
        user.setUsername(userDTO.getUsername());
        return userRepository.save(user).getUsername();
    }

    public void update(final String username, final UserDTO userDTO) {
        final User user = userRepository.findById(username)
                .orElseThrow(NotFoundException::new);
        mapToEntity(userDTO, user);
        userRepository.save(user);
    }

    public void delete(final String username) {
        userRepository.deleteById(username);
    }

    private UserDTO mapToDTO(final User user, final UserDTO userDTO) {
        userDTO.setUsername(user.getUsername());
        userDTO.setName(user.getName());
        userDTO.setEmail(user.getEmail());
        userDTO.setPassword(user.getPassword());
        return userDTO;
    }

    private User mapToEntity(final UserDTO userDTO, final User user) {
        user.setName(userDTO.getName());
        user.setEmail(userDTO.getEmail());
        user.setPassword(userDTO.getPassword());
        return user;
    }

    public boolean usernameExists(final String username) {
        return userRepository.existsByUsernameIgnoreCase(username);
    }

    public boolean isValidLogin(String username, String password) {
        // Retrieve the user by username
        User user = userRepository.findByUsername(username).orElse(null);

        // Check if the user exists and the password matches
        return user != null && user.getPassword().equals(password);
    }

}
