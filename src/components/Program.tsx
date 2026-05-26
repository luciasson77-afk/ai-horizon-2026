import { motion } from 'motion/react';
import { MapPin, User, Calendar, Clock, BookOpen, ChevronRight } from 'lucide-react';

const schedule = [
  { 
    day: 'Day 1',
    date: '12월 1일 (화)',
    title: '개회식 및 기조 연설', 
    desc: 'AI의 미래: 새로운 지평을 열다', 
    speaker: 'Dr. Sarah Chen (MIT AI Lab)',
    location: '코엑스 1층 그랜드볼룸',
    theme: 'from-blue-500/20 to-indigo-500/5',
    borderColor: 'border-blue-500/30',
    details: [
      { time: '09:30 - 10:00', event: '개회사 및 글로벌 AI 서밋 축사' },
      { time: '10:00 - 11:30', event: '메인 기조 강연: 인류와 합성 지능의 공진화' },
      { time: '11:30 - 12:30', event: '글로벌 패널 토론: 초거대 AI가 주도하는 기술 혁신' }
    ]
  },
  { 
    day: 'Day 2',
    date: '12월 2일 (수)',
    title: '기술 심층 세션', 
    desc: '거대 언어 모델의 다음 단계와 자율 에이전트', 
    speaker: 'Prof. Michael Kim (Stanford University)',
    location: '코엑스 2층 컨퍼런스 룸 (북 201호)',
    theme: 'from-purple-500/20 to-pink-500/5',
    borderColor: 'border-purple-500/30',
    details: [
      { time: '10:00 - 12:00', event: '차세대 멀티모달 LLM 아키텍처 설계와 훈련법' },
      { time: '13:30 - 15:30', event: '실무 세션: 온디바이스 AI 구현과 엣지 연산 최적화' },
      { time: '15:30 - 17:00', event: '자율 AI 에이전트 프레임워크 및 자동화 응용 사례' }
    ]
  },
  { 
    day: 'Day 3',
    date: '12월 3일 (목)',
    title: '윤리 서밋 및 폐막', 
    desc: '책임 있는 AI와 글로벌 거버넌스', 
    speaker: 'Global AI Alliance & 주요 국가 대표단',
    location: '코엑스 3층 오디토리움',
    theme: 'from-emerald-500/20 to-teal-500/5',
    borderColor: 'border-emerald-500/30',
    details: [
      { time: '10:00 - 12:00', event: '인공지능 윤리 규범 확립 및 국가별 안보 규제 패널' },
      { time: '13:30 - 15:00', event: '안전성 진단: 데이터 프라이버시 보장과 합성 데이터 모델' },
      { time: '15:00 - 16:30', event: 'AI Horizon 2026 공동 선언 발표 및 폐막 세션' }
    ]
  },
];

export default function Program() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="py-24 px-4 md:px-8 max-w-screen-xl mx-auto min-h-screen relative overflow-hidden"
    >
      {/* Background visual blobs */}
      <div className="absolute top-40 left-10 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="space-y-16 z-10 relative">
        <div className="text-center space-y-4">
          <div className="inline-block px-4 py-1 border border-primary/20 rounded-full bg-primary/5 text-primary text-xs font-bold tracking-[0.2em] uppercase font-headline">
            Summit Schedule
          </div>
          <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tighter text-glow">
            컨퍼런스 프로그램
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto font-body">
            3일간 펼쳐지는 최첨단 지식과 인사이트의 축제에 오신 것을 환영합니다.
          </p>
          <div className="h-1 w-20 bg-primary mx-auto mt-2"></div>
        </div>

        {/* Timeline container */}
        <div className="space-y-12">
          {schedule.map((item, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.01 }}
              className={`p-8 md:p-10 rounded-3xl border bg-gradient-to-br ${item.theme} ${item.borderColor} backdrop-blur-xl shadow-xl flex flex-col lg:flex-row gap-8 lg:gap-12 transition-all duration-300 group`}
            >
              {/* Day & Date info */}
              <div className="lg:w-64 shrink-0 flex flex-row lg:flex-col justify-between lg:justify-start items-start gap-4 border-b lg:border-b-0 lg:border-r border-primary/10 pb-6 lg:pb-0 lg:pr-8">
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-widest text-primary font-bold">{item.day}</span>
                  <h3 className="text-3xl font-headline font-black text-on-surface tracking-tight group-hover:text-primary transition-colors">
                    {item.date}
                  </h3>
                </div>
                
                {/* Location indicator */}
                <div className="flex items-center gap-2 px-4 py-2 bg-surface/80 rounded-2xl border border-primary/10 mt-auto shadow-sm">
                  <MapPin className="w-4 h-4 text-secondary shrink-0 animate-bounce" />
                  <span className="text-xs font-bold text-on-surface-variant whitespace-nowrap">
                    {item.location}
                  </span>
                </div>
              </div>

              {/* Main session content */}
              <div className="flex-1 space-y-6">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-2.5 py-0.5 rounded bg-primary/10 border border-primary/20 text-xs font-bold text-primary">
                      Main Session
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-headline font-bold text-on-surface leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-base md:text-lg text-on-surface-variant font-medium">
                    {item.desc}
                  </p>
                </div>

                {/* Speaker info */}
                <div className="flex items-center gap-3 p-3 bg-surface/30 rounded-2xl border border-primary/5 w-fit">
                  <div className="p-2 bg-primary/10 rounded-xl text-primary">
                    <User className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-semibold text-on-surface">
                    발표 연사: <span className="text-primary">{item.speaker}</span>
                  </span>
                </div>

                {/* Detailed timelines */}
                <div className="space-y-3 pt-4 border-t border-primary/10">
                  <div className="text-xs font-bold text-primary tracking-widest uppercase flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" /> 상세 세션 타임테이블
                  </div>
                  <div className="grid grid-cols-1 gap-2.5">
                    {item.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-4 p-3 bg-background/40 hover:bg-background/80 rounded-xl border border-primary/5 transition-all duration-200">
                        <div className="flex items-center gap-1 text-xs font-bold text-primary shrink-0 w-28">
                          <Clock className="w-3.5 h-3.5 text-secondary" /> {detail.time}
                        </div>
                        <div className="text-sm text-on-surface font-semibold flex items-center gap-1">
                          <ChevronRight className="w-3.5 h-3.5 text-primary/40 shrink-0" />
                          {detail.event}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
