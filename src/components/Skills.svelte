<script>
  import { onMount } from 'svelte';
  
  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains('section-title')) {
              setTimeout(() => {
                entry.target.classList.add('animate-in');
              }, 50);
            } else if (entry.target.classList.contains('skills-grid')) {
              setTimeout(() => {
                entry.target.classList.add('animate-in');
              }, 200);
              
              // Animate skill badges with stagger
              const skillGroups = entry.target.querySelectorAll('.skill-group');
              skillGroups.forEach((group, groupIndex) => {
                setTimeout(() => {
                  group.classList.add('animate-in');
                  
                  const badges = group.querySelectorAll('.skill-badge');
                  badges.forEach((badge, badgeIndex) => {
                    setTimeout(() => {
                      badge.classList.add('animate-in');
                    }, badgeIndex * 50);
                  });
                }, groupIndex * 150);
              });
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
    );
    
    const title = document.querySelector('#skills .section-title');
    const skillsGrid = document.querySelector('#skills .skills-grid');
    
    if (title) observer.observe(title);
    if (skillsGrid) observer.observe(skillsGrid);
    
    return () => {
      if (title) observer.unobserve(title);
      if (skillsGrid) observer.unobserve(skillsGrid);
    };
  });
</script>

<section id="skills" class="py-20 bg-[#0D0D0D]">
  <div class="container mx-auto px-6">
    <h2 class="section-title text-4xl md:text-5xl font-bold text-white mb-12 text-center opacity-0 translate-y-5 blur-sm">Skills</h2>
    
    <div class="skills-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto opacity-0 translate-y-8 scale-95">
      <!-- Languages -->
      <div class="skill-group opacity-0 translate-y-5">
        <h3 class="text-xl font-semibold text-white mb-6">Languages</h3>
        <div class="flex flex-wrap gap-3">
          <span class="skill-badge px-4 py-2 bg-white/5 text-white rounded-full text-sm border border-white/10 hover:bg-[#3B82F6] hover:border-[#3B82F6] transition-colors duration-300 opacity-0 scale-75">
            JavaScript (ES6+)
          </span>
          <span class="skill-badge px-4 py-2 bg-white/5 text-white rounded-full text-sm border border-white/10 hover:bg-[#3B82F6] hover:border-[#3B82F6] transition-colors duration-300 opacity-0 scale-75">
            TypeScript
          </span>
          <span class="skill-badge px-4 py-2 bg-white/5 text-white rounded-full text-sm border border-white/10 hover:bg-[#3B82F6] hover:border-[#3B82F6] transition-colors duration-300 opacity-0 scale-75">
            Python
          </span>
          <span class="skill-badge px-4 py-2 bg-white/5 text-white rounded-full text-sm border border-white/10 hover:bg-[#3B82F6] hover:border-[#3B82F6] transition-colors duration-300 opacity-0 scale-75">
            C++
          </span>
          <span class="skill-badge px-4 py-2 bg-white/5 text-white rounded-full text-sm border border-white/10 hover:bg-[#3B82F6] hover:border-[#3B82F6] transition-colors duration-300 opacity-0 scale-75">
            C#
          </span>
          <span class="skill-badge px-4 py-2 bg-white/5 text-white rounded-full text-sm border border-white/10 hover:bg-[#3B82F6] hover:border-[#3B82F6] transition-colors duration-300 opacity-0 scale-75">
            HTML
          </span>
          <span class="skill-badge px-4 py-2 bg-white/5 text-white rounded-full text-sm border border-white/10 hover:bg-[#3B82F6] hover:border-[#3B82F6] transition-colors duration-300 opacity-0 scale-75">
            CSS
          </span>
        </div>
      </div>
      
      <!-- Frontend -->
      <div class="skill-group opacity-0 translate-y-5">
        <h3 class="text-xl font-semibold text-white mb-6">Frontend</h3>
        <div class="flex flex-wrap gap-3">
          <span class="skill-badge px-4 py-2 bg-white/5 text-white rounded-full text-sm border border-white/10 hover:bg-[#3B82F6] hover:border-[#3B82F6] transition-colors duration-300 opacity-0 scale-75">
            Svelte
          </span>
          <span class="skill-badge px-4 py-2 bg-white/5 text-white rounded-full text-sm border border-white/10 hover:bg-[#3B82F6] hover:border-[#3B82F6] transition-colors duration-300 opacity-0 scale-75">
            React
          </span>
          <span class="skill-badge px-4 py-2 bg-white/5 text-white rounded-full text-sm border border-white/10 hover:bg-[#3B82F6] hover:border-[#3B82F6] transition-colors duration-300 opacity-0 scale-75">
            TailwindCSS
          </span>
          <span class="skill-badge px-4 py-2 bg-white/5 text-white rounded-full text-sm border border-white/10 hover:bg-[#3B82F6] hover:border-[#3B82F6] transition-colors duration-300 opacity-0 scale-75">
            REST APIs
          </span>
          <span class="skill-badge px-4 py-2 bg-white/5 text-white rounded-full text-sm border border-white/10 hover:bg-[#3B82F6] hover:border-[#3B82F6] transition-colors duration-300 opacity-0 scale-75">
            Fetch / Async-Await
          </span>
          <span class="skill-badge px-4 py-2 bg-white/5 text-white rounded-full text-sm border border-white/10 hover:bg-[#3B82F6] hover:border-[#3B82F6] transition-colors duration-300 opacity-0 scale-75">
            Axios
          </span>
        </div>
      </div>
      
      <!-- Tools -->
      <div class="skill-group opacity-0 translate-y-5">
        <h3 class="text-xl font-semibold text-white mb-6">Tools</h3>
        <div class="flex flex-wrap gap-3">
          <span class="skill-badge px-4 py-2 bg-white/5 text-white rounded-full text-sm border border-white/10 hover:bg-[#3B82F6] hover:border-[#3B82F6] transition-colors duration-300 opacity-0 scale-75">
            Git / GitHub
          </span>
          <span class="skill-badge px-4 py-2 bg-white/5 text-white rounded-full text-sm border border-white/10 hover:bg-[#3B82F6] hover:border-[#3B82F6] transition-colors duration-300 opacity-0 scale-75">
            Vite
          </span>
          <span class="skill-badge px-4 py-2 bg-white/5 text-white rounded-full text-sm border border-white/10 hover:bg-[#3B82F6] hover:border-[#3B82F6] transition-colors duration-300 opacity-0 scale-75">
            npm / yarn
          </span>
        </div>
      </div>
    </div>
  </div>
</section>
