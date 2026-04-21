import { motion } from 'motion/react';
import { Rocket, Brain, ArrowRight } from 'lucide-react';

export default function BentoGrid() {
  return (
    <section className="py-24 px-8 bg-background">
      <div className="max-w-screen-2xl mx-auto">
        <div className="mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-4">왜 참여해야 할까요?</h2>
          <div className="h-1 w-24 bg-primary"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 glass-card p-10 rounded-lg flex flex-col justify-between min-h-[350px] group hover:bg-surface transition-colors border border-on-surface-variant/10"
          >
            <div className="max-w-md">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-primary">●</span>
              </div>
              <h3 className="text-3xl font-headline font-bold mb-4">합성 네트워크</h3>
              <p className="text-on-surface-variant leading-relaxed">유기적인 협업을 위해 설계된 환경에서 5,000명 이상의 AI 연구원, 벤처 캐피탈리스트 및 엔지니어들과 연결되세요.</p>
            </div>
            <div className="text-primary font-bold flex items-center gap-2 group-hover:gap-4 transition-all cursor-pointer">
              커뮤니티 탐색하기 <ArrowRight className="w-5 h-5" />
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-primary p-10 rounded-lg flex flex-col justify-between text-on-primary min-h-[350px]"
          >
            <div>
              <div className="w-12 h-12 bg-on-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Rocket className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-headline font-bold mb-4">문샷 데모</h3>
              <p className="opacity-80">미공개 기반 모델과 신경 인터페이스 하드웨어를 실시간 라이브 테스트를 통해 가장 먼저 목격하세요.</p>
            </div>
            <div className="font-bold border-t border-on-primary/20 pt-6">
              120개 이상의 세션
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="glass-card p-10 rounded-lg border border-on-surface-variant/10 group hover:border-tertiary/30 transition-all"
          >
            <div className="w-12 h-12 bg-tertiary/10 rounded-lg flex items-center justify-center mb-6">
              <Brain className="w-6 h-6 text-tertiary" />
            </div>
            <h3 className="text-2xl font-headline font-bold mb-4">인지 윤리</h3>
            <p className="text-on-surface-variant">새로운 지능 시대의 철학적, 법적 프레임워크를 심층적으로 다루는 워크숍입니다.</p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 relative overflow-hidden rounded-lg min-h-[350px] group"
          >
            <img 
              alt="Global Impact" 
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:scale-105 transition-transform duration-700"
              src="https://picsum.photos/seed/tech-data/1200/800"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent p-10 flex flex-col justify-end">
              <h3 className="text-3xl font-headline font-bold mb-2">글로벌 임팩트 트랙</h3>
              <p className="text-on-surface-variant max-w-lg">기후 AI, 헬스케어, 그리고 자율 경제에 초점을 맞춘 집중 브레이크아웃 트랙입니다.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
