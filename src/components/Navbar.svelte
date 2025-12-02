<script>
  let mobileMenuOpen = false;
  
  // Smooth scroll function
  function scrollToSection(e, targetId) {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      mobileMenuOpen = false; // Close mobile menu after clicking
    }
  }
</script>

<nav class="fixed top-0 left-0 right-0 z-50 bg-[#0D0D0D]/80 backdrop-blur-md border-b border-white/10">
  <div class="container mx-auto px-6 py-4">
    <div class="flex items-center justify-between">
      <a 
        href="#home" 
        on:click={(e) => scrollToSection(e, 'home')}
        class="text-xl font-bold text-white hover:text-[#3B82F6] transition-colors duration-300"
      >
        Mohammed Nafia
      </a>
      
      <ul class="hidden md:flex items-center gap-8">
        <li>
          <a 
            href="#home" 
            on:click={(e) => scrollToSection(e, 'home')}
            class="text-white hover:text-[#3B82F6] transition-colors duration-300 text-sm font-medium"
          >
            Home
          </a>
        </li>
        <li>
          <a 
            href="#about" 
            on:click={(e) => scrollToSection(e, 'about')}
            class="text-white hover:text-[#3B82F6] transition-colors duration-300 text-sm font-medium"
          >
            About
          </a>
        </li>
        <li>
          <a 
            href="#skills" 
            on:click={(e) => scrollToSection(e, 'skills')}
            class="text-white hover:text-[#3B82F6] transition-colors duration-300 text-sm font-medium"
          >
            Skills
          </a>
        </li>
        <li>
          <a 
            href="#projects" 
            on:click={(e) => scrollToSection(e, 'projects')}
            class="text-white hover:text-[#3B82F6] transition-colors duration-300 text-sm font-medium"
          >
            Projects
          </a>
        </li>
        <li>
          <a 
            href="#achievements" 
            on:click={(e) => scrollToSection(e, 'achievements')}
            class="text-white hover:text-[#3B82F6] transition-colors duration-300 text-sm font-medium"
          >
            Achievements
          </a>
        </li>
        <li>
          <a 
            href="#contact" 
            on:click={(e) => scrollToSection(e, 'contact')}
            class="text-white hover:text-[#3B82F6] transition-colors duration-300 text-sm font-medium"
          >
            Contact
          </a>
        </li>
      </ul>
      
      <!-- Mobile menu button -->
      <button 
        class="md:hidden text-white"
        on:click={() => mobileMenuOpen = !mobileMenuOpen}
        aria-label="Toggle mobile menu"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
    
    <!-- Mobile menu -->
    <div class="md:hidden mt-4 pb-4 {mobileMenuOpen ? '' : 'hidden'}">
      <ul class="flex flex-col gap-4">
        <li>
          <a 
            href="#home" 
            on:click={(e) => scrollToSection(e, 'home')}
            class="text-white hover:text-[#3B82F6] transition-colors duration-300 text-sm font-medium block"
          >
            Home
          </a>
        </li>
        <li>
          <a 
            href="#about" 
            on:click={(e) => scrollToSection(e, 'about')}
            class="text-white hover:text-[#3B82F6] transition-colors duration-300 text-sm font-medium block"
          >
            About
          </a>
        </li>
        <li>
          <a 
            href="#skills" 
            on:click={(e) => scrollToSection(e, 'skills')}
            class="text-white hover:text-[#3B82F6] transition-colors duration-300 text-sm font-medium block"
          >
            Skills
          </a>
        </li>
        <li>
          <a 
            href="#projects" 
            on:click={(e) => scrollToSection(e, 'projects')}
            class="text-white hover:text-[#3B82F6] transition-colors duration-300 text-sm font-medium block"
          >
            Projects
          </a>
        </li>
        <li>
          <a 
            href="#achievements" 
            on:click={(e) => scrollToSection(e, 'achievements')}
            class="text-white hover:text-[#3B82F6] transition-colors duration-300 text-sm font-medium block"
          >
            Achievements
          </a>
        </li>
        <li>
          <a 
            href="#contact" 
            on:click={(e) => scrollToSection(e, 'contact')}
            class="text-white hover:text-[#3B82F6] transition-colors duration-300 text-sm font-medium block"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
