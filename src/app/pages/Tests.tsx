import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import {
  Brain,
  Heart,
  TrendingUp,
  Users,
  CheckCircle2,
  AlertCircle,
  Sparkles,
} from 'lucide-react';

interface Question {
  text: string;
  options: { text: string; score: number }[];
}

interface Test {
  id: string;
  title: string;
  description: string;
  icon: typeof Brain;
  gradient: string;
  questions: Question[];
  interpretation: (score: number) => {
    title: string;
    description: string;
    recommendation: string;
  };
}

export default function Tests() {
  const [selectedTest, setSelectedTest] = useState<Test | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const tests: Test[] = [
    {
      id: 'anxiety',
      title: 'Тест на рівень тривожності',
      description:
        'Визначте рівень вашої тривожності та дізнайтеся, чи потрібна вам професійна підтримка',
      icon: AlertCircle,
      gradient: 'from-primary to-cyan-400',
      questions: [
        {
          text: 'Як часто ви відчуваєте напруження або нервозність?',
          options: [
            { text: 'Ніколи', score: 0 },
            { text: 'Іноді', score: 1 },
            { text: 'Часто', score: 2 },
            { text: 'Майже завжди', score: 3 },
          ],
        },
        {
          text: 'Чи важко вам зупинити тривожні думки?',
          options: [
            { text: 'Зовсім не важко', score: 0 },
            { text: 'Трохи важко', score: 1 },
            { text: 'Досить важко', score: 2 },
            { text: 'Дуже важко', score: 3 },
          ],
        },
        {
          text: 'Як часто ви турбуєтеся про різні речі?',
          options: [
            { text: 'Рідко', score: 0 },
            { text: 'Іноді', score: 1 },
            { text: 'Часто', score: 2 },
            { text: 'Постійно', score: 3 },
          ],
        },
        {
          text: 'Чи важко вам розслабитися?',
          options: [
            { text: 'Зовсім не важко', score: 0 },
            { text: 'Іноді важко', score: 1 },
            { text: 'Часто важко', score: 2 },
            { text: 'Дуже важко', score: 3 },
          ],
        },
        {
          text: 'Чи відчуваєте ви фізичні симптоми тривоги (серцебиття, пітливість)?',
          options: [
            { text: 'Ніколи', score: 0 },
            { text: 'Рідко', score: 1 },
            { text: 'Часто', score: 2 },
            { text: 'Постійно', score: 3 },
          ],
        },
      ],
      interpretation: (score) => {
        if (score <= 5) {
          return {
            title: 'Низький рівень тривожності',
            description:
              'Ваш рівень тривожності в межах норми. Ви добре справляєтеся зі стресовими ситуаціями.',
            recommendation:
              'Продовжуйте підтримувати здоровий спосіб життя та практикуйте техніки релаксації.',
          };
        } else if (score <= 10) {
          return {
            title: 'Помірний рівень тривожності',
            description:
              'Ви відчуваєте певний рівень тривожності, що може впливати на вашу повсякденну діяльність.',
            recommendation:
              'Розгляньте можливість консультації з психологом для вивчення технік управління стресом.',
          };
        } else {
          return {
            title: 'Високий рівень тривожності',
            description:
              'Ваш рівень тривожності високий і може значно впливати на якість вашого життя.',
            recommendation:
              'Настійно рекомендуємо звернутися до психолога для професійної підтримки.',
          };
        }
      },
    },
    {
      id: 'self-esteem',
      title: 'Тест на самооцінку',
      description:
        'Дізнайтеся про рівень вашої самооцінки та отримайте рекомендації щодо її підвищення',
      icon: Heart,
      gradient: 'from-secondary to-emerald-400',
      questions: [
        {
          text: 'Я вважаю себе цінною людиною',
          options: [
            { text: 'Повністю не згоден', score: 0 },
            { text: 'Скоріше не згоден', score: 1 },
            { text: 'Скоріше згоден', score: 2 },
            { text: 'Повністю згоден', score: 3 },
          ],
        },
        {
          text: 'Я впевнений у своїх можливостях',
          options: [
            { text: 'Ніколи', score: 0 },
            { text: 'Іноді', score: 1 },
            { text: 'Часто', score: 2 },
            { text: 'Завжди', score: 3 },
          ],
        },
        {
          text: 'Я легко приймаю комплімент и',
          options: [
            { text: 'Ніколи', score: 0 },
            { text: 'Рідко', score: 1 },
            { text: 'Часто', score: 2 },
            { text: 'Завжди', score: 3 },
          ],
        },
        {
          text: 'Я задоволений собою',
          options: [
            { text: 'Зовсім ні', score: 0 },
            { text: 'Скоріше ні', score: 1 },
            { text: 'Скоріше так', score: 2 },
            { text: 'Повністю так', score: 3 },
          ],
        },
        {
          text: 'Я вірю, що заслуговую на успіх',
          options: [
            { text: 'Не вірю', score: 0 },
            { text: 'Іноді', score: 1 },
            { text: 'Часто', score: 2 },
            { text: 'Завжди', score: 3 },
          ],
        },
      ],
      interpretation: (score) => {
        if (score <= 5) {
          return {
            title: 'Низька самооцінка',
            description:
              'Ваша самооцінка потребує уваги. Ви можете недооцінювати свої якості та досягнення.',
            recommendation:
              'Рекомендуємо пройти курс з підвищення самооцінки або звернутися до психолога.',
          };
        } else if (score <= 10) {
          return {
            title: 'Помірна самооцінка',
            description:
              'Ваша самооцінка в межах норми, але є простір для зростання.',
            recommendation:
              'Працюйте над самоприйняттям та визнанням власних досягнень.',
          };
        } else {
          return {
            title: 'Висока самооцінка',
            description:
              'У вас здорова самооцінка. Ви цінуєте себе та впевнені у своїх можливостях.',
            recommendation:
              'Продовжуйте підтримувати позитивне ставлення до себе.',
          };
        }
      },
    },
    {
      id: 'stress',
      title: 'Тест на рівень стресу',
      description:
        'Оцініть рівень стресу в вашому житті та дізнайтеся, як краще з ним справлятися',
      icon: TrendingUp,
      gradient: 'from-accent to-yellow-400',
      questions: [
        {
          text: 'Як часто ви відчуваєте перевантаження?',
          options: [
            { text: 'Ніколи', score: 0 },
            { text: 'Рідко', score: 1 },
            { text: 'Часто', score: 2 },
            { text: 'Постійно', score: 3 },
          ],
        },
        {
          text: 'Чи маєте ви проблеми зі сном через стрес?',
          options: [
            { text: 'Ніколи', score: 0 },
            { text: 'Іноді', score: 1 },
            { text: 'Часто', score: 2 },
            { text: 'Майже завжди', score: 3 },
          ],
        },
        {
          text: 'Як часто ви відчуваєте втому без причини?',
          options: [
            { text: 'Ніколи', score: 0 },
            { text: 'Рідко', score: 1 },
            { text: 'Часто', score: 2 },
            { text: 'Постійно', score: 3 },
          ],
        },
        {
          text: 'Чи важко вам концентруватися на завданнях?',
          options: [
            { text: 'Ні', score: 0 },
            { text: 'Іноді', score: 1 },
            { text: 'Часто', score: 2 },
            { text: 'Дуже важко', score: 3 },
          ],
        },
        {
          text: 'Як часто ви відчуваєте роздратування?',
          options: [
            { text: 'Рідко', score: 0 },
            { text: 'Іноді', score: 1 },
            { text: 'Часто', score: 2 },
            { text: 'Постійно', score: 3 },
          ],
        },
      ],
      interpretation: (score) => {
        if (score <= 5) {
          return {
            title: 'Низький рівень стресу',
            description:
              'Ваш рівень стресу в межах норми. Ви добре справляєтеся з життєвими викликами.',
            recommendation:
              'Продовжуйте практикувати здорові звички та техніки релаксації.',
          };
        } else if (score <= 10) {
          return {
            title: 'Помірний рівень стресу',
            description:
              'Ви відчуваєте помірний стрес, який може впливати на ваше самопочуття.',
            recommendation:
              'Розгляньте можливість навчитися технікам управління стресом.',
          };
        } else {
          return {
            title: 'Високий рівень стресу',
            description:
              'Ваш рівень стресу високий і може негативно впливати на ваше здоров\'я.',
            recommendation:
              'Рекомендуємо звернутися до психолога для професійної допомоги.',
          };
        }
      },
    },
  ];

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);

    if (selectedTest && currentQuestion < selectedTest.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetTest = () => {
    setSelectedTest(null);
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  const totalScore = answers.reduce((sum, score) => sum + score, 0);
  const result = selectedTest?.interpretation(totalScore);

  if (selectedTest && !showResults) {
    const question = selectedTest.questions[currentQuestion];
    const progress = ((currentQuestion + 1) / selectedTest.questions.length) * 100;

    return (
      <div className="pt-20 min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <div className="mb-8">
              <button
                onClick={resetTest}
                className="text-primary hover:text-primary/70 transition-colors mb-4"
              >
                ← Повернутися до вибору тесту
              </button>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                {selectedTest.title}
              </h2>
              <div className="w-full bg-muted rounded-full h-2 mb-6">
                <div
                  className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-foreground/70">
                Питання {currentQuestion + 1} з {selectedTest.questions.length}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                {question.text}
              </h3>
              <div className="space-y-4">
                {question.options.map((option, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAnswer(option.score)}
                    className="w-full p-4 rounded-xl border-2 border-border hover:border-primary hover:bg-primary/5 text-left transition-all"
                  >
                    {option.text}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  if (showResults && result) {
    return (
      <div className="pt-20 min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <div className={`w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br ${selectedTest?.gradient} flex items-center justify-center`}>
                  <Sparkles className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  Результати тесту
                </h2>
                <p className="text-lg text-foreground/70">
                  Ваш результат: {totalScore} балів
                </p>
              </div>

              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    {result.title}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    {result.description}
                  </p>
                </div>

                <div className="bg-primary/5 rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    Рекомендації
                  </h4>
                  <p className="text-foreground/80">{result.recommendation}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={resetTest}
                  className="flex-1 px-6 py-3 rounded-xl border-2 border-primary text-primary hover:bg-primary/5 transition-all"
                >
                  Пройти інший тест
                </button>
                <Link
                  to="/contact"
                  className="flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white text-center font-medium shadow-lg hover:shadow-xl transition-all"
                >
                  Записатися на консультацію
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 -z-10" />

        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Brain className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground/80">
                Психологічне тестування
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Психологічні{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                тести
              </span>
            </h1>

            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Пройдіть безкоштовні психологічні тести, щоб краще зрозуміти себе
              та отримати персональні рекомендації
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tests.map((test, index) => (
              <motion.div
                key={test.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedTest(test)}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${test.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <test.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {test.title}
                </h3>

                <p className="text-foreground/70 mb-6">{test.description}</p>

                <div className="flex items-center justify-between text-sm text-foreground/60">
                  <span>{test.questions.length} питань</span>
                  <span className="text-primary font-medium group-hover:gap-2 transition-all flex items-center gap-1">
                    Почати тест →
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 text-center"
          >
            <Brain className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Потрібна професійна консультація?
            </h3>
            <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
              Наші психологи готові допомогти вам розібратися з будь-якими
              питаннями та надати професійну підтримку
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-medium shadow-lg hover:shadow-xl transition-all"
            >
              Записатися на консультацію
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
