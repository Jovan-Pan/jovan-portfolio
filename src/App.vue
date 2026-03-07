<script setup lang="ts">
import { useScroll } from './composables/usePortfolioData'
import { usePortfolioData } from './composables/usePortfolioData'

// Composables
const { isScrolled } = useScroll()
const { skills, projects, socialLinks, navLinks } = usePortfolioData()
</script>

<template>
  <div class="min-h-screen bg-slate-50">
    <!-- Navigation -->
    <nav
      :class="[
        'fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-500',
        isScrolled ? 'bg-white/80 shadow-sm py-3' : 'py-5'
      ]"
    >
      <div class="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a href="#" class="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
          Jovan
        </a>
        <div class="flex gap-8">
          <a
            v-for="link in navLinks"
            :key="link.label"
            :href="link.href"
            class="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            {{ link.label }}
          </a>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div class="absolute inset-0 bg-slate-950">
        <div class="absolute inset-0 opacity-30">
          <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div
            class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
            style="animation-delay: 1s"
          />
        </div>
      </div>

      <div class="relative z-10 text-center px-6">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm mb-8">
          <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for work
        </div>

        <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
          Hi, I am <span class="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Jovan</span>
        </h1>

        <p class="text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl mx-auto">
          Full-Stack Developer crafting exceptional digital experiences
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            class="px-8 py-4 bg-white text-slate-900 rounded-2xl font-semibold hover:bg-slate-100 transition-all hover:scale-105 hover:shadow-lg hover:shadow-white/10"
          >
            View Projects
          </a>
          <a
            href="#contact"
            class="px-8 py-4 border border-white/20 text-white rounded-2xl font-semibold hover:bg-white/10 transition-all hover:scale-105 backdrop-blur-sm"
          >
            Get In Touch
          </a>
        </div>

        <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg class="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-32 bg-white">
      <div class="max-w-5xl mx-auto px-6">
        <div class="text-center mb-16">
          <span class="text-sm font-medium text-blue-600 uppercase tracking-wider">About Me</span>
          <h2 class="text-4xl md:text-5xl font-bold mt-2 text-slate-800">Building the future with code</h2>
        </div>

        <div class="flex flex-col md:flex-row gap-12 items-center">
          <div class="relative">
            <div class="w-56 h-56 rounded-3xl bg-gradient-to-br from-slate-800 to-slate-600 flex items-center justify-center text-white text-7xl font-bold shadow-2xl">
              J
            </div>
            <div class="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-3xl">
              ⚡
            </div>
          </div>

          <div class="text-slate-600 space-y-6 flex-1">
            <p class="text-lg leading-relaxed">
              I'm a passionate Full-Stack Developer with a focus on building modern, performant web applications.
              I specialize in Vue.js, React, TypeScript, and Node.js.
            </p>
            <p class="text-lg leading-relaxed">
              With experience in <span class="text-slate-800 font-medium">enterprise-level development</span> and
              self-hosted IIS environments, I deliver robust and scalable solutions.
            </p>
            <p class="text-lg leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies and contributing to open-source projects.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-32 bg-slate-50">
      <div class="max-w-5xl mx-auto px-6">
        <div class="text-center mb-16">
          <span class="text-sm font-medium text-blue-600 uppercase tracking-wider">Skills</span>
          <h2 class="text-4xl md:text-5xl font-bold mt-2 text-slate-800">Technologies I work with</h2>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <div
            v-for="skill in skills"
            :key="skill.name"
            class="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-slate-100 group"
          >
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                {{ skill.icon }}
              </div>
              <div class="flex-1">
                <div class="flex justify-between mb-2">
                  <span class="font-semibold text-slate-700">{{ skill.name }}</span>
                  <span class="text-slate-500">{{ skill.level }}%</span>
                </div>
                <div class="w-full bg-slate-100 rounded-full h-2">
                  <div
                    class="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                    :style="{ width: skill.level + '%' }"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-32 bg-white">
      <div class="max-w-6xl mx-auto px-6">
        <div class="text-center mb-16">
          <span class="text-sm font-medium text-blue-600 uppercase tracking-wider">Projects</span>
          <h2 class="text-4xl md:text-5xl font-bold mt-2 text-slate-800">Recent Work</h2>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="project in projects"
            :key="project.title"
            class="group bg-slate-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2"
          >
            <div class="h-40 bg-gradient-to-br from-slate-800 to-slate-600 flex items-center justify-center text-5xl">
              {{ project.image }}
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-slate-800 mb-2">{{ project.title }}</h3>
              <p class="text-slate-600 mb-4">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="px-3 py-1 bg-slate-200 text-slate-700 text-sm rounded-full"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-32 bg-slate-950 text-center">
      <span class="text-sm font-medium text-blue-400 uppercase tracking-wider">Contact</span>
      <h2 class="text-4xl md:text-5xl font-bold mt-2 text-white">Let's work together</h2>
      <p class="text-slate-400 mt-4 mb-8 text-xl">Have a project in mind? Let's talk!</p>
      <a
        href="mailto:jovan@example.com"
        class="inline-block px-8 py-4 bg-white text-slate-900 rounded-2xl font-semibold hover:bg-slate-100 transition-all"
      >
        Send Email
      </a>
      <div class="flex justify-center gap-6 mt-12">
        <a
          v-for="social in socialLinks"
          :key="social.name"
          :href="social.url"
          class="text-3xl hover:scale-110 transition-transform"
        >
          {{ social.icon }}
        </a>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-8 bg-slate-900 text-slate-400 text-center">
      <p>© 2026 Jovan. Built with Vue 3 & Tailwind CSS</p>
    </footer>
  </div>
</template>
