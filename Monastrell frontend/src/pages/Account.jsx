import React, { useState } from 'react';

const API = import.meta.env.VITE_API_URL || "http://localhost:4000";

export default function Account({ onLogin }) {
  const [view, setView] = useState('login'); // 'login' or 'register'
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    const endpoint = view === 'login' ? '/api/users/login' : '/api/users/register';

    const body = view === 'login'
      ? { email: form.email, password: form.password }
      : form;

    const res = await fetch(`${API}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });

    const data = await res.json();

    if (!res.ok) {
      setMessage(data.message || 'Error');
      return;
    }

    if (view === 'login') {
      // Guardar token y datos de usuario
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      setMessage('¡Bienvenido!');
      if (onLogin) onLogin(data.user);
    } else {
      setMessage('Usuario registrado. Ahora puedes iniciar sesión.');
      setView('login');
    }
  };

  return (
    <div className="max-w-sm mx-auto p-8 mt-10 border rounded shadow bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center">
        {view === 'login' ? 'Iniciar Sesión' : 'Crear Cuenta'}
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
        {view === 'register' && (
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            className="p-2 border rounded"
            value={form.name}
            onChange={handleChange}
            required
          />
        )}
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          className="p-2 border rounded"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          className="p-2 border rounded"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button
          className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          type="submit"
        >
          {view === 'login' ? 'Entrar' : 'Registrarme'}
        </button>
      </form>
      <div className="mt-4 text-center">
        <button
          className="text-blue-600 underline"
          onClick={() => {
            setView(view === 'login' ? 'register' : 'login');
            setMessage('');
          }}
        >
          {view === 'login' ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia sesión'}
        </button>
      </div>
      {message && <div className="mt-4 text-center text-red-500">{message}</div>}
    </div>
  );
}
