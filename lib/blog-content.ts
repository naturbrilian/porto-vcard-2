import type { Language } from "./i18n"

export interface BlogPost {
  id: string
  title: Record<Language, string>
  excerpt: Record<Language, string>
  content: Record<Language, string>
  image: string
  date: string
  readTime: string
  author: string
  slug: string
  category: Record<Language, string>
  tags: Record<Language, string[]>
}

export const blogPosts: BlogPost[] = [
  {
    id: "video-editing-tips",
    title: {
      en: "The Art of Video Editing: Professional Tips and Tricks",
      id: "Seni Mengedit Video: Tips dan Trik Profesional",
      ja: "ビデオ編集の芸術：プロのコツとテクニック",
    },
    excerpt: {
      en: "Learn the essential techniques that can elevate your video editing skills to the next level. From organization strategies to advanced cutting techniques.",
      id: "Pelajari teknik-teknik penting yang dapat meningkatkan keterampilan editing video Anda ke level berikutnya. Dari strategi organisasi hingga teknik pemotongan lanjutan.",
      ja: "ビデオ編集スキルを次のレベルに引き上げる重要なテクニックを学びましょう。整理戦略から高度なカット技術まで。",
    },
    content: {
      en: `Video editing is both an art and a science. It requires technical knowledge, creative vision, and a deep understanding of storytelling. After years of editing content for television and digital platforms, I've compiled the most essential tips that have transformed my workflow and elevated the quality of my work.

## Start with a Crystal Clear Vision

Before you even import your first clip, spend time developing a clear vision for your project. This isn't just about knowing what you want to create—it's about understanding the emotional journey you want to take your audience on.

## Master the Art of Organization

Professional editors spend up to 30% of their time organizing footage. This isn't wasted time—it's an investment that pays dividends throughout the entire editing process.

## Essential Keyboard Shortcuts

Speed is crucial in professional editing. These shortcuts will dramatically improve your efficiency and help you work faster while maintaining quality.`,
      id: `Editing video adalah seni sekaligus sains. Ini membutuhkan pengetahuan teknis, visi kreatif, dan pemahaman mendalam tentang storytelling. Setelah bertahun-tahun mengedit konten untuk televisi dan platform digital, saya telah mengumpulkan tips paling penting yang telah mengubah alur kerja saya dan meningkatkan kualitas karya saya.

## Mulai dengan Visi yang Sangat Jelas

Sebelum Anda mengimpor klip pertama, luangkan waktu untuk mengembangkan visi yang jelas untuk proyek Anda. Ini bukan hanya tentang mengetahui apa yang ingin Anda buat—ini tentang memahami perjalanan emosional yang ingin Anda bawa kepada audiens.

## Kuasai Seni Organisasi

Editor profesional menghabiskan hingga 30% waktu mereka untuk mengorganisir footage. Ini bukan waktu yang terbuang—ini adalah investasi yang memberikan keuntungan sepanjang seluruh proses editing.

## Shortcut Keyboard yang Penting

Kecepatan sangat penting dalam editing profesional. Shortcut ini akan secara dramatis meningkatkan efisiensi Anda dan membantu Anda bekerja lebih cepat sambil mempertahankan kualitas.`,
      ja: `ビデオ編集は芸術であり科学でもあります。技術的知識、創造的ビジョン、そしてストーリーテリングの深い理解が必要です。テレビやデジタルプラットフォーム向けのコンテンツを何年も編集してきた経験から、私のワークフローを変革し、作品の質を向上させた最も重要なヒントをまとめました。

## 明確なビジョンから始める

最初のクリップをインポートする前に、プロジェクトの明確なビジョンを開発する時間を取ってください。これは単に何を作りたいかを知ることではなく、観客にどのような感情的な旅をしてもらいたいかを理解することです。

## 整理の技術をマスターする

プロの編集者は時間の最大30％を映像の整理に費やします。これは無駄な時間ではありません—編集プロセス全体を通じて利益をもたらす投資です。

## 重要なキーボードショートカット

プロの編集では速度が重要です。これらのショートカットは効率を劇的に向上させ、品質を維持しながらより速く作業するのに役立ちます。`,
    },
    image: "/placeholder.svg?height=400&width=600&text=Video+Editing+Tips",
    date: "May 1, 2025",
    readTime: "8",
    author: "Liba Natur Brilian",
    slug: "/blog/video-editing-tips",
    category: {
      en: "Tutorial",
      id: "Tutorial",
      ja: "チュートリアル",
    },
    tags: {
      en: ["Video Editing", "Premiere Pro", "Workflow"],
      id: ["Editing Video", "Premiere Pro", "Alur Kerja"],
      ja: ["ビデオ編集", "Premiere Pro", "ワークフロー"],
    },
  },
  {
    id: "design-trends-2025",
    title: {
      en: "Graphic Design Trends That Will Dominate 2025",
      id: "Tren Desain Grafis yang Akan Mendominasi 2025",
      ja: "2025年を支配するグラフィックデザイントレンド",
    },
    excerpt: {
      en: "Explore the latest trends in graphic design that are shaping the visual landscape this year, from AI-generated art to sustainable design practices.",
      id: "Jelajahi tren terbaru dalam desain grafis yang membentuk lanskap visual tahun ini, dari seni yang dihasilkan AI hingga praktik desain berkelanjutan.",
      ja: "AI生成アートから持続可能なデザイン実践まで、今年のビジュアルランドスケープを形作る最新のグラフィックデザイントレンドを探索しましょう。",
    },
    content: {
      en: `As we move through 2025, the graphic design landscape continues to evolve at an unprecedented pace. From AI-generated art to sustainable design practices, this year brings exciting new trends that are reshaping how we approach visual communication.

## AI-Assisted Design Tools

Artificial intelligence is no longer just a buzzword in design—it's becoming an integral part of the creative process. Tools like Adobe's AI features and standalone platforms are helping designers work more efficiently while maintaining creative control.

## Sustainable Design Practices

Environmental consciousness is driving design decisions. From choosing eco-friendly printing methods to creating digital-first designs that reduce paper waste, sustainability is becoming a core consideration in every project.`,
      id: `Saat kita memasuki 2025, lanskap desain grafis terus berkembang dengan kecepatan yang belum pernah terjadi sebelumnya. Dari seni yang dihasilkan AI hingga praktik desain berkelanjutan, tahun ini membawa tren baru yang menarik yang mengubah cara kita mendekati komunikasi visual.

## Alat Desain Berbantuan AI

Kecerdasan buatan bukan lagi sekadar kata kunci dalam desain—ini menjadi bagian integral dari proses kreatif. Alat seperti fitur AI Adobe dan platform mandiri membantu desainer bekerja lebih efisien sambil mempertahankan kontrol kreatif.

## Praktik Desain Berkelanjutan

Kesadaran lingkungan mendorong keputusan desain. Dari memilih metode pencetakan ramah lingkungan hingga menciptakan desain digital-first yang mengurangi limbah kertas, keberlanjutan menjadi pertimbangan inti dalam setiap proyek.`,
      ja: `2025年に入り、グラフィックデザインの世界は前例のないペースで進化し続けています。AI生成アートから持続可能なデザイン実践まで、今年はビジュアルコミュニケーションへのアプローチを再構築する刺激的な新しいトレンドをもたらしています。

## AI支援デザインツール

人工知能はもはやデザインにおける単なる流行語ではありません—それは創造的プロセスの不可欠な部分になっています。AdobeのAI機能やスタンドアロンプラットフォームなどのツールは、デザイナーが創造的コントロールを維持しながらより効率的に作業するのを助けています。

## 持続可能なデザイン実践

環境意識がデザインの決定を推進しています。環境に優しい印刷方法の選択から、紙の無駄を減らすデジタルファーストのデザインの作成まで、持続可能性はすべてのプロジェクトにおける中核的な考慮事項になっています。`,
    },
    image: "/placeholder.svg?height=400&width=600&text=Design+Trends+2025",
    date: "April 15, 2025",
    readTime: "6",
    author: "Liba Natur Brilian",
    slug: "/blog/design-trends-2025",
    category: {
      en: "Design",
      id: "Desain",
      ja: "デザイン",
    },
    tags: {
      en: ["Graphic Design", "Trends", "2025"],
      id: ["Desain Grafis", "Tren", "2025"],
      ja: ["グラフィックデザイン", "トレンド", "2025"],
    },
  },
  {
    id: "software-translation",
    title: {
      en: "The Challenges and Rewards of Software Translation",
      id: "Tantangan dan Manfaat Penerjemahan Perangkat Lunak",
      ja: "ソフトウェア翻訳の課題と報酬",
    },
    excerpt: {
      en: "Insights into the complex process of translating software interfaces and documentation, including cultural considerations and technical challenges.",
      id: "Wawasan tentang proses kompleks menerjemahkan antarmuka perangkat lunak dan dokumentasi, termasuk pertimbangan budaya dan tantangan teknis.",
      ja: "文化的考慮事項と技術的課題を含む、ソフトウェアインターフェースとドキュメントの翻訳の複雑なプロセスへの洞察。",
    },
    content: {
      en: `Software translation goes far beyond converting text from one language to another. It's about creating a seamless user experience that feels native to each target culture while maintaining the software's functionality and user interface integrity.

## Understanding the Complexity

When I first started translating software interfaces, I quickly learned that technical accuracy is just the beginning. Cultural context, user expectations, and technical constraints all play crucial roles in creating successful localized software.

## Key Challenges in Software Translation

From character limits in UI elements to cultural differences in user behavior, software translation presents unique challenges that require both linguistic expertise and technical understanding.`,
      id: `Penerjemahan perangkat lunak jauh melampaui konversi teks dari satu bahasa ke bahasa lain. Ini tentang menciptakan pengalaman pengguna yang mulus yang terasa alami untuk setiap budaya target sambil mempertahankan fungsionalitas perangkat lunak dan integritas antarmuka pengguna.

## Memahami Kompleksitas

Ketika saya pertama kali mulai menerjemahkan antarmuka perangkat lunak, saya dengan cepat belajar bahwa akurasi teknis hanyalah permulaan. Konteks budaya, ekspektasi pengguna, dan kendala teknis semuanya memainkan peran penting dalam menciptakan perangkat lunak terlokalisasi yang sukses.

## Tantangan Utama dalam Penerjemahan Perangkat Lunak

Dari batas karakter dalam elemen UI hingga perbedaan budaya dalam perilaku pengguna, penerjemahan perangkat lunak menghadirkan tantangan unik yang memerlukan keahlian linguistik dan pemahaman teknis.`,
      ja: `ソフトウェア翻訳は、単にテキストをある言語から別の言語に変換することをはるかに超えています。それは、ソフトウェアの機能とユーザーインターフェースの整合性を維持しながら、各ターゲット文化にとってネイティブに感じられるシームレスなユーザーエクスペリエンスを作成することです。

## 複雑さの理解

ソフトウェアインターフェースの翻訳を始めたとき、技術的な正確性は始まりに過ぎないことをすぐに学びました。文化的コンテキスト、ユーザーの期待、技術的制約はすべて、成功したローカライズされたソフトウェアを作成する上で重要な役割を果たします。

## ソフトウェア翻訳の主要な課題

UI要素の文字制限からユーザー行動の文化的違いまで、ソフトウェア翻訳は言語的専門知識と技術的理解の両方を必要とする独特の課題を提示します。`,
    },
    image: "/placeholder.svg?height=400&width=600&text=Software+Translation",
    date: "March 28, 2025",
    readTime: "7",
    author: "Liba Natur Brilian",
    slug: "/blog/software-translation",
    category: {
      en: "Translation",
      id: "Penerjemahan",
      ja: "翻訳",
    },
    tags: {
      en: ["Translation", "Localization", "Software"],
      id: ["Penerjemahan", "Lokalisasi", "Perangkat Lunak"],
      ja: ["翻訳", "ローカライゼーション", "ソフトウェア"],
    },
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getBlogPosts(): BlogPost[] {
  return blogPosts
}
