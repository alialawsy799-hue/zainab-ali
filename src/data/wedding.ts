/**
 * عدّلوا كل نصوص الدعوة من هذا الملف فقط.
 * غيّروا الأسماء، التاريخ، الموقع، الرسائل، الصور، والجدول
 * ثم احفظوا الملف ليظهر التغيير مباشرة في الموقع.
 */
export type StorySlide = {
  image: string;
  caption: string;
  alt: string;
};

export type TimelineItem = {
  time: string;
  title: string;
  icon: "rings" | "ceremony" | "toast" | "dinner";
};

export type WeddingData = {
  groomName: string;
  brideName: string;
  coupleNames: string;
  initials: string;
  weddingDate: string;
  weddingDateDisplay: string;
  weddingDateArabic: string;
  weddingDateShort: string;
  weddingDay: string;
  weddingTime: string;
  location: string;
  venueHall: string;
  venueHallEn: string;
  address: string;
  mapsUrl: string;
  mapsEmbedUrl: string;
  invitationMessage: string;
  countdownDate: string;
  rsvpDeadline: string;
  musicSrc: string;
  welcome: {
    heading: string;
    names: string;
    message: string;
  };
  countdownHeading: string;
  storyHeading: string;
  storySlides: StorySlide[];
  locationHeading: string;
  notesHeading: string;
  notes: string[];
  timelineHeading: string;
  timeline: TimelineItem[];
  rsvp: {
    heading: string;
    subheading: string;
    nameLabel: string;
    attendanceLabel: string;
    yesLabel: string;
    noLabel: string;
    messageLabel: string;
    submitLabel: string;
    successTitle: string;
    successMessage: string;
  };
  thankYou: {
    heading: string;
    message: string;
  };
  envelopeHint: string;
};

export const weddingData: WeddingData = {
  groomName: "علي",
  brideName: "زينب",
  coupleNames: "زينب و علي",
  initials: "Z & A",
  weddingDate: "2026-09-26",
  weddingDateDisplay: "26 / 09 / 2026",
  weddingDateArabic: "السبت، السادس والعشرون من سبتمبر ٢٠٢٦",
  weddingDateShort: "26.9.2026",
  weddingDay: "السبت",
  weddingTime: "الساعة 4:00 مساءً",
  location: "بغداد - السيدية",
  venueHall: "",
  venueHallEn: "",
  address: "بغداد - السيدية",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=%D8%A7%D9%84%D8%B3%D9%8A%D8%AF%D9%8A%D8%A9%20%D8%A8%D8%BA%D8%AF%D8%A7%D8%AF",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=%D8%A7%D9%84%D8%B3%D9%8A%D8%AF%D9%8A%D8%A9%20%D8%A8%D8%BA%D8%AF%D8%A7%D8%AF&hl=ar&z=14&output=embed",
  invitationMessage:
    "بعض اللحظات لا تكتمل إلا بمن نحب، لأن أجمل الذكريات هي تلك التي تجمعنا بمن نحب، ننتظركم لتعيشوا معنا هذه الليلة.",
  countdownDate: "2026-09-26T16:00:00",
  rsvpDeadline: "يرجى تأكيد حضوركم قبل العشرين من سبتمبر",
  musicSrc: "/music/background.wav",
  welcome: {
    heading: "نتشرف بدعوتكم لحظور حفل مهر",
    names: "زينب & علي",
    message:
      "بعض اللحظات لا تكتمل إلا بمن نحب،\nلأن أجمل الذكريات هي تلك التي تجمعنا\nبمن نحب، ننتظركم لتعيشوا معنا هذه الليلة.",
  },
  countdownHeading: "باقي على فرحتنا",
  storyHeading: "من حكايتنا",
  storySlides: [
    {
      image: "/images/story-01.jpg",
      caption: "من أول نظرة… بدأ كل شيء يتشكّل بهدوء",
      alt: "لحظة رومانسية في حديقة ذهبية",
    },
    {
      image: "/images/story-02.jpg",
      caption: "وعدٌ ناعم… يُكتب على نبض القلب",
      alt: "يدي العروسين مع خاتم ذهبي",
    },
    {
      image: "/images/story-03.jpg",
      caption: "واليوم نبدأ أجمل فصول العمر",
      alt: "ظرف دعوة فاخر مع ختم شمعي",
    },
    {
      image: "/images/story-04.jpg",
      caption: "ليلة واحدة… وذاكرة تبقى معنا للأبد",
      alt: "مائدة عشاء رومانسية تحت ضوء الشموع",
    },
  ],
  locationHeading: "مكان الاحتفال",
  notesHeading: "ملاحظات لطيفة",
  notes: [
    "نرجو منكم الوصول قبل موعد الحفل بقليل.",
    "دعوا هواتفكم جانبًا أثناء المراسم واستمتعوا باللحظة معنا.",
    "وجودكم هو أجمل هدية لنا.",
    "جنّة الأطفال منازلهم.",
  ],
  timelineHeading: "ترتيب الليلة",
  timeline: [
    { time: "4:00", title: "استقبال الضيوف", icon: "rings" },
    { time: "5:00", title: "بداية الاحتفال", icon: "ceremony" },
    { time: "6:00", title: "العشاء", icon: "dinner" },
    { time: "7:00", title: "الاحتفال والرقص", icon: "toast" },
  ],
  rsvp: {
    heading: "تأكيد الحضور",
    subheading: "يرجى تأكيد حضوركم قبل العشرين من سبتمبر",
    nameLabel: "الاسم",
    attendanceLabel: "هل ستشاركونا فرحتنا؟",
    yesLabel: "بكل سرور",
    noLabel: "أعتذر عن الحضور",
    messageLabel: "اكتبوا رسالة أو أمنية للعروسين",
    submitLabel: "تأكيد الحضور",
    successTitle: "شكرًا لتأكيد حضوركم",
    successMessage: "نتشرف بوجودكم في فرحتنا",
  },
  thankYou: {
    heading: "إلى لقاء قريب",
    message: "وجودكم هو أجمل هدية في هذه الليلة.",
  },
  envelopeHint: "اضغط على الظرف لفتح الدعوة",
};
