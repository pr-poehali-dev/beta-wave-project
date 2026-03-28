import { Badge } from "@/components/ui/badge"

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-white border-white/50 bg-white/5 text-sm tracking-widest uppercase">Чемпионат «Думай глубже», 2026</Badge>,
    title: "«Потерянное\nв переводе»",
    content: 'Яшина Варвара · 9 класс · МБОУ СОШ 14 г. Кузнецка',
  },
  {
    id: 'problem',
    subtitle: <Badge variant="outline" className="text-white border-white/50 bg-white/5 text-sm tracking-widest uppercase">Слайд 2 — Суть кейса</Badge>,
    title: "В чём суть кейса?",
    content: 'Китайская пословица 入乡随俗 переводится как «В чужой монастырь со своим уставом не ходят». Но этот перевод теряет важный оттенок — вместо гибкости и уважения получается запрет.',
    items: [
      'Предложить свой перевод — живой и точный',
      'Показать, как пословица помогает избежать культурных ошибок в реальной жизни',
    ]
  },
  {
    id: 'comparison',
    subtitle: <Badge variant="outline" className="text-white border-white/50 bg-white/5 text-sm tracking-widest uppercase">Слайд 3 — Сравнение смыслов</Badge>,
    title: "Что теряется\nпри переводе?",
    table: [
      { col1: '入乡随俗', col2: '«В чужой монастырь со своим уставом не ходят»', col3: 'Акцент на запрете, звучит как угроза' },
      { col1: 'войти в деревню — следовать обычаям', col2: 'в чужом месте не навязывай свои порядки', col3: 'Теряется идея добровольной адаптации' },
    ],
    content: 'Вывод: нужен перевод, который передаёт гибкость, уважение и готовность учиться.',
  },
  {
    id: 'translation',
    subtitle: <Badge variant="outline" className="text-white border-white/50 bg-white/5 text-sm tracking-widest uppercase">Слайд 4 — Мой вариант</Badge>,
    title: "Мой вариант\nперевода",
    quote: '«В чужом доме — не со своим уставом, а с уважением к обычаям»',
    items: [
      'Сохраняет образ «дома» — близкий русской культуре',
      'Заменяет запрет на позитивное действие — уважение',
      'Легко запоминается, передаёт суть: адаптация через уважение',
    ]
  },
  {
    id: 'case',
    subtitle: <Badge variant="outline" className="text-white border-white/50 bg-white/5 text-sm tracking-widest uppercase">Слайд 5 — Реальная ситуация</Badge>,
    title: "Деловая встреча\nв Шанхае",
    content: 'Российская IT-компания проводит переговоры с китайскими партнёрами. Российские коллеги дарят часы — в Китае это символ смерти и разрыва отношений.',
    items: [
      'Заранее изучили бы символику подарков',
      'Выбрали бы чай или сувенир с символикой удачи',
      'Переговоры прошли бы в тёплой атмосфере',
    ]
  },
  {
    id: 'conclusions',
    subtitle: <Badge variant="outline" className="text-white border-white/50 bg-white/5 text-sm tracking-widest uppercase">Слайд 6 — Выводы</Badge>,
    title: "Выводы",
    items: [
      'Перевод — это не просто замена слов, а передача культурного кода',
      'Хороший перевод помогает избегать конфликтов и строить мосты между людьми',
      'Успех в другой культуре начинается с уважения к её правилам',
    ],
    content: 'Мой вариант перевода делает акцент именно на этом — и звучит как дружеский совет, а не как строгое правило.',
  },
  {
    id: 'ai',
    subtitle: <Badge variant="outline" className="text-white border-white/50 bg-white/5 text-sm tracking-widest uppercase">Слайд 7 — След ИИ</Badge>,
    title: "Как я использовал\nИИ",
    items: [
      'Уточнение смыслов: сравнение оригинала и русского аналога',
      'Подбор формулировок: ИИ предложил варианты, я выбрал «уважение вместо запрета»',
      'Структурирование: выстроил логику сравнения и ключевые пункты',
    ],
    content: 'Что изменил сам: заменил «Пришёл в гости — живи по-ихнему» на литературный вариант. Добавил схему смыслов и пример с часами.',
  },
]
