import { Request, Response } from 'express';
import AdminConfig from '../model/adminConfig';

export const getAdminConfig = async (req: Request, res: Response) => {
  try {
    let config = await AdminConfig.findOne();

    if (!config) {
      // If no config exists, create a default one
      config = new AdminConfig();
      await config.save();
    }

    res.json({
      step2: config.step2,
      step3: config.step3,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error fetching config' });
  }
};

export const updateAdminConfig = async (req: Request, res: Response) => {
  const { step2, step3 } = req.body;

  if (!step2 || !step3 || !Array.isArray(step2) || !Array.isArray(step3)) {
    return res.status(400).json({ msg: 'Invalid configuration format' });
  }

  if (step2.length === 0 || step3.length === 0) {
    return res.status(400).json({ msg: 'Each step must have at least one component' });
  }

  try {
    let config = await AdminConfig.findOne();

    if (!config) {
      config = new AdminConfig({ step2, step3 });
    } else {
      config.step2 = step2;
      config.step3 = step3;
    }

    await config.save();

    res.json({ msg: 'Configuration updated', step2, step3 });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error updating config' });
  }
};