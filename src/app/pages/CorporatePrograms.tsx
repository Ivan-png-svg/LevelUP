import { motion } from 'motion/react';
import { Link } from 'react-router';
import {
  Briefcase,
  Users,
  TrendingUp,
  Target,
  Award,
  Calendar,
  CheckCircle2,
  Building2,
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function CorporatePrograms() {
  const services = [
    {
      icon: Users,
      title: 'Тімбілдінг',
      description:
        'Створення згуртованої команди через спільні активності, вправи на довіру та комунікацію. Покращення взаємодії між співробітниками.',
    },
    {
      icon: TrendingUp,
      title: 'Розвиток лідерства',
      description:
        'Програми для керівників та менеджерів. Розвиток навичок управління, мотивації команди, прийняття рішень та делегування.',
    },
    {
      icon: Target,
      title: 'Профілактика вигорання',
      description:
        'Навчання техніків управління стресом, балансу роботи та життя. Створення здорової робочої атмосфери.',
    },
    {
      icon: Building2,
      title: 'Організаційна культура',
      description:
        'Розробка та впровадження цінностей компанії, покращення внутрішньої комунікації, вирішення конфліктів.',
    },
  ];

  const programs = [
    {
      title: 'Базовий пакет',
      duration: '1 день',
      description: 'Ідеально для невеликих команд',
      features: [
        'Тімбілдінг активності (4 години)',
        'Діагностика командної динаміки',
        'Презентація результатів',
        'Рекомендації для розвитку',
      ],
      participants: 'До 20 учасників',
    },
    {
      title: 'Стандартний пакет',
      duration: '2-3 дні',
      description: 'Комплексний підхід до розвитку',
      features: [
        'Діагностика та аналіз команди',
        'Тренінги з обраних тем',
        'Практичні воркшопи',
        'Індивідуальні сесії для лідерів',
        'Звіт з рекомендаціями',
      ],
      participants: 'До 40 учасників',
      popular: true,
    },
    {
      title: 'Преміум пакет',
      duration: 'Індивідуально',
      description: 'Довгострокове партнерство',
      features: [
        'Комплексна діагностика організації',
        'Програма на замовлення',
        'Регулярні тренінги протягом року',
        'Супровід змін',
        'Коучинг для керівництва',
        'Квартальні звіти та коригування',
      ],
      participants: 'Будь-яка кількість',
    },
  ];

  const benefits = [
    'Покращення командної роботи та комунікації',
    'Підвищення мотивації та залученості співробітників',
    'Зниження плинності кадрів',
    'Розвиток лідерських навичок',
    'Профілактика професійного вигорання',
    'Ефективне вирішення конфліктів',
    'Позитивна організаційна культура',
    'Підвищення продуктивності',
  ];

  const industries = [
    'IT та технології',
    'Фінанси та банківництво',
    'Роздрібна торгівля',
    'Виробництво',
    'Медицина та охорона здоров\'я',
    'Освіта',
    'Маркетинг та реклама',
    'Готельний та ресторанний бізнес',
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 -z-10" />

        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <Briefcase className="w-4 h-4 text-accent" />
                <span className="text-sm text-foreground/80">
                  Для бізнесу
                </span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Корпоративні{' '}
                <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  програми
                </span>
              </h1>

              <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                Допомагаємо компаніям створювати ефективні та згуртовані
                команди. Розробляємо індивідуальні програми для підвищення
                продуктивності, мотивації та благополуччя співробітників.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-foreground/70">
                  <Users className="w-5 h-5 text-primary" />
                  <span>Будь-яка команда</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/70">
                  <Calendar className="w-5 h-5 text-secondary" />
                  <span>Гнучкий формат</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/70">
                  <Award className="w-5 h-5 text-accent" />
                  <span>10+ років досвіду</span>
                </div>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-accent to-primary text-white font-medium shadow-lg hover:shadow-xl transition-all"
              >
                Обговорити проєкт
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758518729263-e26fb50db6bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0ZWFtJTIwbWVldGluZyUyMGJ1c2luZXNzJTIwcHJvZmVzc2lvbmFscyUyMGdyb3VwJTIwb2ZmaWNlfGVufDF8fHx8MTc3NDUyMTY1Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Corporate programs"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Наші напрямки роботи
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Пакети послуг
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-2">
              Оберіть оптимальний варіант для вашої компанії
            </p>
            <p className="text-md text-primary font-semibold">
              Всі ціни за домовленістю
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 ${
                  program.popular ? 'border-primary' : 'border-border'
                } relative flex flex-col`}
              >
                {program.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-lg">
                      Популярний
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {program.title}
                  </h3>
                  <div className="text-primary font-medium mb-1">
                    {program.duration}
                  </div>
                  <div className="text-sm text-foreground/60">
                    {program.description}
                  </div>
                </div>

                <div className="space-y-3 mb-6 flex-grow">
                  {program.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/80">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-border mt-auto">
                  <div className="flex items-center gap-2 text-sm text-foreground/70 mb-4">
                    <Users className="w-4 h-4" />
                    {program.participants}
                  </div>
                  <Link
                    to="/contact"
                    className={`block w-full px-6 py-3 rounded-xl text-center font-medium transition-all ${
                      program.popular
                        ? 'bg-gradient-to-br from-primary to-cyan-400 text-white shadow-lg hover:shadow-xl'
                        : 'border-2 border-primary text-primary hover:bg-primary/5'
                    }`}
                  >
                    Замовити консультацію
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Результати співпраці
              </h2>
              <p className="text-lg text-foreground/70 mb-8">
                Наші корпоративні програми допомагають компаніям досягати
                вимірних результатів та створювати здорове робоче середовище.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-foreground/80">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Галузі, з якими ми працюємо
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {industries.map((industry) => (
                    <div
                      key={industry}
                      className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg"
                    >
                      <Building2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground/80">
                        {industry}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}