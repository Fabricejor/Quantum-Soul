import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { format, addMonths, subMonths, isSameDay, isToday, getDate, getDaysInMonth, startOfMonth } from "date-fns";
import { fr } from "date-fns/locale";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// --- TYPE DEFINITIONS ---
interface Day {
  date: Date;
  isToday: boolean;
  isSelected: boolean;
}

interface GlassCalendarProps extends React.HTMLAttributes<HTMLDivElement> {
  selectedDate?: Date;
  onDateSelect?: (date: Date) => void;
  className?: string;
}

// --- HELPER TO HIDE SCROLLBAR ---
const ScrollbarHide = () => (
  <style>{`
    .scrollbar-hide::-webkit-scrollbar {
      display: none;
    }
    .scrollbar-hide {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  `}</style>
);

const isPastOrToday = (date: Date) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d <= today;
};

// --- MAIN COMPONENT ---
export const GlassCalendar = React.forwardRef<HTMLDivElement, GlassCalendarProps>(
  ({ className, selectedDate: propSelectedDate, onDateSelect, ...props }, ref) => {
    const [currentMonth, setCurrentMonth] = React.useState(propSelectedDate || new Date());
    const [selectedDate, setSelectedDate] = React.useState(propSelectedDate || new Date());

    // Generate all days for the current month
    const monthDays = React.useMemo(() => {
        const start = startOfMonth(currentMonth);
        const totalDays = getDaysInMonth(currentMonth);
        const days: Day[] = [];
        for (let i = 0; i < totalDays; i++) {
            const date = new Date(start.getFullYear(), start.getMonth(), i + 1);
            days.push({
                date,
                isToday: isToday(date),
                isSelected: isSameDay(date, selectedDate),
            });
        }
        return days;
    }, [currentMonth, selectedDate]);

    // Calculate the padding offset for Monday start
    const firstDayIndex = React.useMemo(() => {
      const start = startOfMonth(currentMonth);
      const day = start.getDay(); // Sunday is 0, Monday is 1...
      return day === 0 ? 6 : day - 1;
    }, [currentMonth]);

    const handleDateClick = (date: Date) => {
      setSelectedDate(date);
      onDateSelect?.(date);
    };
    
    const handlePrevMonth = () => {
      // Don't navigate to past months
      const prev = subMonths(currentMonth, 1);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const startOfPrev = startOfMonth(prev);
      const startOfToday = startOfMonth(today);
      if (startOfPrev < startOfToday) return;
      setCurrentMonth(prev);
    };

    const handleNextMonth = () => {
      setCurrentMonth(addMonths(currentMonth, 1));
    };

    const daysOfWeek = ["Lu", "Ma", "Me", "Je", "Ve", "Sa", "Di"];

    return (
      <div
        ref={ref}
        className={cn(
          "w-full max-w-[360px] rounded-3xl p-5 shadow-2xl overflow-hidden",
          "bg-black/20 backdrop-blur-xl border border-white/10",
          "text-white font-sans",
          className
        )}
        {...props}
      >
        <ScrollbarHide />
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/5 pb-2">
          <span className="text-xs font-bold text-white/50 uppercase tracking-wider">
            Sélectionner un jour
          </span>
          <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider">Meet</span>
        </div>

        {/* Date Display and Navigation */}
        <div className="my-6 flex items-center justify-between">
            <motion.p 
              key={format(currentMonth, "MMMM yyyy")}
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.3 }}
              className="text-xl font-bold tracking-tight capitalize"
            >
                {format(currentMonth, "MMMM yyyy", { locale: fr })}
            </motion.p>
            <div className="flex items-center space-x-2">
                <button 
                  type="button" 
                  onClick={handlePrevMonth} 
                  className="p-1 rounded-full text-white/70 transition-colors hover:bg-black/20 disabled:opacity-20 disabled:cursor-not-allowed"
                  disabled={startOfMonth(subMonths(currentMonth, 1)) < startOfMonth(new Date())}
                >
                    <ChevronLeft className="h-5 w-5" />
                </button>
                <button 
                  type="button" 
                  onClick={handleNextMonth} 
                  className="p-1 rounded-full text-white/70 transition-colors hover:bg-black/20"
                >
                    <ChevronRight className="h-5 w-5" />
                </button>
            </div>
        </div>

        {/* Calendar View Grid (Monthly strictly) */}
        <div className="grid grid-cols-7 gap-y-2 gap-x-1 text-center font-sans mt-2">
          {daysOfWeek.map((day) => (
            <span key={day} className="text-xs font-bold text-white/40 uppercase py-1">
              {day}
            </span>
          ))}
          
          {/* Empty slots for padding */}
          {Array.from({ length: firstDayIndex }).map((_, idx) => (
            <div key={`empty-${idx}`} className="w-8 h-8" />
          ))}

          {/* Calendar days */}
          {monthDays.map((day) => {
            const disabled = isPastOrToday(day.date);
            return (
              <button
                key={format(day.date, "yyyy-MM-dd")}
                type="button"
                disabled={disabled}
                onClick={() => !disabled && handleDateClick(day.date)}
                className={cn(
                  "flex h-8 w-8 mx-auto items-center justify-center rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 relative",
                  {
                    "bg-gradient-to-br from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/20": day.isSelected,
                    "hover:bg-white/10 text-white": !day.isSelected && !disabled,
                    "text-white/20 cursor-not-allowed opacity-30": disabled,
                  }
                )}
              >
                {day.isToday && !day.isSelected && (
                  <span className="absolute bottom-1 h-1 w-1 rounded-full bg-cyan-400"></span>
                )}
                {getDate(day.date)}
              </button>
            );
          })}
        </div>
      </div>
    );
  }
);

GlassCalendar.displayName = "GlassCalendar";
