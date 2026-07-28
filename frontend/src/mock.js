// Mock data for Second Brain (Moneo-styled)

export const CATEGORIES = [
  { id: 'work', label: 'Работа', icon: 'Briefcase', color: '#10b981' },
  { id: 'business', label: 'Бизнес', icon: 'TrendingUp', color: '#34d399' },
  { id: 'personal', label: 'Личность', icon: 'User', color: '#6ee7b7' },
  { id: 'content', label: 'Контент', icon: 'PenLine', color: '#a7f3d0' },
  { id: 'health', label: 'Здоровье', icon: 'Activity', color: '#4ade80' },
  { id: 'learning', label: 'Обучение', icon: 'BookOpen', color: '#22d3ee' },
];

export const SYSTEM_CATEGORIES = [
  { id: 'inbox', label: 'Входящие', icon: 'Inbox', color: '#f59e0b' },
  { id: 'archive', label: 'Архив', icon: 'Archive', color: '#64748b' },
];

export const ALL_CATEGORIES = [...CATEGORIES, ...SYSTEM_CATEGORIES];

export const INITIAL_NOTES = [
  {
    id: '1',
    title: 'План на спринт',
    content: 'Важная задача по проекту. Разбить на подзадачи, назначить приоритеты, определить дедлайны для команды.',
    category: 'work',
    createdAt: '2026-07-25T20:58:00',
    updatedAt: '2026-07-25T20:58:00',
  },
  {
    id: '2',
    title: 'Проекты в работе сейчас',
    content: 'Second Brain, контент завод, EMC игры, генерация лендингов на Aura, интеграция с Telegram ботом.',
    category: 'work',
    createdAt: '2026-07-25T20:52:00',
    updatedAt: '2026-07-25T20:52:00',
  },
  {
    id: '3',
    title: 'Заметка из CLI',
    content: 'Это проверка русского интерфейса. Всё работает корректно, кириллица отображается без искажений.',
    category: 'personal',
    createdAt: '2026-07-25T00:51:00',
    updatedAt: '2026-07-25T00:51:00',
  },
  {
    id: '4',
    title: 'First note',
    content: 'This is a starter note for the Second Brain MVP. Welcome to your new productivity system.',
    category: 'personal',
    createdAt: '2026-07-25T00:18:00',
    updatedAt: '2026-07-25T00:18:00',
  },
  {
    id: '5',
    title: 'Работа проекты отложенные пока',
    content: 'Создано через Telegram. Список проектов, которые пока отложены — вернуться к ним в Q4.',
    category: 'inbox',
    createdAt: '2026-07-25T23:09:00',
    updatedAt: '2026-07-25T23:09:00',
  },
  {
    id: '6',
    title: 'Идея запуска SaaS',
    content: 'MRR ориентир 10k$ за 6 месяцев. Ниша — productivity-инструменты для соло-предпринимателей.',
    category: 'business',
    createdAt: '2026-07-24T15:30:00',
    updatedAt: '2026-07-24T15:30:00',
  },
  {
    id: '7',
    title: 'Финансовая модель',
    content: 'Расчёт unit-экономики: CAC, LTV, churn rate. Целевой payback период — 3 месяца.',
    category: 'business',
    createdAt: '2026-07-23T11:20:00',
    updatedAt: '2026-07-23T11:20:00',
  },
  {
    id: '8',
    title: 'Медитация и режим',
    content: 'Утро: 10 минут медитации, стакан воды. Вечер: отбой в 23:00, без экранов за час до сна.',
    category: 'personal',
    createdAt: '2026-07-22T07:00:00',
    updatedAt: '2026-07-22T07:00:00',
  },
  {
    id: '9',
    title: 'Цели на квартал',
    content: 'Q3 2026: закрыть 3 крупных проекта, запустить свой продукт, прочитать 6 книг.',
    category: 'personal',
    createdAt: '2026-07-21T09:15:00',
    updatedAt: '2026-07-21T09:15:00',
  },
  {
    id: '10',
    title: 'Идеи для постов',
    content: '1. Как я построил Second Brain\n2. Топ-5 инструментов продуктивности\n3. Разбор моего workflow',
    category: 'content',
    createdAt: '2026-07-20T14:00:00',
    updatedAt: '2026-07-20T14:00:00',
  },
  {
    id: '11',
    title: 'Структура ютуб канала',
    content: 'Рубрики: обзоры инструментов, кейсы, интервью с фаундерами, туториалы. Публикация 2 раза в неделю.',
    category: 'content',
    createdAt: '2026-07-19T16:45:00',
    updatedAt: '2026-07-19T16:45:00',
  },
  {
    id: '12',
    title: 'План тренировок',
    content: 'Пн/Ср/Пт — силовая, Вт/Чт — кардио, Сб — активный отдых. Целевой вес — минус 4 кг за 2 месяца.',
    category: 'health',
    createdAt: '2026-07-18T08:30:00',
    updatedAt: '2026-07-18T08:30:00',
  },
  {
    id: '13',
    title: 'Питание и добавки',
    content: 'Белок 1.8 г/кг, витамин D, омега-3, магний вечером. Убрать сахар в напитках.',
    category: 'health',
    createdAt: '2026-07-17T12:00:00',
    updatedAt: '2026-07-17T12:00:00',
  },
  {
    id: '14',
    title: 'Курс по системному дизайну',
    content: 'Пройти design patterns, распределённые системы, message queues, кэширование. Дедлайн — конец августа.',
    category: 'learning',
    createdAt: '2026-07-16T19:00:00',
    updatedAt: '2026-07-16T19:00:00',
  },
  {
    id: '15',
    title: 'Книги на квартал',
    content: 'Deep Work, Atomic Habits, The Almanack of Naval, Zero to One, Range, Getting Things Done.',
    category: 'learning',
    createdAt: '2026-07-15T21:30:00',
    updatedAt: '2026-07-15T21:30:00',
  },
];

export const AI_MOCK_RESPONSES = [
  'На основе твоих заметок сейчас приоритет — закрыть план на спринт по проекту Second Brain. Ты также отложил ряд проектов, к которым стоит вернуться в Q4.',
  'В твоих сферах наблюдается перекос в сторону личных заметок (4). Рекомендую уделить больше времени бизнес-направлению — там всего 2 записи, но большие цели по MRR.',
  'Ключевые темы твоих заметок: продуктивность, финансовая модель, режим и здоровье. Всё сходится к одной цели — запуск устойчивого SaaS-продукта.',
  'Обрати внимание: последние заметки по обучению не обновлялись 12 дней. Возможно, курс по системному дизайну сейчас в риске сдвига по дедлайну.',
];
