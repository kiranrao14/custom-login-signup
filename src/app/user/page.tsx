
'use client'

import LoginForm from '../../../components/LoginForm';
import SignUpForm from '../../../components/SignUpForm';
import { useState } from 'react';
import { Button } from '../../../components/ui/button';

export default function User() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 border-white text-white">
            <div className="mb-4 text-2xl">
                <Button
                    className="text-sm"
                    onClick={() => setIsLogin(!isLogin)}
                    variant={'ghost'}
                >
                    {isLogin ? (
                        <span className="font-bold">Need an Account? Create</span>
                    ) : (
                        <span className="font-bold">Login with your Current Account</span>
                    )}
                </Button>
            </div>
            <div className="w-[350px] p-4 border-8 border-white rounded-md">
                {isLogin ? <LoginForm /> : <SignUpForm />}
            </div>
        </div>
    );
}
