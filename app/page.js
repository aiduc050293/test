'use client';
import { use } from 'react';

async function fetchData() {
    const res = await fetch('/api/abc');

    return res.json();
}

export default function Home() {
    const data = use(fetchData());

    return <>{JSON.stringify(data)}</>;
}
