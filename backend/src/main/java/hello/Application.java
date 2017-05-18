package hello;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@SpringBootApplication
public class Application extends WebMvcConfigurerAdapter {
  private static final String[] CLASSPATH_RESOURCE_LOCATIONS = {"classpath:/static/"};

  public static void main(String[] args) {
    SpringApplication.run(Application.class, args);
  }

  @Override
  public void addResourceHandlers(ResourceHandlerRegistry registry) {
    super.addResourceHandlers(registry);
    if (!registry.hasMappingForPattern("/webjars/**")) {
      registry.addResourceHandler("/webjars/**").addResourceLocations("classpath:/META-INF/resources/webjars/");
    }
    if (!registry.hasMappingForPattern("/index.html")) {
      registry.addResourceHandler("/index.html").addResourceLocations(CLASSPATH_RESOURCE_LOCATIONS);
    }
  }
}
