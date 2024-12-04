import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Users, BookOpen, Calendar, Award } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Welcome to AlumniConnect
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Connect with fellow alumni, share experiences, and stay updated with your alma mater.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <Link to="/register">
                <Button size="lg" className="w-full sm:w-auto">
                  Join Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Users className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">Network</h3>
              <p className="mt-2 text-gray-600">Connect with alumni across different batches and departments.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <BookOpen className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">Resources</h3>
              <p className="mt-2 text-gray-600">Access exclusive resources and learning materials.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Calendar className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">Events</h3>
              <p className="mt-2 text-gray-600">Stay updated with alumni events and meetups.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Award className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">Mentorship</h3>
              <p className="mt-2 text-gray-600">Participate in mentorship programs and career guidance.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};