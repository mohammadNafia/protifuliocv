<script>
  import { onMount } from 'svelte';
  
  function scrollToSection(e, targetId) {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  
  // Enhanced Intersection Observer with stagger effect
  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains('section-title')) {
              setTimeout(() => {
                entry.target.classList.add('animate-in');
              }, 50);
            } else if (entry.target.classList.contains('project-card')) {
              const cards = Array.from(document.querySelectorAll('.project-card'));
              const index = cards.indexOf(entry.target);
              setTimeout(() => {
                entry.target.classList.add('animate-in');
              }, 200 + (index * 120));
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
    );
    
    // Observe all project cards
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card) => observer.observe(card));
    
    // Observe section title
    const title = document.querySelector('.section-title');
    if (title) observer.observe(title);
    
    return () => {
      cards.forEach((card) => observer.unobserve(card));
      if (title) observer.unobserve(title);
    };
  });
</script>

<section id="projects" class="py-20 bg-[#0D0D0D]">
  <div class="container mx-auto px-6">
    <h2 class="section-title text-4xl md:text-5xl font-bold text-white mb-12 text-center opacity-0 translate-y-5 blur-sm">Projects</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      <!-- Project 1: Svelte Weather App -->
      <div class="project-card bg-[#1A1A1A] rounded-lg overflow-hidden shadow-lg border border-white/10 hover:border-[#3B82F6]/50 transition-all duration-300 opacity-0 translate-y-8 scale-95 blur-sm group">
        <div class="overflow-hidden">
          <img 
            src="https://i.ibb.co/yww6rp8/Screenshot-2025-12-02-233928.png" 
            alt="Svelte Weather App"
            class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div class="p-6">
          <h3 class="text-2xl font-semibold text-white mb-3 group-hover:text-[#3B82F6] transition-colors duration-300">Svelte Weather App</h3>
          <p class="text-sm text-[#3B82F6] mb-4">Svelte, JavaScript, Fetch API, TailwindCSS</p>
          <p class="text-white/80 text-sm leading-relaxed mb-6">
            A modern weather application built using Svelte, designed to fetch and display real-time weather data through REST APIs. Implements async/await logic, JSON handling, responsive UI, and a clean component-based structure.
          </p>
          <div class="flex gap-4">
            <a 
              href="https://github.com/mohammadNafia/Weather-App" 
              target="_blank" 
              rel="noopener noreferrer"
              class="px-4 py-2 bg-[#3B82F6] text-white rounded-lg hover:bg-[#2563EB] transition-all duration-300 text-sm font-medium hover:scale-105 hover:shadow-lg hover:shadow-[#3B82F6]/50"
            >
              View Code
            </a>
            <a 
              href="#contact" 
              on:click={(e) => scrollToSection(e, 'contact')}
              class="px-4 py-2 bg-[#3B82F6] text-white rounded-lg hover:bg-[#2563EB] transition-all duration-300 text-sm font-medium hover:scale-105 hover:shadow-lg hover:shadow-[#3B82F6]/50"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      <!-- Project 2: Student Management System -->
      <div class="project-card bg-[#1A1A1A] rounded-lg overflow-hidden shadow-lg border border-white/10 hover:border-[#3B82F6]/50 transition-all duration-300 opacity-0 translate-y-8 scale-95 blur-sm group">
        <div class="overflow-hidden">
          <img 
            src="https://i.ibb.co/hRW10jbF/Screenshot-2025-12-02-234125.png" 
            alt="Student Management System"
            class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div class="p-6">
          <h3 class="text-2xl font-semibold text-white mb-3 group-hover:text-[#3B82F6] transition-colors duration-300">Student Management System (React CRUD)</h3>
          <p class="text-sm text-[#3B82F6] mb-4">React, JavaScript, Fetch API, REST, TailwindCSS</p>
          <p class="text-white/80 text-sm leading-relaxed mb-6">
            A full CRUD system built with React, supporting adding, editing, deleting, and retrieving student data via RESTful API integration. Features include clean form handling, state management, and real-data validation.
          </p>
          <div class="flex gap-4">
            <a 
              href="https://github.com/mohammadNafia/student-app" 
              target="_blank" 
              rel="noopener noreferrer"
              class="px-4 py-2 bg-[#3B82F6] text-white rounded-lg hover:bg-[#2563EB] transition-all duration-300 text-sm font-medium hover:scale-105 hover:shadow-lg hover:shadow-[#3B82F6]/50"
            >
              View Code
            </a>
            <a 
              href="#contact" 
              on:click={(e) => scrollToSection(e, 'contact')}
              class="px-4 py-2 bg-[#3B82F6] text-white rounded-lg hover:bg-[#2563EB] transition-all duration-300 text-sm font-medium hover:scale-105 hover:shadow-lg hover:shadow-[#3B82F6]/50"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      <!-- Project 3: Dynamic Form Builder -->
      <div class="project-card bg-[#1A1A1A] rounded-lg overflow-hidden shadow-lg border border-white/10 hover:border-[#3B82F6]/50 transition-all duration-300 opacity-0 translate-y-8 scale-95 blur-sm group">
        <div class="w-full h-48 bg-[#0D0D0D] p-2 flex gap-2 overflow-hidden">
          <div class="overflow-hidden rounded">
            <img 
              src="https://i.ibb.co/wN3tGjzq/Screenshot-2025-11-22-214124.png" 
              alt="Dynamic Form Builder 1"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div class="overflow-hidden rounded">
            <img 
              src="https://i.ibb.co/WvXbRHYh/Screenshot-2025-11-22-230318.png" 
              alt="Dynamic Form Builder 2"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>
        <div class="p-6">
          <h3 class="text-2xl font-semibold text-white mb-3 group-hover:text-[#3B82F6] transition-colors duration-300">Dynamic Form Builder (Hackathon – 2nd Place)</h3>
          <p class="text-sm text-[#3B82F6] mb-4">React, TailwindCSS, JavaScript</p>
          <p class="text-white/80 text-sm leading-relaxed mb-6">
            A dynamic form-creation platform built during the HUB200 × Computiq × Zain hackathon (2nd Place). I served as the Frontend Engineer. The system features reusable UI components, custom fields, templates, and a management dashboard.
          </p>
          <div class="flex gap-4">
            <a 
              href="https://github.com/mohammadNafia/fourma2-" 
              target="_blank" 
              rel="noopener noreferrer"
              class="px-4 py-2 bg-[#3B82F6] text-white rounded-lg hover:bg-[#2563EB] transition-all duration-300 text-sm font-medium hover:scale-105 hover:shadow-lg hover:shadow-[#3B82F6]/50"
            >
              View Code
            </a>
            <a 
              href="#contact" 
              on:click={(e) => scrollToSection(e, 'contact')}
              class="px-4 py-2 bg-[#3B82F6] text-white rounded-lg hover:bg-[#2563EB] transition-all duration-300 text-sm font-medium hover:scale-105 hover:shadow-lg hover:shadow-[#3B82F6]/50"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      <!-- Project 4: Flow – AI Call Center Dashboard -->
      <div class="project-card bg-[#1A1A1A] rounded-lg overflow-hidden shadow-lg border border-white/10 hover:border-[#3B82F6]/50 transition-all duration-300 opacity-0 translate-y-8 scale-95 blur-sm group">
        <div class="w-full h-48 bg-[#0D0D0D] p-2 flex gap-2 overflow-hidden">
          <div class="overflow-hidden rounded w-1/2">
            <img 
              src="https://i.ibb.co/q33phPn0/Screenshot-2025-12-03-000329.png" 
              alt="Flow Dashboard 1"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div class="overflow-hidden rounded w-1/2">
            <img 
              src="https://i.ibb.co/tpL0PyVZ/photo-2025-12-03-00-19-16.jpg" 
              alt="Flow Dashboard 3"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>
        <div class="p-6">
          <h3 class="text-2xl font-semibold text-white mb-3 group-hover:text-[#3B82F6] transition-colors duration-300">Flow – AI Call Center Dashboard</h3>
          <p class="text-sm text-[#3B82F6] mb-4">React, TailwindCSS, JavaScript</p>
          <p class="text-white/80 text-sm leading-relaxed mb-6">
            A modern frontend dashboard designed using React and Tailwind, developed during a hackathon event. Integrates AI-powered logic, agent flows, and scalable UI architecture in collaboration with backend engineers.
          </p>
          <div class="flex gap-4">
            <a 
              href="https://github.com/mohammadNafia/flow" 
              target="_blank" 
              rel="noopener noreferrer"
              class="px-4 py-2 bg-[#3B82F6] text-white rounded-lg hover:bg-[#2563EB] transition-all duration-300 text-sm font-medium hover:scale-105 hover:shadow-lg hover:shadow-[#3B82F6]/50"
            >
              View Code
            </a>
            <a 
              href="#contact" 
              on:click={(e) => scrollToSection(e, 'contact')}
              class="px-4 py-2 bg-[#3B82F6] text-white rounded-lg hover:bg-[#2563EB] transition-all duration-300 text-sm font-medium hover:scale-105 hover:shadow-lg hover:shadow-[#3B82F6]/50"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
