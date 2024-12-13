
'use client'
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useRouter } from 'next/navigation';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt with:', { email, password });

    // Simulating a successful login
    setTimeout(() => {
      alert('Login successful!');
      router.push('/'); // Navigate to the Welcome page
    }, 500);
  };

  return (
    <Card className="w-[450px] mx-auto p-4 rounded-lg shadow-lg">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription className="font-bold text-2xl">
          Enter your credentials to access your account
        </CardDescription>
        <br></br>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="w-[20px]">
          <div className="w-[20px]">
            <Input
              type="email" // Corrected from {email} to "email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <br></br>
          <div className="">
            <Input
              type="password" // Corrected from {password} to "password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <br></br>
          <div className="flex justify-center mt-4">
            <Button
              type="submit"
              className="w-full bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition duration-300"
            >
              Login
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
