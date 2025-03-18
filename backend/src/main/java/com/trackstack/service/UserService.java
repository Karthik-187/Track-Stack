package com.trackstack.service;

import com.trackstack.model.User;
import java.util.List;

public interface UserService {
    User findByUsername(String username);
    User saveUser(User user);
    User registerUser(User user);
    List<User> getAllUsers();
    User updateUser(String username, User updatedUser);
    boolean deleteUser(String username);
}