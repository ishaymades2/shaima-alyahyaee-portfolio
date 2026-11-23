const projects = [
  { title: "A — Alkhateri", ar: "الخاصري", type: "Brand identity", typeAr: "هوية بصرية", category: "identity", image: "assets/work-04.jpg", en: "A refined identity exploration, from the central mark to a flexible visual system.", arDescription: "استكشاف لهوية متوازنة، من الشعار الأساسي إلى نظام بصري مرن.", alt: "Alkhateri identity explorations and brand guidelines" },
  { title: "BOQSHA", ar: "بقشة", type: "Identity & social system", typeAr: "هوية ونظام سوشال", category: "identity", image: "assets/work-05.jpg", en: "A bilingual brand world with logo variations, applications, and a social media system.", arDescription: "عالم علامة ثنائي اللغة، يضم تنويعات الشعار وتطبيقات ونظاماً للسوشال ميديا.", alt: "BOQSHA visual identity and brand applications" },
  { title: "By Zah Designs", ar: "باي زاه ديزاينز", type: "Identity & guidelines", typeAr: "هوية وإرشادات", category: "identity", image: "assets/work-07.jpg", en: "A warm, graceful identity translated into practical brand guidelines and social visuals.", arDescription: "هوية أنيقة ودافئة تحولت إلى إرشادات عملية ومحتوى بصري للسوشال.", alt: "By Zah Designs brand identity and guidelines" },
  { title: "Creations Floristry", ar: "كرييشنز للزهور", type: "Brand identity", typeAr: "هوية بصرية", category: "identity", image: "assets/work-08.jpg", en: "A floral brand identity and Instagram system shaped around a calm, distinctive palette.", arDescription: "هوية لمشروع زهور ونظام إنستغرام مبنيان على ألوان هادئة ومميزة.", alt: "Creations Floristry identity and social media system" },
  { title: "Sila", ar: "صلة", type: "Identity system", typeAr: "نظام هوية", category: "identity", image: "assets/work-09.jpg", en: "An elegant mark and identity board designed to feel clear, considered, and cohesive.", arDescription: "شعار ولوحة هوية أنيقة، واضحة ومدروسة ومترابطة.", alt: "Sila logo and identity board" },
  { title: "NAQAA SILVER", ar: "نقاء سيلفر", type: "Identity & social", typeAr: "هوية وسوشال", category: "identity", image: "assets/work-10.jpg", en: "A contemporary silver brand with a considered identity and a ready-to-use post collection.", arDescription: "هوية عصرية لعلامة فضة مع مجموعة منشورات جاهزة للاستخدام.", alt: "Naqaa Silver identity and Instagram posts" },
  { title: "Social, in a system", ar: "السوشال كنظام متكامل", type: "Social & campaigns", typeAr: "سوشال وحملات", category: "social", image: "assets/work-12.jpg", en: "Instagram grids and brand content that bring a consistent visual voice to different businesses.", arDescription: "شبكات إنستغرام ومحتوى يبني لغة بصرية متناسقة لمشاريع متنوعة.", alt: "Instagram grids for fashion and boutique brands" },
  { title: "Made to communicate", ar: "تصاميم توصل الفكرة", type: "Promotional design", typeAr: "تصميم ترويجي", category: "social", image: "assets/work-13.jpg", en: "Promotional and informational layouts designed to make key details easy to find.", arDescription: "تصاميم ترويجية ومعلوماتية تساعد على إيصال التفاصيل المهمة بوضوح.", alt: "Promotional and informational design examples" },
  { title: "Didot studies", ar: "تجارب ديدو الطباعية", type: "Typography & print", typeAr: "خطوط ومطبوعات", category: "print", image: "assets/work-15.jpg", en: "Academic poster explorations focused on contrast, type, and expressive composition.", arDescription: "تجارب أكاديمية للملصقات تركز على التباين والخط والتكوين التعبيري.", alt: "Didot typography poster studies" }
];

let language = "en";
let activeFilter = "all";
let activeProjectIndex = 0;
const grid = document.querySelector("#projectGrid");
const modal = document.querySelector("#projectModal");

function renderProjects() {
  grid.innerHTML = projects.map((project, index) => `<button class="project-card" data-category="${project.category}" data-index="${index}" aria-label="${language === "en" ? "View" : "عرض"} ${language === "en" ? project.title : project.ar}">
    <span class="project-image"><img src="${project.image}" alt="${project.alt}" loading="lazy" decoding="async"><span class="project-open" aria-hidden="true">+</span></span>
    <span class="project-details"><span><span class="project-name">${language === "en" ? project.title : project.ar}</span><br><span class="project-type">${language === "en" ? project.type : project.typeAr}</span></span><span class="project-index">${String(index + 1).padStart(2, "0")}</span></span>
  </button>`).join("");
  grid.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => openProject(Number(card.dataset.index)));
    card.hidden = activeFilter !== "all" && card.dataset.category !== activeFilter;
  });
}

function setLanguage(next) {
  language = next;
  const isArabic = next === "ar";
  document.documentElement.lang = next;
  document.documentElement.dir = isArabic ? "rtl" : "ltr";
  document.body.classList.toggle("rtl", isArabic);
  document.querySelectorAll("[data-en][data-ar]").forEach(el => {
    el.innerHTML = isArabic ? el.dataset.ar : el.dataset.en;
  });
  const toggle = document.querySelector("#languageToggle");
  toggle.textContent = isArabic ? "EN" : "عربي";
  toggle.setAttribute("aria-label", isArabic ? "Switch to English" : "التبديل إلى العربية");
  document.querySelector("#menuToggle").setAttribute("aria-label", isArabic ? "فتح القائمة" : "Open menu");
  document.title = isArabic ? "شيما اليحيائي — مصممة بصرية" : "Shaima Alyahyaee — Visual Designer";
  renderProjects();
}

function openProject(index) {
  activeProjectIndex = index;
  const item = projects[index];
  document.querySelector("#modalImage").src = item.image;
  document.querySelector("#modalImage").alt = item.alt;
  document.querySelector("#modalTitle").textContent = language === "en" ? item.title : item.ar;
  document.querySelector("#modalCategory").textContent = language === "en" ? item.type : item.typeAr;
  document.querySelector("#modalDescription").textContent = language === "en" ? item.en : item.arDescription;
  document.querySelector("#modalCount").textContent = `${String(index + 1).padStart(2, "0")} / ${String(projects.length).padStart(2, "0")}`;
  if (!modal.open) modal.showModal();
}

document.querySelectorAll(".filter").forEach(button => button.addEventListener("click", () => {
  activeFilter = button.dataset.filter;
  document.querySelectorAll(".filter").forEach(filter => filter.classList.toggle("is-active", filter === button));
  grid.querySelectorAll(".project-card").forEach(card => { card.hidden = activeFilter !== "all" && card.dataset.category !== activeFilter; });
}));
document.querySelector("#languageToggle").addEventListener("click", () => setLanguage(language === "en" ? "ar" : "en"));
document.querySelector("#modalClose").addEventListener("click", () => modal.close());
document.querySelector("#modalPrev").addEventListener("click", () => openProject((activeProjectIndex + projects.length - 1) % projects.length));
document.querySelector("#modalNext").addEventListener("click", () => openProject((activeProjectIndex + 1) % projects.length));
modal.addEventListener("click", event => { if (event.target === modal) modal.close(); });
document.addEventListener("keydown", event => {
  if (!modal.open) return;
  if (event.key === "ArrowLeft") openProject((activeProjectIndex + (language === "ar" ? 1 : -1) + projects.length) % projects.length);
  if (event.key === "ArrowRight") openProject((activeProjectIndex + (language === "ar" ? -1 : 1) + projects.length) % projects.length);
});

const menuButton = document.querySelector("#menuToggle");
const mobileMenu = document.querySelector("#mobileMenu");
function closeMenu() { menuButton.setAttribute("aria-expanded", "false"); mobileMenu.classList.remove("is-open"); mobileMenu.setAttribute("aria-hidden", "true"); mobileMenu.inert = true; document.body.classList.remove("menu-open"); }
menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(open));
  mobileMenu.classList.toggle("is-open", open);
  mobileMenu.setAttribute("aria-hidden", String(!open));
  mobileMenu.inert = !open;
  document.body.classList.toggle("menu-open", open);
});
mobileMenu.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", event => { if (event.key === "Escape") closeMenu(); });
document.querySelector("#year").textContent = new Date().getFullYear();

renderProjects();
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
  }), { threshold: 0.1 });
  document.querySelectorAll(".section-heading,.about-copy,.about-mark,.step,.timeline-item,.contact-panel").forEach(el => { el.classList.add("reveal"); observer.observe(el); });
}
