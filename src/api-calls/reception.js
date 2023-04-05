import { apiRoute } from './helper';

export const fetchReception = async () => {
  const res = await fetch(`${apiRoute}/reception/`).then((res) => res.json());
  return res.data;
};

export const createReception = async (body) => {
  const res = await fetch(`${apiRoute}/create/reception/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then((res) => res.json());
  return res.message;
};

export const deleteReception = async (id_pass) => {
  const res = await fetch(`${apiRoute}/delete/reception/${id_pass}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());
  return res.message;
};
