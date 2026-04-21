import { motion } from 'motion/react';

export default function About() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="py-32 px-8 max-w-screen-xl mx-auto"
    >
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter text-primary">대회 소개</h1>
          <p className="text-xl text-on-surface-variant max-w-2xl mx-auto">AI Horizon 2026: 인류와 인공지능의 공존을 넘어선 새로운 도약</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-headline font-bold text-on-surface">비전</h2>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              AI Horizon 2026은 전 세계의 AI 리더, 혁신가, 그리고 사상가들이 모여 인공지능의 미래를 설계하는 아시아 최대 규모의 AI 서밋입니다. 
              우리는 기술적 진보를 넘어 윤리적 책임과 사회적 임팩트를 함께 고민합니다.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-surface rounded-xl border border-primary/10">
                <h3 className="text-2xl font-bold text-primary">5,000+</h3>
                <p className="text-sm text-on-surface-variant">글로벌 참가자</p>
              </div>
              <div className="p-6 bg-surface rounded-xl border border-primary/10">
                <h3 className="text-2xl font-bold text-primary">100+</h3>
                <p className="text-sm text-on-surface-variant">세션 및 워크숍</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1000" alt="About AI" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
