import apiClient  from './api-client'

const API_URL = 'https://fakestoreapi.com';

import { Product } from '../assets/types'

export const getHomeProducts = async () => {
    try {
        const { data } = await apiClient.get<Product[]>(`${API_URL}/products?limit=6`)
        return data
    } catch (error) {
        console.error('Error fetching home products:', error);
        throw error;
    }
};

export const getAllProducts = async () => {
    try {
        const { data } = await apiClient.get<Product[]>(`${API_URL}/products`)
        return data
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

export const getProductById = async (id:string) => {
    try {
        const { data } = await apiClient.get<Product>(`${API_URL}/products/${id}`);
        return data;
    } catch (error) {
        console.error('Error fetching product by ID:', error);
        throw error;
    }
};

