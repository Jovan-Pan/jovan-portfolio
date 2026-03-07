<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isScrolled = ref(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 50
  })
})

const skills = [
  { name: 'Vue.js', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'React', level: 80 },
  { name: 'Node.js', level: 75 },
  { name: 'Tailwind CSS', level: 85 },
  { name: 'PostgreSQL', level: 70 },
]

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with Vue 3, Node.js, and PostgreSQL',
    tags: ['Vue 3', 'TypeScript', 'Node.js', 'PostgreSQL'],
    link: '#'
  },
  {
    title: 'Task Management App',
    description: 'Real-time task management with React and Firebase',
    tags: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
    link: '#'
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio built with Nuxt 3 and Tailwind CSS',
    tags: ['Nuxt 3', 'TypeScript', 'Tailwind'],
    link: '#'
  },
]

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com' },
  { name: 'LinkedIn', url: 'https://linkedin.com' },
  { name: 'Twitter', url: 'https://twitter.com' },
]
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navigation -->
    <nav :class="['fixed w-full z-50 transition-all duration-300', isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6']">
      <div class="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a href="#" class="text-2xl font-bold" :class="isScrolled ? 'text-gray-800' : 'text-white'">Jovan</a>
        <div class="flex gap-8">
          <a href="#about" class="hover:text-blue-500 transition" :class="isScrolled ? 'text-gray-600' : 'text-white'">About</a>
          <a href="#skills" class="hover:text-blue-500 transition" :class="isScrolled ? 'text-gray-600' : 'text-white'">Skills</a>
          <a href="#projects" class="hover:text-blue-500 transition" :class="isScrolled ? 'text-gray-600' : 'text-white'">Projects</a>
          <a href="#contact" class="hover:text-blue-500 transition" :class="isScrolled ? 'text-gray-600' : 'text-white'">Contact</a>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
      <div class="text-center px-6">
        <h1 class="text-5xl md:text-7xl font-bold mb-6">Hi, I'm Jovan</h1>
        <p class="text-xl md:text-2xl mb-8 text-blue-100">Full-Stack Developer | Vue.js & React Expert</p>
        <div class="flex gap-4 justify-center">
          <a href="#projects" class="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition">
            View Work
          </a>
          <a href="#contact" class="px-8 py-3 border-2 border-white rounded-full font-semibold hover:bg-white/10 transition">
            Contact Me
          </a>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 bg-white">
      <div class="max-w-4xl mx-auto px-6">
        <h2 class="text-4xl font-bold text-center mb-12 text-gray-800">About Me</h2>
        <div class="flex flex-col md:flex-row gap-12 items-center">
          <div class="w-48 h-48 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-white text-6xl font-bold">
            J
          </div>
          <div class="text-gray-600 space-y-4">
            <p class="text-lg">
              I'm a passionate Full-Stack Developer with expertise in building modern web applications. 
              I specialize in Vue.js, React, TypeScript, and Node.js.
            </p>
            <p class="text-lg">
              With experience in enterprise-level development and self-hosted IIS environments, 
              I deliver robust and scalable solutions.
            </p>
            <p class="text-lg">
              When I'm not coding, you can find me exploring new technologies and contributing to open-source projects.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-20 bg-gray-50">
      <div class="max-w-4xl mx-auto px-6">
        <h2 class="text-4xl font-bold text-center mb-12 text-gray-800">Skills</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div v-for="skill in skills" :key="skill.name" class="bg-white p-6 rounded-xl shadow-sm">
            <div class="flex justify-between mb-2">
              <span class="font-semibold text-gray-700">{{ skill.name }}</span>
              <span class="text-gray-500">{{ skill.level }}%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div 
                class="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-1000"
                :style="{ width: skill.level + '%' }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-20 bg-white">
      <div class="max-w-6xl mx-auto px-6">
        <h2 class="text-4xl font-bold text-center mb-12 text-gray-800">Projects</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="project in projects" :key="project.title" class="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition group">
            <div class="h-48 bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center">
              <span class="text-white text-4xl font-bold opacity-50">JS</span>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2 text-gray-800 group-hover:text-blue-500 transition">
                {{ project.title }}
              </h3>
              <p class="text-gray-600 mb-4">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="tag in project.tags" 
                  :key="tag"
                  class="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full"
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
    <section id="contact" class="py-20 bg-gray-50">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <h2 class="text-4xl font-bold mb-8 text-gray-800">Get In Touch</h2>
        <p class="text-xl text-gray-600 mb-8">
          Have a project in mind or want to collaborate? Let's talk!
        </p>
        <a href="mailto:jovan@example.com" class="inline-block px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition">
          Send Me an Email
        </a>
        <div class="flex justify-center gap-6 mt-12">
          <a 
            v-for="social in socialLinks" 
            :key="social.name"
            :href="social.url"
            target="_blank"
            class="text-gray-600 hover:text-blue-500 transition text-2xl"
          >
            {{ social.name }}
          </a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-8 bg-gray-800 text-white text-center">
      <p>© 2026 Jovan. Built with Vue 3 & Tailwind CSS</p>
    </footer>
  </div>
</template>
