import { Share2, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background w-full py-12 px-8 border-t border-primary/10">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 font-body text-sm tracking-wide">
        <div>
          <div className="font-headline font-bold text-primary text-2xl mb-4">
            AI HORIZON
          </div>
          <p className="text-on-surface-variant leading-relaxed max-w-xs">
            합성 지능의 발전과 인류의 진화를 위한 세계 최고의 글로벌 서밋입니다.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <h5 className="text-primary font-bold uppercase tracking-widest text-xs">리소스</h5>
            <ul className="space-y-2">
              <li><a className="text-on-surface-variant hover:text-tertiary transition-colors duration-300" href="#">문의하기</a></li>
              <li><a className="text-on-surface-variant hover:text-tertiary transition-colors duration-300" href="#">개인정보 처리방침</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h5 className="text-primary font-bold uppercase tracking-widest text-xs">법적 고지</h5>
            <ul className="space-y-2">
              <li><a className="text-on-surface-variant hover:text-tertiary transition-colors duration-300" href="#">이용 약관</a></li>
              <li><a className="text-on-surface-variant hover:text-tertiary transition-colors duration-300" href="#">행사 날짜: 11월 12-15일</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col justify-between items-start md:items-end">
          <div className="flex gap-6 mb-8">
            <a className="w-10 h-10 rounded bg-surface flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all" href="#">
              <Share2 className="w-5 h-5" />
            </a>
            <a className="w-10 h-10 rounded bg-surface flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all" href="#">
              <Globe className="w-5 h-5" />
            </a>
          </div>
          <p className="text-on-surface-variant text-xs">
            © 2026 AI Horizon. 미래가 닿는 곳.
          </p>
        </div>
      </div>
    </footer>
  );
}
