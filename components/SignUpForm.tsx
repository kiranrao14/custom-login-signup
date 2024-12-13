'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const SignUpForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        console.log('Signup successfully with:', { email, password });

        // Simulating a successful signup
        setTimeout(() => {
            alert('Signup successful!');
            router.push('/signupConfirmation'); // Navigate to Signup Confirmation page
        }, 500);
    };

    return (
        <Card className="w-[400px]">
            <CardHeader>
                <CardTitle>Sign Up</CardTitle>
                <CardDescription className='text-2xl font-bold'>Enter the asked details to create a new account</CardDescription>
            </CardHeader>
            <CardContent>
                <br></br>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                        <Input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <br></br>
                    <div className="space-y-2 text-black">
                        <Input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <br></br>
                    <div className="space-y-2">
                        <Input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <br></br>
                    <div className="flex justify-center">
                        <Button
                            type="submit"
                            className="w-full bg-green-600 p-4 text-white hover:bg-green-700"
                        >
                            Sign Up
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
};

export default SignUpForm;


