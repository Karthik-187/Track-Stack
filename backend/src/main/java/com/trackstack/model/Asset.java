package com.trackstack.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "assets")
public class Asset {
    @Id
    private String id;
    private String userId;
    private String categoryId;
    private String name;
    private String description;
    private int quantity;
    private int threshold;
    private double price;
    private String status;
    private String barcode;
}