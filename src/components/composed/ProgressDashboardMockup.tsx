'use client';

import { motion, AnimatePresence, useCycle } from 'motion/react';
import { useEffect } from 'react';
import { TrendingUp } from 'lucide-react';

const columns = ['Applied', 'Interview', 'Offer'];

export default function ProgressDashboardMockup() {
  // cycle through 0 → 1 → 2 to trigger card moves
  const [step, next] = useCycle(0, 1, 2);

  // autoplay 1× every 6 s
  useEffect(() => {
    const id = setInterval(() => next(), 2000); // switch phase every 2 s
    return () => clearInterval(id);
  }, [next]);

  /* ----------------------------- UI ---------------------------- */
  return (
    <motion.div
      layout
      className="relative flex flex-col h-full w-full bg-white overflow-hidden p-4 md:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* KPI header */}
      <div className="flex justify-between mb-4 text-xs md:text-sm font-medium">
        <Kpi label="Apps" from={27} to={92} step={step} />
        <Kpi label="Interviews" from={3} to={11} step={step} delay={0.3} />
      </div>

      {/* Kanban lane */}
      <div className="flex gap-2 flex-1 overflow-hidden">
        {columns.map(col => (
          <div key={col} className="flex-1 bg-slate-50 rounded-md p-1 md:p-2">
            <div className="text-[10px] md:text-xs font-semibold mb-1">{col}</div>

            <AnimatePresence>
              {cardsFor(col, step).map(c => (
                <motion.div
                  key={c.id}
                  layout             // FLIP magic
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: .35 }}
                  className="mb-1 last:mb-0 rounded bg-white border px-2 py-1 text-[10px] shadow-sm"
                >
                  {c.title}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Pulse zoom on final phase */}
      <motion.div
        className="absolute inset-0"
        animate={step === 2 ? { scale: 1.03 } : { scale: 1 }}
        transition={{ duration: .5 }}
      />
    </motion.div>
  );
}

/* ---------- helper components --------------------------------- */

function cardsFor(col: string, step: number) {
  // simplistic state machine: move two cards rightward each phase
  const base = [
    { id: 'c1', column: step >= 1 ? 'Interview' : 'Applied', title: 'UX Designer – Spotify' },
    { id: 'c2', column: step >= 2 ? 'Offer'     : step === 1 ? 'Interview' : 'Applied', title: 'Data Eng – Google' },
    { id: 'c3', column: 'Applied', title: 'PM – Glovo' }
  ];
  return base.filter(c => c.column === col);
}

function Kpi({ label, from, to, step, delay = 0 }: { label: string; from: number; to: number; step: number; delay?: number }) {
  const value = step === 0 ? from : to;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: .3 }}
      className="flex items-center gap-1"
    >
      <TrendingUp className="w-3 h-3 text-brand" />
      <span>{value}</span>
      <span className="text-black/50">{label}</span>
    </motion.div>
  );
} 