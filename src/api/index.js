import { API_URL } from '@env';

export const getProyectos = async () => {
  try {
    const res = await fetch(`${API_URL}/proyectos`);
    return await res.json();
  } catch (error) {
    console.error('Error al obtener proyectos:', error);
    throw error;
  }
};
