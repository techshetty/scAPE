import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Blocks,
  BookCheckIcon,
  Brain,
  BrainCircuit,
  Bug,
  Code2,
  CodeIcon,
  Computer,
  Cookie,
  CookingPot,
  FerrisWheel,
  Gamepad2,
  GitCompareArrows,
  Goal,
  Laptop2,
  LaptopIcon,
  Leaf,
  MicIcon,
  MicVocal,
  Monitor,
  PartyPopper,
  Sandwich,
  ScrollIcon,
  SendToBack,
  Soup,
  Sparkle,
  Sparkles,
  SquareCode,
  Users,
  UsersRound,
  Utensils,
  Workflow,
  Wrench,
} from "lucide-react";
import { PersonIcon } from "@radix-ui/react-icons";
import { Badge } from "@/components/ui/badge";
import { Code } from "mongodb";

const scheduleData = [
  {
    day: "7th Nov",
    events: [
      {
        icon: <Leaf />,
        title: "Inauguration",
        time: "10:00 am - 10:45 am",
        description: "",
        speaker: "",
        type: "",
      },
      {
        icon: <MicVocal />,
        title: "DevTalk: Building a Thriving Career in a VUCA World",
        time: "11:00 am - 11:45 am",
        description: "How to navigate and grow in a volatile, uncertain, complex, and ambiguous world.",
        speaker: "Bheema Prakash Adkasthala, Head of Service Delivery, Ericsson India",
        type: "Talk",
      },
      {
        icon: <MicVocal />,
        title: "DevTalk: Will the real AI job please stand up?",
        time: "12:00 pm - 12:45 pm",
        description: "Exploring the evolving landscape of AI jobs and future opportunities.",
        speaker: "Srikanth Shenoy, Co-Founder, Coachbuddy.AI",
        type: "Talk",
      },
      {
        icon: <Wrench />,
        title: "Masterclass: Fundamentals of Image Processing and Computer Vision",
        time: "11:30 am - 1:00 pm",
        description: "Introduction to key techniques in image processing and computer vision.",
        speaker: "Pranav Durai, Research Scholar, Stanford School of Medicine",
        type: "Workshop",
      },
      {
        icon: <MicVocal />,
        title: "The Future of Computation",
        time: "2:00 pm - 2:30 pm",
        description: "How RISC-V is shaping the future of computational systems and innovation.",
        speaker: "Suhas Kudlur Viswanath, Hardware Engineer, Arithmetic Labs",
        type: "Talk",
      },
      {
        icon: <MicVocal />,
        title: "DevTalk 4",
        // time: "3:00 pm - 3:45 pm",
        description: "TBA",
        speaker: "TBA",
        type: "Talk",
      },
      {
        icon: <Wrench />,
        title: "MasterClass: Ethical Hacking 101: Unleash Your Inner Hacker",
        time: "2:00 pm - 4:00 pm",
        description: "A hands-on session on ethical hacking and cybersecurity fundamentals.",
        speaker: "Samrath Sudesh Acharya, Cyber Security Analyst, KPMG India",
        type: "Workshop",
      },
      // {
      //   icon: <CookingPot />,
      //   title: "Lunch Break",
      //   time: "1:30 pm - 02:15 pm",
      //   description: "",
      //   speaker: "",
      //   type: "",
      // },

      {
        icon: <Gamepad2 />,
        title: "Valorant",
        time: "11:00 pm - 06:00 pm",
        description: "TBA",
        speaker: "Become the ultimate agent in our Valorant competition!",
        type: "Competition",
      },
    ],
  },
  {
    day: "8th Nov",
    events: [
      {
        icon: <SquareCode />,
        title: "CodeForge - CP ",
        time: "09:00 am - 10:15 am",
        description: "",
        speaker: "Competitive Programming Battle: Unleash Your Coding Prowess",
        type: "Competition",
      },
      {
        icon: <Monitor />,
        title: "CSS Action",
        time: "9:00 am - 10:45 pm",
        description: "TBA",
        speaker: "Put your web design chops to the test!",
        type: "Competition",
      },
      {
        icon: <Goal />,
        title: "Capture the Flag",
        time: "10:30 am - 12:00 pm",
        description: "TBA",
        speaker: "Are you ready for a mind-bending challenge?",
        type: "Competition",
      },
      {
        icon: <BrainCircuit />,
        title: "Tech Pitch",
        time: "11:30 am - 1:30 pm",
        description: "TBA",
        speaker: "Spark Innovation and Inspire Change!",
        type: "Competition",
      },
      {
        icon: <CodeIcon />,
        title: "Sightless Coding ",
        time: "12:00 pm - 01:30 pm",
        description: "TBA",
        speaker: "Are you a coding mastermind?",
        type: "Competition",
      },
      {
        icon: <Gamepad2 />,
        title: "Battleground Brawl ",
        time: "02:00 pm - 04:00 pm",
        description: "TBA",
        speaker: "Enter the battleground and claim victory in BGMI’s online showdown.",
        type: "Competition",
      },
      // {
      //   icon: <Soup />,
      //   title: "Lunch Break",
      //   time: "12:45 pm - 01:45 pm",
      //   description: "TBA",
      //   speaker: "",
      //   type: "",
      // },
      // {
      //   icon: <SendToBack />,
      //   title: "Hackathon Registration / Onboarding",
      //   time: "03:45 pm - 04:00 pm",
      //   description: "20 Teams to be participating offline in the Venue.",
      //   speaker: "TBA",
      //   type: "",
      // },
      {
        icon: <Bug />,
        title: "Hacknight Kick-off",
        time: "04:00 pm",
        description: "",
        speaker: "Team up, code through the night, and build groundbreaking tech solutions.",
        type: "",
      },
    ],
  },
  {
    day: "9th Nov",
    events: [
      {
        icon: <BrainCircuit />,
        title: "Judging Round Starts",
        time: "10:30 am - 1:30 pm",
        description: "On their respective places",
        speaker: "",
        type: "",
      },
      {
        icon: <Laptop2 />,
        title: "Final Presentation",
        time: "02:00 pm",
        description: "TBA",
        speaker: "",
        type: "",
      },
      {
        icon: <PartyPopper />,
        title: "Valedictory and Prize Distribution",
        time: "04:00 pm",
        description: "",
        speaker: "May the prize be with you!",
        type: "",
      },
    ],
  },
];

const Schedule = () => {
  return (
    <div className="overflow-hidden pt-16 md:pt-20 pb-16 md:pb-20">
      <h1 className="select-none text-center text-2xl md:text-3xl lg:text-4xl font-semibold pb-4 md:pb-6 lg:pb-10">
        Schedule
      </h1>
      <div className="mx-auto max-w-7xl px-3 md:px-5">
        <Tabs defaultValue="7th Nov" className="w-full">
          <div className="flex justify-center items-center overflow-x-auto pb-2 md:pb-0">
            <TabsList className="h-auto flex-wrap justify-center">
              {scheduleData.map((day) => (
                <TabsTrigger 
                  key={day.day} 
                  value={day.day}
                  className="px-2 py-1 md:px-4 md:py-2 text-sm md:text-base whitespace-nowrap"
                >
                  {day.day.charAt(0).toUpperCase() + day.day.slice(1)}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          {scheduleData.map((day) => (
            <TabsContent 
              key={day.day} 
              value={day.day} 
              className="pt-6 md:pt-10"
            >
              <div className="max-w-2xl mx-auto px-2 md:px-0">
                <ol className="relative border-s border-primary">
                  {day.events.map((event, index) => (
                    <li key={index} className="mb-8 md:mb-10 ms-6 md:ms-10">
                      <span className="absolute flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-background rounded-full -start-4 md:-start-5 ring-4 md:ring-8 ring-background">
                        {event.icon}
                      </span>
                      <div className="flex flex-wrap gap-2 mb-1 md:mb-2 items-center text-base md:text-lg lg:text-xl tracking-wide md:tracking-wider font-semibold">
                        <span className="break-words">
                          {event.title}{" "}
                          {event.type && (
                            <Badge className="ml-0 mt-1 md:ml-2 md:mt-0 text-xs md:text-sm">
                              {event.type}
                            </Badge>
                          )}
                        </span>
                      </div>
                      <div className="mb-1 md:mb-2 text-primary text-sm md:text-base tracking-wide md:tracking-wider break-words">
                        {event.speaker}
                      </div>
                      <time className="block mb-1 md:mb-2 text-sm md:text-base font-normal leading-none text-white/60">
                        {event.time}
                      </time>
                      <p className="text-sm md:text-base font-normal text-white/85">
                        {event.description}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Schedule;
