import { motion } from 'motion/react';
import { Phone, Mail, Printer, Building2, Clock, MessageSquare } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    { icon: <Phone className="w-6 h-6" />, label: '전화번호', value: '02-123-4567', sub: '평일 09:00 - 18:00' },
    { icon: <Printer className="w-6 h-6" />, label: '팩스번호', value: '02-123-4568', sub: '24시간 수신 가능' },
    { icon: <Mail className="w-6 h-6" />, label: '이메일 주소', value: 'info@aihorizon2026.com', sub: '24시간 이내 답변' },
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="py-32 px-8 max-w-screen-xl mx-auto min-h-screen"
    >
      <div className="space-y-16">
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter text-primary">대회문의</h1>
          <p className="text-xl text-on-surface-variant max-w-2xl mx-auto">AI HORIZON 2026에 대한 궁금한 점을 언제든 문의해 주세요.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-8">
            <div className="p-8 bg-primary/5 rounded-3xl border border-primary/10 space-y-6">
              <div className="w-12 h-12 bg-primary text-on-primary rounded-2xl flex items-center justify-center">
                <Building2 className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-on-surface">대회 사무국</h3>
                <p className="text-lg text-primary font-medium">AI HORIZON 2026 운영 본부</p>
                <p className="text-on-surface-variant leading-relaxed">
                  행사 기획, 참가 신청, 스폰서십 제안 및 기타 모든 운영 관련 문의를 담당합니다.
                </p>
              </div>
            </div>

            <div className="p-8 bg-surface/50 backdrop-blur-xl rounded-3xl border border-primary/10 flex items-center gap-4">
              <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-on-surface-variant">운영 시간</p>
                <p className="font-bold text-on-surface">평일 09:00 - 18:00 (주말/공휴일 제외)</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="p-8 bg-surface/50 backdrop-blur-xl rounded-3xl border border-primary/10 hover:border-primary/30 transition-all space-y-6 group"
              >
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  {info.icon}
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-bold text-primary uppercase tracking-widest">{info.label}</p>
                  <p className="text-2xl font-bold text-on-surface tracking-tight">{info.value}</p>
                  <p className="text-sm text-on-surface-variant">{info.sub}</p>
                </div>
              </motion.div>
            ))}
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 bg-primary text-on-primary rounded-3xl flex flex-col justify-between group cursor-pointer"
            >
              <div className="flex justify-between items-start">
                <MessageSquare className="w-8 h-8 opacity-80" />
                <div className="px-3 py-1 bg-white/20 rounded-full text-xs font-bold uppercase">Fast Track</div>
              </div>
              <div className="space-y-1">
                <h4 className="text-xl font-bold">1:1 온라인 문의</h4>
                <p className="text-white/70 text-sm">궁금한 점을 남겨주시면 담당자가 신속하게 답변해 드립니다.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
