'use server';

import { z } from 'zod';
import { supabase } from './supabase';

// Validation schema for lead submission
const leadSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),
  name: z.string().min(1, 'Name is required').max(100, 'Name is too long'),
});

export type LeadFormData = z.infer<typeof leadSchema>;

export interface SubmitLeadResult {
  success: boolean;
  message: string;
  error?: string;
}

/**
 * Submit a new lead to the waitlist
 * Includes a 2-second delay to simulate processing
 * Handles duplicate email errors (Postgres 23505)
 */
export async function submitLead(
  formData: LeadFormData
): Promise<SubmitLeadResult> {
  try {
    // Validate form data
    const validatedData = leadSchema.parse(formData);

    // Simulate processing delay (tech-native feel)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Insert into Supabase
    const { error } = await supabase.from('leads').insert([
      {
        email: validatedData.email.toLowerCase().trim(),
        name: validatedData.name.trim(),
        created_at: new Date().toISOString(),
      },
    ]);

    if (error) {
      // Handle duplicate email (Postgres unique violation)
      if (error.code === '23505') {
        return {
          success: false,
          message: "You're already on our waitlist! 🎉",
          error: 'duplicate_email',
        };
      }

      // Handle other database errors
      console.error('Supabase error:', error);
      return {
        success: false,
        message: 'Something went wrong. Please try again.',
        error: error.message,
      };
    }

    return {
      success: true,
      message: "Welcome to Scent Stories! You're on the waitlist. ✨",
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const firstError = error.errors[0];
      return {
        success: false,
        message: firstError.message,
        error: 'validation_error',
      };
    }

    console.error('Unexpected error:', error);
    return {
      success: false,
      message: 'Something went wrong. Please try again.',
      error: 'unknown_error',
    };
  }
}