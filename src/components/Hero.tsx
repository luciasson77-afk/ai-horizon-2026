import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PlayCircle, X } from 'lucide-react';

export default function Hero({ onRegister }: { onRegister: () => void }) {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center pt-20 px-8 overflow-hidden nebula-gradient">
      <div className="max-w-screen-2xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-block px-4 py-1 border border-primary/20 rounded-full bg-primary/5 text-primary text-xs font-bold tracking-[0.2em] uppercase">
            진화 2.0
          </div>
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-headline font-bold text-primary tracking-tighter uppercase">
              AI HORIZON 2026
            </h1>
            <h2 className="text-3xl md:text-5xl font-headline font-bold text-on-surface leading-[1.1] tracking-tighter">
              <span className="text-glow">미래</span>가 닿는 곳
            </h2>
            <div className="space-y-1 pt-2">
              <div className="flex items-center gap-3 text-xl md:text-2xl font-bold text-on-surface">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                2026.12.1 ~ 12.3
              </div>
              <div className="text-lg md:text-xl text-on-surface-variant font-medium pl-5">
                코엑스 2층 컨퍼런스 룸
              </div>
            </div>
          </div>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed">
            인간의 창의성과 합성 인지 기술이 융합되는 경험을 해보세요. 인공지능의 다음 시대를 정의하는 글로벌 서밋에 여러분을 초대합니다.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button 
              onClick={onRegister}
              className="px-8 py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-full font-bold hover:opacity-90 transition-all shadow-lg shadow-primary/20"
            >
              대회 참가 신청하기
            </button>
            <button 
              onClick={() => setShowVideo(true)}
              className="px-8 py-4 bg-surface-variant/50 backdrop-blur-xl border border-primary/10 text-on-surface rounded-full font-bold hover:bg-surface-variant transition-all flex items-center gap-2"
            >
              <PlayCircle className="w-5 h-5" />
              미리보기 영상
            </button>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative lg:h-[800px] flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-primary/10 blur-[120px] rounded-full"></div>
          <img 
            alt="AI Horizon Vision" 
            className="w-full h-auto object-cover rounded-xl shadow-2xl relative z-10 mix-blend-lighten"
            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>

      <AnimatePresence>
        {showVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-sm p-4 md:p-12"
          >
            <div className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-2xl border border-primary/20">
              <button 
                onClick={() => setShowVideo(false)}
                className="absolute top-6 right-6 z-10 p-2 bg-background/50 backdrop-blur-md rounded-full text-on-surface hover:bg-primary hover:text-on-primary transition-all"
              >
                <X className="w-6 h-6" />
              </button>
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/aircAruvnKk?autoplay=1"
                title="AI Conference Preview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-tertiary/10 rounded-full blur-[100px]"></div>
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[150px]"></div>
    </section>
  );
}
