// ==========================================================
// হিজরি ক্যালেন্ডার কনভার্শন — "Tabular Islamic Calendar" পদ্ধতি (গাণিতিক আনুমানিক হিসাব)
// নোট: এটা চাঁদ দেখার ওপর ভিত্তি করে না, তাই স্থানীয়ভাবে ঘোষিত তারিখের চেয়ে ১ দিন
// আগে-পিছে হতে পারে। মোটামুটি নির্ভরযোগ্য অনুমান হিসেবে ব্যবহারযোগ্য।
// ==========================================================

const HIJRI_MONTHS_BN = [
  "মুহাররম", "সফর", "রবিউল আউয়াল", "রবিউস সানি", "জমাদিউল আউয়াল", "জমাদিউস সানি",
  "রজব", "শাবান", "রমজান", "শাওয়াল", "জিলক্বদ", "জিলহজ্জ",
];

function gregorianToJD(year, month, day) {
  const a = Math.floor((14 - month) / 12);
  const y = year + 4800 - a;
  const m = month + 12 * a - 3;
  return day + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) - 32045;
}

function jdToGregorian(jd) {
  const a = jd + 32044;
  const b = Math.floor((4 * a + 3) / 146097);
  const c = a - Math.floor((146097 * b) / 4);
  const d = Math.floor((4 * c + 3) / 1461);
  const e = c - Math.floor((1461 * d) / 4);
  const m = Math.floor((5 * e + 2) / 153);
  const day = e - Math.floor((153 * m + 2) / 5) + 1;
  const month = m + 3 - 12 * Math.floor(m / 10);
  const year = 100 * b + d - 4800 + Math.floor(m / 10);
  return { year, month, day };
}

function jdToHijri(jdInput) {
  let jd = jdInput - 1948440 + 10632;
  const n = Math.floor((jd - 1) / 10631);
  jd = jd - 10631 * n + 354;
  const j = Math.floor((10985 - jd) / 5316) * Math.floor((50 * jd) / 17719) + Math.floor(jd / 5670) * Math.floor((43 * jd) / 15238);
  jd = jd - Math.floor((30 - j) / 15) * Math.floor((17719 * j) / 50) - Math.floor(j / 16) * Math.floor((15238 * j) / 43) + 29;
  const month = Math.floor((24 * jd) / 709);
  const day = jd - Math.floor((709 * month) / 24);
  const year = 30 * n + j - 30;
  return { year, month, day };
}

function hijriToJD(year, month, day) {
  return Math.floor((11 * year + 3) / 30) + 354 * year + 30 * month - Math.floor((month - 1) / 2) + day + 1948440 - 385;
}

function todayHijri() {
  const now = new Date();
  const jd = gregorianToJD(now.getFullYear(), now.getMonth() + 1, now.getDate());
  return jdToHijri(jd);
}

// একটা নির্দিষ্ট হিজরি তারিখ (বছর/মাস/দিন) কোন গ্রেগরিয়ান তারিখে পড়ে সেটা বের করা
function hijriToGregorianDate(hYear, hMonth, hDay) {
  const jd = hijriToJD(hYear, hMonth, hDay);
  const g = jdToGregorian(jd);
  return new Date(g.year, g.month - 1, g.day);
}

// গুরুত্বপূর্ণ ইসলামিক দিনগুলো — [হিজরি মাস (১-১২), হিজরি দিন, নাম]
const ISLAMIC_IMPORTANT_DATES = [
  { month: 1, day: 1, name: "হিজরি নববর্ষ", icon: "🌙" },
  { month: 1, day: 10, name: "আশুরা", icon: "🕌" },
  { month: 3, day: 12, name: "ঈদে মিলাদুন্নবী (সম্ভাব্য)", icon: "🕌" },
  { month: 8, day: 15, name: "শবে বরাত", icon: "🌕" },
  { month: 9, day: 1, name: "রমজান শুরু (সম্ভাব্য)", icon: "🌙" },
  { month: 10, day: 1, name: "ঈদুল ফিতর (সম্ভাব্য)", icon: "🎉" },
  { month: 12, day: 9, name: "আরাফাহ দিবস (সম্ভাব্য)", icon: "🕋" },
  { month: 12, day: 10, name: "ঈদুল আযহা (সম্ভাব্য)", icon: "🐐" },
];

// আজকের তারিখ থেকে আগামী গুরুত্বপূর্ণ দিনগুলোর তালিকা (নিকটতমগুলো আগে), countLimit-টা পর্যন্ত
function getUpcomingIslamicDates(countLimit) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const hToday = todayHijri();
  const results = [];

  [hToday.year, hToday.year + 1].forEach((hy) => {
    ISLAMIC_IMPORTANT_DATES.forEach((ev) => {
      const gDate = hijriToGregorianDate(hy, ev.month, ev.day);
      if (gDate >= today) {
        const daysLeft = Math.round((gDate - today) / 86400000);
        results.push({ ...ev, date: gDate, daysLeft, hijriYear: hy });
      }
    });
  });

  results.sort((a, b) => a.date - b.date);
  return results.slice(0, countLimit || 6);
}
