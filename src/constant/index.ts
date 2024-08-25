import { StaticImageData } from "next/image";
import { imgFour, imgOne, imgThree, imgTwo } from "../../public/img";
import {
  article,
  cast,
  contacts,
  data,
  sync,
  time,
  units,
} from "../../public/svg";

export const phoneNumbers: string[] = [
  "(ID) +62",
  "(US) +1",
  "(THAI) +66",
  "(UK) +44",
  "(JP) +81",
  "(AUS) +61",
  "(BR) +55",
  "(FR) +33",
  "(IN) +91",
  "(GER) +49",
];

export type Section = {
  image: StaticImageData;
  title: string;
  desc: string;
  href: string;
};

export const section: Section[] = [
  {
    image: imgOne,
    title: "Elevate Your Messaging Efficiency with Our Innovative Admin Tools",
    desc: "Selamat datang di Fowardin! Pengelolaan pesan Anda menjadi lebih mudah dengan Admin Tools kami. Tingkatkan komunikasi Anda dan pelanggan dengan fitur pesan otomatis. Menyimpan kontak menjadi lebih praktis dengan fitur sinkronasi Google Concact. Dapatkan kendali penuh pesan dengan manajemen konten yang praktis.",
    href: "#getStarted",
  },
  {
    image: imgTwo,
    title: "Reach Further with Ease",
    desc: "Fowardin memberikan Anda akses cepat untuk memperluas jangkauan komunikasi Anda. Dengan fitur Broadcast kami, Anda dapat mengirim pesan kepada banyak kontak dan grup sekaligus. Menjangkau audiens Anda tidak pernah semudah ini.",
    href: "#broadcast",
  },
  {
    image: imgThree,
    title: "Right Time, Effective Messages",
    desc: "Fowardin memungkinkan Anda untuk merencanakan pengiriman iklan yang tepat sasaran. Manfaatkan fitur Campaign kami untuk mengoptimalkan pesan iklan Anda sehingga hasilnya lebih akurat dan sukses. Dengan Fowardin, setiap pesan iklan memiliki dampak yang lebih besar.",
    href: "#campaign",
  },
  {
    image: imgFour,
    title: "Respond Faster with the Convenience of Auto Reply",
    desc: "Fowardin mempermudah Anda untuk memberikan respon cepat kepada pesan dari banyak kontak dan grup sekaligus. Dengan fitur Auto Reply kami, Anda dapat menjawab pertanyaan atau memberikan respon otomatis, menghemat waktu dan energi Anda. Tanggap lebih cepat dengan Fowardin.",
    href: "#campaign",
  },
];

type SubscriptionFeatures = {
  label: string;
  icon: StaticImageData;
};
export const subscriptionFeatures: SubscriptionFeatures[] = [
  {
    label: "100 Auto Reply",
    icon: time,
  },
  {
    label: "500 Broadcast",
    icon: cast,
  },
  {
    label: "50 Campaign",
    icon: data,
  },
  {
    label: "500 Contact",
    icon: contacts,
  },
  {
    label: "50 Device",
    icon: units,
  },
  {
    label: "Excel / CSV Contact Import",
    icon: article,
  },
  {
    label: "Google Contact Sync",
    icon: sync,
  },
];

export type Subscription = {
  type: "Starter" | "Basic" | "Premium" | "Pro";
  desc: string;
  mainPrice?: string;
  additionalPrice?: string;
  free?: boolean;
  index?: number;
};

export const monthly: Subscription[] = [
  {
    type: "Starter",
    desc: "Mulai perjalanan Anda dengan paket Starter selama 14 hari. Nikmati pesan otomatis, siaran pesan, dan  manajemen kontak yang efisien. Dapatkan integrasi yang membantu dan sinkronisasi kontak WhatsApp.",
    mainPrice: "Rp. 300.000 ",
    additionalPrice: "Rp. 3.600.000",
    free: false,
  },
  {
    type: "Basic",
    desc: "Dapatkan akses selama 1 bulan dengan paket Basic. Manfaatkan fitur pesan otomatis, siaran pesan, dan manajemen kontak yang ditingkatkan. Rasakan kenyamanan integrasi yang luas dengan sinkronisasi kontak Google dan WhatsApp.",
    mainPrice: "Rp. 300.000 ",
    additionalPrice: "Rp. 3.600.000",
    free: false,
  },
  {
    type: "Premium",
    desc: "Perpanjang pengalaman Anda dengan paket Premium selama 1 bulan. Nikmati manfaat pesan otomatis, siaran pesan, dan manajemen kontak tanpa batasan. Aktifkan integrasi yang luas dengan sinkronisasi kontak Google dan WhatsApp.",
    mainPrice: "Rp. 300.000 ",
    additionalPrice: "Rp. 3.600.000",
    free: false,
  },
  {
    type: "Pro",
    desc: "Jelajahi seluruh fitur dengan paket Pro selama 1 bulan. Dapatkan keuntungan dari pesan otomatis, siaran pesan, serta manajemen kontak yang tidak terbatas. Aktifkan integrasi yang luas dengan sinkronisasi kontak Google dan WhatsApp.",
    mainPrice: "Rp. 300.000 ",
    additionalPrice: "Rp. 3.600.000",
    free: false,
  },
];

export const yearly: Subscription[] = [
  {
    type: "Starter",
    desc: "Mulai perjalanan Anda dengan paket Starter selama 14 hari. Nikmati pesan otomatis, siaran pesan, dan  manajemen kontak yang efisien. Dapatkan integrasi yang membantu dan sinkronisasi kontak WhatsApp.",
    free: true,
  },
  {
    type: "Basic",
    desc: "Dapatkan akses selama 1 bulan dengan paket Basic. Manfaatkan fitur pesan otomatis, siaran pesan, dan manajemen kontak yang ditingkatkan. Rasakan kenyamanan integrasi yang luas dengan sinkronisasi kontak Google dan WhatsApp.",
    mainPrice: "Rp. 65.000 ",
    additionalPrice: "Rp. 650.000",
    free: false,
  },
  {
    type: "Premium",
    desc: "Perpanjang pengalaman Anda dengan paket Premium selama 1 bulan. Nikmati manfaat pesan otomatis, siaran pesan, dan manajemen kontak tanpa batasan. Aktifkan integrasi yang luas dengan sinkronisasi kontak Google dan WhatsApp.",
    mainPrice: "Rp. 76.000 ",
    additionalPrice: "Rp. 800.000",
    free: false,
  },
  {
    type: "Pro",
    desc: "Jelajahi seluruh fitur dengan paket Pro selama 1 bulan. Dapatkan keuntungan dari pesan otomatis, siaran pesan, serta manajemen kontak yang tidak terbatas. Aktifkan integrasi yang luas dengan sinkronisasi kontak Google dan WhatsApp.",
    mainPrice: "Rp. 86.000 ",
    additionalPrice: "Rp. 900.000",
    free: false,
  },
];

export const navigator: string[] = [
  "Get Started",
  "Broadcast",
  "Campaign",
  "Auto Reply",
  "Opportunity",
  "FAQ",
  "Contact Us",
];

type Faq = {
  title: string;
  desc?: string;
};

export const faq: Faq[] = [
  {
    title: "Apa itu Forwardin?",
    desc: "Forwardin adalah sebuah platform alat pengelolaan pesan WhatsApp yang dirancang untuk membantu Anda mengirim pesan ke banyak nomor dan grup WhatsApp secara bersamaan. Forwardin juga menyediakan berbagai fitur canggih seperti auto-reply, fitur broadcast, manajemen kampanye, serta sinkronisasi kontak WhatsApp dan kontak Google.",
  },
  {
    title: "Apakah Forwardin cocok untuk saya?",
    desc: "Forwardin adalah sebuah platform alat pengelolaan pesan WhatsApp yang dirancang untuk membantu Anda mengirim pesan ke banyak nomor dan grup WhatsApp secara bersamaan. Forwardin juga menyediakan berbagai fitur canggih seperti auto-reply, fitur broadcast, manajemen kampanye, serta sinkronisasi kontak WhatsApp dan kontak Google.",
  },
  {
    title: "Apakah Forwardin perlu di-install ke komputer?",
    desc: "Forwardin adalah sebuah platform alat pengelolaan pesan WhatsApp yang dirancang untuk membantu Anda mengirim pesan ke banyak nomor dan grup WhatsApp secara bersamaan. Forwardin juga menyediakan berbagai fitur canggih seperti auto-reply, fitur broadcast, manajemen kampanye, serta sinkronisasi kontak WhatsApp dan kontak Google.",
  },
];
