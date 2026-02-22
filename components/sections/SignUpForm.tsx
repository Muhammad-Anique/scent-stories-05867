'use client';

import { useState } from 'react';
import { useFormStatus } from 'react-dom';
import { toast } from 'sonner';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { submitLead } from '@/lib/actions';
import { Sparkles, Flame, Mail } from 'lucide-react';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      size="lg"
      className="w-full sm:w-auto"
      isLoading={pending}
    >
      {pending ? 'Joining...' : 'Join the Waitlist'}
      <Sparkles className="ml-2 h-4 w-4" />
    </Button>
  );
}

export function SignUpForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');

  async function handleSubmit(formData: FormData) {
    // Clear previous errors
    setEmailError('');
    setNameError('');

    const result = await submitLead({
      email: formData.get('email') as string,
      name: formData.get('name') as string,
    });

    if (result.success) {
      // Spicy success toast
      toast.success(result.message, {
        icon: <Flame className="h-5 w-5 text-orange-400" />,
        description: "We'll notify you when early access opens.",
        duration: 5000,
      });
      // Clear form
      setEmail('');
      setName('');
    } else {
      // Handle specific errors
      if (result.error === 'duplicate_email') {
        toast.info(result.message, {
          icon: <Mail className="h-5 w-5 text-violet-400" />,
          description: 'No need to sign up again!',
          duration: 4000,
        });
      } else if (result.error === 'validation_error') {
        // Show validation errors inline
        if (result.message.toLowerCase().includes('email')) {
          setEmailError(result.message);
        } else if (result.message.toLowerCase().includes('name')) {
          setNameError(result.message);
        } else {
          toast.error(result.message, {
            icon: <Flame className="h-5 w-5 text-red-400" />,
          });
        }
      } else {
        // Spicy error toast
        toast.error(result.message, {
          icon: <Flame className="h-5 w-5 text-red-400" />,
          description: 'Please try again in a moment.',
        });
      }
    }
  }

  return (
    <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <div className="bg-glass rounded-2xl p-8 sm:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to find your{' '}
              <span className="text-gradient">signature scent</span>?
            </h2>
            <p className="text-violet-200 text-lg">
              Join the waitlist for exclusive early access and special launch
              perks.
            </p>
          </div>

          <form action={handleSubmit} className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <Input
                name="name"
                type="text"
                placeholder="Your name"
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                required
                autoComplete="name"
              />
              <Input
                name="email"
                type="email"
                placeholder="you@example.com"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                required
                autoComplete="email"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-4">
              <SubmitButton />
            </div>

            <p className="text-center text-sm text-violet-300/60">
              No spam, ever. Unsubscribe anytime. We respect your privacy.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}