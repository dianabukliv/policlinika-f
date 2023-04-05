import { apiRoute } from './helper';

export const fetchPatient = async () => {
  const res = await fetch(`${apiRoute}/patient/`).then((res) => res.json());
  return res.data;
};

export const createPatient = async (body) => {
  const res = await fetch(`${apiRoute}/create/patient/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then((res) => res.json());
  return res.message;
};

export const deletePatient = async (id_pass) => {
  const res = await fetch(`${apiRoute}/delete/patient/${id_pass}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());
  return res.message;
};
