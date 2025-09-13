# Електромонтажні роботи - Веб-сайт

Професійний веб-сайт для електромонтажних послуг з підтримкою старих браузерів.

## ✨ Особливості

- 🎨 Сучасний дизайн з Tailwind CSS
- 📱 Повністю адаптивний дизайн
- 🔧 **Підтримка старих браузерів** з автоматичними fallback стилями
- ⚡ Оптимізована продуктивність
- 🔐 Аутентифікація з NextAuth.js
- 📊 MongoDB для зберігання даних

## 🌐 Підтримка браузерів

### Сучасні браузери (повний функціонал):
- Chrome 49+
- Firefox 31+
- Safari 9+
- Edge 16+

### Старі браузери (спрощені стилі):
- Internet Explorer 9+
- Chrome 1-48
- Firefox 3.5-30
- Safari 3-8
- Opera 10+

## 🚀 Швидкий старт

1. **Клонування репозиторію:**
```bash
git clone https://github.com/Natali993/srm-tomilovich.git
cd srm-tomilovich
```

2. **Встановлення залежностей:**
```bash
npm install
```

3. **Запуск сервера розробки:**
```bash
npm run dev
```

4. **Відкрийте браузер:**
Перейдіть на [http://localhost:3000](http://localhost:3000)

## 🔧 Тестування підтримки старих браузерів

### В режимі розробки:
1. Відкрийте сайт в браузері
2. Натисніть на кнопку "🔧 Browser Test" в правому верхньому куті
3. Натисніть "Toggle Legacy Mode" для перемикання між режимами
4. Перейдіть на `/test-legacy` для тестової сторінки

### Емуляція старого браузера:
```javascript
// В консолі браузера:
document.body.classList.add('legacy-fallback');
window.location.reload();
```

## 📁 Структура проекту

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Основні стилі
│   ├── legacy-fallbacks.css # Fallback стилі
│   └── layout.tsx         # Головний layout
├── components/            # React компоненти
│   ├── LegacyFallback.tsx # Система fallback
│   ├── LegacyHeroSection.tsx # Спрощена версія Hero
│   └── BrowserDetection.tsx # Детекція браузера
├── lib/                   # Утиліти
│   └── browser-detection.ts # Логіка детекції
└── public/
    └── legacy-detection.js # Скрипт детекції
```

## 🎯 Як працює підтримка старих браузерів

1. **Автоматична детекція:** Скрипт перевіряє підтримку сучасних CSS властивостей
2. **Класифікація:** Браузери з підтримкою < 4 з 6 функцій вважаються "legacy"
3. **Застосування fallback:** Автоматично додаються CSS класи та переключається контент
4. **Спрощені компоненти:** Показуються версії з базовими стилями

## 📋 Команди

```bash
# Розробка
npm run dev

# Збірка для продакшену
npm run build

# Запуск продакшен сервера
npm start

# Лінтинг
npm run lint
```

## 🔗 Корисні посилання

- [Документація по підтримці старих браузерів](./LEGACY_BROWSER_SUPPORT.md)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
