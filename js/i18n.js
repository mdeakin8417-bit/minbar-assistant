// ==========================================================
// Minbar Assistant — Language / i18n Engine
// data-i18n="key" attribute দেওয়া এলিমেন্টের টেক্সট এই অভিধান
// অনুযায়ী বদলে দেয়। নতুন ভাষা/স্ট্রিং যোগ করতে নিচের অবজেক্টে
// শুধু key যোগ করলেই হবে।
// ==========================================================

const translations = {
  bn: {
    // সাধারণ / বাটন
    save: "সংরক্ষণ করুন", saving: "সংরক্ষণ হচ্ছে...", cancel: "বাতিল", delete: "মুছুন",
    loading: "লোড হচ্ছে...", back: "পিছনে", edit: "সম্পাদনা", add: "যোগ করুন",
    yes: "হ্যাঁ", no: "না", ok: "ঠিক আছে", search: "খুঁজুন", all: "সব",
    optional: "ঐচ্ছিক", required: "আবশ্যক", name: "নাম", phone: "মোবাইল নম্বর",
    address: "ঠিকানা", date: "তারিখ", category: "ক্যাটাগরি", description: "বিবরণ",
    amount: "পরিমাণ", newCategory: "➕ নতুন ক্যাটাগরি যোগ করুন",

    // বটম নেভ
    navHome: "হোম", navBayan: "বায়ান", navDawat: "দাওয়াত", navFinance: "হিসাব", navSettings: "সেটিংস",

    // লগইন
    loginTitle: "আসসালামু আলাইকুম", loginSubtitle: "বায়ান, দাওয়াত ও হিসাব — সব একসাথে, এক জায়গায়।",
    loginTab: "লগইন", signupTab: "নতুন অ্যাকাউন্ট", fullName: "পূর্ণ নাম",
    email: "ইমেইল", password: "পাসওয়ার্ড", loginBtn: "প্রবেশ করুন", signupBtn: "অ্যাকাউন্ট তৈরি করুন",
    forgotPassword: "পাসওয়ার্ড ভুলে গেছেন?", privacyNote: "অ্যাকাউন্ট শুধুই আপনার — আপনার কোনো তথ্য অন্য কেউ দেখতে পারবে না।",

    // ড্যাশবোর্ড
    welcomeBack: "আসসালামু আলাইকুম,", welcomeTitle: "স্বাগতম, মিনবার অ্যাসিস্ট্যান্টে",
    welcomeDesc: "আপনার অ্যাকাউন্ট প্রস্তুত হয়ে গেছে। এখন আমরা ধাপে ধাপে যোগ করছি — প্রতিষ্ঠান/হিসাবখাতা তৈরি, বায়ান, দাওয়াত ও ফাইন্যান্স মডিউল।",
    nextPrayer: "পরবর্তী নামাজ", addInstitution: "➕ নতুন প্রতিষ্ঠান",

    // সেটিংস
    settingsTitle: "সেটিংস", settingsSubtitle: "প্রোফাইল ও অ্যাপ সেটিংস",
    sectionSecurity: "নিরাপত্তা", sectionGeneral: "সাধারণ", sectionPrivacy: "গোপনীয়তা ও শর্তাবলী", sectionAbout: "অ্যাপ সম্পর্কে",
    appLock: "অ্যাপ লক (PIN/প্যাটার্ন/বায়োমেট্রিক)", lockOn: "চালু", lockOff: "বন্ধ",
    notifRow: "দাওয়াতের রিমাইন্ডার নোটিফিকেশন", changePassword: "পাসওয়ার্ড পরিবর্তন",
    newInstitution: "নতুন প্রতিষ্ঠান যোগ করুন", darkMode: "ডার্ক মোড", aiAssistant: "AI সহকারী",
    premium: "✨ প্রিমিয়াম", language: "ভাষা", prayerTimesRow: "নামাজের সময় ও রিমাইন্ডার",
    privacyPolicy: "প্রাইভেসি পলিসি", termsOfService: "ব্যবহারের শর্তাবলী", deleteAccount: "অ্যাকাউন্ট মুছে ফেলার অনুরোধ",
    version: "ভার্সন", feedbackRow: "মতামত/অভিযোগ পাঠান", logout: "লগআউট", freeTagline: "Minbar Assistant · সম্পূর্ণ ফ্রি",

    // বায়ান
    bayanTitle: "বায়ান", bayanSubtitle: "সংরক্ষিত সব বায়ান এক জায়গায়", searchBayan: "বায়ান খুঁজুন...",
    newBayanTitle: "নতুন বায়ান", bayanFormSubtitle: "বায়ানের তথ্য পূরণ করুন", bayanTitleLabel: "শিরোনাম",
    bayanContent: "বায়ানের লেখা (ঐচ্ছিক)", mediaLink: "ইউটিউব / ফেসবুক ভিডিও লিংক (ঐচ্ছিক)",
    mediaFile: "ছবি / PDF / ভিডিও ফাইল যুক্ত করুন (ঐচ্ছিক)", noBayan: "এখনো কোনো বায়ান যোগ করা হয়নি।",

    // দাওয়াত
    dawatTitle: "দাওয়াত", dawatSubtitle: "মুসল্লিদের বাসার দাওয়াতের তালিকা", newDawatTitle: "নতুন দাওয়াত",
    hostName: "দাওয়াতদাতার নাম", dateTime: "তারিখ ও সময়", reminder: "রিমাইন্ডার", note: "নোট (ঐচ্ছিক)",
    statusUpcoming: "উপক্রমিক", statusCompleted: "সম্পন্ন", statusCancelled: "বাতিল", noDawat: "এই তালিকায় কোনো দাওয়াত নেই।",

    // হিসাব
    financeTitle: "হিসাব", financeSubtitle: "আয়-ব্যয় ও লাভ-ক্ষতির হিসাব", newTransaction: "নতুন লেনদেন",
    income: "আয়", expense: "ব্যয়", thisMonth: "এই মাস", net: "নীট", noTransactions: "এখনো কোনো লেনদেন যোগ করা হয়নি।",
    customerLedger: "কাস্টমার / বাকি হিসাব",

    // প্রতিষ্ঠান
    addInstTitle: "প্রতিষ্ঠান যোগ করুন", addInstSubtitle: "কোন ধরনের হিসাবখাতা তৈরি করবেন?",
    typePersonal: "ব্যক্তিগত", typeMosque: "মসজিদ", typeMadrasa: "মাদ্রাসা", typeHostel: "হোস্টেল", typeBusiness: "ব্যবসা / দোকান",
    create: "তৈরি করুন",

    // কাস্টমার
    customersTitle: "কাস্টমার / বাকি হিসাব", customersSubtitle: "কে কত বাকি রেখেছে দেখুন",
    newCustomer: "নতুন কাস্টমার", customerDetails: "কাস্টমারের তথ্য দিন", noCustomers: "এখনো কোনো কাস্টমার যোগ করা হয়নি।",
    currentDue: "বর্তমান বাকি", addDue: "➕ নতুন বাকি", addPayment: "✅ টাকা পেয়েছি", transactionHistory: "লেনদেনের ইতিহাস",

    // অ্যাপ লক
    lockSetupTitle: "অ্যাপ লক সেটআপ", lockSetupSubtitle: "আপনার অ্যাপ সুরক্ষিত করুন",
    pinMethod: "🔢 PIN কোড", patternMethod: "🔒 প্যাটার্ন", biometricUnlock: "ফিঙ্গারপ্রিন্ট / ফেস আনলক",
    lockedTitle: "লক করা আছে", enterPinSubtitle: "আনলক করতে ৪ সংখ্যার PIN দিন", enterPatternSubtitle: "আনলক করতে প্যাটার্ন আঁকুন",

    // নামাজের সময়
    prayerTitle: "নামাজের সময়", prayerSubtitle: "জামাতের সময় ও রিমাইন্ডার সেট করুন",
    location: "মসজিদের অবস্থান", jamaatTimes: "জামাতের সময় (ঐচ্ছিক)",
    fajr: "ফজর", zuhr: "যোহর", asr: "আসর", maghrib: "মাগরিব", isha: "ইশা", jumma: "জুমা",
    azanScheduleTitle: "আজকের আজানের সময়সূচি",
    qaBayan: "নতুন বায়ান", qaDawat: "নতুন দাওয়াত", qaFinance: "নতুন লেনদেন", upcomingDawat: "📅 পরবর্তী দাওয়াত",

    // পাসওয়ার্ড পরিবর্তন
    changePasswordTitle: "পাসওয়ার্ড পরিবর্তন", changePasswordSubtitle: "নতুন পাসওয়ার্ড সেট করুন",
    newPassword: "নতুন পাসওয়ার্ড", confirmPassword: "নতুন পাসওয়ার্ড আবার লিখুন", changeBtn: "পরিবর্তন করুন",

    // মতামত
    feedbackTitle: "মতামত পাঠান", feedbackSubtitle: "আপনার মতামত সরাসরি আমাদের কাছে পৌঁছাবে",
    chooseType: "ধরন বেছে নিন", suggestionCat: "💡 পরামর্শ", bugCat: "🐞 সমস্যা/বাগ", complaintCat: "😕 অভিযোগ", generalCat: "💬 সাধারণ",
    yourFeedback: "আপনার মতামত লিখুন", sendBtn: "পাঠিয়ে দিন",
    privacyTagline: "আপনার তথ্যের নিরাপত্তা আমাদের অগ্রাধিকার", termsTagline: "অ্যাপ ব্যবহারের নিয়মাবলী", aiTagline: "আপনার ব্যক্তিগত ইসলামিক সহকারী",
    aiChatTitle: "🤖 AI সহকারী", aiChatGreeting: "আসসালামু আলাইকুম! আমি আপনাকে বায়ান লেখা, ইসলামিক প্রশ্নোত্তর, বা হিসাব-দাওয়াত সংক্রান্ত পরামর্শে সাহায্য করতে পারি।",
    aiSuggestion1: "জুমার বায়ানের একটা বিষয় সাজেস্ট করো", aiSuggestion2: "সবরের ওপর একটা ছোট বায়ানের খসড়া লিখে দাও", aiChatPlaceholder: "আপনার প্রশ্ন লিখুন...",
  },
  en: {
    save: "Save", saving: "Saving...", cancel: "Cancel", delete: "Delete",
    loading: "Loading...", back: "Back", edit: "Edit", add: "Add",
    yes: "Yes", no: "No", ok: "OK", search: "Search", all: "All",
    optional: "Optional", required: "Required", name: "Name", phone: "Phone number",
    address: "Address", date: "Date", category: "Category", description: "Description",
    amount: "Amount", newCategory: "➕ Add new category",

    navHome: "Home", navBayan: "Bayan", navDawat: "Dawat", navFinance: "Finance", navSettings: "Settings",

    loginTitle: "Assalamu Alaikum", loginSubtitle: "Bayan, Dawat & Finance — all in one place.",
    loginTab: "Log in", signupTab: "New account", fullName: "Full name",
    email: "Email", password: "Password", loginBtn: "Log in", signupBtn: "Create account",
    forgotPassword: "Forgot password?", privacyNote: "Your account is yours alone — no one else can see your information.",

    welcomeBack: "Assalamu Alaikum,", welcomeTitle: "Welcome to Minbar Assistant",
    welcomeDesc: "Your account is ready. We're adding features step by step — institutions, Bayan, Dawat, and Finance modules.",
    nextPrayer: "Next Prayer", addInstitution: "➕ New institution",

    settingsTitle: "Settings", settingsSubtitle: "Profile and app settings",
    sectionSecurity: "Security", sectionGeneral: "General", sectionPrivacy: "Privacy & Terms", sectionAbout: "About the App",
    appLock: "App Lock (PIN/Pattern/Biometric)", lockOn: "On", lockOff: "Off",
    notifRow: "Dawat reminder notifications", changePassword: "Change password",
    newInstitution: "Add new institution", darkMode: "Dark mode", aiAssistant: "AI Assistant",
    premium: "✨ Premium", language: "Language", prayerTimesRow: "Prayer times & reminders",
    privacyPolicy: "Privacy Policy", termsOfService: "Terms of Service", deleteAccount: "Request account deletion",
    version: "Version", feedbackRow: "Send feedback/complaint", logout: "Log out", freeTagline: "Minbar Assistant · Completely Free",

    bayanTitle: "Bayan", bayanSubtitle: "All your saved Bayans in one place", searchBayan: "Search Bayan...",
    newBayanTitle: "New Bayan", bayanFormSubtitle: "Fill in the Bayan details", bayanTitleLabel: "Title",
    bayanContent: "Bayan text (optional)", mediaLink: "YouTube / Facebook video link (optional)",
    mediaFile: "Attach image / PDF / video file (optional)", noBayan: "No Bayan added yet.",

    dawatTitle: "Dawat", dawatSubtitle: "List of home invitations from congregants", newDawatTitle: "New Dawat",
    hostName: "Host's name", dateTime: "Date & time", reminder: "Reminder", note: "Note (optional)",
    statusUpcoming: "Upcoming", statusCompleted: "Completed", statusCancelled: "Cancelled", noDawat: "No Dawat in this list.",

    financeTitle: "Finance", financeSubtitle: "Income, expense & profit/loss tracking", newTransaction: "New Transaction",
    income: "Income", expense: "Expense", thisMonth: "This month", net: "Net", noTransactions: "No transactions added yet.",
    customerLedger: "Customer / Dues Ledger",

    addInstTitle: "Add Institution", addInstSubtitle: "What type of ledger will you create?",
    typePersonal: "Personal", typeMosque: "Mosque", typeMadrasa: "Madrasa", typeHostel: "Hostel", typeBusiness: "Business / Shop",
    create: "Create",

    customersTitle: "Customer / Dues Ledger", customersSubtitle: "See who owes how much",
    newCustomer: "New Customer", customerDetails: "Enter customer details", noCustomers: "No customers added yet.",
    currentDue: "Current Due", addDue: "➕ Add Due", addPayment: "✅ Payment Received", transactionHistory: "Transaction History",

    lockSetupTitle: "App Lock Setup", lockSetupSubtitle: "Secure your app",
    pinMethod: "🔢 PIN Code", patternMethod: "🔒 Pattern", biometricUnlock: "Fingerprint / Face Unlock",
    lockedTitle: "Locked", enterPinSubtitle: "Enter your 4-digit PIN to unlock", enterPatternSubtitle: "Draw your pattern to unlock",

    prayerTitle: "Prayer Times", prayerSubtitle: "Set jamaat times and reminders",
    location: "Mosque Location", jamaatTimes: "Jamaat Times (optional)",
    fajr: "Fajr", zuhr: "Zuhr", asr: "Asr", maghrib: "Maghrib", isha: "Isha", jumma: "Jumma",
    azanScheduleTitle: "Today's Azan Schedule",
    qaBayan: "New Bayan", qaDawat: "New Dawat", qaFinance: "New Transaction", upcomingDawat: "📅 Upcoming Dawat",

    changePasswordTitle: "Change Password", changePasswordSubtitle: "Set a new password",
    newPassword: "New Password", confirmPassword: "Confirm New Password", changeBtn: "Change Password",

    feedbackTitle: "Send Feedback", feedbackSubtitle: "Your feedback reaches us directly",
    chooseType: "Choose a type", suggestionCat: "💡 Suggestion", bugCat: "🐞 Bug/Issue", complaintCat: "😕 Complaint", generalCat: "💬 General",
    yourFeedback: "Write your feedback", sendBtn: "Send",
    privacyTagline: "Your data security is our priority", termsTagline: "App usage guidelines", aiTagline: "Your personal Islamic assistant",
    aiChatTitle: "🤖 AI Assistant", aiChatGreeting: "Assalamu Alaikum! I can help you write Bayans, answer Islamic questions, or advise on finance and Dawat matters.",
    aiSuggestion1: "Suggest a topic for a Jumma Bayan", aiSuggestion2: "Draft a short Bayan on patience (sabr)", aiChatPlaceholder: "Type your question...",
  },
};

function getLang() {
  return localStorage.getItem("minbar_lang") || "bn";
}
function setLang(lang) {
  localStorage.setItem("minbar_lang", lang);
}
function t(key) {
  const lang = getLang();
  return (translations[lang] && translations[lang][key]) || translations.bn[key] || key;
}
function applyTranslations() {
  const lang = getLang();
  document.documentElement.lang = lang === "en" ? "en" : "bn";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.getAttribute("data-i18n"));
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.placeholder = t(el.getAttribute("data-i18n-placeholder"));
  });
  // দীর্ঘ কনটেন্ট ব্লক (যেমন প্রাইভেসি পলিসি) — .lang-bn/.lang-en ক্লাস দিয়ে পুরো ব্লক টগল করা
  document.querySelectorAll(".lang-bn").forEach((el) => (el.style.display = lang === "bn" ? "" : "none"));
  document.querySelectorAll(".lang-en").forEach((el) => (el.style.display = lang === "en" ? "" : "none"));
}
