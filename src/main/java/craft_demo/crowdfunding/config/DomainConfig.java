package craft_demo.crowdfunding.config;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;


@Configuration
@EntityScan("craft_demo.crowdfunding.domain")
@EnableJpaRepositories("craft_demo.crowdfunding.repos")
@EnableTransactionManagement
public class DomainConfig {
}
