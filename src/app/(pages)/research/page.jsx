'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import Header from "@/components/Header";

function Research() {
    const router = useRouter();
    useEffect(() => {
        router.push(`/research/facilities`);
    }, [router]);
    return (
        <div className="details">
            <Header title="Research" />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    );
}

export default Research;
