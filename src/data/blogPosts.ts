export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  category: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  readTime: number;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'maximizing-social-media',
    title: 'Maximizing Your Social Media Presence',
    excerpt: 'Learn the essential strategies to boost your social media engagement and reach.',
    content: `
## The Power of Social Media Marketing

Social media has become an indispensable tool for businesses and individuals alike. In this comprehensive guide, we'll explore proven strategies to maximize your social media presence and engage with your audience effectively.

### 1. Content Strategy

Creating compelling content is at the heart of social media success. Your content should be:
- Relevant to your audience
- Visually appealing
- Consistent with your brand
- Engaging and interactive

### 2. Engagement Techniques

Building genuine connections with your followers requires:
- Responding to comments promptly
- Creating interactive polls and questions
- Sharing user-generated content
- Hosting live sessions

### 3. Analytics and Optimization

Understanding your performance metrics helps you:
- Track engagement rates
- Identify top-performing content
- Optimize posting schedules
- Refine your strategy

Remember, social media success doesn't happen overnight. It requires consistent effort, authentic engagement, and continuous learning.
    `,
    date: 'March 15, 2024',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=400&fit=crop',
    category: 'Social Media',
    author: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      role: 'Social Media Strategist'
    },
    readTime: 5
  },
  {
    id: 'future-of-social-media',
    title: 'The Future of Social Media Management',
    excerpt: 'Discover upcoming trends and technologies shaping the future of social media.',
    content: `
## Emerging Trends in Social Media

The social media landscape is constantly evolving. Let's explore the key trends that will shape the future of social media management.

### 1. AI-Powered Content Creation

Artificial Intelligence is revolutionizing how we create and manage content:
- Automated content suggestions
- Smart scheduling
- Personalized engagement
- Performance prediction

### 2. Virtual and Augmented Reality

The metaverse is changing social interaction:
- Virtual events and meetups
- AR filters and effects
- Immersive shopping experiences
- Virtual influencers

### 3. Privacy and Data Protection

As privacy concerns grow, platforms are adapting:
- Enhanced data protection
- Transparent algorithms
- User control over data
- Privacy-first features

The future of social media is exciting and challenging. Stay ahead by embracing new technologies while maintaining authentic connections.
    `,
    date: 'March 12, 2024',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=400&fit=crop',
    category: 'Trends',
    author: {
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
      role: 'Tech Analyst'
    },
    readTime: 6
  }
];