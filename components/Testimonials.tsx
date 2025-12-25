import React from 'react';
import { TestimonialItem } from '../types';
import { useI18n } from '../contexts/i18nContext';

const testimonials: TestimonialItem[] = [
  {
    id: 1,
    names: "Sarah & James",
    content: "\"Working with Ellie Wedding Planner was the best decision we made. They transformed our vision into reality and handled every detail flawlessly.\"",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjDobR_JvLRazaePwfUhKIbLcbMU6Jf5-ckTrdjWzaYAyPeqiyMT6cDvjrS5Gqd9jI6mnhb3OhEPqj1ws0b2QDl3cmaELF8HRHWXd_mt-HSdrK-Yb7n2AqQKm-hEMXCX7l2ZJ-kv5kL8inPHWezt_QCk5BAW8vuidqr0zxZdc7KsLBtpnIWUr5t-EtGlj5VfMZafPilqEe02vam7PQ7_179LcQv1tgr3cwYcEcHCK-V0b94xflOhu7NZHvZ5gs9f-PaJRFWSzL38U"
  },
  {
    id: 2,
    names: "Rosie & Ravi",
    content: "\"Chị cảm ơn team đã hỗ trợ dâu rể rất nhiệt tình. Chị rất may mắn gặp được bọn em. Buổi tiệc diễn ra suôn sẻ và đâu cũng được chăm sóc rất tốt.\"",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkS2mhHPl-5Wsk_0B7RdoQ2z_wnEech-RQZIpbfMTQbZh2WMI3uwnBw4B3prt8qCpPqcYzVbFqfQI5x755DnNdNCoToxCN482WRMSlVYkB_tPOqdyz3IFuLaal7UhT7pfQ34I3EGe__6iM4qq_xyemmyynOti5t4Qxx9xtBsjoraTKQtQ9XhFn5nK-8v1S4rA-zYRIlO6naO77kYcRW1pld9Dalf7-4XkiN7F8Ao4GySn_2VA6rQ3rVEs_NoOdglz5oge9lVEJwi4"
  },
  {
    id: 3,
    names: "A-Chau & Bradley",
    content: "\"We just did it quickly on the plane now actually - we sent a bit more than what you asked - the rest is for you girls as a little extra to say thank you so much for the support. We had an amazing wedding thank to you girls 🥰🥰 we hope you continue to support more couples on their special day!!\"",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkS2mhHPl-5Wsk_0B7RdoQ2z_wnEech-RQZIpbfMTQbZh2WMI3uwnBw4B3prt8qCpPqcYzVbFqfQI5x755DnNdNCoToxCN482WRMSlVYkB_tPOqdyz3IFuLaal7UhT7pfQ34I3EGe__6iM4qq_xyemmyynOti5t4Qxx9xtBsjoraTKQtQ9XhFn5nK-8v1S4rA-zYRIlO6naO77kYcRW1pld9Dalf7-4XkiN7F8Ao4GySn_2VA6rQ3rVEs_NoOdglz5oge9lVEJwi4"
  }
];

export const Testimonials: React.FC = () => {
  const { t } = useI18n();

  return (
    <section id="stories" className="py-16 px-4 bg-stone-50 md:py-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl text-center text-stone-800 italic mb-2">
          {t('testimonials.title')}
        </h2>
        <p className="text-center text-xs md:text-sm text-stone-500 mb-12">
          {t('testimonials.subtitle')}
        </p>

        <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-3 md:gap-10">
          {testimonials.map((item) => (
            <div key={item.id} className="flex flex-col items-center text-center">
              <div className="w-full h-64 md:h-72 rounded-xl overflow-hidden mb-6 shadow-md">
                <img
                  alt={`Couple ${item.names}`}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  src={item.image}
                />
              </div>
              <h3 className="font-display text-xl md:text-2xl text-stone-800 italic mb-3">
                {item.names}
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed px-2 italic">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};