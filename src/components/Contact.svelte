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
            } else if (entry.target.classList.contains('contact-card')) {
              setTimeout(() => {
                entry.target.classList.add('animate-in');
              }, 200);
              
              // Animate contact items with stagger
              const items = entry.target.querySelectorAll('.contact-item');
              items.forEach((item, index) => {
                setTimeout(() => {
                  item.classList.add('animate-in');
                }, 300 + (index * 100));
              });
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
    );
    
    const title = document.querySelector('#contact .section-title');
    const contactCard = document.querySelector('#contact .contact-card');
    
    if (title) observer.observe(title);
    if (contactCard) observer.observe(contactCard);
    
    return () => {
      if (title) observer.unobserve(title);
      if (contactCard) observer.unobserve(contactCard);
    };
  });
</script>

<section id="contact" class="py-20 bg-[#0D0D0D]">
  <div class="container mx-auto px-6">
    <h2 class="section-title text-4xl md:text-5xl font-bold text-white mb-12 text-center opacity-0 translate-y-5 blur-sm">Contact</h2>
    
    <div class="max-w-4xl mx-auto">
      <div class="contact-card bg-[#1A1A1A] rounded-lg p-8 md:p-12 shadow-lg border border-white/10 opacity-0 translate-y-8 scale-95">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div class="contact-item opacity-0 translate-y-5">
            <h3 class="text-sm font-semibold text-white/60 mb-2 uppercase tracking-wide">Email</h3>
            <a 
              href="mailto:mohammadnafia1@gmail.com" 
              class="text-white hover:text-[#3B82F6] transition-all duration-300 hover:translate-x-1 inline-block"
            >
              mohammadnafia1@gmail.com
            </a>
          </div>
          
          <div class="contact-item opacity-0 translate-y-5">
            <h3 class="text-sm font-semibold text-white/60 mb-2 uppercase tracking-wide">Phone</h3>
            <a 
              href="tel:+9647800668844" 
              class="text-white hover:text-[#3B82F6] transition-all duration-300 hover:translate-x-1 inline-block"
            >
              +9647800668844
            </a>
          </div>
          
          <div class="contact-item opacity-0 translate-y-5">
            <h3 class="text-sm font-semibold text-white/60 mb-2 uppercase tracking-wide">Location</h3>
            <p class="text-white">Baghdad, Iraq</p>
          </div>
          
          <div class="contact-item opacity-0 translate-y-5">
            <h3 class="text-sm font-semibold text-white/60 mb-2 uppercase tracking-wide">GitHub</h3>
            <a 
              href="https://github.com/mohammadNafia" 
              target="_blank" 
              rel="noopener noreferrer"
              class="text-white hover:text-[#3B82F6] transition-all duration-300 hover:translate-x-1 inline-block"
            >
              github.com/mohammadNafia
            </a>
          </div>
          
          <div class="contact-item md:col-span-2 opacity-0 translate-y-5">
            <h3 class="text-sm font-semibold text-white/60 mb-2 uppercase tracking-wide">LinkedIn</h3>
            <a 
              href="https://www.linkedin.com/in/mohammed-nafia-7b58141ba" 
              target="_blank" 
              rel="noopener noreferrer"
              class="text-white hover:text-[#3B82F6] transition-all duration-300 hover:translate-x-1 inline-block"
            >
              linkedin.com/in/mohammed-nafia-7b58141ba
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
