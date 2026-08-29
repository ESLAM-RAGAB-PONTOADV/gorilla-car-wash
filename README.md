# Gorilla Car Wash — Digital Contact Website

موقع Mobile-first لمغسلة غوريلا، مصمم ليُفتح من QR Code ويعطي العميل وصولًا مباشرًا إلى الاتصال وWhatsApp وGoogle Maps وطرق الدفع والسوشيال ميديا.

## الملفات

```text
gorilla-car-wash/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── assets/
    └── images/
        ├── logo.webp
        ├── logo.png
        ├── hero.webp
        ├── motorcycle.webp
        ├── brand-banner.webp
        ├── icon-192.png
        └── icon-512.png
```

## تشغيل محلي

يمكن فتح `index.html` مباشرة في المتصفح. وللتجربة بسيرفر محلي من VS Code يمكن استخدام Live Server.

## رفع المشروع إلى GitHub

من داخل فولدر المشروع في Git Bash:

```bash
git init
git add .
git commit -m "feat: launch Gorilla Car Wash contact site"
git branch -M main
git remote add origin YOUR_REPOSITORY_URL
git push -u origin main
```

بعدها من GitHub:

`Settings → Pages → Deploy from a branch → main → /(root) → Save`

## بيانات التواصل المستخدمة

- الهاتف / WhatsApp: `01557055602`
- Vodafone Cash: `01140877572`
- InstaPay: `galalalicib@instapay`
- مواعيد العمل: يوميًا من 9 صباحًا حتى 3 فجرًا

## ملاحظة

رابط الموقع النهائي لم يكن معروفًا وقت إنشاء النسخة الأولى؛ لذلك JSON-LD لا يحتوي على `url` نهائي. بعد نشر الموقع يمكن إضافة رابط GitHub Pages أو الدومين في `index.html` داخل بيانات Schema وOpen Graph عند الحاجة.
