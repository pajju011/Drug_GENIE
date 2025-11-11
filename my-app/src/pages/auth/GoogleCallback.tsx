import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';
import { authAPI, setToken } from '../../services/api';

const GoogleCallback: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const handleCallback = async () => {
      const token = searchParams.get('token');
      const error = searchParams.get('error');

      if (error) {
        toast.error('Google authentication failed. Please try again.');
        navigate('/login');  
        return;
      }

      if (token) {
        try {
          // Store token first
          localStorage.setItem('token', token);
          setToken(token);
          
          // Fetch user profile using the token
          const response = await authAPI.getProfile();
          
          // Store user data
          sessionStorage.setItem('currentUser', JSON.stringify(response));
          
          toast.success('Successfully signed in with Google!');
          
          // Force page reload to ensure authentication state is updated
          window.location.href = '/';
        } catch (error) {
          console.error('Error fetching user data:', error);
          toast.error('Authentication failed. Please try again.');
          localStorage.removeItem('token');
          navigate('/login');
        }
      } else {
        toast.error('Authentication failed. Please try again.');
        navigate('/login');
      }
    };

    handleCallback();
  }, [searchParams, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="h-12 w-12 text-blue-600 animate-spin mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-gray-900">
          Completing sign in...
        </h2>
        <p className="text-gray-600 mt-2">Please wait while we set up your account</p>
      </div>
    </div>
  );
};

export default GoogleCallback;
