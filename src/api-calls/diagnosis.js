import { apiRoute } from './helper';

export const fetchDiagnosis = async () => {
  const res = await fetch(`${apiRoute}/diagnosis/`).then((res) => res.json());
  return res.data;
};

export const createDiagnosis = async (body) => {
  const res = await fetch(`${apiRoute}/create/diagnosis/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then((res) => res.json());
  return res.message;
};

export const deleteDiagnosis = async (id_pass) => {
  const res = await fetch(`${apiRoute}/delete/diagnosis/${id_pass}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());
  return res.message;
};
