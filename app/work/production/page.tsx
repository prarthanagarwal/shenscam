"use client";

import React from 'react';
import { Skiper49 } from '@/components/inverted-cards';

export default function ProductionPage() {
    return (
        <div className="bg-[#fbf4eb] min-h-screen flex flex-col items-center justify-start py-10">
            <h1 className="font-['Montserrat'] text-4xl md:text-5xl font-black text-center mb-8 text-[#a52121] tracking-[-.05e]">
                Production Work
            </h1>
            <div className="w-full max-w-6xl">
                <Skiper49 />
            </div>
        </div>
    );
}


