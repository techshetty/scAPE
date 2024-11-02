"use client";

import React, { useEffect, useState } from "react";
import NoUserFound from "@/components/NoUserFound";
import QRCode from 'qrcode';
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Users, Calendar, MapPin, Linkedin, Clock } from "lucide-react";
import dynamic from "next/dynamic";

const CursorTrailCanvas = dynamic(() => import('@/components/CursorTrailCanvas'), { ssr: false });

interface SpeakerData {
    id: string;
    name: string;
    position: string;
    talkTitle: string;
    talkType: string;
    linkedinUrl: string;
    imagePath: string;
}

// Event descriptions mapping
const eventDescriptions: Record<string, string> = {
    "Talk": "An engaging presentation that combines industry insights with practical knowledge, designed to inspire and educate attendees.",
    "Workshop": "A hands-on interactive session where participants will get practical experience and detailed guidance from the speaker."
};

const speakers: SpeakerData[] = [
    {
        id: "001",
        name: "Bheema Prakash Adkasthala",
        position: "Head of Service Delivery, Ericsson India",
        talkTitle: "Building a Thriving Career in a VUCA World",
        talkType: "Talk",
        linkedinUrl: "https://linkedin.com/in/bheema-adkasthala",
        imagePath: "/speakers/Bheema.png"
    },
    {
        id: "002",
        name: "Srikanth Shenoy",
        position: "Co-Founder, Coachbuddy.AI",
        talkTitle: "Will the real AI job please stand up?",
        talkType: "Talk",
        linkedinUrl: "https://linkedin.com/in/srikanth-shenoy",
        imagePath: "/speakers/Srikanth.png"
    },
    {
        id: "003",
        name: "Pranav Durai",
        position: "Research Scholar, Stanford School of Medicine",
        talkTitle: "Fundamentals of Image Processing and Computer Vision",
        talkType: "Workshop",
        linkedinUrl: "https://linkedin.com/in/pranav-durai",
        imagePath: "/speakers/PranavDurai.png"
    },
    {
        id: "004",
        name: "Suhas Kudlur Viswanath",
        position: "Hardware Engineer, Arithmetic Labs",
        talkTitle: "The Future of Computation",
        talkType: "Talk",
        linkedinUrl: "https://linkedin.com/in/suhas-viswanath",
        imagePath: "/speakers/SuhasViswanath.png"
    },
    {
        id: "005",
        name: "Ester Raina Monterio",
        position: "Data Scientist, Codecraft",
        talkTitle: "Data Science: The Magic Behind the Metrics",
        talkType: "Talk",
        linkedinUrl: "https://linkedin.com/in/ester-monterio",
        imagePath: "/speakers/EsterMonterio.png"
    },
    {
        id: "006",
        name: "Samrath Sudesh Acharya",
        position: "Cyber Security Analyst, KPMG India",
        talkTitle: "Ethical Hacking 101: Unleash Your Inner Hacker",
        talkType: "Workshop",
        linkedinUrl: "https://linkedin.com/in/samrath-acharya",
        imagePath: "/events/SamrathAcharya.png"
    }
];

export default function ProfilePage() {
    const [selectedSpeaker, setSelectedSpeaker] = useState<SpeakerData | null>(null);
    const [qrUrl, setQrUrl] = useState<string>('');
    const [userExists, setUserExists] = useState(true);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const speakerId = urlParams.get('id');
        const speaker = speakers.find(s => s.id === speakerId);
        if (speaker) {
            setSelectedSpeaker(speaker);
            setUserExists(true);
            QRCode.toDataURL(`${process.env.NEXT_PUBLIC_FRONTHOST}/profile?id=${speaker.id}`)
                .then(url => setQrUrl(url));
        } else {
            setUserExists(false);
        }
    }, []);

    if (!userExists) return <NoUserFound />;
    if (!selectedSpeaker) return <div>Loading...</div>;

    return (
        <div className="min-h-screen bg-[#1E1E1E] text-white relative">
            <CursorTrailCanvas className="pointer-events-none z-50 md:flex hidden fixed inset-0 h-full w-full" />

            {/* Header */}
            <header className="bg-[#2A2A2A] shadow sticky top-0 z-10">
                <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <Link href="/" className="flex items-center space-x-2 text-[#b4ff39] hover:opacity-80 transition-opacity">
                        <ArrowLeft className="h-5 w-5" />
                        <span>Back to Speakers</span>
                    </Link>
                </div>
            </header>

            <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <div className="bg-[#2A2A2A] shadow rounded-lg overflow-hidden">
                    {/* Profile Header Section */}
                    <div className="p-6 sm:p-8">
                        <div className="flex flex-col sm:flex-row gap-6">
                            <div className="flex flex-row sm:flex-col gap-4 sm:gap-6">
                                {/* Image and QR side by side on mobile */}
                                <div className="w-32 h-32 sm:w-48 sm:h-48 flex-shrink-0">
                                    <Image
                                        src={selectedSpeaker.imagePath}
                                        alt={selectedSpeaker.name}
                                        width={192}
                                        height={192}
                                        className="rounded-lg object-cover w-full h-full"
                                    />
                                </div>
                                <div className="w-32 h-32 sm:w-48 bg-white p-2 rounded-lg block sm:hidden">
                                    {qrUrl && <img src={qrUrl} alt="QR Code" className="w-full h-full" />}
                                </div>
                            </div>

                            {/* Speaker Info */}
                            <div className="flex-1">
                                <div className="space-y-4">
                                    <h1 className="text-2xl sm:text-3xl font-bold text-[#b4ff39]">
                                        {selectedSpeaker.name}
                                    </h1>
                                    <p className="text-lg sm:text-xl text-gray-300">
                                        {selectedSpeaker.position}
                                    </p>
                                    <Link 
                                        href={selectedSpeaker.linkedinUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        <Button className="bg-[#2A2A2A] hover:bg-[#3A3A3A] text-white border border-[#b4ff39] hover:border-[#98d930]">
                                            <Linkedin className="h-5 w-5 mr-2" />
                                            Connect on LinkedIn
                                        </Button>
                                    </Link>
                                </div>
                            </div>

                            {/* QR Code - Desktop Only */}
                            <div className="hidden sm:block w-48">
                                <div className="bg-white p-4 rounded-lg">
                                    {qrUrl && <img src={qrUrl} alt="QR Code" className="w-full" />}
                                    <p className="text-sm text-gray-600 text-center mt-2">
                                        Scan to view profile
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Session Details Section */}
                    <div className="border-t border-gray-700">
                        <div className="p-6 sm:p-8 space-y-6">
                            <h2 className="text-xl sm:text-2xl font-semibold text-[#b4ff39]">
                                Session Details
                            </h2>
                            <div className="bg-[#232323] rounded-lg p-6 space-y-6">
                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold text-[#b4ff39]">
                                        {selectedSpeaker.talkTitle}
                                    </h3>
                                    <p className="text-gray-300">
                                        {eventDescriptions[selectedSpeaker.talkType]}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                    <div className="flex items-center space-x-3 bg-[#2A2A2A] p-3 rounded-lg">
                                        <Users className="h-5 w-5 text-[#b4ff39]" />
                                        <div>
                                            <div className="text-sm text-gray-400">Type</div>
                                            <div className="text-white">{selectedSpeaker.talkType}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-3 bg-[#2A2A2A] p-3 rounded-lg">
                                        <Clock className="h-5 w-5 text-[#b4ff39]" />
                                        <div>
                                            <div className="text-sm text-gray-400">Duration</div>
                                            <div className="text-white">45 mins</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-3 bg-[#2A2A2A] p-3 rounded-lg">
                                        <Calendar className="h-5 w-5 text-[#b4ff39]" />
                                        <div>
                                            <div className="text-sm text-gray-400">Date</div>
                                            <div className="text-white">Nov 15, 2024</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-3 bg-[#2A2A2A] p-3 rounded-lg">
                                        <MapPin className="h-5 w-5 text-[#b4ff39]" />
                                        <div>
                                            <div className="text-sm text-gray-400">Venue</div>
                                            <div className="text-white">Main Auditorium</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
