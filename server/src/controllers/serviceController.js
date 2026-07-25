import Service from "../models/Service.js";

// Create Service
export const createService = async (req, res) => {
  try {
    const { serviceName, description, icon } = req.body;

    const service = await Service.create({
      serviceName,
      description,
      icon,
    });

    res.status(201).json({
      success: true,
      message: "Service created successfully",
      service,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Services
export const getAllServices = async (req, res) => {
  try {
    const services = await Service.find();

    res.status(200).json({
      success: true,
      services,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};