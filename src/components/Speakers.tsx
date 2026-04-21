import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

const speakers = [
  {
    name: "엘레나 밴스 박사",
    role: "Neural Dynamics CEO",
    category: "기조 연설",
    color: "text-primary",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "마커스 쏜",
    role: "Open Mind Institute",
    category: "윤리 책임자",
    color: "text-tertiary",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "나카노 소라",
    role: "Genesis Core 수석 아키텍트",
    category: "아키텍처",
    color: "text-secondary",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "데이비드 첸",
    role: "Future Capital 디렉터",
    category: "경제",
    color: "text-primary",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Speakers() {
  return (
    <section className="py-24 px-8 bg-surface/30">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-headline text-5xl font-bold tracking-tighter mb-6">혁신을 이끄는 리더들</h2>
            <p className="text-on-surface-variant text-lg">우리의 연사들은 단순히 미래를 예측하는 것이 아니라, 직접 만들어가고 있습니다. Horizon 2026의 선구자들을 만나보세요.</p>
          </div>
          <button className="text-secondary font-bold flex items-center gap-2 hover:opacity-80 transition-opacity">
            전체 라인업 보기 <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
          {speakers.map((speaker, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="relative aspect-[4/5] overflow-hidden group bg-background"
            >
              <img 
                alt={speaker.name} 
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                src={speaker.image}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
              <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <p className={`${speaker.color} font-bold text-sm tracking-widest uppercase mb-2`}>{speaker.category}</p>
                <h4 className="text-2xl font-headline font-bold">{speaker.name}</h4>
                <p className="text-on-surface-variant text-sm">{speaker.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
