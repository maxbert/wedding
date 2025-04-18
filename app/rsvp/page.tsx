'use client';

import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

interface RsvpFormData {
  name: string;
  attendance: 'attending' | 'attending-plus-one' | 'not-attending';
  guestName?: string;
}

export default function RsvpPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<RsvpFormData>({
    defaultValues: {
      attendance: 'attending'
    }
  });

  const attendance = watch('attendance');

  const onSubmit = async (data: RsvpFormData) => {
    setIsSubmitting(true);
    setError(null);
    
    try {
      const { error: supabaseError } = await supabase
        .from('rsvp')
        .insert([
          {
            name: data.name,
            guests_name: data.attendance === 'attending-plus-one' ? data.guestName : null,
            will_attend: data.attendance !== 'not-attending'
          }
        ]);

      if (supabaseError) throw supabaseError;
      
      setIsSubmitted(true);
    } catch (err) {
      console.error('Error submitting RSVP:', err);
      setError('There was an error submitting your RSVP. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#f5e6d3]">
        <Navigation currentPage="rsvp"/>
        <div className="relative h-[calc(100vh-3.5rem)]">
          <div className="absolute inset-8 border-[3px] border-black rounded-[2.5rem]">
            <div className="absolute inset-3 border-[3px] border-black rounded-[2rem]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-[#fff5eb] rounded-[2rem] w-[32rem] py-16 px-12 relative">
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                    <Image
                      src="/images/flower-right.png"
                      alt="Decorative element"
                      width={60}
                      height={60}
                      className="opacity-80"
                    />
                  </div>
                  <h1 className="font-['sloop'] text-4xl text-center mb-8">Thank You</h1>
                  <p className="text-center">Your response has been recorded.</p>
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
                    <div className="w-4 h-4 rotate-45 border border-black"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5e6d3]">
      <Navigation currentPage="rsvp"/>

      {/* Main container with border */}
      <div className="relative h-[calc(100vh-3.5rem)]">
        {/* Screen edge borders */}
        <div className="absolute inset-8 border-[3px] border-black rounded-[2.5rem]">
          <div className="absolute inset-3 border-[3px] border-black rounded-[2rem]">
            {/* Center content */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Content card */}
              <div className="bg-[#fff5eb] rounded-[2rem] w-[32rem] py-16 px-12 relative">
                {/* Decorative top element */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                  <Image
                    src="/images/flower-right.png"
                    alt="Decorative element"
                    width={60}
                    height={60}
                    className="opacity-80"
                  />
                </div>

                {/* French title */}
                <h1 className="font-['sloop'] text-4xl text-center mb-8">Répondez s'il vous plaît</h1>

                {/* RSVP deadline */}
                <p className="text-center mb-12 text-sm">The favor of your reply is requested by the twenty fourth of June.</p>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                  {/* Name input */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">I,</span>
                      <input 
                        type="text" 
                        {...register('name', { required: true })}
                        className={`flex-1 border-b ${errors.name ? 'border-red-500' : 'border-black'} bg-transparent focus:outline-none px-2`}
                      />
                    </div>
                    {errors.name && (
                      <p className="text-red-500 text-sm pl-8">Please enter your name</p>
                    )}
                  </div>

                  {/* Attendance radio group */}
                  <div className="space-y-4">
                    <RadioGroup 
                      value={attendance}
                      onValueChange={(value: 'attending' | 'attending-plus-one' | 'not-attending') => {
                        setValue('attendance', value);
                        if (value !== 'attending-plus-one') {
                          setValue('guestName', undefined);
                        }
                      }}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="attending" id="attending" />
                        <Label htmlFor="attending" className="text-sm">will attend.</Label>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="attending-plus-one" id="attending-plus-one" />
                          <Label htmlFor="attending-plus-one" className="text-sm">will attend with one additional guest.</Label>
                        </div>
                        {attendance === 'attending-plus-one' && (
                          <div className="pl-6">
                            <div className="flex items-center gap-2">
                              <span className="text-sm">Guest's name:</span>
                              <input 
                                type="text" 
                                {...register('guestName', {
                                  required: attendance === 'attending-plus-one'
                                })}
                                className={`flex-1 border-b ${errors.guestName ? 'border-red-500' : 'border-black'} bg-transparent focus:outline-none px-2 text-sm`}
                              />
                            </div>
                            {errors.guestName && (
                              <p className="text-red-500 text-sm mt-1">Please enter your guest's name</p>
                            )}
                          </div>
                        )}
                      </div>

                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="not-attending" id="not-attending" />
                        <Label htmlFor="not-attending" className="text-sm">will be unable to attend.</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {error && (
                    <p className="text-red-500 text-sm text-center">{error}</p>
                  )}

                  {/* Submit button */}
                  <div className="flex justify-center">
                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#5e925e] hover:bg-[#4a734a] text-[#f5e6d3] px-8 py-2 rounded-full disabled:opacity-50"
                    >
                      {isSubmitting ? 'submitting...' : 'submit'}
                    </Button>
                  </div>
                </form>

                {/* Decorative bottom element */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
                  <div className="w-4 h-4 rotate-45 border border-black"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute left-0 bottom-32 z-10">
          <Image
            src="/images/leaf-left.png"
            alt="Decorative leaf"
            className="w-[18rem] h-auto opacity-80"
            width={200}
            height={300}
          />
        </div>
        <div className="absolute right-0 top-32 z-10">
          <Image
            src="/images/flower-right.png"
            alt="Decorative flower"
            className="w-[18rem] h-auto opacity-80"
            width={800}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
} 