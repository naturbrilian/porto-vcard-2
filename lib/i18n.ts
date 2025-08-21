export type Language = "en" | "id" | "ja"

export interface Translation {
  // Navigation
  nav: {
    home: string
    about: string
    skills: string
    experience: string
    education: string
    projects: string
    gallery: string
    blog: string
    contact: string
  }
  // Hero Section
  hero: {
    greeting: string
    name: string
    title: string
    description: string
    getInTouch: string
    viewWork: string
  }
  // About Section
  about: {
    title: string
    subtitle: string
    description1: string
    description2: string
    phone: string
    email: string
    languages: string
    availability: string
    languageSkills: string
    availabilityStatus: string
  }
  // Skills Section
  skills: {
    title: string
    subtitle: string
    microsoftWord: string
    microsoftWordDesc: string
    adobePhotoshop: string
    adobePhotoshopDesc: string
    adobePremiere: string
    adobePremiereDesc: string
    translation: string
    translationDesc: string
    graphicDesign: string
    graphicDesignDesc: string
  }
  // Experience Section
  experience: {
    title: string
    subtitle: string
    job1Title: string
    job1Company: string
    job1Period: string
    job1Location: string
    job1Description: string
    job2Title: string
    job2Company: string
    job2Period: string
    job2Location: string
    job2Description: string
  }
  // Education Section
  education: {
    title: string
    subtitle: string
    school1: string
    degree1: string
    period1: string
    description1: string
    type1: string
    school2: string
    degree2: string
    period2: string
    description2: string
    type2: string
  }
  // Projects Section
  projects: {
    title: string
    subtitle: string
    allProjects: string
    graphicDesign: string
    videoEditing: string
    translation: string
    viewDetails: string
    viewExternal: string
    duration: string
    client: string
    backToPortfolio: string
    searchProjects: string
    showingResults: string
    noProjectsFound: string
    clearFilters: string
  }
  // Gallery Section
  gallery: {
    title: string
    subtitle: string
    allWork: string
    videoProduction: string
    searchGallery: string
    showingItems: string
    noItemsFound: string
  }
  // Blog Section
  blog: {
    title: string
    subtitle: string
    searchArticles: string
    featuredArticle: string
    readArticle: string
    readMore: string
    viewAllPosts: string
    loadMoreArticles: string
    backToBlog: string
    minRead: string
    like: string
    save: string
    share: string
    follow: string
    tableOfContents: string
    relatedPosts: string
    tags: string
  }
  // Contact Section
  contact: {
    title: string
    subtitle: string
    getInTouch: string
    email: string
    phone: string
    location: string
    connectWithMe: string
    sendMessage: string
    name: string
    subject: string
    message: string
    sending: string
    successMessage: string
    backToPortfolio: string
    fullName: string
    emailAddress: string
    projectType: string
    budgetRange: string
    timeline: string
    projectDescription: string
    sendingMessage: string
    responseTime: string
    responseTimeValue: string
    servicesIOffer: string
    currentAvailability: string
    availableForProjects: string
    availabilityDescription: string
    letsStartConversation: string
    messageSentSuccess: string
    messageSentDescription: string
    faqTitle: string
    faq1Question: string
    faq1Answer: string
    faq2Question: string
    faq2Answer: string
    faq3Question: string
    faq3Answer: string
    faq4Question: string
    faq4Answer: string
  }
  // Footer
  footer: {
    description: string
    allRightsReserved: string
  }
  // Common
  common: {
    loading: string
    error: string
    tryAgain: string
    close: string
    next: string
    previous: string
    search: string
    filter: string
    sort: string
    category: string
    date: string
    author: string
    readTime: string
    year: string
    status: string
    completed: string
    inProgress: string
    role: string
    teamSize: string
    tools: string
    skills: string
  }
}

export const translations: Record<Language, Translation> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      experience: "Experience",
      education: "Education",
      projects: "Projects",
      gallery: "Gallery",
      blog: "Blog",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello, I am",
      name: "Liba Natur Brilian",
      title: "Graphics Designer & Video Editor | Translator EN/ID",
      description: "Graphics Designer & Video Editor | Translator EN/ID",
      getInTouch: "Get in Touch",
      viewWork: "View My Work",
    },
    about: {
      title: "About Me",
      subtitle: "Get to know more about me and my background",
      description1:
        "Hello! I'm Liba Natur Brilian, a passionate graphics designer and video editor with experience in translation services. I specialize in creating visually appealing designs and engaging video content, while also providing EN/ID translation services for software and applications.",
      description2:
        "With years of experience in the creative industry, I've developed a keen eye for detail and a strong understanding of visual communication. I'm dedicated to delivering high-quality work that meets client expectations and communicates their message effectively.",
      phone: "Phone",
      email: "Email",
      languages: "Languages",
      availability: "Availability",
      languageSkills: "Indonesian (Fluent), English (Intermediate)",
      availabilityStatus: "Available for freelance",
    },
    skills: {
      title: "My Skills",
      subtitle: "Here are the tools and technologies I work with",
      microsoftWord: "Microsoft Word",
      microsoftWordDesc: "Document creation and editing",
      adobePhotoshop: "Adobe Photoshop",
      adobePhotoshopDesc: "Photo editing and graphic design",
      adobePremiere: "Adobe Premiere",
      adobePremiereDesc: "Video editing and production",
      translation: "Translation",
      translationDesc: "English to Indonesian translation",
      graphicDesign: "Graphic Design",
      graphicDesignDesc: "Visual communication and branding",
    },
    experience: {
      title: "Work Experience",
      subtitle: "My professional journey and career highlights",
      job1Title: "Graphics Design & Translator Checker",
      job1Company: "Yuramedia Link",
      job1Period: "July 2021 - Present",
      job1Location: "East Java",
      job1Description: "Graphics Designer for unit group translation JP-ID Yuramedia, also as translator checker.",
      job2Title: "Video Editor",
      job2Company: "Kediri Televisi",
      job2Period: "July 2017 - Present",
      job2Location: "Kediri, East Java",
      job2Description: "As a video editor for YouTube content, and also as a social media admin.",
    },
    education: {
      title: "Education",
      subtitle: "My academic background and qualifications",
      school1: "SMKTI PELITA NUSANTARA",
      degree1: "Multimedia",
      period1: "2014 - 2017",
      description1:
        "Studied multimedia design and production, focusing on graphic design, video editing, and digital media creation.",
      type1: "Student",
      school2: "CBM Academy",
      degree2: "Broadcasting",
      period2: "2017 - 2018",
      description2: "Specialized in broadcasting techniques, video production, and media content creation.",
      type2: "Diploma",
    },
    projects: {
      title: "My Projects",
      subtitle: "Explore my recent work and creative projects",
      allProjects: "All Projects",
      graphicDesign: "Graphic Design",
      videoEditing: "Video Editing",
      translation: "Translation",
      viewDetails: "View Details",
      viewExternal: "View External",
      duration: "Duration",
      client: "Client",
      backToPortfolio: "Back to Portfolio",
      searchProjects: "Search projects...",
      showingResults: "Showing",
      noProjectsFound: "No projects found matching your criteria.",
      clearFilters: "Clear Filters",
    },
    gallery: {
      title: "Gallery",
      subtitle: "A comprehensive showcase of my creative work across different mediums",
      allWork: "All Work",
      videoProduction: "Video Production",
      searchGallery: "Search gallery...",
      showingItems: "Showing",
      noItemsFound: "No items found matching your criteria.",
    },
    blog: {
      title: "Blog",
      subtitle: "Thoughts, insights, and tutorials from my journey as a creative professional",
      searchArticles: "Search articles...",
      featuredArticle: "Featured Article",
      readArticle: "Read Article",
      readMore: "Read More",
      viewAllPosts: "View All Posts",
      loadMoreArticles: "Load More Articles",
      backToBlog: "Back to Blog",
      minRead: "min read",
      like: "Like",
      save: "Save",
      share: "Share",
      follow: "Follow",
      tableOfContents: "Table of Contents",
      relatedPosts: "Related Posts",
      tags: "Tags",
    },
    contact: {
      title: "Contact Me",
      subtitle: "Ready to start your next project? Let's discuss how I can help bring your creative vision to life.",
      getInTouch: "Get in Touch",
      email: "Email",
      phone: "Phone",
      location: "Location",
      connectWithMe: "Connect with me",
      sendMessage: "Send Message",
      name: "Name",
      subject: "Subject",
      message: "Message",
      sending: "Sending...",
      successMessage: "Message sent successfully! I'll get back to you soon.",
      backToPortfolio: "Back to Portfolio",
      fullName: "Full Name",
      emailAddress: "Email Address",
      projectType: "Project Type",
      budgetRange: "Budget Range",
      timeline: "Timeline",
      projectDescription: "Project Description",
      sendingMessage: "Sending Message...",
      responseTime: "Response Time",
      responseTimeValue: "Usually within 24 hours",
      servicesIOffer: "Services I Offer",
      currentAvailability: "Current Availability",
      availableForProjects: "Available for new projects",
      availabilityDescription: "I'm currently accepting new projects with start dates in the next 2-4 weeks.",
      letsStartConversation: "Let's Start a Conversation",
      messageSentSuccess: "Message sent successfully!",
      messageSentDescription:
        "Thank you for reaching out. I'll get back to you within 24 hours to discuss your project in detail.",
      faqTitle: "Frequently Asked Questions",
      faq1Question: "What's your typical project timeline?",
      faq1Answer:
        "Project timelines vary based on scope and complexity. Simple designs typically take 1-2 weeks, while comprehensive video projects can take 4-8 weeks. I'll provide a detailed timeline after discussing your specific requirements.",
      faq2Question: "Do you work with international clients?",
      faq2Answer:
        "Yes! I work with clients worldwide and am comfortable with remote collaboration. I'm available during Indonesian business hours but can accommodate different time zones for meetings.",
      faq3Question: "What file formats do you deliver?",
      faq3Answer:
        "I deliver files in industry-standard formats based on your needs. For design work: AI, PSD, PDF, PNG, JPG. For video: MP4, MOV, AVI in various resolutions. For translation: DOCX, PDF, or your preferred format.",
      faq4Question: "Do you offer revisions?",
      faq4Answer:
        "Yes, I include 2-3 rounds of revisions in all projects to ensure you're completely satisfied with the final result. Additional revisions can be accommodated if needed.",
    },
    footer: {
      description: "Graphics Designer & Video Editor | Translator EN/ID",
      allRightsReserved: "All rights reserved.",
    },
    common: {
      loading: "Loading...",
      error: "Error",
      tryAgain: "Try Again",
      close: "Close",
      next: "Next",
      previous: "Previous",
      search: "Search",
      filter: "Filter",
      sort: "Sort",
      category: "Category",
      date: "Date",
      author: "Author",
      readTime: "read time",
      year: "Year",
      status: "Status",
      completed: "Completed",
      inProgress: "In Progress",
      role: "Role",
      teamSize: "Team Size",
      tools: "Tools",
      skills: "Skills",
    },
  },
  id: {
    nav: {
      home: "Beranda",
      about: "Tentang",
      skills: "Keahlian",
      experience: "Pengalaman",
      education: "Pendidikan",
      projects: "Proyek",
      gallery: "Galeri",
      blog: "Blog",
      contact: "Kontak",
    },
    hero: {
      greeting: "Halo, saya",
      name: "Liba Natur Brilian",
      title: "Desainer Grafis & Editor Video | Penerjemah EN/ID",
      description: "Desainer Grafis & Editor Video | Penerjemah EN/ID",
      getInTouch: "Hubungi Saya",
      viewWork: "Lihat Karya Saya",
    },
    about: {
      title: "Tentang Saya",
      subtitle: "Kenali lebih jauh tentang saya dan latar belakang saya",
      description1:
        "Halo! Saya Liba Natur Brilian, seorang desainer grafis dan editor video yang berpengalaman dalam layanan penerjemahan. Saya mengkhususkan diri dalam menciptakan desain yang menarik secara visual dan konten video yang engaging, sambil juga menyediakan layanan penerjemahan EN/ID untuk perangkat lunak dan aplikasi.",
      description2:
        "Dengan pengalaman bertahun-tahun di industri kreatif, saya telah mengembangkan mata yang tajam untuk detail dan pemahaman yang kuat tentang komunikasi visual. Saya berdedikasi untuk memberikan karya berkualitas tinggi yang memenuhi ekspektasi klien dan mengkomunikasikan pesan mereka secara efektif.",
      phone: "Telepon",
      email: "Email",
      languages: "Bahasa",
      availability: "Ketersediaan",
      languageSkills: "Bahasa Indonesia (Fasih), Bahasa Inggris (Menengah)",
      availabilityStatus: "Tersedia untuk freelance",
    },
    skills: {
      title: "Keahlian Saya",
      subtitle: "Berikut adalah alat dan teknologi yang saya gunakan",
      microsoftWord: "Microsoft Word",
      microsoftWordDesc: "Pembuatan dan pengeditan dokumen",
      adobePhotoshop: "Adobe Photoshop",
      adobePhotoshopDesc: "Pengeditan foto dan desain grafis",
      adobePremiere: "Adobe Premiere",
      adobePremiereDesc: "Pengeditan dan produksi video",
      translation: "Penerjemahan",
      translationDesc: "Penerjemahan Bahasa Inggris ke Indonesia",
      graphicDesign: "Desain Grafis",
      graphicDesignDesc: "Komunikasi visual dan branding",
    },
    experience: {
      title: "Pengalaman Kerja",
      subtitle: "Perjalanan profesional dan pencapaian karir saya",
      job1Title: "Desain Grafis & Pemeriksa Penerjemah",
      job1Company: "Yuramedia Link",
      job1Period: "Juli 2021 - Sekarang",
      job1Location: "Jawa Timur",
      job1Description:
        "Desainer Grafis untuk unit grup penerjemahan JP-ID Yuramedia, juga sebagai pemeriksa penerjemah.",
      job2Title: "Editor Video",
      job2Company: "Kediri Televisi",
      job2Period: "Juli 2017 - Sekarang",
      job2Location: "Kediri, Jawa Timur",
      job2Description: "Sebagai editor video untuk konten YouTube, dan juga sebagai admin media sosial.",
    },
    education: {
      title: "Pendidikan",
      subtitle: "Latar belakang akademis dan kualifikasi saya",
      school1: "SMKTI PELITA NUSANTARA",
      degree1: "Multimedia",
      period1: "2014 - 2017",
      description1:
        "Mempelajari desain dan produksi multimedia, fokus pada desain grafis, pengeditan video, dan pembuatan media digital.",
      type1: "Siswa",
      school2: "CBM Academy",
      degree2: "Broadcasting",
      period2: "2017 - 2018",
      description2: "Spesialisasi dalam teknik penyiaran, produksi video, dan pembuatan konten media.",
      type2: "Diploma",
    },
    projects: {
      title: "Proyek Saya",
      subtitle: "Jelajahi karya terbaru dan proyek kreatif saya",
      allProjects: "Semua Proyek",
      graphicDesign: "Desain Grafis",
      videoEditing: "Pengeditan Video",
      translation: "Penerjemahan",
      viewDetails: "Lihat Detail",
      viewExternal: "Lihat Eksternal",
      duration: "Durasi",
      client: "Klien",
      backToPortfolio: "Kembali ke Portofolio",
      searchProjects: "Cari proyek...",
      showingResults: "Menampilkan",
      noProjectsFound: "Tidak ada proyek yang ditemukan sesuai kriteria Anda.",
      clearFilters: "Hapus Filter",
    },
    gallery: {
      title: "Galeri",
      subtitle: "Showcase komprehensif karya kreatif saya di berbagai medium",
      allWork: "Semua Karya",
      videoProduction: "Produksi Video",
      searchGallery: "Cari galeri...",
      showingItems: "Menampilkan",
      noItemsFound: "Tidak ada item yang ditemukan sesuai kriteria Anda.",
    },
    blog: {
      title: "Blog",
      subtitle: "Pemikiran, wawasan, dan tutorial dari perjalanan saya sebagai profesional kreatif",
      searchArticles: "Cari artikel...",
      featuredArticle: "Artikel Unggulan",
      readArticle: "Baca Artikel",
      readMore: "Baca Selengkapnya",
      viewAllPosts: "Lihat Semua Postingan",
      loadMoreArticles: "Muat Lebih Banyak Artikel",
      backToBlog: "Kembali ke Blog",
      minRead: "menit baca",
      like: "Suka",
      save: "Simpan",
      share: "Bagikan",
      follow: "Ikuti",
      tableOfContents: "Daftar Isi",
      relatedPosts: "Postingan Terkait",
      tags: "Tag",
    },
    contact: {
      title: "Hubungi Saya",
      subtitle:
        "Siap memulai proyek berikutnya? Mari diskusikan bagaimana saya dapat membantu mewujudkan visi kreatif Anda.",
      getInTouch: "Hubungi Saya",
      email: "Email",
      phone: "Telepon",
      location: "Lokasi",
      connectWithMe: "Terhubung dengan saya",
      sendMessage: "Kirim Pesan",
      name: "Nama",
      subject: "Subjek",
      message: "Pesan",
      sending: "Mengirim...",
      successMessage: "Pesan berhasil dikirim! Saya akan segera menghubungi Anda.",
      backToPortfolio: "Kembali ke Portofolio",
      fullName: "Nama Lengkap",
      emailAddress: "Alamat Email",
      projectType: "Jenis Proyek",
      budgetRange: "Rentang Anggaran",
      timeline: "Timeline",
      projectDescription: "Deskripsi Proyek",
      sendingMessage: "Mengirim Pesan...",
      responseTime: "Waktu Respons",
      responseTimeValue: "Biasanya dalam 24 jam",
      servicesIOffer: "Layanan yang Saya Tawarkan",
      currentAvailability: "Ketersediaan Saat Ini",
      availableForProjects: "Tersedia untuk proyek baru",
      availabilityDescription: "Saya saat ini menerima proyek baru dengan tanggal mulai dalam 2-4 minggu ke depan.",
      letsStartConversation: "Mari Mulai Percakapan",
      messageSentSuccess: "Pesan berhasil dikirim!",
      messageSentDescription:
        "Terima kasih telah menghubungi. Saya akan menghubungi Anda dalam 24 jam untuk membahas proyek Anda secara detail.",
      faqTitle: "Pertanyaan yang Sering Diajukan",
      faq1Question: "Berapa timeline proyek yang biasa?",
      faq1Answer:
        "Timeline proyek bervariasi berdasarkan ruang lingkup dan kompleksitas. Desain sederhana biasanya memakan waktu 1-2 minggu, sedangkan proyek video komprehensif dapat memakan waktu 4-8 minggu. Saya akan memberikan timeline detail setelah membahas kebutuhan spesifik Anda.",
      faq2Question: "Apakah Anda bekerja dengan klien internasional?",
      faq2Answer:
        "Ya! Saya bekerja dengan klien di seluruh dunia dan nyaman dengan kolaborasi jarak jauh. Saya tersedia selama jam kerja Indonesia tetapi dapat menyesuaikan zona waktu yang berbeda untuk pertemuan.",
      faq3Question: "Format file apa yang Anda berikan?",
      faq3Answer:
        "Saya memberikan file dalam format standar industri berdasarkan kebutuhan Anda. Untuk karya desain: AI, PSD, PDF, PNG, JPG. Untuk video: MP4, MOV, AVI dalam berbagai resolusi. Untuk penerjemahan: DOCX, PDF, atau format pilihan Anda.",
      faq4Question: "Apakah Anda menawarkan revisi?",
      faq4Answer:
        "Ya, saya menyertakan 2-3 putaran revisi dalam semua proyek untuk memastikan Anda sepenuhnya puas dengan hasil akhir. Revisi tambahan dapat diakomodasi jika diperlukan.",
    },
    footer: {
      description: "Desainer Grafis & Editor Video | Penerjemah EN/ID",
      allRightsReserved: "Semua hak dilindungi.",
    },
    common: {
      loading: "Memuat...",
      error: "Kesalahan",
      tryAgain: "Coba Lagi",
      close: "Tutup",
      next: "Berikutnya",
      previous: "Sebelumnya",
      search: "Cari",
      filter: "Filter",
      sort: "Urutkan",
      category: "Kategori",
      date: "Tanggal",
      author: "Penulis",
      readTime: "waktu baca",
      year: "Tahun",
      status: "Status",
      completed: "Selesai",
      inProgress: "Sedang Berlangsung",
      role: "Peran",
      teamSize: "Ukuran Tim",
      tools: "Alat",
      skills: "Keahlian",
    },
  },
  ja: {
    nav: {
      home: "ホーム",
      about: "私について",
      skills: "スキル",
      experience: "経験",
      education: "教育",
      projects: "プロジェクト",
      gallery: "ギャラリー",
      blog: "ブログ",
      contact: "お問い合わせ",
    },
    hero: {
      greeting: "こんにちは、私は",
      name: "リバ・ナトゥール・ブリリアン",
      title: "グラフィックデザイナー＆ビデオエディター | 翻訳者 EN/ID",
      description: "グラフィックデザイナー＆ビデオエディター | 翻訳者 EN/ID",
      getInTouch: "お問い合わせ",
      viewWork: "作品を見る",
    },
    about: {
      title: "私について",
      subtitle: "私の背景についてもっと知ってください",
      description1:
        "こんにちは！私はリバ・ナトゥール・ブリリアンです。翻訳サービスの経験を持つ情熱的なグラフィックデザイナー兼ビデオエディターです。視覚的に魅力的なデザインと魅力的なビデオコンテンツの作成を専門とし、ソフトウェアやアプリケーションのEN/ID翻訳サービスも提供しています。",
      description2:
        "クリエイティブ業界での長年の経験により、細部への鋭い目と視覚的コミュニケーションの強い理解を身につけました。クライアントの期待に応え、メッセージを効果的に伝える高品質な作品の提供に専念しています。",
      phone: "電話",
      email: "メール",
      languages: "言語",
      availability: "対応可能性",
      languageSkills: "インドネシア語（流暢）、英語（中級）",
      availabilityStatus: "フリーランス対応可能",
    },
    skills: {
      title: "私のスキル",
      subtitle: "私が使用するツールと技術です",
      microsoftWord: "Microsoft Word",
      microsoftWordDesc: "ドキュメント作成と編集",
      adobePhotoshop: "Adobe Photoshop",
      adobePhotoshopDesc: "写真編集とグラフィックデザイン",
      adobePremiere: "Adobe Premiere",
      adobePremiereDesc: "ビデオ編集と制作",
      translation: "翻訳",
      translationDesc: "英語からインドネシア語への翻訳",
      graphicDesign: "グラフィックデザイン",
      graphicDesignDesc: "ビジュアルコミュニケーションとブランディング",
    },
    experience: {
      title: "職歴",
      subtitle: "私の専門的な歩みとキャリアのハイライト",
      job1Title: "グラフィックデザイン＆翻訳チェッカー",
      job1Company: "Yuramedia Link",
      job1Period: "2021年7月 - 現在",
      job1Location: "東ジャワ",
      job1Description: "Yuramedia の JP-ID 翻訳ユニットグループのグラフィックデザイナー、翻訳チェッカーも兼任。",
      job2Title: "ビデオエディター",
      job2Company: "Kediri Televisi",
      job2Period: "2017年7月 - 現在",
      job2Location: "ケディリ、東ジャワ",
      job2Description: "YouTubeコンテンツのビデオエディター、ソーシャルメディア管理者も兼任。",
    },
    education: {
      title: "教育",
      subtitle: "私の学歴と資格",
      school1: "SMKTI PELITA NUSANTARA",
      degree1: "マルチメディア",
      period1: "2014 - 2017",
      description1:
        "マルチメディアデザインと制作を学び、グラフィックデザイン、ビデオ編集、デジタルメディア制作に焦点を当てました。",
      type1: "学生",
      school2: "CBM Academy",
      degree2: "放送",
      period2: "2017 - 2018",
      description2: "放送技術、ビデオ制作、メディアコンテンツ制作を専門としました。",
      type2: "ディプロマ",
    },
    projects: {
      title: "私のプロジェクト",
      subtitle: "最近の作品とクリエイティブプロジェクトをご覧ください",
      allProjects: "すべてのプロジェクト",
      graphicDesign: "グラフィックデザイン",
      videoEditing: "ビデオ編集",
      translation: "翻訳",
      viewDetails: "詳細を見る",
      viewExternal: "外部で見る",
      duration: "期間",
      client: "クライアント",
      backToPortfolio: "ポートフォリオに戻る",
      searchProjects: "プロジェクトを検索...",
      showingResults: "表示中",
      noProjectsFound: "条件に一致するプロジェクトが見つかりません。",
      clearFilters: "フィルターをクリア",
    },
    gallery: {
      title: "ギャラリー",
      subtitle: "様々なメディアでの私のクリエイティブ作品の包括的なショーケース",
      allWork: "すべての作品",
      videoProduction: "ビデオ制作",
      searchGallery: "ギャラリーを検索...",
      showingItems: "表示中",
      noItemsFound: "条件に一致するアイテムが見つかりません。",
    },
    blog: {
      title: "ブログ",
      subtitle: "クリエイティブプロフェッショナルとしての私の歩みからの思考、洞察、チュートリアル",
      searchArticles: "記事を検索...",
      featuredArticle: "注目記事",
      readArticle: "記事を読む",
      readMore: "続きを読む",
      viewAllPosts: "すべての投稿を見る",
      loadMoreArticles: "さらに記事を読み込む",
      backToBlog: "ブログに戻る",
      minRead: "分で読める",
      like: "いいね",
      save: "保存",
      share: "シェア",
      follow: "フォロー",
      tableOfContents: "目次",
      relatedPosts: "関連投稿",
      tags: "タグ",
    },
    contact: {
      title: "お問い合わせ",
      subtitle:
        "次のプロジェクトを始める準備はできていますか？あなたのクリエイティブなビジョンを実現するお手伝いについて話し合いましょう。",
      getInTouch: "お問い合わせ",
      email: "メール",
      phone: "電話",
      location: "場所",
      connectWithMe: "私とつながる",
      sendMessage: "メッセージを送る",
      name: "名前",
      subject: "件名",
      message: "メッセージ",
      sending: "送信中...",
      successMessage: "メッセージが正常に送信されました！すぐにご連絡いたします。",
      backToPortfolio: "ポートフォリオに戻る",
      fullName: "フルネーム",
      emailAddress: "メールアドレス",
      projectType: "プロジェクトタイプ",
      budgetRange: "予算範囲",
      timeline: "タイムライン",
      projectDescription: "プロジェクトの説明",
      sendingMessage: "メッセージを送信中...",
      responseTime: "応答時間",
      responseTimeValue: "通常24時間以内",
      servicesIOffer: "提供サービス",
      currentAvailability: "現在の対応可能性",
      availableForProjects: "新しいプロジェクトに対応可能",
      availabilityDescription: "現在、今後2-4週間で開始する新しいプロジェクトを受け付けています。",
      letsStartConversation: "会話を始めましょう",
      messageSentSuccess: "メッセージが正常に送信されました！",
      messageSentDescription:
        "お問い合わせいただきありがとうございます。24時間以内にプロジェクトについて詳しく話し合うためにご連絡いたします。",
      faqTitle: "よくある質問",
      faq1Question: "一般的なプロジェクトのタイムラインは？",
      faq1Answer:
        "プロジェクトのタイムラインは範囲と複雑さによって異なります。シンプルなデザインは通常1-2週間、包括的なビデオプロジェクトは4-8週間かかります。具体的な要件を話し合った後、詳細なタイムラインを提供します。",
      faq2Question: "国際的なクライアントと仕事をしますか？",
      faq2Answer:
        "はい！世界中のクライアントと仕事をし、リモートコラボレーションに慣れています。インドネシアの営業時間中に対応可能ですが、会議のために異なるタイムゾーンに対応することもできます。",
      faq3Question: "どのようなファイル形式で納品しますか？",
      faq3Answer:
        "ニーズに基づいて業界標準の形式でファイルを納品します。デザイン作業：AI、PSD、PDF、PNG、JPG。ビデオ：様々な解像度のMP4、MOV、AVI。翻訳：DOCX、PDF、またはお好みの形式。",
      faq4Question: "修正は提供しますか？",
      faq4Answer:
        "はい、最終結果に完全に満足していただけるよう、すべてのプロジェクトに2-3回の修正を含めています。必要に応じて追加の修正も対応可能です。",
    },
    footer: {
      description: "グラフィックデザイナー＆ビデオエディター | 翻訳者 EN/ID",
      allRightsReserved: "すべての権利を保有。",
    },
    common: {
      loading: "読み込み中...",
      error: "エラー",
      tryAgain: "再試行",
      close: "閉じる",
      next: "次へ",
      previous: "前へ",
      search: "検索",
      filter: "フィルター",
      sort: "ソート",
      category: "カテゴリー",
      date: "日付",
      author: "著者",
      readTime: "読了時間",
      year: "年",
      status: "ステータス",
      completed: "完了",
      inProgress: "進行中",
      role: "役割",
      teamSize: "チームサイズ",
      tools: "ツール",
      skills: "スキル",
    },
  },
}

export function getTranslation(language: Language): Translation {
  return translations[language] || translations.en
}
