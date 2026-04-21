import { motion } from 'motion/react';
import { Monitor, Code, MessageSquare } from 'lucide-react';

export default function Highlights() {
  return (
    <section className="py-24 px-8 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="bg-surface rounded-lg p-1 aspect-square overflow-hidden">
                  <img alt="Tech" className="w-full h-full object-cover rounded" src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" referrerPolicy="no-referrer" />
                </div>
                <div className="bg-surface rounded-lg p-1 aspect-[3/4] overflow-hidden">
                  <img alt="Network" className="w-full h-full object-cover rounded" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800" referrerPolicy="no-referrer" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-surface rounded-lg p-1 aspect-[3/4] overflow-hidden">
                  <img alt="AI Robot" className="w-full h-full object-cover rounded" src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800" referrerPolicy="no-referrer" />
                </div>
                <div className="bg-surface rounded-lg p-1 aspect-square overflow-hidden">
                  <img alt="Future Hall" className="w-full h-full object-cover rounded" src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
            {/* Decorative glow */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 blur-[100px] rounded-full"></div>
          </div>

          <div className="order-1 lg:order-2 space-y-10">
            <div className="inline-block bg-secondary/20 text-secondary px-4 py-1 rounded text-xs font-bold tracking-widest uppercase">경험</div>
            <h2 className="font-headline text-5xl md:text-6xl font-bold leading-tight tracking-tighter">
              화면 그 이상의 <span className="italic font-light">감동</span>
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-6 group">
                <div className="w-12 h-12 shrink-0 bg-surface rounded flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Monitor className="w-6 h-6 text-primary group-hover:text-on-primary transition-colors" />
                </div>
                <div>
                  <h4 className="text-xl font-headline font-bold mb-2">XR 몰입형 라운지</h4>
                  <p className="text-on-surface-variant">데이터가 사용자가 탐색할 수 있는 물리적 풍경이 되는 완전한 공간 컴퓨팅 환경으로 들어가 보세요.</p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-12 h-12 shrink-0 bg-surface rounded flex items-center justify-center group-hover:bg-tertiary transition-colors">
                  <Code className="w-6 h-6 text-tertiary group-hover:text-on-tertiary transition-colors" />
                </div>
                <div>
                  <h4 className="text-xl font-headline font-bold mb-2">알고리즘 포지</h4>
                  <p className="text-on-surface-variant">인간과 AI 에이전트가 도시 인프라를 위한 솔루션을 공동 창조하는 48시간 협업 스프린트입니다.</p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-12 h-12 shrink-0 bg-surface rounded flex items-center justify-center group-hover:bg-secondary transition-colors">
                  <MessageSquare className="w-6 h-6 text-secondary group-hover:text-on-secondary transition-colors" />
                </div>
                <div>
                  <h4 className="text-xl font-headline font-bold mb-2">자정 토론</h4>
                  <p className="text-on-surface-variant">네오 도쿄 돔의 네온 지평선 아래에서 업계의 거물들과 나누는 필터링 없는 비공개 대화입니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
