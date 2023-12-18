package craft_demo.crowdfunding.service;

import craft_demo.crowdfunding.domain.Project;
import craft_demo.crowdfunding.domain.User;
import craft_demo.crowdfunding.model.ProjectDTO;
import craft_demo.crowdfunding.repos.ProjectRepository;
import craft_demo.crowdfunding.repos.UserRepository;
import craft_demo.crowdfunding.util.NotFoundException;
import java.util.List;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;


@Service
public class ProjectService {

    private final ProjectRepository projectRepository;
    private final UserRepository userRepository;

    public ProjectService(final ProjectRepository projectRepository,
            final UserRepository userRepository) {
        this.projectRepository = projectRepository;
        this.userRepository = userRepository;
    }

    public List<ProjectDTO> findAll() {
        final List<Project> projects = projectRepository.findAll(Sort.by("id"));
        return projects.stream()
                .map(project -> mapToDTO(project, new ProjectDTO()))
                .toList();
    }

    public List<ProjectDTO> findByUsername(String username) {
        final List<Project> projects = projectRepository.findByCreatedByUsername(username);
        return projects.stream()
                .map(project -> mapToDTO(project, new ProjectDTO()))
                .toList();
    }

    public ProjectDTO get(final Long id) {
        return projectRepository.findById(id)
                .map(project -> mapToDTO(project, new ProjectDTO()))
                .orElseThrow(NotFoundException::new);
    }

    public Long create(final ProjectDTO projectDTO) {
        final Project project = new Project();
        mapToEntity(projectDTO, project);
        return projectRepository.save(project).getId();
    }

    public void update(final Long id, final ProjectDTO projectDTO) {
        final Project project = projectRepository.findById(id)
                .orElseThrow(NotFoundException::new);
        mapToEntity(projectDTO, project);
        projectRepository.save(project);
    }

    public void delete(final Long id) {
        projectRepository.deleteById(id);
    }

    private ProjectDTO mapToDTO(final Project project, final ProjectDTO projectDTO) {
        projectDTO.setId(project.getId());
        projectDTO.setName(project.getName());
        projectDTO.setDescription(project.getDescription());
        projectDTO.setRequestedAmount(project.getRequestedAmount());
        projectDTO.setCollectedAmount(project.getCollectedAmount());
        projectDTO.setState(project.getState());
        projectDTO.setCreatedBy(project.getCreatedBy() == null ? null : project.getCreatedBy().getUsername());
        return projectDTO;
    }

    private Project mapToEntity(final ProjectDTO projectDTO, final Project project) {
        project.setName(projectDTO.getName());
        project.setDescription(projectDTO.getDescription());
        project.setRequestedAmount(projectDTO.getRequestedAmount());
        project.setCollectedAmount(projectDTO.getCollectedAmount());
        var state = project.getState();
        project.setState(state == null ? "open" : state);
        final User createdBy = projectDTO.getCreatedBy() == null ? null : userRepository.findById(projectDTO.getCreatedBy())
                .orElseThrow(() -> new NotFoundException("createdBy not found"));
        project.setCreatedBy(createdBy);
        return project;
    }

}
