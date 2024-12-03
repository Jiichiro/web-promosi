import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Mail, Lock} from 'lucide-react';
import { Head, Link, useForm } from '@inertiajs/react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { setData, post, processing, errors } = useForm({
    email: '',
    password: ''
  });

  function submitHandler(e) {
    e.preventDefault()
    post('/login')
  }

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <>
      <Head>
        <title>QuicsX | Login</title>
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4 transition-colors duration-300">
        {errors.error && <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 left-0 right-0 bg-red-600 text-white text-center py-3 shadow-md z-50"
        >
          {errors.error}
        </motion.div>}
        <motion.div
          className="bg-white dark:bg-gray-800 w-full max-w-sm rounded-xl shadow-xl overflow-hidden transition-colors duration-300"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-6">
            <h2 className="text-2xl font-bold text-center mb-1 text-gray-900 dark:text-white">
              Welcome Back!
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-6">
              Please sign in to continue
            </p>

            <motion.form
              className="space-y-4"
              variants={fadeIn}
              initial="initial"
              animate="animate"
              exit="exit"
              onSubmit={submitHandler}
            >

              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-gray-400 dark:text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="email"
                    className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg 
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                           focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent 
                           transition placeholder-gray-400 dark:placeholder-gray-500"
                    placeholder="your@email.com"
                    onChange={e => setData('email', e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-gray-400 dark:text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full pl-9 pr-10 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg 
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                           focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent 
                           transition placeholder-gray-400 dark:placeholder-gray-500"
                    placeholder="••••••••"
                    onChange={e => setData('password', e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                    ) : (
                      <Eye className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                    )}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-500 dark:to-blue-400 
                       text-white py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-all duration-200 
                       transform hover:scale-[1.02] focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 
                       focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                disabled={processing}
              >
                Sign In
              </button>
            </motion.form>

            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Don't have an account?
                <Link
                  href='/register'
                  className="text-purple-600 dark:text-purple-400 font-medium hover:underline"
                >
                  Sign Up
                </Link>
              </p>
            </div>

            {/* {isLogin && (
            <div className="mt-2 text-center">
              <button className="text-xs text-purple-600 dark:text-purple-400 hover:underline">
                Forgot your password?
              </button>
            </div>
          )} */}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Login;