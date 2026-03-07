import { ref, onMounted, onUnmounted, type Ref } from 'vue'

// Type definitions
export interface Skill {
  name: string
  level: number
  icon: string
}

export interface Project {
  title: string
  description: string
  tags: string[]
  image: string
}

export interface SocialLink {
  name: string
  icon: string
  url: string
}

export interface NavLink {
  href: string
  label: string
}

// Composable: useScroll
export function useScroll(): { isScrolled: Ref<boolean> } {
  const isScrolled = ref(false)

  const handleScroll = (): void => {
    isScrolled.value = window.scrollY > 50
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return { isScrolled }
}

// Composable: usePortfolioData
export function usePortfolioData() {
  const skills = ref<Skill[]>([
    { name: 'Vue.js', level: 90, icon: '💚' },
    { name: 'TypeScript', level: 85, icon: '🔷' },
    { name: 'React', level: 80, icon: '⚛️' },
    { name: 'Node.js', level: 75, icon: '🟢' },
    { name: 'Tailwind CSS', level: 85, icon: '💨' },
    { name: 'PostgreSQL', level: 70, icon: '🐘' }
  ])

  const projects = ref<Project[]>([
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with Vue 3, Node.js, and PostgreSQL',
      tags: ['Vue 3', 'TypeScript', 'Node.js', 'PostgreSQL'],
      image: '🛒'
    },
    {
      title: 'Task Management App',
      description: 'Real-time task management with React and Firebase',
      tags: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
      image: '✅'
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio built with Nuxt 3 and Tailwind CSS',
      tags: ['Nuxt 3', 'TypeScript', 'Tailwind'],
      image: '🎨'
    }
  ])

  const socialLinks = ref<SocialLink[]>([
    { name: 'GitHub', icon: '🐙', url: 'https://github.com' },
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com' },
    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com' }
  ])

  const navLinks = ref<NavLink[]>([
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ])

  return { skills, projects, socialLinks, navLinks }
}
