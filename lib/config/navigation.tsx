export const navigationItems = [
  {
    title: 'Features',
    href: '/#features',
    signedIn: false,
  },

  {
    title: 'Waitlist',
    href: '/waitlist',
    signedIn: false,
  },
  {
    title: 'About',
    children: [
      { title: 'My Story', href: '/my-story' },
      { title: 'Contact', href: '/contact' },
    ],
    signedIn: false,
  },
  {
    title: 'Jobs',
    signedIn: true,
    children: [
      { title: 'Tracker Table', href: '/jobs' },
      { title: 'Tracker Kanban', href: '/jobs/kanban' },
      { title: 'Add Job', href: '/jobs/add' },
    ],
  },
  {
    title: 'Tools',
    signedIn: true,
    children: [
      { title: 'Resume Builder', href: '/tools/resume-builder' },
      { title: 'Cover Letter Builder', href: '/tools/cover-letter-builder' },
      { title: 'Job Search', href: '/tools/job-search' },
    ],
  },
  {
    title: 'Profile',
    signedIn: true,
    children: [
      { title: 'Profile Builder', href: '/profile' },
      { title: 'CV Builder', href: '/profile/cv' },
    ],
  },
  {
    title: 'Knowledge',
    signedIn: null,
    children: [
      { title: 'Knowledge Base', href: '/knowledge-base' },
      { title: 'Blog', href: '/knowledge-base/blog' },
      { title: 'FAQ', href: '/knowledge-base/faq' },
      { title: 'Guides', href: '/knowledge-base/guides' },
      { title: 'Resources', href: '/knowledge-base/resources' },
    ],
  },
]
