// داده‌های مشترک سایت برای استفاده در کامپوننت‌ها

export const courses = [
  {
    emoji: '🧠',
    bg: 'linear-gradient(135deg,#ffd6e0,#fff0f4)',
    tag: 'روانشناسی',
    title: 'مدیریت اضطراب و استرس',
    desc: 'تکنیک‌های علمی برای کنترل استرس روزمره و بهبود کیفیت زندگی.',
    meta: '۸ جلسه · آنلاین',
  },
  {
    emoji: '💡',
    bg: 'linear-gradient(135deg,#ffb3c6,#ffd6e0)',
    tag: 'رشد فردی',
    title: 'هدف‌گذاری و انگیزه پایدار',
    desc: 'یاد بگیر چطور اهداف واقعی تعریف کنی و انگیزه‌ات رو حفظ کنی.',
    meta: '۶ جلسه · آنلاین',
  },
  {
    emoji: '❤️',
    bg: 'linear-gradient(135deg,#1a1a2e,#2d2d5e)',
    dark: true,
    tag: 'روابط',
    title: 'مهارت‌های ارتباطی',
    desc: 'تقویت روابط سالم با خودت و دیگران از طریق گفتگوی مؤثر.',
    meta: '۱۰ جلسه · آنلاین',
  },
];

export const podcasts = [
  {
    active: true,
    number: 'قسمت ۸۱',
    title: 'چرا انگیزه‌ات تموم می‌شه؟',
    desc: 'نقش دوپامین در سیستم پاداش مغز و راه‌های حفظ انگیزه در بلندمدت',
    duration: '۳۸ دقیقه',
    progress: 65,
  },
  {
    active: false,
    number: 'قسمت ۸۰',
    title: 'هنر «نه» گفتن',
    desc: 'مرزگذاری سالم بدون احساس گناه',
    duration: '۴۵ دقیقه',
  },
  {
    active: false,
    number: 'قسمت ۷۹',
    title: 'افسردگی پنهان چیه؟',
    desc: 'شناخت علائم و اولین قدم‌ها برای بهبود',
    duration: '۵۲ دقیقه',
  },
];

export const journalArticles = [
  {
    tag: 'عصب‌شناسی',
    tagClass: 'tag-pink',
    source: 'Nature · 2024',
    title: 'نقش دوپامین در شکل‌گیری عادت‌های رفتاری',
    desc: 'پژوهشگران MIT نشان دادند دوپامین نه‌تنها در پاداش، بلکه در پیش‌بینی رفتارهای آینده نقش کلیدی دارد.',
    author: 'MIT Research Lab',
    dataTag: 'neuro',
    dark: false,
  },
  {
    tag: 'روانشناسی',
    tagClass: 'tag-dark',
    source: 'JAMA · 2024',
    title: 'اثربخشی CBT در درمان اضطراب اجتماعی',
    desc: '۸ جلسه درمان شناختی-رفتاری علائم اضطراب اجتماعی را تا ۶۴٪ کاهش می‌دهد.',
    author: 'Stanford University',
    dataTag: 'psych',
    dark: false,
  },
  {
    tag: 'ذهن‌آگاهی',
    tagClass: 'tag-pink',
    source: 'Mindfulness · 2023',
    title: 'مدیتیشن و تغییرات ساختاری مغز',
    desc: '۸ هفته مدیتیشن روزانه چگالی ماده خاکستری هیپوکامپ را به‌طور قابل‌اندازه‌گیری افزایش می‌دهد.',
    author: 'Harvard Med School',
    dataTag: 'mindfulness',
    dark: false,
  },
  {
    tag: 'رفتارشناسی',
    tagClass: 'tag-dark',
    source: 'Psych Science · 2024',
    title: 'چرا اهداف کوچک نتایج بزرگ می‌سازند؟',
    desc: 'تقسیم اهداف به گام‌های ۵ دقیقه‌ای احتمال رسیدن به آن‌ها را ۳ برابر افزایش می‌دهد.',
    author: 'Princeton University',
    dataTag: 'behavior',
    dark: false,
  },
  {
    tag: 'روانشناسی',
    tagClass: 'tag-dark',
    source: 'Lancet · 2024',
    title: 'ارتباط خواب و سلامت روان در بزرگسالان',
    desc: 'کمتر از ۶ ساعت خواب خطر افسردگی را ۴۰٪ و اضطراب را ۳۵٪ افزایش می‌دهد.',
    author: 'Oxford University',
    dataTag: 'psych',
    dark: false,
  },
  {
    tag: 'عصب‌شناسی',
    tagClass: 'tag-hot',
    source: 'Cell · 2024',
    title: 'کشف مکانیزم جدید حافظه احساسی',
    desc: 'دانشمندان نشان دادند آمیگدال چطور خاطرات ترسناک را ذخیره می‌کند — یافته‌ای که PTSD را متحول می‌کند.',
    author: 'Caltech · Cell Journal',
    dataTag: 'neuro',
    dark: true,
  },
];

export const journalFilters = [
  { key: 'all', label: 'همه' },
  { key: 'neuro', label: 'عصب‌شناسی' },
  { key: 'psych', label: 'روانشناسی' },
  { key: 'behavior', label: 'رفتارشناسی' },
  { key: 'mindfulness', label: 'ذهن‌آگاهی' },
];

export const stats = [
  { value: '+۵۰۰', label: 'مشاوره موفق' },
  { value: '+۱۲۰', label: 'دوره آموزشی' },
  { value: '+۸۰', label: 'قسمت پادکست' },
];

export const aboutStats = [
  { value: '۵+', label: 'سال تجربه', dark: false, bgTint: false },
  { value: '۱۰K+', label: 'کاربر فعال', dark: true, bgTint: false },
  { value: '۹۷٪', label: 'رضایت مشاوره', dark: false, bgTint: true },
  { value: '۸۱', label: 'قسمت پادکست', dark: false, bgTint: false },
];
