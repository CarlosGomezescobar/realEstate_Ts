import React, { useState } from 'react';
import { X, Mail, Lock, Github, ToggleLeft as Google } from 'lucide-react';
import Button from '../ui/Button';
import { useWeb3 } from '../../context/Web3Context';

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignInModal: React.FC<SignInModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { connectWallet } = useWeb3();

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle traditional sign in
    console.log('Sign in with:', email, password);
  };

  const handleGoogleSignIn = () => {
    // Handle Google sign in
    console.log('Sign in with Google');
  };

  const handleGithubSignIn = () => {
    // Handle Github sign in
    console.log('Sign in with Github');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-slate-800 rounded-lg w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
          Create Account
        </h2>

        <div className="space-y-4 mb-6">
          <button
            onClick={() => connectWallet()}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
          >
            <img src="/metamask-fox.svg" alt="MetaMask" className="w-5 h-5" />
            <span className="text-slate-900 dark:text-white">Continue with MetaMask</span>
          </button>

          <button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
          >
            <Google className="w-5 h-5 text-red-500" />
            <span className="text-slate-900 dark:text-white">Continue with Google</span>
          </button>

          <button
            onClick={handleGithubSignIn}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
          >
            <Github className="w-5 h-5" />
            <span className="text-slate-900 dark:text-white">Continue with GitHub</span>
          </button>
        </div>

        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-300 dark:border-slate-600"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white dark:bg-slate-800 text-slate-500">Or continue with</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
              Email address
            </label>
            <div className="relative">
              <Mail className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
              Password
            </label>
            <div className="relative">
              <Lock className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="••••••••"
              />
            </div>
          </div>

          <Button type="submit" variant="primary" fullWidth>
            Create Account
          </Button>
        </form>

        <p className="mt-4 text-center text-sm text-slate-600 dark:text-slate-400">
          Already have an account?{' '}
          <button className="text-teal-600 dark:text-teal-400 hover:underline">
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignInModal