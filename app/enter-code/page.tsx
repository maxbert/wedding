'use client';

import { Navigation } from "@/components/Navigation";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import bcrypt from 'bcryptjs';
import { DecorativeFlower, DecorativeLeaf } from "@/components/DecorativeElements";

// This is the hashed version of 'flaxviper'
const CORRECT_HASH = bcrypt.hashSync('flaxviper', 10);

export default function EnterCodePage() {
  const [code, setCode] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const checkCode = async () => {
      const isValid = await bcrypt.compare(code, CORRECT_HASH);
      setIsValid(isValid);
    };
    
    checkCode();
  }, [code]);

  return (
    <div className="min-h-screen bg-[#f5e6d3]">
      <Navigation currentPage="enter-code"/>
      <div className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center">
        {!isValid ? (
          <form onSubmit={() => {}} className="w-64">
            <Input
              type="text"
              value={code}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCode(e.target.value)}
              className="bg-transparent text-center rounded-none text-xl border-0 border-black border-b-2 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </form>
        ) : (
          <div className="text-center">
            <h1 className="font-['sloop'] text-5xl mb-8">Rehearsal Dinner Information</h1>
            <Card className="max-w-2xl mx-auto bg-[#fff5eb] border-2 border-black">
              <CardContent className="p-6">
                <p className="text-center text-lg">
                  As a close family member or member of the wedding party, you are invited to the rehearsal dinner on Saturday, August 23rd at 5:30pm.
                  <br />
                  <br />
                  The dinner will be held at the venue, inside the mansion, please dress appropriately.
                  <br />
                  <br />
                  As a member of the wedding party, your accomodation for the night of the rehersal dinner and the night of the wedding is provided for. If you're unaware of where you're staying, please let us know.
                  <br />
                  <br />
                  No need to RSVP, your attendance is assumed if you RSVPed for the wedding.
                </p>
              </CardContent>
            </Card>
          </div>
        )}
        <DecorativeLeaf />
        <DecorativeFlower />
      </div>
    </div>
  );
} 