import { useState } from 'react';

export default function CTA({ onRegister }: { onRegister: () => void }) {
  return (
    <section className="py-32 px-8">
      <div className="max-w-4xl mx-auto text-center glass-card p-16 rounded-xl border border-primary/20 relative overflow-hidden">
        {/* Glowing background effect */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-tertiary to-transparent"></div>
        
        <h2 className="font-headline text-5xl font-bold mb-8 tracking-tighter">여러분의 여정을 시작하세요.</h2>
        <p className="text-xl text-on-surface-variant mb-12 max-w-2xl mx-auto">
          AI Horizon 2026 등록은 한정되어 있습니다. 이번 10년의 가장 영향력 있는 행사에 참여할 권한을 확보하세요.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button 
            onClick={onRegister}
            className="bg-primary-container text-on-primary px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform"
          >
            대회 참가 신청하기
          </button>
          <button className="bg-transparent border border-on-surface-variant/30 text-on-surface px-10 py-5 rounded-full font-bold text-lg hover:bg-surface-variant transition-all">
            패키지 보기
          </button>
        </div>
        
        <p className="mt-8 text-sm text-on-surface-variant/60 font-body tracking-widest uppercase">
          가격 인상까지 14일 남음 • 5,000명의 대표단으로 제한됨
        </p>
      </div>
    </section>
  );
}
