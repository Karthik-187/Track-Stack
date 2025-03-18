package com.trackstack.service;

import com.trackstack.model.Asset;
import com.trackstack.repository.AssetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AssetService {

    @Autowired
    private AssetRepository assetRepository;

    public Asset addAsset(Asset asset) {
        return assetRepository.save(asset);
    }

    public List<Asset> getAllAssets() {
        return assetRepository.findAll();
    }

    public Asset updateAsset(String id, Asset asset) {
        asset.setId(id);
        return assetRepository.save(asset);
    }

    public void deleteAsset(String id) {
        assetRepository.deleteById(id);
    }
}