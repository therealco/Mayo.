import { Request, Response } from 'express';
import axios from 'axios';

const GEMINI_API_URL = 'http://localhost:3000/api';

export const getUsers = async (req: Request, res: Response) => {
    try {
        const response = await axios.get(`${GEMINI_API_URL}/users`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error: error.message });
    }
};

export const getUserById = async (req: Request, res: Response) => {
    try {
        const response = await axios.get(`${GEMINI_API_URL}/users/${req.params.id}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user', error: error.message });
    }
};

export const createUser = async (req: Request, res: Response) => {
    try {
        const response = await axios.post(`${GEMINI_API_URL}/users`, req.body);
        res.status(201).json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error: error.message });
    }
};

export const updateUser = async (req: Request, res: Response) => {
    try {
        const response = await axios.put(`${GEMINI_API_URL}/users/${req.params.id}`, req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error updating user', error: error.message });
    }
};

export const deleteUser = async (req: Request, res: Response) => {
    try {
        await axios.delete(`${GEMINI_API_URL}/users/${req.params.id}`);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user', error: error.message });
    }
};