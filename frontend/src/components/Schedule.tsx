import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Binary,
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
    day: "7th November",
    events: [
      {
        icon: <Leaf />,
        title: "Inauguration",
        time: "10:00 am - 10:45 am",
        location: "",
        description: "",
        speaker: "",
        type: "",
      },
      {
        icon: <MicVocal />,
        title: "Career Opportunities in IT",
        time: "11:00 am - 11:45 am",
        location: "Ground Floor Seminar Hall",
        description: "Career Opportunities in IT",
        speaker: "Mr. Bheemaprakash",
        type: "Talk",
      },
      {
        icon: <MicVocal />,
        title: "AI Unleashed: Shaping Tomorrow's Technology",
        time: "12:00 pm - 12:45 pm",
        location: "Ground Floor Seminar Hall",
        description: "A talk on AI",
        speaker: "Shreekanth Shenoy",
        type: "Talk",
      },
      {
        icon: <Wrench />,
        title: "Deep Dive into OpenCV",
        time: "11:00 am - 1:00 pm",
        location: "First Floor Seminar Hall",
        description: "",
        speaker: "Pranav Durai",
        type: "Workshop",
      },
      {
        icon: <Gamepad2 />,
        title: "Valorant Tournament",
        time: "11:00 am - 3:00 pm",
        location: "IS Lab",
        description: "",
        speaker: "",
        type: "Competition",
      },
      {
        icon: <MicVocal />,
        title: "RISC V : Redefining Computing",
        time: "02:00 pm - 02:45 pm",
        location: "Ground Floor Seminar Hall",
        description: "",
        speaker: "Suhas Kudlur",
        type: "Talk",
      },
      {
        icon: <MicVocal />,
        title: "Data Science: The Magic Behind the Metrics",
        time: "03:00 pm - 03:45 pm",
        location: "Ground Floor Seminar Hall",
        description: "",
        speaker: "Ester",
        type: "Talk",
      },
      {
        icon: <Wrench />,
        title: "Workshop: Ethical Hacking",
        time: "02:00 pm - 4:30 pm",
        location: "First Floor Seminar Hall",
        description: "",
        speaker: "Samrath",
        type: "Workshop",
      },
    ],
  },
  {
    day: "8th November",
    events: [
      {
        icon: <SquareCode />,
        title: "CodeForge - Competitive Programming",
        time: "09:00 am - 10:45 am",
        location: "Computer Lab 1",
        description: "",
        speaker: "",
        type: "Competition",
      },
      {
        icon: <Monitor />,
        title: "CSS Action - Web Design Challenge",
        time: "09:00 am - 10:30 am",
        location: "Computer Lab 2",
        description: "",
        speaker: "",
        type: "Competition",
      },
      {
        icon: <Goal />,
        title: "Bit Breaker - Capture the Flag",
        time: "10:30 am - 12:00 pm",
        location: "Learning centre",
        description: "",
        speaker: "",
        type: "Competition",
      },
      {
        icon: <Monitor />,
        title: "Sightless Syntax-Blind Coding",
        time: "12:00 pm - 01:30 pm",
        location: "Computer Lab",
        description: "",
        speaker: "",
        type: "Competition",
      },
      {
        icon: <BrainCircuit />,
        title: "PitchX -Tech Pitch",
        time: "11:30 am - 1:30 pm",
        location: "First Floor Seminar Hall",
        description: "",
        speaker: "",
        type: "Competition",
      },
      {
        icon: <Gamepad2 />,
        title: "BGMI Tournament",
        time: "02:00 pm - 4:00 pm",
        location: "Fifth Floor CAD Lab",
        description: "",
        speaker: "",
        type: "Competition",
      },
      {
        icon: <Bug />,
        title: "Pre-Hackathon Talk",
        time: "02:00 pm",
        location: "Ground Floor Seminar Hall",
        description: "",
        speaker: "",
        type: "Hackathon",
      },
      {
        icon: <Bug />,
        title: "Hacknight Kick-off",
        time: "02:30 pm",
        location: "Skill Lab",
        description: "",
        speaker: "",
        type: "Hackathon",
      },
    ],
  },
  {
    day: "9th November",
    events: [
      {
        icon: <BrainCircuit />,
        title: "Hackathon Judging",
        time: "10:30 am - 1:30 pm",
        location: "",
        description: "",
        speaker: "",
        type: "Judging",
      },
      {
        icon: <Laptop2 />,
        title: "Final Presentation",
        time: "02:00 pm",
        location: "Seminar Hall",
        description: "",
        speaker: "",
        type: "Presentation",
      },
      {
        icon: <PartyPopper />,
        title: "Valedictory Ceremony & Awards",
        time: "04:00 pm",
        location: "Seminar Hall",
        description: "",
        speaker: "",
        type: "Ceremony",
      },
    ],
  },
];

const Schedule = () => {
  return (
    <div className="overflow-hidden pt-20 pb-20">
      <h1 className="select-none text-center text-3xl md:text-4xl font-semibold md:pb-10 pb-6">
        Schedule
      </h1>
      <div className="mx-auto max-w-7xl px-5">
        <Tabs defaultValue="7th November">
          <div className="flex justify-center items-center">
            <TabsList>
              {scheduleData.map((day) => (
                <TabsTrigger key={day.day} value={day.day}>
                  {day.day.charAt(0).toUpperCase() + day.day.slice(1)}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          {scheduleData.map((day) => (
            <TabsContent key={day.day} value={day.day} className="pt-10">
              <div className="max-w-2xl mx-auto">
                <ol className="relative border-s border-primary">
                  {day.events.map((event, index) => (
                    <li key={index} className="mb-10 ms-10">
                      <span className="absolute flex items-center justify-center w-10 h-10 bg-background rounded-full -start-5 ring-8 ring-background">
                        {event.icon}
                      </span>
                      <div className="flex mb-2 items-center md:text-xl text-lg tracking-wider font-semibold">
                        <span>
                          {event.title}{" "}
                          {event.type && <Badge>{event.type}</Badge>}
                        </span>
                      </div>
                      <div className="mb-2 text-primary md:text-base text-sm tracking-wider">
                        {event.speaker}
                      </div>
                      <time className="block mb-2 font-normal leading-none text-white/60">
                        {event.time}
                      </time>
                      <p className="text-base font-normal text-white/85">
                        {event.location}
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
