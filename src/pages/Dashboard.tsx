import React from 'react';
import { useAuthStore } from '../stores/authStore';
import { Button } from '../components/ui/Button';
import { Users, MessageSquare, Calendar, BookOpen, Bell, Settings } from 'lucide-react';

export const Dashboard: React.FC = () => {
  const user = useAuthStore((state) => state.user);

  const stats = [
    { label: 'Network Connections', value: '150+', icon: Users },
    { label: 'Events Attended', value: '12', icon: Calendar },
    { label: 'Messages', value: '24', icon: MessageSquare },
    { label: 'Resources Shared', value: '8', icon: BookOpen },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Annual Alumni Meet 2024',
      date: 'March 25, 2024',
      type: 'Networking',
    },
    {
      id: 2,
      title: 'Tech Talk: AI in Industry',
      date: 'April 2, 2024',
      type: 'Workshop',
    },
    {
      id: 3,
      title: 'Career Fair Spring 2024',
      date: 'April 15, 2024',
      type: 'Career',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Welcome back, {user?.name}!</h1>
              <p className="text-gray-600">{user?.department} • Class of {user?.graduationYear}</p>
            </div>
            <div className="flex space-x-4">
              <Button variant="outline" size="sm">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <stat.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Events */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Events</h2>
          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="flex items-center justify-between border-b pb-4 last:border-0">
                <div>
                  <h3 className="font-medium text-gray-900">{event.title}</h3>
                  <p className="text-sm text-gray-600">{event.date}</p>
                </div>
                <div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {event.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Button variant="outline" className="w-full">
              View All Events
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};