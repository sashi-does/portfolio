"use client";

import { useState } from "react";

export default function TotalVisits() {
    const [time, setTime] = useState<Date>(new Date());

    setInterval(() => {
        setTime(new Date());
    }, 1000);

    return (
<div className="fixed top-2 right-2 z-50 bg-[#1a1a1a]/90 text-gray-300 px-3 py-1 rounded-md shadow-sm font-mono text-xs tracking-wide select-none">
            Time: {time.getHours() % 12 === 0 ? 12 : time.getHours() % 12}:
            {time.getMinutes().toString().padStart(2, '0')}:
            {time.getSeconds().toString().padStart(2, '0')} {time.getHours() >= 12 ? 'PM' : 'AM'}
        </div>
    );
}