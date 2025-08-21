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
  // About Page
  aboutPage: {
    title: string
    subtitle: string
    backToHome: string
    helloTitle: string
    introduction1: string
    introduction2: string
    letsWorkTogether: string
    viewMyCV: string
    myJourney: string
    journeySubtitle: string
    valuesTitle: string
    valuesSubtitle: string
    beyondWork: string
    beyondWorkSubtitle: string
    whatIBring: string
    whatIBringSubtitle: string
    readyToWork: string
    readyToWorkDescription: string
    startProject: string
    viewMyWork: string
    yearsExperience: string
    basedIn: string
    // Timeline
    timeline: {
      year2014: string
      title2014: string
      desc2014: string
      year2017: string
      title2017: string
      desc2017: string
      year2018: string
      title2018: string
      desc2018: string
      year2021: string
      title2021: string
      desc2021: string
      year2024: string
      title2024: string
      desc2024: string
    }
    // Values
    values: {
      qualityTitle: string
      qualityDesc: string
      collaborationTitle: string
      collaborationDesc: string
      learningTitle: string
      learningDesc: string
      passionTitle: string
      passionDesc: string
    }
    // Interests
    interests: {
      photography: string
      photographyDesc: string
      music: string
      musicDesc: string
      gaming: string
      gamingDesc: string
      reading: string
      readingDesc: string
      coffee: string
      coffeeDesc: string
    }
    // Skills
    skillsOverview: {
      creativeDesign: string
      creativeDesignDesc: string
      videoProduction: string
      videoProductionDesc: string
      translationLoc: string
      translationLocDesc: string
    }
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
      subtitle: "Who's me?",
      description1:
        "I'm Liba Natur Brilian, also known as Natur or gingalibadeidara, I'm a video editor and graphics designer with a passion on technologies, art, music and content creator. ",
      description2:
        "With years of experience in the creative industry, I've developed a keen eye for detail and a strong understanding of visual communication. I'm dedicated to delivering high-quality work that meets client expectations and communicates their message effectively.",
      phone: "Phone",
      email: "Email",
      languages: "Languages",
      availability: "Availability",
      languageSkills: "Indonesian (Fluent), English (Intermediate)",
      availabilityStatus: "Available for freelance",
    },
    aboutPage: {
      title: "About Me",
      subtitle:
        "Who's me?.",
      backToHome: "Back to Home",
      helloTitle: "Hello, I'm Liba Natur Brilian",
      introduction1:
        "I'm Liba Natur Brilian, also known as Natur or gingalibadeidara, I'm a video editor and graphics designer with a passion on technologies, art, music and content creator. Here, I will share some projects or uploads that I have previously uploaded on deviantart (such as vectors, and design results), the results of my edited videos and other writings. I hope this platform can be a space to share inspiration, ideas, and interesting discussions with you and all of you.",
      introduction2:
        "My journey began with a curiosity about how visual elements can communicate complex ideas simply and beautifully. This curiosity led me to explore multimedia design, video production, and eventually translation work, where I discovered the fascinating intersection of language, culture, and visual communication.",
      letsWorkTogether: "Let's Work Together",
      viewMyCV: "View My CV",
      myJourney: "My Journey",
      journeySubtitle:
        "Every professional has a story. Here's mine - from a curious student to a seasoned creative professional.",
      valuesTitle: "My Values & Philosophy",
      valuesSubtitle:
        "These core principles guide every project I take on and every relationship I build with clients.",
      beyondWork: "Beyond Work",
      beyondWorkSubtitle:
        "When I'm not designing or editing, you'll find me exploring these passions that fuel my creativity.",
      whatIBring: "What I Bring to the Table",
      whatIBringSubtitle: "A unique combination of technical skills, creative vision, and cultural understanding.",
      readyToWork: "Ready to Work Together?",
      readyToWorkDescription:
        "I'm always excited to take on new challenges and help bring creative visions to life. Let's discuss how we can make your next project extraordinary.",
      startProject: "Start a Project",
      viewMyWork: "View My Work",
      yearsExperience: "7+ Years Experience",
      basedIn: "Based in Indonesia",
      timeline: {
        year2014: "2014",
        title2014: "Started Multimedia Education",
        desc2014:
          "Began studying multimedia design at SMKTI PELITA NUSANTARA, discovering my passion for visual storytelling.",
        year2017: "2017",
        title2017: "First Professional Role",
        desc2017: "Joined Kediri Televisi as a video editor, working on YouTube content and social media management.",
        year2018: "2018",
        title2018: "Broadcasting Specialization",
        desc2018:
          "Completed broadcasting diploma at CBM Academy, expanding skills in video production and media creation.",
        year2021: "2021",
        title2021: "Translation Career",
        desc2021:
          "Started at Yuramedia Link as Graphics Designer and Translator Checker, combining design with language skills.",
        year2024: "2024",
        title2024: "Freelance Expansion",
        desc2024: "Expanded services to include comprehensive brand identity design and international client projects.",
      },
      values: {
        qualityTitle: "Quality First",
        qualityDesc: "I believe in delivering exceptional work that exceeds expectations and stands the test of time.",
        collaborationTitle: "Collaboration",
        collaborationDesc: "Great projects come from great teamwork. I value open communication and shared creativity.",
        learningTitle: "Continuous Learning",
        learningDesc:
          "The creative industry evolves rapidly. I'm committed to staying current with trends and technologies.",
        passionTitle: "Passion-Driven",
        passionDesc: "I pour my heart into every project, treating each client's vision as if it were my own.",
      },
      interests: {
        photography: "Photography",
        photographyDesc: "Capturing moments and stories",
        music: "Music",
        musicDesc: "Listening to various genres",
        gaming: "Gaming",
        gamingDesc: "Strategy and adventure games",
        reading: "Reading",
        readingDesc: "Design and technology books",
        coffee: "Coffee",
        coffeeDesc: "Exploring local coffee shops",
      },
      skillsOverview: {
        creativeDesign: "Creative Design",
        creativeDesignDesc:
          "From brand identities to marketing materials, I create designs that capture attention and communicate effectively.",
        videoProduction: "Video Production",
        videoProductionDesc:
          "Bringing stories to life through compelling video content, from concept to final delivery.",
        translationLoc: "Translation & Localization",
        translationLocDesc:
          "Bridging language barriers with accurate translations that preserve meaning and cultural context.",
      },
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
      subtitle: "Siapakah saya?",
      description1:
        "Saya Liba Natur Brilian, juga dikenal sebagai Natur atau gingalibadeidara, seorang editor video dan desainer grafis dengan ketertarikan yang mendalam terhadap teknologi, seni, musik, dan pembuatan konten. Disini, Aku akan membagikan beberapa project atau unggahan yang sebelumnya pernah aku unggah di deviantart (seperti vektor, dan hasil desain), hasil video yang aku edit dan tulisan-tulisan lainnya. Aku harap platform ini bisa menjadi ruang untuk berbagi inspirasi, ide, dan diskusi yang menarik bersama kamu dan kalian semua.",
      description2:
        "Dengan pengalaman bertahun-tahun di industri kreatif, saya telah mengembangkan mata yang tajam untuk detail dan pemahaman yang kuat tentang komunikasi visual. Saya berdedikasi untuk memberikan karya berkualitas tinggi yang memenuhi ekspektasi klien dan mengkomunikasikan pesan mereka secara efektif.",
      phone: "Telepon",
      email: "Email",
      languages: "Bahasa",
      availability: "Ketersediaan",
      languageSkills: "Bahasa Indonesia (Fasih), Bahasa Inggris (Menengah)",
      availabilityStatus: "Tersedia untuk freelance",
    },
    aboutPage: {
      title: "Tentang Saya",
      subtitle:
        "Siapakah aku?",
      backToHome: "Kembali ke Beranda",
      helloTitle: "Halo, saya Liba Natur Brilian",
      introduction1:
        "Saya Liba Natur Brilian, juga dikenal sebagai Natur atau gingalibadeidara, seorang editor video dan desainer grafis dengan ketertarikan yang mendalam terhadap teknologi, seni, musik, dan pembuatan konten. Disini, Aku akan membagikan beberapa project atau unggahan yang sebelumnya pernah aku unggah di deviantart (seperti vektor, dan hasil desain). hasil video yang aku edit dan tulisan-tulisan lainnya. Aku harap platform ini bisa menjadi ruang untuk berbagi inspirasi, ide, dan diskusi yang menarik bersama kamu dan kalian semua.",
      introduction2:
        "Perjalanan saya dimulai dengan rasa ingin tahu tentang bagaimana elemen visual dapat mengkomunikasikan ide-ide kompleks dengan sederhana dan indah. Rasa ingin tahu ini membawa saya untuk mengeksplorasi desain multimedia, produksi video, dan akhirnya pekerjaan penerjemahan, di mana saya menemukan persimpangan yang menarik antara bahasa, budaya, dan komunikasi visual.",
      letsWorkTogether: "Mari Bekerja Sama",
      viewMyCV: "Lihat CV Saya",
      myJourney: "Perjalanan Saya",
      journeySubtitle:
        "Setiap profesional memiliki cerita. Inilah cerita saya - dari mahasiswa yang penasaran hingga profesional kreatif yang berpengalaman.",
      valuesTitle: "Nilai & Filosofi Saya",
      valuesSubtitle:
        "Prinsip-prinsip inti ini memandu setiap proyek yang saya ambil dan setiap hubungan yang saya bangun dengan klien.",
      beyondWork: "Di Luar Pekerjaan",
      beyondWorkSubtitle:
        "Ketika saya tidak sedang mendesain atau mengedit, Anda akan menemukan saya mengeksplorasi passion yang memicu kreativitas saya.",
      whatIBring: "Apa yang Saya Tawarkan",
      whatIBringSubtitle: "Kombinasi unik dari keterampilan teknis, visi kreatif, dan pemahaman budaya.",
      readyToWork: "Siap Bekerja Sama?",
      readyToWorkDescription:
        "Saya selalu bersemangat untuk mengambil tantangan baru dan membantu mewujudkan visi kreatif. Mari diskusikan bagaimana kita dapat membuat proyek Anda berikutnya menjadi luar biasa.",
      startProject: "Mulai Proyek",
      viewMyWork: "Lihat Karya Saya",
      yearsExperience: "Pengalaman 7+ Tahun",
      basedIn: "Berdomisili di Indonesia",
      timeline: {
        year2014: "2014",
        title2014: "Memulai Pendidikan Multimedia",
        desc2014:
          "Mulai belajar desain multimedia di SMKTI PELITA NUSANTARA, menemukan passion untuk visual storytelling.",
        year2017: "2017",
        title2017: "Peran Profesional Pertama",
        desc2017:
          "Bergabung dengan Kediri Televisi sebagai editor video, bekerja pada konten YouTube dan manajemen media sosial.",
        year2018: "2018",
        title2018: "Spesialisasi Broadcasting",
        desc2018:
          "Menyelesaikan diploma broadcasting di CBM Academy, memperluas keterampilan dalam produksi video dan pembuatan media.",
        year2021: "2021",
        title2021: "Karir Penerjemahan",
        desc2021:
          "Memulai di Yuramedia Link sebagai Desainer Grafis dan Pemeriksa Penerjemah, menggabungkan desain dengan keterampilan bahasa.",
        year2024: "2024",
        title2024: "Ekspansi Freelance",
        desc2024:
          "Memperluas layanan untuk mencakup desain identitas merek yang komprehensif dan proyek klien internasional.",
      },
      values: {
        qualityTitle: "Kualitas Utama",
        qualityDesc: "Saya percaya dalam memberikan karya luar biasa yang melampaui ekspektasi dan tahan uji waktu.",
        collaborationTitle: "Kolaborasi",
        collaborationDesc:
          "Proyek hebat berasal dari kerja tim yang hebat. Saya menghargai komunikasi terbuka dan kreativitas bersama.",
        learningTitle: "Pembelajaran Berkelanjutan",
        learningDesc:
          "Industri kreatif berkembang pesat. Saya berkomitmen untuk tetap mengikuti tren dan teknologi terkini.",
        passionTitle: "Didorong Passion",
        passionDesc:
          "Saya mencurahkan hati saya ke setiap proyek, memperlakukan visi setiap klien seolah-olah itu adalah visi saya sendiri.",
      },
      interests: {
        photography: "Fotografi",
        photographyDesc: "Menangkap momen dan cerita",
        music: "Musik",
        musicDesc: "Mendengarkan berbagai genre",
        gaming: "Gaming",
        gamingDesc: "Game strategi dan petualangan",
        reading: "Membaca",
        readingDesc: "Buku desain dan teknologi",
        coffee: "Kopi",
        coffeeDesc: "Menjelajahi kedai kopi lokal",
      },
      skillsOverview: {
        creativeDesign: "Desain Kreatif",
        creativeDesignDesc:
          "Dari identitas merek hingga materi pemasaran, saya menciptakan desain yang menarik perhatian dan berkomunikasi secara efektif.",
        videoProduction: "Produksi Video",
        videoProductionDesc:
          "Menghidupkan cerita melalui konten video yang menarik, dari konsep hingga pengiriman akhir.",
        translationLoc: "Penerjemahan & Lokalisasi",
        translationLocDesc:
          "Menjembatani hambatan bahasa dengan terjemahan akurat yang mempertahankan makna dan konteks budaya.",
      },
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
    aboutPage: {
      title: "私について",
      subtitle:
        "デザインの背後にいる人物、私の創造性を駆り立てる物語、そして私の仕事を導く価値観について知ってください。",
      backToHome: "ホームに戻る",
      helloTitle: "こんにちは、私はリバ・ナトゥール・ブリリアンです",
      introduction1:
        "私は、優れたデザインには物語を語り、問題を解決し、文化を超えて人々を結びつける力があると信じる情熱的なクリエイティブプロフェッショナルです。グラフィックデザイン、ビデオ編集、翻訳サービスで7年以上の経験を持ち、多様なクライアントと協力してビジョンを実現する特権を得てきました。",
      introduction2:
        "私の旅は、視覚的要素がいかに複雑なアイデアをシンプルで美しく伝えることができるかという好奇心から始まりました。この好奇心により、マルチメディアデザイン、ビデオ制作、そして最終的に翻訳作業を探求することになり、言語、文化、視覚的コミュニケーションの魅力的な交差点を発見しました。",
      letsWorkTogether: "一緒に働きましょう",
      viewMyCV: "私のCVを見る",
      myJourney: "私の歩み",
      journeySubtitle:
        "すべてのプロフェッショナルには物語があります。これが私の物語です - 好奇心旺盛な学生から経験豊富なクリエイティブプロフェッショナルまで。",
      valuesTitle: "私の価値観と哲学",
      valuesSubtitle:
        "これらの核となる原則は、私が取り組むすべてのプロジェクトとクライアントとの関係構築を導いています。",
      beyondWork: "仕事を超えて",
      beyondWorkSubtitle:
        "デザインや編集をしていないとき、私の創造性を刺激するこれらの情熱を探求している私を見つけることができます。",
      whatIBring: "私が提供するもの",
      whatIBringSubtitle: "技術的スキル、創造的ビジョン、文化的理解のユニークな組み合わせ。",
      readyToWork: "一緒に働く準備はできていますか？",
      readyToWorkDescription:
        "私は常に新しい挑戦を受け入れ、創造的なビジョンの実現を支援することに興奮しています。次のプロジェクトを特別なものにする方法について話し合いましょう。",
      startProject: "プロジェクトを開始",
      viewMyWork: "私の作品を見る",
      yearsExperience: "7年以上の経験",
      basedIn: "インドネシア在住",
      timeline: {
        year2014: "2014年",
        title2014: "マルチメディア教育の開始",
        desc2014:
          "SMKTI PELITA NUSANTARAでマルチメディアデザインの学習を開始し、ビジュアルストーリーテリングへの情熱を発見。",
        year2017: "2017年",
        title2017: "初のプロフェッショナル職",
        desc2017: "Kediri TelevisiにビデオエディターとしてJoin、YouTubeコンテンツとソーシャルメディア管理に従事。",
        year2018: "2018年",
        title2018: "放送専門化",
        desc2018: "CBM Academyで放送ディプロマを修了し、ビデオ制作とメディア制作のスキルを拡張。",
        year2021: "2021年",
        title2021: "翻訳キャリア",
        desc2021:
          "Yuramedia Linkでグラフィックデザイナーおよび翻訳チェッカーとして開始、デザインと言語スキルを組み合わせ。",
        year2024: "2024年",
        title2024: "フリーランス拡張",
        desc2024: "包括的なブランドアイデンティティデザインと国際クライアントプロジェクトを含むサービスを拡張。",
      },
      values: {
        qualityTitle: "品質第一",
        qualityDesc: "期待を超え、時の試練に耐える卓越した作品の提供を信じています。",
        collaborationTitle: "コラボレーション",
        collaborationDesc:
          "素晴らしいプロジェクトは素晴らしいチームワークから生まれます。オープンなコミュニケーションと共有された創造性を重視します。",
        learningTitle: "継続的学習",
        learningDesc:
          "クリエイティブ業界は急速に進化します。トレンドと技術の最新情報を把握することにコミットしています。",
        passionTitle: "情熱主導",
        passionDesc: "すべてのプロジェクトに心を注ぎ、各クライアントのビジョンを自分のもののように扱います。",
      },
      interests: {
        photography: "写真撮影",
        photographyDesc: "瞬間と物語を捉える",
        music: "音楽",
        musicDesc: "様々なジャンルを聴く",
        gaming: "ゲーム",
        gamingDesc: "戦略とアドベンチャーゲーム",
        reading: "読書",
        readingDesc: "デザインと技術の本",
        coffee: "コーヒー",
        coffeeDesc: "地元のコーヒーショップを探索",
      },
      skillsOverview: {
        creativeDesign: "クリエイティブデザイン",
        creativeDesignDesc:
          "ブランドアイデンティティからマーケティング資料まで、注目を集め効果的にコミュニケーションするデザインを作成します。",
        videoProduction: "ビデオ制作",
        videoProductionDesc: "コンセプトから最終納品まで、魅力的なビデオコンテンツを通じて物語に命を吹き込みます。",
        translationLoc: "翻訳・ローカライゼーション",
        translationLocDesc: "意味と文化的コンテキストを保持する正確な翻訳で言語の壁を橋渡しします。",
      },
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
