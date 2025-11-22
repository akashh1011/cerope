// src/services/authApi.js
const API_BASE_URL = import.meta.env.VITE_BASE_URL;

const handleResponse = async (res) => {
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const message = data.message || "Request failed";
    throw new Error(message);
  }
  return data;
};

export const loginUserApi = async ({ email, password }) => {
  const res = await fetch(`${API_BASE_URL}/api/v1/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
    credentials: "include", // agar cookies use karoge to
  });

  return handleResponse(res);
};

export const googleLoginApi = async ({ idToken }) => {
  const res = await fetch(`${API_BASE_URL}/api/v1/users/auth/google`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ idToken }),
    credentials: "include",
  });

  return handleResponse(res);
};
