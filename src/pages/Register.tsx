import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { useAuthStore } from '../stores/authStore';

export const Register: React.FC = () => {
  const navigate = useNavigate();
  const setUser = useAuthStore((state) => state.setUser);
  const [error, setError] = React.useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const confirmPassword = formData.get('confirmPassword') as string;
    const name = formData.get('name') as string;
    const graduationYear = parseInt(formData.get('graduationYear') as string, 10);
    const department = formData.get('department') as string;

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      // Mock registration - replace with actual API call
      setUser({
        id: '1',
        email,
        name,
        graduationYear,
        department
      });
      navigate('/dashboard');
    } catch (err) {
      setError('Registration failed. Please try again.');
    }
  };

  const currentYear = new Date().getFullYear();
  const graduationYears = Array.from(
    { length: 50 },
    (_, i) => currentYear - i
  );

  const departments = [
    'Computer Science',
    'Electrical Engineering',
    'Mechanical Engineering',
    'Civil Engineering',
    'Business Administration',
    'Economics',
    'Mathematics',
    'Physics'
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
          Create your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Join our alumni network and stay connected
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <Input
              label="Full Name"
              name="name"
              type="text"
              autoComplete="name"
              required
            />

            <Input
              label="Email address"
              name="email"
              type="email"
              autoComplete="email"
              required
            />

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Department
              </label>
              <select
                name="department"
                className="mt-1 block w-full rounded-md border-gray-300 py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                required
              >
                <option value="">Select Department</option>
                {departments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Graduation Year
              </label>
              <select
                name="graduationYear"
                className="mt-1 block w-full rounded-md border-gray-300 py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                required
              >
                <option value="">Select Year</option>
                {graduationYears.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            <Input
              label="Password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
            />

            <Input
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              autoComplete="new-password"
              required
            />

            {error && (
              <div className="text-red-600 text-sm">{error}</div>
            )}

            <Button type="submit" className="w-full">
              Register
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};