import { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle, ArrowRight } from 'lucide-react';

export default function RegistrationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="py-32 px-8 max-w-2xl mx-auto text-center space-y-8"
      >
        <div className="flex justify-center">
          <CheckCircle className="w-24 h-24 text-primary animate-bounce" />
        </div>
        <h1 className="text-4xl font-headline font-bold text-on-surface">신청이 완료되었습니다!</h1>
        <p className="text-xl text-on-surface-variant">
          AI Horizon 2026에 신청해주셔서 감사합니다. <br />
          등록하신 이메일로 안내 문항을 발송해 드렸습니다.
        </p>
        <button 
          onClick={() => window.location.reload()} 
          className="px-8 py-4 bg-primary text-on-primary rounded-full font-bold hover:opacity-90 transition-all"
        >
          메인으로 돌아가기
        </button>
      </motion.div>
    );
  }

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="py-32 px-8 max-w-screen-md mx-auto"
    >
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-headline font-bold tracking-tighter text-primary">대회 참가 신청</h1>
          <p className="text-xl text-on-surface-variant">미래를 향한 여정에 함께하세요.</p>
        </div>

        <form onSubmit={handleSubmit} className="glass-card p-10 rounded-3xl border border-primary/20 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">성함</label>
              <input required type="text" placeholder="홍길동" className="w-full bg-surface-variant/50 border border-primary/10 rounded-xl px-5 py-3 focus:outline-none focus:border-primary transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">이메일</label>
              <input required type="email" placeholder="example@email.com" className="w-full bg-surface-variant/50 border border-primary/10 rounded-xl px-5 py-3 focus:outline-none focus:border-primary transition-all" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">소속 (회사 또는 학교)</label>
            <input required type="text" placeholder="AI Horizon Tech" className="w-full bg-surface-variant/50 border border-primary/10 rounded-xl px-5 py-3 focus:outline-none focus:border-primary transition-all" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">참가 분야</label>
            <select className="w-full bg-surface-variant/50 border border-primary/10 rounded-xl px-5 py-3 focus:outline-none focus:border-primary transition-all appearance-none">
              <option>일반 참가자</option>
              <option>개발자 / 엔지니어</option>
              <option>연구원 / 학계</option>
              <option>기업 대표 / 투자자</option>
              <option>미디어 / 프레스</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">관심 분야 및 한마디</label>
            <textarea placeholder="대회에서 기대하는 점을 적어주세요." className="w-full bg-surface-variant/50 border border-primary/10 rounded-xl px-5 py-3 focus:outline-none focus:border-primary transition-all h-32"></textarea>
          </div>

          <div className="pt-4">
            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary py-5 rounded-2xl font-bold text-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? '처리 중...' : (
                <>
                  신청서 제출하기
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
          <p className="text-center text-xs text-on-surface-variant/60">
            제출 시 개인정보 처리방침에 동의하는 것으로 간주됩니다.
          </p>
        </form>
      </div>
    </motion.section>
  );
}
