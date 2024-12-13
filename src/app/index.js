'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Home = () => {
    const router = useRouter();

    useEffect(() => {
        // Redirect to Login Page
        router.replace('/user');
    }, [router]);

    return null; // Render nothing as it will redirect immediately
};

export default Home;
