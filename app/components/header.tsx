import React from 'react';

export default function Header() {
    return (
        <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-800">
            PELUSA
        </h1>
        <p className="max-w-[600px] text-zinc-200 md:text-xl dark:text-zinc-100 mx-auto">
            PELUSA (Predictive Engine for Legitimate & Unverified Site Assessment) helps you find out if a website is legitimate or not.
        </p>
        </div>
    );
}
