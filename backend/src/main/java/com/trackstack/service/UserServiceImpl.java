package com.trackstack.service;

import com.trackstack.model.User;
import com.trackstack.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User findByUsername(String username) {
        User user = userRepository.findByUsername(username);
        if (user == null) {
            System.out.println("User not found: " + username);
        } else {
            System.out.println("User found: " + username);
        }
        return user;
    }
    
    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }
    
    @Override
    public User registerUser(User user) {
        // You might want to add validation or additional logic here
        return userRepository.save(user);
    }
    
    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
    
    @Override
    public User updateUser(String username, User updatedUser) {
        User existingUser = userRepository.findByUsername(username);
        if (existingUser != null) {
            // Update user fields but keep the original ID
            updatedUser.setId(existingUser.getId());
            return userRepository.save(updatedUser);
        }
        return null;
    }
    
    @Override
    public boolean deleteUser(String username) {
        User user = userRepository.findByUsername(username);
        if (user != null) {
            userRepository.delete(user);
            return true;
        }
        return false;
    }
}