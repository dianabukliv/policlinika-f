import { apiRoute } from './helper';

export const fetchDoctor = async () => {
  const res = await fetch(`${apiRoute}/doctor/`).then((res) => res.json());
  return res.data;
};

export const createDoctor = async (body) => {
  const res = await fetch(`${apiRoute}/create/doctor/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then((res) => res.json());
  return res.message;
};

export const deleteDoctor = async (id_pass) => {
  const res = await fetch(`${apiRoute}/delete/doctor/${id_pass}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());
  return res.message;
};
