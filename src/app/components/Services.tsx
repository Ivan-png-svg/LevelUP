import { motion } from 'motion/react';
import { Link } from 'react-router';
import { MessageCircleHeart, Users2, Building2, ArrowRight } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: MessageCircleHeart,
      title: 'Індивідуальні консультації',
      description:
        'Конфіденційна індивідуальна психологічна та кризова допомога з широкого спектру питань.',
      gradient: 'from-primary to-cyan-400',
      delay: 0.1,
      path: '/services/individual',
    },
    {
      icon: Users2,
      title: 'Тренінги та семінари',
      description:
        'Тематичні тренінги, семінари та групові заняття для особистого та професійного зростання.',
      gradient: 'from-secondary to-emerald-400',
      delay: 0.2,
      path: '/services/group',
    },
    {
      icon: Building2,
      title: 'Корпоративні програми',
      description:
        'Організація та проведення заходів корпоративного спрямування для команд та бізнесу.',
      gradient: 'from-accent to-yellow-400',
      delay: 0.3,
      path: '/services/corporate',
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Наші послуги
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Ми пропонуємо широкий спектр послуг для вашого особистісного та професійного розвитку
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: service.delay }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-border overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />

              <div className="relative z-10">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>

                <p className="text-foreground/70 mb-6">{service.description}</p>

                <Link
                  to={service.path}
                  className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all"
                >
                  Дізнатись більше
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}