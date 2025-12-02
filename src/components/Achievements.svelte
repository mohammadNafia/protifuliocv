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
            } else if (entry.target.classList.contains('achievement-card')) {
              const index = Array.from(entry.target.parentElement.children).indexOf(entry.target);
              setTimeout(() => {
                entry.target.classList.add('animate-in');
              }, 200 + (index * 150));
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
    );
    
    const title = document.querySelector('#achievements .section-title');
    const cards = document.querySelectorAll('#achievements .achievement-card');
    
    if (title) observer.observe(title);
    cards.forEach((card) => observer.observe(card));
    
    return () => {
      if (title) observer.unobserve(title);
      cards.forEach((card) => observer.unobserve(card));
    };
  });
</script>

<section id="achievements" class="py-20 bg-[#0D0D0D]">
  <div class="container mx-auto px-6">
    <h2 class="section-title text-4xl md:text-5xl font-bold text-white mb-12 text-center opacity-0 translate-y-5 blur-sm">Achievements</h2>
    
    <div class="max-w-4xl mx-auto space-y-8">
      <!-- Achievement 1 -->
      <div class="achievement-card bg-[#1A1A1A] rounded-lg p-8 shadow-lg border border-white/10 opacity-0 translate-x-[-30px] blur-sm">
        <h3 class="text-2xl font-semibold text-white mb-3">Hackathon Awards</h3>
        <p class="text-white/80 leading-relaxed">
          Achieved 2nd Place in the HUB200 × Computiq × Zain hackathon for building a dynamic form-builder platform. Served as the Frontend Engineer.
        </p>
      </div>
      
      <!-- Achievement 2 -->
      <div class="achievement-card bg-[#1A1A1A] rounded-lg p-8 shadow-lg border border-white/10 opacity-0 translate-x-[30px] blur-sm">
        <h3 class="text-2xl font-semibold text-white mb-3">Flow – AI Dashboard</h3>
        <p class="text-white/80 leading-relaxed">
          Worked as Frontend Developer in an AI-driven call center dashboard during hackathon participation.
        </p>
      </div>
      
      <!-- Achievement 3 -->
      <div class="achievement-card bg-[#1A1A1A] rounded-lg p-8 shadow-lg border border-white/10 opacity-0 translate-x-[-30px] blur-sm">
        <h3 class="text-2xl font-semibold text-white mb-3">University Robotics Exhibition – Eye Meach</h3>
        <p class="text-white/80 leading-relaxed">
          Developed software logic for Eye Meach, a robotics system simulating human eye movement using Python, Raspberry Pi Pico, and Google Mediapipe for computer-vision tracking.
        </p>
      </div>
      
      <!-- Achievement 4 -->
      <div class="achievement-card bg-[#1A1A1A] rounded-lg p-8 shadow-lg border border-white/10 opacity-0 translate-x-[30px] blur-sm">
        <h3 class="text-2xl font-semibold text-white mb-3">Government Robotics & AI Program</h3>
        <p class="text-white/80 leading-relaxed">
          Completed a 1-year robotics & AI program supported by the Iraqi Prime Minister's Office, received recognition as a top participant.
        </p>
      </div>
    </div>
  </div>
</section>
