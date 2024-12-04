import Event from '../models/Event.js';
import { validationResult } from 'express-validator';

// Get all upcoming events
export const getUpcomingEvents = async (req, res) => {
  try {
    const events = await Event.find({
      date: { $gte: new Date() },
    })
      .sort({ date: 1 })
      .populate('organizer', 'name');

    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new event
export const createEvent = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const event = new Event({
      ...req.body,
      organizer: req.user._id,
    });

    const createdEvent = await event.save();
    res.status(201).json(createdEvent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Register for event
export const registerForEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    if (event.attendees.includes(req.user._id)) {
      return res.status(400).json({ message: 'Already registered for this event' });
    }

    event.attendees.push(req.user._id);
    await event.save();

    res.json({ message: 'Successfully registered for event' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};