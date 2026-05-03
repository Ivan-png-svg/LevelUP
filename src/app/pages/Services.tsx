import { motion } from 'motion/react';
import { Link } from 'react-router';
import { User, Users, Briefcase, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Services() {
  const services = [
    {
      icon: User,
      title: 'Індивідуальні консультації',
      description:
        'Персональна психологічна підтримка в комфортній атмосфері. Робота над особистими питаннями, подолання кризових ситуацій, розвиток особистості.',
      features: [
        'Конфіденційність',
        'Індивідуальний підхід',
        'Гнучкий графік',
        'Онлайн та офлайн формат',
      ],
      path: '/services/individual',
      gradient: 'from-primary to-cyan-400',
      image: 'https://images.unsplash.com/photo-1593444286621-98245b7d4530?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwc3ljaG9sb2d5JTIwdGhlcmFweSUyMGNvbnN1bHRhdGlvbiUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzE4NzIwMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: Users,
      title: 'Групові тренінги',
      description:
        'Інтерактивні заняття в невеликих групах. Розвиток навичок спілкування, впевненості в собі, управління емоціями та стресом.',
      features: [
        'Невелика група (до 12 осіб)',
        'Інтерактивні вправи',
        'Обмін досвідом',
        'Практичні навички',
      ],
      path: '/services/group',
      gradient: 'from-primary to-cyan-400',
      image: 'https://images.unsplash.com/photo-1761250246894-ee2314939662?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW1pbmFyJTIwdHJhaW5pbmclMjBtZWV0aW5nJTIwZGlzY3Vzc2lvbnxlbnwxfHx8fDE3NzIzOTgwODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: Briefcase,
      title: 'Корпоративні програми',
      description:
        'Комплексні програми для бізнесу та організацій. Покращення командної роботи, підвищення продуктивності, профілактика вигорання.',
      features: [
        'Програми під запит',
        'Виїзні тренінги',
        'Командоутворення',
        'Аналіз результатів',
      ],
      path: '/services/corporate',
      gradient: 'from-primary to-cyan-400',
      image: 'https://images.unsplash.com/photo-1635545999375-057ee4013deb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwbWluZGZ1bG5lc3MlMjB3ZWxsbmVzcyUyMHJlbGF4YXRpb258ZW58MXx8fHwxNzcxODcyMDM3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const benefits = [
    'Досвідчені психологи з вищою освітою та сертифікатами',
    'Сучасні методики та індивідуальний підхід',
    'Комфортне приміщення в центрі міста',
    'Гнучкий графік роботи, включно з вихідними',
    'Можливість онлайн консультацій',
    'Повна конфіденційність та анонімність',
  ];

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 -z-10" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10" />

        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Наші{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                послуги
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-foreground/70 leading-relaxed">
              Ми пропонуємо широкий спектр психологічних послуг для різних
              потреб. Від індивідуальних консультацій до корпоративних програм
              - ми допоможемо вам знайти оптимальне рішення для особистісного
              та професійного зростання.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>

                  <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground/80">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to={service.path}
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r ${service.gradient} text-white font-medium shadow-lg hover:shadow-xl transition-all group`}
                  >
                    Докладніше
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Чому обирають нас
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Ми створюємо найкращі умови для вашого комфорту та ефективної
              роботи
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-3 bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all"
              >
                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-foreground/80">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}