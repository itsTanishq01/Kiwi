import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MicIcon, HeadphonesIcon, BellIcon, HouseIcon, ClipboardCheckIcon } from "lucide-react";

const WhyKiwi = () => {
  return (
    <section id="why-kiwi" className="min-h-screen py-20 text-foreground">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-primary text-center mb-12">Why Choose Kiwi?</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {[
            {
              Icon: MicIcon,
              title: "Entirely Voice Controlled with User ID Capability",
              description: <div>
                <p className="text-foreground/90">
                  Kiwi removes all barriers by being 100% voice-controlled with zero UI:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                  <li>No learning curve – Just speak naturally, and it responds.</li>
                  <li>No screen distractions – No notifications, confusing apps, or accidental taps.</li>
                  <li>No unnecessary complexity – Seniors don't need to remember how to use it—it just works.</li>
                </ul>
              </div>
            },
            {
              Icon: HeadphonesIcon,
              title: "Always-Available AI Companion",
              description: <div>
                <p className="text-foreground/90">
                  Most AI assistants (like Siri or Alexa) require a smartphone, smart speaker, or Wi-Fi setup. Kiwi doesn't:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                  <li>Always there, and always ready to help.</li>
                  <li>Responds contextually, not just based on rigid commands.</li>
                  <li>Understands who is speaking and provides personalized responses.</li>
                </ul>
              </div>
            },
            {
              Icon: BellIcon,
              title: "Connects with Retirement Homes and Assisted Living Centers",
              description: <div>
                <p className="text-foreground/90">
                  Kiwi isn't just an independent device—it integrates seamlessly into existing care infrastructure:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                  <li>Syncs with senior care center emergency systems – If a resident falls, staff gets an instant alert.</li>
                  <li>Automated daily health check-ins – AI asks residents how they feel, detecting early warning signs.</li>
                  <li>Remote caregiver dashboard – Facility nurses and family members can access health data in real-time.</li>
                </ul>
              </div>
            },
            {
              Icon: ClipboardCheckIcon,
              title: "Benefits for Senior Care Centers",
              description: <div>
                <p className="text-foreground/90">
                  Kiwi enhances the quality of care while reducing staff workload:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                  <li>Faster emergency response - Reduces the time taken to assist residents after a fall or health event</li>
                  <li>Minimizes caregiver workload - AI handles routine tasks, allowing staff to focus on critical care</li>
                  <li>Supports independent living - Residents don't have to rely on staff for basic needs like reminders and calls</li>
                </ul>
              </div>
            },
            {
              Icon: HouseIcon,
              title: "Expanding Beyond Senior Homes",
              description: <div>
                <p className="text-foreground/90">
                  From Assisted Living to Personal Homes – Kiwi works for seniors living independently:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                  <li>Smart home integrations - Automatically adjusts lighting at night and monitors movement</li>
                  <li>Wellness reminders - Prompts for hydration, meals, and exercise</li>
                  <li>Sleep monitoring - Tracks sleep patterns and flags irregularities for caregivers</li>
                  <li>Peace of mind - Families can stay connected while seniors maintain independence</li>
                </ul>
                <p className="mt-4 text-foreground/90 italic">
                  Unlike Apple Watch or Fitbit, Kiwi is not just a gadget—it's a proactive, voice-first AI assistant that empowers seniors to live independently while staying connected and safe.
                </p>
              </div>
            }
          ].map(({ Icon, title, description }, index) => (
            <Card 
              key={index} 
              className="transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-xl active:scale-95"
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-4">
                  <Icon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-bold text-primary">{title}</h3>
                </div>
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyKiwi;
