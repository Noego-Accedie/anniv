import { Button } from '@/components/ui/button';
import { FilledHeartIcon } from '@/components/icons/filled-heart-icon';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground font-body">
      <main className="flex-1 flex flex-col justify-center items-center text-center px-4">
        <h1 className="font-headline text-6xl md:text-8xl text-primary tracking-wider">
          Happy Anniversary
        </h1>
        <p className="mt-4 text-lg md:text-xl text-accent-foreground max-w-2xl">
          To the one who fills my heart with love. Here are just a few reasons why my world is better with you in it.
        </p>
        <Button asChild className="mt-8 text-lg py-6 px-8 bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 transform hover:scale-105">
          <Link href="/reasons">
            Heres why I love you Zawawa
            <FilledHeartIcon className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </main>
      <footer className="text-center py-6 text-muted-foreground text-sm">
        <p>For you, always - Eric.</p>
      </footer>
    </div>
  );
}
