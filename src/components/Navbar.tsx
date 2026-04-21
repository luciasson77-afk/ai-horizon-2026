import { useState } from 'react';
import { cn } from '@/src/lib/utils';
import { LogOut, User, LogIn } from 'lucide-react';
import { Page } from '../App';

interface NavbarProps {
  onNavigate: (page: Page) => void;
  currentPage: Page;
}

export default function Navbar({ onNavigate, currentPage }: NavbarProps) {
  const [user, setUser] = useState<{ displayName: string; photoURL: string | null } | null>(null);

  const login = () => {
    setUser({
      displayName: "방문자",
      photoURL: null
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-background/60 backdrop-blur-3xl border-b border-primary/10">
      <nav className="flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto font-headline tracking-tight">
        <div 
          className="text-xl font-bold tracking-tighter text-primary cursor-pointer"
          onClick={() => onNavigate('home')}
        >
          AI HORIZON 2026
        </div>
        <div className="hidden md:flex gap-12 items-center">
          <button 
            className={cn(
              "text-on-surface transition-all duration-300 font-medium",
              currentPage === 'about' ? "text-primary" : "opacity-70 hover:opacity-100"
            )}
            onClick={() => onNavigate('about')}
          >
            소개
          </button>
          <button 
            className={cn(
              "text-on-surface transition-all duration-300 font-medium",
              currentPage === 'program' ? "text-primary" : "opacity-70 hover:opacity-100"
            )}
            onClick={() => onNavigate('program')}
          >
            프로그램
          </button>
          <button 
            className={cn(
              "text-on-surface transition-all duration-300 font-medium",
              currentPage === 'venue' ? "text-primary" : "opacity-70 hover:opacity-100"
            )}
            onClick={() => onNavigate('venue')}
          >
            개최장소
          </button>
        </div>
        
        <div className="flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-surface rounded-full border border-primary/20">
                {user.photoURL ? (
                  <img src={user.photoURL} alt={user.displayName} className="w-6 h-6 rounded-full" referrerPolicy="no-referrer" />
                ) : (
                  <User className="w-4 h-4 text-primary" />
                )}
                <span className="text-sm font-medium hidden sm:inline">{user.displayName}</span>
              </div>
              <button 
                onClick={logout}
                className="p-2.5 rounded-full bg-surface-variant hover:bg-surface-variant/80 text-on-surface transition-all"
                title="로그아웃"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          ) : (
            <button 
              onClick={() => onNavigate('registration')}
              className="bg-primary-container text-on-primary px-6 py-2.5 rounded-full font-bold hover:scale-95 transition-all duration-200 ease-out flex items-center gap-2"
            >
              <LogIn className="w-4 h-4" />
              대회 참가 신청하기
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}
