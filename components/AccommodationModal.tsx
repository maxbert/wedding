"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { supabase } from "@/lib/supabase";

interface AccommodationFormData {
  name: string;
  accommodation: string;
  guests: number;
}

export function AccommodationModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<AccommodationFormData>();

  const onSubmit = async (data: AccommodationFormData) => {
    setIsSubmitting(true);
    setError(null);
    
    try {
      const { error: supabaseError } = await supabase
        .from('accomodations')
        .insert([
          {
            name: data.name,
            accommodation: data.accommodation,
            guests: data.guests
          }
        ]);

      if (supabaseError) throw supabaseError;
      
      setIsSubmitted(true);
      reset();
      setTimeout(() => {
        setIsOpen(false);
        setIsSubmitted(false);
      }, 2000);
    } catch (err) {
      console.error('Error submitting accommodation:', err);
      setError('There was an error submitting your accommodation details. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-[#5e925e] hover:bg-[#4a734a] text-[#f5e6d3] px-8 py-2 rounded-full">
          Confirm Accommodation
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Accommodation Details</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              {...register('name', { required: true })}
              className={errors.name ? 'border-red-500' : ''}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">Please enter your name</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="accommodations">Where will you be staying?</Label>
            <Input
              id="accommodations"
              {...register('accommodation', { required: true })}
              className={errors.accommodation ? 'border-red-500' : ''}
            />
            {errors.accommodation && (
              <p className="text-red-500 text-sm">Please enter your accommodation location</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="guests">How many guests are staying with you?</Label>
            <Input
              id="guests"
              type="number"
              min="1"
              {...register('guests', { required: true, min: 1 })}
              className={errors.guests ? 'border-red-500' : ''}
            />
            {errors.guests && (
              <p className="text-red-500 text-sm">Please enter the number of guests</p>
            )}
          </div>

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          {isSubmitted && (
            <p className="text-green-600 text-sm">Thank you! Your accommodation details have been recorded.</p>
          )}

          <Button 
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#5e925e] hover:bg-[#4a734a] text-[#f5e6d3]"
          >
            {isSubmitting ? 'Submitting...' : 'Confirm'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
} 