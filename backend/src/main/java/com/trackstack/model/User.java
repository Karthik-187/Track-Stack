package com.trackstack.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "users")
public class User {
    @Id
    private String id;
    private String username;
    private String password;
    private String email;
    private String firstName;
    private String lastName;
    private String role;  // Will be "ADMIN", "CONTRIBUTOR", or "VIEWER"

    // Add role validation
    public void setRole(String role) {
        if (role != null && (role.equals("ADMIN") || role.equals("CONTRIBUTOR") || role.equals("VIEWER"))) {
            this.role = role;
        } else {
            this.role = "VIEWER"; // Default role
        }
    }
}