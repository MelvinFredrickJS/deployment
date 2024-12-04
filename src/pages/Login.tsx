import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { useAuthStore } from '../stores/authStore';

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const setUser = useAuthStore((state) => state.setUser);
  const [error, setError] = React.useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      // Mock login - replace with actual API call
      setUser({
        id: '1',
        email,
        name: 'John Doe',
        graduationYear: 2020,
        department: 'Computer Science'
      });
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <Input
              label="Email address"
              name="email"
              type="email"
              autoComplete="email"
              required
            />

            <Input
              label="Password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
            />

            {error && (
              <div className="text-red-600 text-sm">{error}</div>
            )}

            <Button type="submit" className="w-full">
              Sign in
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};