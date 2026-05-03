import { motion } from 'motion/react';
import { Shield, Heart, TrendingUp, Award } from 'lucide-react';

export function WhyChooseUs() {
  const features = [
    {
      icon: Shield,
      title: 'Досвідчені фахівці',
      description: 'Дипломовані і сертифіковані психологи з багаторічним досвідом.',
      color: 'from-primary to-secondary',
    },
    {
      icon: Heart,
      title: 'Індивідуальний підхід',
      description: 'Дбайливо, уважно, індивідуально підбираємо методи роботи.',
      color: 'from-secondary to-accent',
    },
    {
      icon: TrendingUp,
      title: 'Підтримка та розвиток',
      description: 'Надаємо підтримку на всіх етапах особистісного зростання.',
      color: 'from-accent to-primary',
    },
    {
      icon: Award,
      title: 'Довіра та результат',
      description: 'Конфіденційність та ефективність - наші головні цінності.',
      color: 'from-primary to-accent',
    },
  ];

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Чому обирають нас?
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Ми створюємо комфортне середовище для вашого особистісного розвитку
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="relative mx-auto w-24 h-24 mb-6"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity`}
                />
                <div
                  className={`relative w-full h-full rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg`}
                >
                  <feature.icon className="w-12 h-12 text-white" />
                </div>
              </motion.div>

              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>

              <p className="text-foreground/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
