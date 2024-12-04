import Resource from '../models/Resource.js';
import { validationResult } from 'express-validator';

export const getResources = async (req, res) => {
  try {
    const resources = await Resource.find()
      .populate('author', 'name')
      .sort({ createdAt: -1 });
    res.json(resources);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createResource = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const resource = new Resource({
      ...req.body,
      author: req.user._id,
    });

    const createdResource = await resource.save();
    res.status(201).json(createdResource);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getResourceById = async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id)
      .populate('author', 'name');
    
    if (!resource) {
      return res.status(404).json({ message: 'Resource not found' });
    }

    res.json(resource);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};