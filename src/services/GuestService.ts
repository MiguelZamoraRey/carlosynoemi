import { IApiResponse } from '../utils/generalTypes';

const BACK_URL = import.meta.env.VITE_BACK_URL;

export const getGuestByEmail = async (email: string): Promise<IApiResponse> => {
  const response = await fetch(`${BACK_URL}/guest/email`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Access-Control-Allowed-Origin': '*',
    },
    body: JSON.stringify({ email: email }),
  });
  return response.json();
};

export const getGuestById = async (id: string): Promise<IApiResponse> => {
  const response = await fetch(`${BACK_URL}/guest/${id}`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      'Access-Control-Allowed-Origin': '*',
    },
  });
  return response.json();
};

export const createNewGuest = async (email, code): Promise<IApiResponse> => {
  const response = await fetch(`${BACK_URL}/guest`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Access-Control-Allowed-Origin': '*',
    },
    body: JSON.stringify({
      email: email,
      code: code,
    }),
  });

  return response.json();
};

export const updateGuestData = async (id, guestData): Promise<IApiResponse> => {
  const response = await fetch(`${BACK_URL}/guest/update/${id}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Access-Control-Allowed-Origin': '*',
    },
    body: JSON.stringify(guestData),
  });
  return response.json();
};
