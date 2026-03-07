const fs = require('fs');
const v = `<script setup lang="ts">
import {ref,onMounted}from'vue'
const isScrolled=ref(false)
onMounted(()=>{window.addEventListener('scroll',()=>{isScrolled.value=window.scrollY>50})})
const skills=[{name:'Vue.js',level:90,icon:'💚'},{name:'TypeScript',level:85,icon:'🔷'},{name:'React',level:80,icon:'⚛️'},{name:'Node.js',level:75,icon:'🟢'},{name:'Tailwind',level:85,icon:'💨'},{name:'PostgreSQL',level:70,icon:'🐘'}]
const projects=[{title:'E-Commerce',description:'Full-stack e-commerce solution',tags:['Vue 3','TypeScript'],image:'🛒'},{title:'Task App',description:'Real-time task management',tags:['React','Firebase'],image:'✅'},{title:'Portfolio',description:'Built with Nuxt 3',tags:['Nuxt 3'],image:'🎨'}]
const social=[{name:'GitHub',icon:'🐙',url:'https://github.com'},{name:'LinkedIn',icon:'💼',url:'https://linkedin.com'}]
const navLinks=[{href:'#about',label:'About'},{href:'#skills',label:'Skills'},{href:'#projects',label:'Projects'},{href:'#contact',label:'Contact'}]
</script>
<template>
<div class="min-h-screen bg-slate-50">
<nav :class="['fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all',isScrolled?'bg-white/80 shadow-sm py-3':'py-5']">
<div class="max-w-6xl mx-auto px-6 flex justify-between items-center">
<a href="#" class="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">Jovan</a>
<div class="flex gap-8">
<a v-for="link in navLinks" :key="link.label" :href="link.href" class="text-sm font-medium text-slate-600 hover:text-slate-900">{{link.label}}</a>
</div></div></nav>
<section class="min-h-screen flex items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-slate-950"><div class="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div><div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style="animation-delay:1s"></div></div>
<div class="relative z-10 text-center px-6">
<div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm mb-8"><span class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>Available for work</div>
<h1 class="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">Hi, I am <span class="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Jovan</span></h1>
<p class="text-xl md:text-2xl text-slate-400 mb-10">Full-Stack Developer crafting exceptional experiences</p>
<div class="flex gap-4 justify-center"><a href="#projects" class="px-8 py-4 bg-white text-slate-900 rounded-2xl font-semibold hover:bg-slate-100 hover:scale-105 transition-all">View Projects</a><a href="#contact" class="px-8 py-4 border border-white/20 text-white rounded-2xl font-semibold hover:bg-white/10 hover:scale-105 transition-all">Get In Touch</a></div>
</div></section>
<section id="about" class="py-32 bg-white">
<div class="max-w-5xl mx-auto px-6 text-center"><span class="text-sm font-medium text-blue-600 uppercase tracking-wider">About Me</span>
<h2 class="text-4xl md:text-5xl font-bold mt-2 text-slate-800">Building the future with code</h2>
<div class="flex flex-col md:flex-row gap-12 items-center mt-12"><div class="w-56 h-56 rounded-3xl bg-gradient-to-br from-slate-800 to-slate-600 flex items-center justify-center text-white text-7xl font-bold shadow-2xl">J</div>
<div class="text-slate-600 text-left space-y-4"><p class="text-lg">Passionate Full-Stack Developer specializing in Vue.js, React, TypeScript and Node.js.</p><p class="text-lg">Experience in <span class="font-semibold text-slate-800">enterprise-level development</span> and self-hosted IIS environments.</p></div></div></div></section>
<section id="skills" class="py-32 bg-slate-50">
<div class="max-w-4xl mx-auto px-6"><div class="text-center mb-16"><span class="text-sm font-medium text-blue-600 uppercase tracking-wider">Skills</span>
<h2 class="text-4xl md:text-5xl font-bold mt-2 text-slate-800">Technologies</h2></div>
<div class="grid md:grid-cols-2 gap-6"><div v-for="s in skills" :key="s.name" class="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all border border-slate-100">
<div class="flex items-center gap-4"><div class="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-2xl">{{s.icon}}</div><div class="flex-1"><div class="flex justify-between mb-2"><span class="font-semibold">{{s.name}}</span><span class="text-slate-500">{{s.level}}%</span></div><div class="h-2 bg-slate-100 rounded-full"><div class="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all" :style="{width:s.level+'%'}"></div></div></div></div></div></div></div></section>
<section id="projects" class="py-32 bg-white">
<div class="max-w-6xl mx-auto px-6"><div class="text-center mb-16"><span class="text-sm font-medium text-blue-600 uppercase tracking-wider">Projects</span>
<h2 class="text-4xl md:text-5xl font-bold mt-2 text-slate-800">Recent Work</h2></div>
<div class="grid md:grid-cols-3 gap-8"><div v-for="p in projects" :key="p.title" class="group bg-slate-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2">
<div class="h-40 bg-gradient-to-br from-slate-800 to-slate-600 flex items-center justify-center text-5xl">{{p.image}}</div>
<div class="p-6"><h3 class="text-xl font-bold text-slate-800 mb-2">{{p.title}}</h3><p class="text-slate-600 mb-4">{{p.description}}</p><div class="flex flex-wrap gap-2"><span v-for="t in p.tags" :key="t" class="px-3 py-1 bg-slate-200 text-slate-700 text-sm rounded-full">{{t}}</span></div></div></div></div></div></section>
<section id="contact" class="py-32 bg-slate-950 text-center">
<span class="text-sm font-medium text-blue-400 uppercase tracking-wider">Contact</span>
<h2 class="text-4xl md:text-5xl font-bold mt-2 text-white">Let's work together</h2>
<p class="text-slate-400 mt-4 mb-8 text-xl">Have a project in mind? Let's talk!</p>
<a href="mailto:jovan@example.com" class="inline-block px-8 py-4 bg-white text-slate-900 rounded-2xl font-semibold hover:bg-slate-100 transition-all">Send Email</a>
<div class="flex justify-center gap-6 mt-12"><a v-for="s in social" :key="s.name" :href="s.url" class="text-3xl hover:scale-110 transition-transform">{{s.icon}}</a></div></section>
<footer class="py-8 bg-slate-900 text-slate-400 text-center"><p>© 2026 Jovan. Built with Vue 3 and Tailwind CSS</p></footer>
</div>
</template>`;
fs.writeFileSync('C:/Users/Celindo01/.openclaw/workspace/tmp/jovan-portfolio/src/App.vue', v);
console.log('Done!');