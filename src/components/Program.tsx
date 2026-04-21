import { motion } from 'motion/react';

const schedule = [
  { time: 'Day 1 (12.1)', title: '개회식 및 기조 연설', desc: 'AI의 미래: 새로운 지평을 열다', speaker: 'Dr. Sarah Chen' },
  { time: 'Day 2 (12.2)', title: '기술 심층 세션', desc: '거대 언어 모델의 다음 단계와 자율 에이전트', speaker: 'Prof. Michael Kim' },
  { time: 'Day 3 (12.3)', title: '윤리 서밋 및 폐막', desc: '책임 있는 AI와 글로벌 거버넌스', speaker: 'Global AI Alliance' },
];

export default function Program() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="py-32 px-8 max-w-screen-xl mx-auto"
    >
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter text-primary">프로그램</h1>
          <p className="text-xl text-on-surface-variant max-w-2xl mx-auto">3일간 펼쳐지는 혁신적인 지식의 향연</p>
        </div>

        <div className="space-y-6">
          {schedule.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-8 p-8 bg-surface/50 backdrop-blur-xl rounded-2xl border border-primary/10 hover:border-primary/30 transition-all group">
              <div className="w-48 shrink-0">
                <span className="text-2xl font-bold text-primary">{item.time}</span>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-on-surface group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-lg text-on-surface-variant">{item.desc}</p>
                <div className="pt-2">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">연사: {item.speaker}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
