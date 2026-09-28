export const projects = [
  {
    id: 0,
    title: 'SkyCast Weather - Real-time Weather Dashboard',
    category: 'Frontend Development',
    shortDescription: 'Modern weather dashboard with real-time data, hourly forecasts, air quality insights, and 7-day outlook.',
    technologies: ['React', 'Tailwind CSS', 'Open-Meteo API', 'Recharts', 'JavaScript'],
    description: {
      overview: 'SkyCast Weather is a modern, fully responsive weather dashboard that provides real-time weather information, hourly forecasts, air quality data, and comprehensive weather insights. Built with React and powered by Open-Meteo API for accurate, free weather data.',
      problem: 'Users need a reliable, beautiful weather application that shows not just current conditions but also hourly trends, air quality data, and detailed weather insights in an intuitive interface.',
      objective: 'Create a production-ready weather dashboard with real-time data updates, interactive charts, global location search, and comprehensive weather information all in one beautiful interface.',
      dataset: 'Real-time weather data from Open-Meteo API including temperature, humidity, wind speed, pressure, UV index, air quality (PM2.5, PM10), hourly forecasts, and 7-day outlook.',
      technologies: ['React 18', 'Tailwind CSS', 'Recharts', 'Open-Meteo API', 'JavaScript ES6+', 'Responsive Design'],
      methodology: [
        'UI/UX Design',
        'API Integration',
        'Data Processing',
        'Chart Visualization',
        'Responsive Development',
        'Performance Optimization'
      ],
      results: {
        'Real-time Updates': 'Live weather data',
        'Hourly Forecast': '24-hour detailed view',
        'Air Quality': 'PM2.5 & PM10 monitoring',
        'Global Search': 'Any city worldwide',
        'Responsive': 'Mobile, tablet, desktop',
        'Performance': 'Fast load times'
      }
    },
    github: 'https://github.com/aman-2022/skycast-weather',
    demo: 'https://skycast-weather-c5rr.onrender.com/',
    image: '/projects/skycast-weather.png',
    featured: true,
    highlights: [
      'Real-time weather intelligence',
      'Interactive 24-hour & 7-day forecasts',
      'Air quality monitoring (PM2.5, PM10)',
      'Global city search functionality',
      'Beautiful dark UI with gradients',
      'Fully responsive design',
      'Hourly temperature & rain charts',
      'Wind details & visibility metrics'
    ]
  },
  {
    id: 1,
    title: 'E-Commerce Analytics Dashboard',
    category: 'Full-Stack Development',
    shortDescription: 'Production-ready analytics platform processing 50,000+ e-commerce orders with optimized API response times.',
    technologies: ['React', 'Flask', 'MySQL', 'Pandas', 'NumPy', 'Recharts'],
    description: {
      overview: 'A comprehensive full-stack analytics platform designed to process and visualize e-commerce order data at scale.',
      problem: 'E-commerce businesses need real-time insights into order patterns, customer behavior, and key performance metrics to make data-driven decisions.',
      objective: 'Build a production-ready analytics dashboard that processes 50,000+ orders with sub-500ms API response times and comprehensive visualizations.',
      dataset: '50,000+ e-commerce orders with order details, customer information, timestamps, and transaction data.',
      technologies: ['React', 'Flask', 'MySQL', 'Pandas', 'NumPy', 'Recharts', 'REST APIs', 'ETL Pipeline'],
      methodology: [
        'Data Collection & ETL',
        'Database Schema Design',
        'Query Optimization with Indexing',
        'REST API Development',
        'Frontend Visualization',
        'Performance Testing'
      ],
      results: {
        orders: '50,000+',
        optimization: '40% faster queries',
        apiResponse: '<500ms',
        endpoints: '7',
        visualizations: '6+',
        dataQuality: 'Comprehensive validation'
      }
    },
    github: 'https://github.com/aman-2022/ecommerce-analytics-dashboard',
    demo: 'https://ecommerce-analytics-demo.vercel.app',
    image: '/projects/ecommerce-dashboard.jpg',
    featured: true,
    highlights: [
      '50,000+ orders processed',
      '40% database query optimization',
      '<500ms API response times',
      'Real-time data filtering',
      'KPI metric cards',
      'Mobile-responsive design'
    ]
  },
  {
    id: 2,
    title: 'College Recommendation System (KNN)',
    category: 'Machine Learning',
    shortDescription: 'ML-powered recommendation system helping students find suitable colleges based on academic metrics.',
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'KNN', 'Streamlit'],
    description: {
      overview: 'An intelligent college recommendation system using K-Nearest Neighbors algorithm to match students with colleges based on their academic profile and preferences.',
      problem: 'Students struggle to find colleges that match their academic capabilities and preferences. Current search methods are time-consuming and inefficient.',
      objective: 'Develop an ML-powered system that provides personalized college recommendations based on multiple academic and preference parameters.',
      dataset: 'College database with parameters including entrance exam scores, average GPA, placement rates, course offerings, location, and fees.',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'KNN Algorithm', 'Streamlit', 'NumPy'],
      methodology: [
        'Data Collection',
        'Data Preprocessing',
        'Feature Scaling',
        'KNN Model Training',
        'Hyperparameter Tuning',
        'Evaluation & Testing'
      ]
    },
    github: 'https://github.com/aman-2022/college-recommendation-knn',
    demo: 'https://college-recommendation-app.streamlit.app',
    image: '/projects/college-recommender.jpg',
    featured: false,
    highlights: [
      'K-Nearest Neighbors algorithm',
      'Multi-parameter matching',
      'Interactive user interface',
      'Real-time recommendations',
      'Scalable system design'
    ]
  },
  {
    id: 3,
    title: 'Web-Based Chat Application',
    category: 'Full-Stack Development',
    shortDescription: 'Real-time messaging application with location sharing and integrated Google Maps API.',
    technologies: ['React', 'Node.js', 'PHP', 'Google Maps API'],
    description: {
      overview: 'A full-stack web-based chat application featuring real-time messaging and location sharing capabilities.',
      problem: 'Users need a reliable, real-time communication platform with integrated location sharing features.',
      objective: 'Develop a fully functional chat application with real-time messaging and location tracking.',
      dataset: 'User profiles, chat messages, timestamps, and location data.',
      technologies: ['React', 'Node.js', 'PHP', 'WebSockets', 'Google Maps API', 'REST APIs'],
      methodology: [
        'Architecture Design',
        'Real-time Socket Implementation',
        'User Authentication',
        'API Integration',
        'Frontend Development',
        'Testing & Deployment'
      ]
    },
    github: 'https://github.com/aman-2022/web-chat-app',
    demo: 'https://web-chat-app.example.com',
    image: '/projects/chat-app.jpg',
    featured: false,
    highlights: [
      'Real-time messaging',
      'Location sharing',
      'Google Maps integration',
      'User-friendly interface',
      'Modular architecture'
    ]
  }
]

export const projectStats = {
  total: 4,
  categories: {
    'Full-Stack Development': 2,
    'Frontend Development': 1,
    'Machine Learning': 1
  },
  technologies: ['React', 'Python', 'Flask', 'MySQL', 'Scikit-learn', 'Node.js', 'PHP', 'Tailwind CSS', 'Open-Meteo API', 'Recharts']
}