<script>
  import { onMount } from 'svelte';
  
  function scrollToSection(e, targetId) {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  
  onMount(() => {
    // Animate hero content on mount
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
      setTimeout(() => {
        heroContent.classList.add('animate-in');
      }, 100);
    }
  });
</script>

<section id="home" class="min-h-screen flex items-center justify-center bg-[#0D0D0D] pt-24 relative overflow-hidden">
  <div class="container mx-auto px-6 text-center">
    <div class="hero-content fade-in max-w-4xl mx-auto opacity-0 translate-y-5">
      <!-- Name -->
      <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight animate-text-gradient">
        Mohammed Nafia Nadhim
      </h1>
      
      <!-- Title -->
      <h2 class="text-xl md:text-2xl text-white/80 mb-8 font-medium">
        Junior Software Engineer – Frontend Development
      </h2>
      
      <!-- Hero Sentence -->
      <p class="text-lg md:text-xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
        Software Engineer specializing in modern frontend development using Svelte, React, and TypeScript. I build fast, clean, and real-world web interfaces powered by solid API integrations and performance-focused engineering.
      </p>
      
      <!-- Buttons -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a 
          href="https://github.com/mohammadNafia" 
          target="_blank" 
          rel="noopener noreferrer"
          class="px-8 py-3 bg-[#3B82F6] text-white font-semibold rounded-lg hover:bg-[#2563EB] transition-all duration-300 w-full sm:w-auto text-center hover:scale-105 hover:shadow-lg hover:shadow-[#3B82F6]/50"
        >
          GitHub
        </a>
        <a 
          href="https://www.linkedin.com/in/mohammed-nafia-7b58141ba" 
          target="_blank" 
          rel="noopener noreferrer"
          class="px-8 py-3 bg-[#3B82F6] text-white font-semibold rounded-lg hover:bg-[#2563EB] transition-all duration-300 w-full sm:w-auto text-center hover:scale-105 hover:shadow-lg hover:shadow-[#3B82F6]/50"
        >
          LinkedIn
        </a>
        <a 
          href="#" 
          class="px-8 py-3 border-2 border-[#3B82F6] text-[#3B82F6] font-semibold rounded-lg hover:bg-[#3B82F6] hover:text-white transition-all duration-300 w-full sm:w-auto text-center hover:scale-105 hover:shadow-lg hover:shadow-[#3B82F6]/30"
          aria-label="Download CV (coming soon)"
        >
          Download CV
        </a>
      </div>
    </div>
    
    <!-- Abstract background shapes with animation -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3B82F6]/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#3B82F6]/5 rounded-full blur-3xl animate-pulse-slow" style="animation-delay: 1s;"></div>
    </div>
  </div>
</section>

<style>
  @keyframes pulse-slow {
    0%, 100% {
      opacity: 0.3;
      transform: scale(1);
    }
    50% {
      opacity: 0.5;
      transform: scale(1.1);
    }
  }
  
  .animate-pulse-slow {
    animation: pulse-slow 4s ease-in-out infinite;
  }
</style>
