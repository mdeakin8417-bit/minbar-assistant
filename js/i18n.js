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
    mediaFile: "ছবি / PDF ফাইল যুক্ত করুন (ঐচ্ছিক)", noBayan: "এখনো কোনো বায়ান যোগ করা হয়নি।",

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
    privacyTagline: "আপনার তথ্যের নিরাপত্তা আমাদের অগ্রাধিকার", termsTagline: "অ্যাপ ব্যবহারের নিয়মাবলী", aiTagline: "আপনার ব্যক্তিগত ইসলামিক সহকারী", videoStorageRow: "মিডিয়া স্টোরেজ প্যাকেজ",
    aiChatTitle: "🤖 AI সহকারী", aiChatGreeting: "আসসালামু আলাইকুম! আমি আপনাকে বায়ান লেখা, ইসলামিক প্রশ্নোত্তর, বা হিসাব-দাওয়াত সংক্রান্ত পরামর্শে সাহায্য করতে পারি।",
    aiSuggestion1: "জুমার বায়ানের একটা বিষয় সাজেস্ট করো", aiSuggestion2: "সবরের ওপর একটা ছোট বায়ানের খসড়া লিখে দাও", aiChatPlaceholder: "আপনার প্রশ্ন লিখুন...",
    aiModeImam: "🕌 ইমাম সহকারী", aiModeBayan: "📖 বায়ান সহকারী", aiModeQa: "❓ ইসলামিক প্রশ্নোত্তর",

    // সার্চ
    searchTitle: "🔍 সার্চ মিনবার", searchSubtitle: "বায়ান, দাওয়াত, গ্রাহক, হিসাব — সব একসাথে খুঁজুন",
    searchPlaceholder: "নাম, শিরোনাম বা বিবরণ লিখুন...", searchEmptyPrompt: "খোঁজার জন্য উপরে লিখুন", searchNoResults: "কিছু পাওয়া যায়নি",
    searchSectionBayan: "📖 বায়ান", searchSectionDawat: "🍽️ দাওয়াত", searchSectionCustomer: "👤 গ্রাহক", searchSectionFinance: "💰 হিসাব", searchTxFallback: "লেনদেন",

    // যাকাত ক্যালকুলেটর
    zakatTitle: "যাকাত ক্যালকুলেটর", zakatSubtitle: "আপনার সম্পদের হিসাব দিন, যাকাত হিসাব করে দেব",
    zakatNisabHint: "নিসাব হিসাবের মানদণ্ড বেছে নিন — রূপা-ভিত্তিক নিসাব কম, তাই এতে বেশি মানুষের ওপর যাকাত ফরজ হয় (সতর্কতামূলক); স্বর্ণ-ভিত্তিক নিসাব বেশি।",
    zakatNisabSilver: "রূপা-ভিত্তিক নিসাব (৫৯৫ গ্রাম)", zakatNisabGold: "স্বর্ণ-ভিত্তিক নিসাব (৮৫ গ্রাম)",
    zakatSectionCash: "💰 নগদ ও পাওনা", zakatCash: "হাতে/ব্যাংকে নগদ টাকা", zakatReceivable: "মানুষের কাছে পাওনা (ফেরত পাবেন এমন)", zakatBusiness: "ব্যবসায়িক পণ্য/মালামালের মূল্য",
    zakatSectionGold: "🥇 স্বর্ণ", zakatGoldGrams: "স্বর্ণের পরিমাণ (গ্রাম)", zakatPricePerGram: "প্রতি গ্রাম দাম (৳)",
    zakatSectionSilver: "🥈 রূপা", zakatSilverGrams: "রূপার পরিমাণ (গ্রাম)",
    zakatSectionDebt: "📉 ঋণ/দেনা", zakatDebt: "আপনার নিজের ঋণ (যা শোধ করতে হবে)",
    zakatCalcBtn: "হিসাব করুন", zakatFootnote: "এটি একটি সাধারণ হিসাব-সহায়ক টুল, নির্দিষ্ট মাসয়ালার জন্য স্থানীয় আলেমের পরামর্শ নিন।",
    zakatNeedPrice: "নিসাব হিসাব করতে প্রতি গ্রাম দাম দিন।", zakatDue: "আপনার ওপর যাকাত ফরজ", zakatNotDue: "যাকাত ফরজ নয়",
    zakatOfWealth: "(মোট সম্পদের আড়াই শতাংশ)", zakatBelowNisab: "আপনার মোট সম্পদ নিসাব সীমার নিচে",
    zakatTotalAssets: "মোট সম্পদ", zakatNisabLimit: "নিসাব সীমা",

    // ইসলামিক ক্যালেন্ডার
    islCalTitle: "ইসলামিক ক্যালেন্ডার", islCalSubtitle: "আজকের হিজরি তারিখ ও আসন্ন গুরুত্বপূর্ণ দিন",
    islCalUpcoming: "আসন্ন গুরুত্বপূর্ণ দিন", islCalNote: "\"সম্ভাব্য\" লেখা তারিখগুলো গাণিতিক হিসাবে বের করা — চাঁদ দেখার ওপর নির্ভর করে বাস্তবে ১ দিন আগে-পিছে হতে পারে।",
    islCalReminderTitle: "রিমাইন্ডার নোটিফিকেশন", islCalReminderSub: "গুরুত্বপূর্ণ দিনের ৩ দিন আগে পুশ নোটিফিকেশন পাবেন",
    islCalToday: "আজ", islCalTomorrow: "আগামীকাল", islCalDaysLeft: "দিন বাকি",
    islCalToggleError: "পরিবর্তন করা যায়নি: ", islCalEnablePushHint: "রিমাইন্ডার পেতে সেটিংস পেজ থেকে পুশ নোটিফিকেশনও চালু করে নিন।",

    // টিম সদস্য
    teamTitle: "টিম সদস্য", teamSubtitle: "এই প্রতিষ্ঠানে কারা যুক্ত আছে",
    teamAddTitle: "নতুন সদস্য যোগ করুন", teamAddHint: "যাকে যোগ করতে চান তাকে আগে অ্যাপে অ্যাকাউন্ট খুলে তার প্রোফাইলে ফোন নম্বর দিতে বলুন, তারপর সেই নম্বর দিয়ে এখানে খুঁজুন।",
    teamPhonePlaceholder: "01XXXXXXXXX", teamAddBtn: "যোগ করুন", teamYou: " (আপনি)",
    teamRoleOwner: "👑 মালিক", teamRoleAdmin: "অ্যাডমিন", teamRoleImam: "ইমাম", teamRoleAccountant: "হিসাবরক্ষক", teamRoleViewer: "দর্শক",
    teamPermAdmin: "রোল বদলাতে ড্রপডাউনে ট্যাপ করুন। ভূমিকাগুলো এখন শুধু পরিচিতির জন্য — প্রতিটা ফিচারে আলাদা অনুমতি এখনো প্রযোজ্য নয়।",
    teamPermViewer: "শুধু মালিক/অ্যাডমিন সদস্য যোগ বা অপসারণ করতে পারবেন।",
    teamEnterPhone: "ফোন নম্বর দিন।", teamUserNotFound: "এই নম্বরে কোনো অ্যাকাউন্ট পাওয়া যায়নি। আগে তাকে অ্যাপে সাইন আপ করে প্রোফাইলে নম্বর দিতে বলুন।",
    teamConfirmAdd: "-কে ", teamConfirmAddAs: " হিসেবে যোগ করবেন?", teamDupUser: "এই ইউজার আগে থেকেই টিমে আছেন।",
    teamAddFailed: "যোগ করা যায়নি: ", teamAdded: "যোগ হয়েছে ✅", teamChangeFailed: "পরিবর্তন করা যায়নি: ",
    teamConfirmRemove: "-কে টিম থেকে সরিয়ে দেবেন?", teamRemoveFailed: "সরানো যায়নি: ",

    // ব্যাকআপ ও রিস্টোর
    backupTitle: "ব্যাকআপ ও রিস্টোর", backupSubtitle: "আপনার ডেটা নিরাপদে রাখুন, ফোন বদলালেও ফিরিয়ে আনুন",
    backupExportTitle: "📤 ব্যাকআপ নিন", backupExportHint: "এই প্রতিষ্ঠানের বায়ান, দাওয়াত, গ্রাহক ও হিসাবের সব লেখা-ডেটা একটা ফাইলে জমা করবে।",
    backupExportBtn: "ব্যাকআপ ফাইল ডাউনলোড করুন", backupNoMedia: "⚠️ ছবি/ভিডিও ফাইল এই ব্যাকআপে থাকবে না, শুধু লেখা ডেটা থাকবে।",
    backupImportTitle: "📥 রিস্টোর করুন", backupImportHint: "আগের নেওয়া ব্যাকআপ ফাইল থেকে ডেটা এই প্রতিষ্ঠানে ফিরিয়ে আনবে। আগের ডেটা মুছবে না, নতুন করে যোগ হবে।",
    backupFileHint: "📎 ব্যাকআপ ফাইল (.json) বাছাই করতে চাপুন",
    backupGenerating: "তৈরি হচ্ছে...", backupNotValidFile: "এটা Minbar Assistant-এর ব্যাকআপ ফাইল বলে মনে হচ্ছে না।",
    backupFileReadError: "ফাইলটি পড়া যায়নি — সঠিক ব্যাকআপ ফাইল কিনা দেখুন।", backupRestoring: "রিস্টোর হচ্ছে...",
    backupCountBayan: "বায়ান", backupCountDawat: "দাওয়াত", backupCountCustomer: "গ্রাহক",
    backupCountCustomerTx: "গ্রাহকের লেনদেন", backupCountFinanceTx: "হিসাবের লেনদেন", backupFailedLabel: "ব্যর্থ",
    backupRestoreComplete: "রিস্টোর সম্পন্ন ✅",

    // নোটিফিকেশন সেন্টার
    notifTitle: "🔔 নোটিফিকেশন", notifMarkAll: "সব পড়া হয়েছে", notifEmpty: "এখনো কোনো নোটিফিকেশন নেই।",
    notifJustNow: "এখনই", notifMinAgo: " মিনিট আগে", notifHourAgo: " ঘণ্টা আগে", notifDayAgo: " দিন আগে",

    // ড্যাশবোর্ড সামারি কার্ড
    monthBalanceLabel: "এই মাসের ব্যালেন্স", monthDeficit: " (ঘাটতি)", hijriSuffix: " হি.",
    dawatViewList: "📋 লিস্ট", dawatViewCalendar: "🗓️ ক্যালেন্ডার", dawatCalNoDawat: "এই দিনে কোনো দাওয়াত নেই।", weekdaySuffix: "বার",
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
    mediaFile: "Attach image / PDF file (optional)", noBayan: "No Bayan added yet.",

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
    privacyTagline: "Your data security is our priority", termsTagline: "App usage guidelines", aiTagline: "Your personal Islamic assistant", videoStorageRow: "Media Storage Package",
    aiChatTitle: "🤖 AI Assistant", aiChatGreeting: "Assalamu Alaikum! I can help you write Bayans, answer Islamic questions, or advise on finance and Dawat matters.",
    aiSuggestion1: "Suggest a topic for a Jumma Bayan", aiSuggestion2: "Draft a short Bayan on patience (sabr)", aiChatPlaceholder: "Type your question...",
    aiModeImam: "🕌 Imam Assistant", aiModeBayan: "📖 Bayan Assistant", aiModeQa: "❓ Islamic Q&A",

    // Search
    searchTitle: "🔍 Search Minbar", searchSubtitle: "Search Bayans, Dawats, customers and finance — all at once",
    searchPlaceholder: "Type a name, title or description...", searchEmptyPrompt: "Type above to search", searchNoResults: "No results found",
    searchSectionBayan: "📖 Bayan", searchSectionDawat: "🍽️ Dawat", searchSectionCustomer: "👤 Customers", searchSectionFinance: "💰 Finance", searchTxFallback: "Transaction",

    // Zakat calculator
    zakatTitle: "Zakat Calculator", zakatSubtitle: "Enter your assets and we'll calculate your Zakat",
    zakatNisabHint: "Choose your Nisab standard — the silver-based Nisab is lower, so more people become liable for Zakat under it (a precautionary choice); the gold-based Nisab is higher.",
    zakatNisabSilver: "Silver-based Nisab (595g)", zakatNisabGold: "Gold-based Nisab (85g)",
    zakatSectionCash: "💰 Cash & Receivables", zakatCash: "Cash in hand/bank", zakatReceivable: "Money owed to you by others", zakatBusiness: "Value of business goods/inventory",
    zakatSectionGold: "🥇 Gold", zakatGoldGrams: "Gold amount (grams)", zakatPricePerGram: "Price per gram (৳)",
    zakatSectionSilver: "🥈 Silver", zakatSilverGrams: "Silver amount (grams)",
    zakatSectionDebt: "📉 Debt", zakatDebt: "Your own debt (to be repaid)",
    zakatCalcBtn: "Calculate", zakatFootnote: "This is a general calculation aid — consult a local scholar for specific rulings.",
    zakatNeedPrice: "Enter the price per gram to calculate Nisab.", zakatDue: "Zakat is obligatory on you", zakatNotDue: "Zakat is not obligatory",
    zakatOfWealth: "(2.5% of total assets)", zakatBelowNisab: "Your total assets are below the Nisab threshold",
    zakatTotalAssets: "Total assets", zakatNisabLimit: "Nisab threshold",

    // Islamic calendar
    islCalTitle: "Islamic Calendar", islCalSubtitle: "Today's Hijri date and upcoming important days",
    islCalUpcoming: "Upcoming important days", islCalNote: "Dates marked \"estimated\" are calculated mathematically — actual moon-sighting dates may differ by a day.",
    islCalReminderTitle: "Reminder notifications", islCalReminderSub: "Get a push notification 3 days before important days",
    islCalToday: "Today", islCalTomorrow: "Tomorrow", islCalDaysLeft: "days left",
    islCalToggleError: "Could not update: ", islCalEnablePushHint: "Also turn on push notifications in Settings to receive reminders.",

    // Team members
    teamTitle: "Team Members", teamSubtitle: "Who's part of this institution",
    teamAddTitle: "Add a new member", teamAddHint: "Ask the person to sign up in the app and add their phone number to their profile first, then look them up here by that number.",
    teamPhonePlaceholder: "01XXXXXXXXX", teamAddBtn: "Add", teamYou: " (You)",
    teamRoleOwner: "👑 Owner", teamRoleAdmin: "Admin", teamRoleImam: "Imam", teamRoleAccountant: "Accountant", teamRoleViewer: "Viewer",
    teamPermAdmin: "Tap the dropdown to change a role. Roles are for identification only for now — per-feature permissions aren't enforced yet.",
    teamPermViewer: "Only the owner/admin can add or remove members.",
    teamEnterPhone: "Enter a phone number.", teamUserNotFound: "No account found for this number. Ask them to sign up in the app and add it to their profile first.",
    teamConfirmAdd: " as ", teamConfirmAddAs: "?", teamDupUser: "This user is already on the team.",
    teamAddFailed: "Could not add: ", teamAdded: "Added ✅", teamChangeFailed: "Could not update: ",
    teamConfirmRemove: " from the team?", teamRemoveFailed: "Could not remove: ",

    // Backup & restore
    backupTitle: "Backup & Restore", backupSubtitle: "Keep your data safe, and bring it back even on a new phone",
    backupExportTitle: "📤 Take a backup", backupExportHint: "Saves all this institution's Bayan, Dawat, customer, and finance text data into one file.",
    backupExportBtn: "Download backup file", backupNoMedia: "⚠️ Images/videos are not included in this backup — only text data.",
    backupImportTitle: "📥 Restore", backupImportHint: "Brings data from a previous backup file back into this institution. Existing data won't be deleted — this only adds.",
    backupFileHint: "📎 Tap to choose a backup file (.json)",
    backupGenerating: "Preparing...", backupNotValidFile: "This doesn't look like a Minbar Assistant backup file.",
    backupFileReadError: "Couldn't read the file — check that it's a valid backup file.", backupRestoring: "Restoring...",
    backupCountBayan: "Bayans", backupCountDawat: "Dawats", backupCountCustomer: "Customers",
    backupCountCustomerTx: "Customer transactions", backupCountFinanceTx: "Finance transactions", backupFailedLabel: "Failed",
    backupRestoreComplete: "Restore complete ✅",

    // Notification center
    notifTitle: "🔔 Notifications", notifMarkAll: "Mark all read", notifEmpty: "No notifications yet.",
    notifJustNow: "Just now", notifMinAgo: " min ago", notifHourAgo: " hr ago", notifDayAgo: " days ago",

    // Dashboard summary card
    monthBalanceLabel: "This month's balance", monthDeficit: " (deficit)", hijriSuffix: " AH",
    dawatViewList: "📋 List", dawatViewCalendar: "🗓️ Calendar", dawatCalNoDawat: "No Dawat on this day.", weekdaySuffix: "",
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
