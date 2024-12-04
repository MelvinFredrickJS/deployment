import User from '../models/User.js';

export const getConnections = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate('connections', 'name email department graduationYear');
    res.json(user.connections);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const sendConnectionRequest = async (req, res) => {
  try {
    const targetUser = await User.findById(req.params.id);
    if (!targetUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (targetUser.connections.includes(req.user._id)) {
      return res.status(400).json({ message: 'Already connected' });
    }

    targetUser.connections.push(req.user._id);
    await targetUser.save();

    const currentUser = await User.findById(req.user._id);
    currentUser.connections.push(targetUser._id);
    await currentUser.save();

    res.json({ message: 'Connection request sent successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const acceptConnection = async (req, res) => {
  try {
    const requestingUser = await User.findById(req.params.id);
    if (!requestingUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    const currentUser = await User.findById(req.user._id);
    currentUser.connections.push(requestingUser._id);
    await currentUser.save();

    res.json({ message: 'Connection accepted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};