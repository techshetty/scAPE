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
  description: string;
  linkedinUrl: string;
  imagePath: string;
  venue: string;
}

const speakers: SpeakerData[] = [
  {
    id: "001",
    name: "Bheema Prakash Adkasthala",
    position: "Head of Service Delivery, Ericsson India",
    talkTitle: "Building a Thriving Career in a VUCA World",
    talkType: "Talk",
    description: "Learn strategies to adapt and excel in a rapidly changing, volatile, and uncertain business world.",
    linkedinUrl: "https://linkedin.com/in/bheema-adkasthala",
    imagePath: "/speakers/Bheema.png",
    venue: "Main Auditorium"
  },
  {
    id: "002",
    name: "Srikanth Shenoy",
    position: "Co-Founder, Coachbuddy.AI",
    talkTitle: "Will the real AI job please stand up?",
    talkType: "Talk",
    description: "Uncover the truth behind AI roles and gain insights into the evolving job market in artificial intelligence.",
    linkedinUrl: "https://linkedin.com/in/srikanth-shenoy",
    imagePath: "/speakers/Srikanth.png",
    venue: "Conference Room A"
  },
  {
    id: "003",
    name: "Pranav Durai",
    position: "Research Scholar, Stanford School of Medicine",
    talkTitle: "Fundamentals of Image Processing and Computer Vision",
    talkType: "Workshop",
    description: "Gain hands-on experience with foundational techniques in image processing and computer vision.",
    linkedinUrl: "https://linkedin.com/in/pranav-durai",
    imagePath: "/speakers/PranavDurai.png",
    venue: "Workshop Hall 1"
  },
  {
    id: "004",
    name: "Suhas Kudlur Viswanath",
    position: "Hardware Engineer, Arithmetic Labs",
    talkTitle: "The Future of Computation",
    talkType: "Talk",
    description: "Explore emerging trends in computation and the role of hardware in future technological advancements.",
    linkedinUrl: "https://linkedin.com/in/suhas-viswanath",
    imagePath: "/speakers/SuhasViswanath.png",
    venue: "Innovation Center"
  },
  {
    id: "005",
    name: "Ester Raina Monterio",
    position: "Data Scientist, Codecraft",
    talkTitle: "Data Science: The Magic Behind the Metrics",
    talkType: "Talk",
    description: "Discover how data science is transforming industries by turning raw data into actionable insights.",
    linkedinUrl: "https://linkedin.com/in/ester-monterio",
    imagePath: "/speakers/EsterMonterio.png",
    venue: "Data Lab"
  },
  {
    id: "006",
    name: "Samrath Sudesh Acharya",
    position: "Cyber Security Analyst, KPMG India",
    talkTitle: "Ethical Hacking 101: Unleash Your Inner Hacker",
    talkType: "Workshop",
    description: "Learn the basics of ethical hacking and gain practical skills to strengthen cybersecurity.",
    linkedinUrl: "https://linkedin.com/in/samrath-acharya",
    imagePath: "/events/SamrathAcharya.png",
    venue: "Security Workshop Room"
  }
];

const SpeakerProfile = ({ speaker, qrUrl }: { speaker: SpeakerData; qrUrl: string }) => (
    <div className="p-4 sm:p-6 relative">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
        <div className="flex-1 sm:flex sm:items-start sm:space-x-6">
          <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
            <Image
              src={speaker.imagePath}
              alt={speaker.name}
              width={140}
              height={140}
              className="rounded-lg object-cover shadow-lg"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl sm:text-2xl font-bold text-[#b4ff39]">{speaker.name}</h1>
            <p className="text-base sm:text-lg text-gray-300 mt-1">{speaker.position}</p>
            <p className="text-base sm:text-lg text-gray-300 mt-1">Venue: {speaker.venue}</p>
            <Link href={speaker.linkedinUrl} target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#2A2A2A] hover:bg-[#3A3A3A] text-white border border-[#b4ff39] hover:border-[#98d930] w-full sm:w-auto mt-4">
                <Linkedin className="h-5 w-5 mr-2" /> Connect on LinkedIn
              </Button>
            </Link>
          </div>
        </div>
  
        {/* QR Code with Title */}
        <div className="absolute right-4 sm:right-6 top-4 sm:top-6 flex-shrink-0 mt-6 sm:mt-4">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-28 h-28 sm:w-32 sm:h-32 bg-white p-2 rounded-lg shadow-lg overflow-hidden"> {/* Adjusted padding */}
              {qrUrl && (
                <img
                  src={qrUrl}
                  alt="QR Code"
                  className="w-full h-full object-cover transform scale-125" 
                />
              )}
            </div>
            <p className="text-sm text-gray-400 text-center font-medium">Scan to view profile</p>
          </div>
        </div>
      </div>
    </div>
  );
  
  
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
      QRCode.toDataURL(`${process.env.NEXT_PUBLIC_FRONTHOST}/viewspeaker?id=${speaker.id}`)
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
            <ArrowLeft className="h-5 w-5" /> <span>Back to Speakers</span>
          </Link>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="bg-[#2A2A2A] shadow rounded-lg overflow-hidden">
          <SpeakerProfile speaker={selectedSpeaker} qrUrl={qrUrl} />
          {/* Session Details Section */}
          <div className="border-t border-gray-700">
            <div className="p-6 sm:p-8 space-y-6">
              <h2 className="text-xl sm:text-2xl font-semibold text-[#b4ff39]"> Session Details </h2>
              <div className="bg-[#232323] rounded-lg p-6 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-[#b4ff39]"> {selectedSpeaker.talkTitle} </h3>
                  <p className="text-gray-300"> {selectedSpeaker.description} </p>
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
                      <div className="text-white">Nov 7, 2024</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 bg-[#2A2A2A] p-3 rounded-lg">
                    <MapPin className="h-5 w-5 text-[#b4ff39]" />
                    <div>
                      <div className="text-sm text-gray-400">Venue</div>
                      <div className="text-white">{selectedSpeaker.venue}</div>
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
