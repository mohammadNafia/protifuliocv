<script>
  import { onMount } from 'svelte';
  
  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains('section-title')) {
              setTimeout(() => {
                entry.target.classList.add('animate-in');
              }, 50);
            } else if (entry.target.classList.contains('about-text-block')) {
              setTimeout(() => {
                entry.target.classList.add('animate-in');
              }, 200);
            } else if (entry.target.classList.contains('about-paragraph')) {
              setTimeout(() => {
                entry.target.classList.add('animate-in');
              }, 300 + (index * 100));
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
    );
    
    const title = document.querySelector('#about .section-title');
    const textBlock = document.querySelector('#about .about-text-block');
    const paragraphs = document.querySelectorAll('#about .about-paragraph');
    
    if (title) observer.observe(title);
    if (textBlock) observer.observe(textBlock);
    paragraphs.forEach((p) => observer.observe(p));
    
    return () => {
      if (title) observer.unobserve(title);
      if (textBlock) observer.unobserve(textBlock);
      paragraphs.forEach((p) => observer.unobserve(p));
    };
  });
</script>

<section id="about" class="py-20 bg-[#0D0D0D]">
  <div class="container mx-auto px-6">
    <h2 class="section-title text-4xl md:text-5xl font-bold text-white mb-12 text-center opacity-0 translate-y-5 blur-sm">About</h2>
    
    <div class="max-w-5xl mx-auto">
      <div class="about-text-block bg-[#1A1A1A] rounded-lg p-8 md:p-12 shadow-lg border border-white/10 opacity-0 translate-y-8 scale-95">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="text-white/90 text-base md:text-lg leading-relaxed">
            <p class="mb-6 about-paragraph opacity-0 translate-x-[-20px]">
              I'm Mohammed Nafia, a Software Engineer focused on modern web development. I specialize in building responsive interfaces using Svelte and React, and integrating real APIs to deliver real user value.
            </p>
          </div>
          <div class="text-white/90 text-base md:text-lg leading-relaxed">
            <p class="mb-6 about-paragraph opacity-0 translate-x-[20px]">
              I've participated in multiple hackathons and earned top placements, working as the Frontend Engineer in high-impact team projects. I enjoy solving UI problems, optimizing user experience, and writing clean, maintainable code.
            </p>
            <p class="about-paragraph opacity-0 translate-x-[20px]">
              Academically, I'm a student in Artificial Intelligence & Robotics Engineering at Al-Nahrain University, which gives me a strong foundation in algorithms, problem-solving, and software engineering principles.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
