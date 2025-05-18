import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'customer-segmentation',
    title: 'Customer Segmentation Analysis',
    description: 'Used clustering algorithms to identify distinct customer segments for a retail client, enabling targeted marketing campaigns.',
    category: 'Machine Learning',
    tags: ['Clustering', 'K-means', 'Customer Analytics'],
    thumbnailUrl: 'https://images.pexels.com/photos/7947941/pexels-photo-7947941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    results: [
      {
        metric: 'ROI',
        value: '127%',
        description: 'Return on marketing investment'
      },
      {
        metric: 'Conversion Rate',
        value: '+24%',
        description: 'Increase in targeted campaign conversion'
      },
      {
        metric: 'Customer Segments',
        value: '5',
        description: 'Distinct segments identified'
      }
    ],
    tools: ['Python', 'scikit-learn', 'Tableau'],
    date: '2024-03-15',
    featured: true
  },
  {
    id: 'sales-prediction',
    title: 'Predictive Sales Analysis',
    description: 'Developed a time series model to forecast quarterly sales for a B2B software company with 92% accuracy.',
    category: 'Forecasting',
    tags: ['Time Series', 'ARIMA', 'Forecasting'],
    thumbnailUrl: 'https://images.pexels.com/photos/6801647/pexels-photo-6801647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    results: [
      {
        metric: 'Accuracy',
        value: '92%',
        description: 'Forecasting accuracy rate'
      },
      {
        metric: 'Inventory Costs',
        value: '-18%',
        description: 'Reduction in inventory carrying costs'
      },
      {
        metric: 'Planning Time',
        value: '65%',
        description: 'Reduction in planning cycle time'
      }
    ],
    tools: ['R', 'Prophet', 'Power BI'],
    date: '2023-11-30',
    featured: true
  },
  {
    id: 'supply-chain-optimization',
    title: 'Supply Chain Optimization',
    description: 'Applied network analysis and simulation to optimize distribution routes, reducing logistics costs significantly.',
    category: 'Optimization',
    tags: ['Network Analysis', 'Simulation', 'Logistics'],
    thumbnailUrl: 'https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    results: [
      {
        metric: 'Cost Reduction',
        value: '14%',
        description: 'Annual logistics cost savings'
      },
      {
        metric: 'Delivery Time',
        value: '-22%',
        description: 'Reduction in average delivery time'
      },
      {
        metric: 'Carbon Footprint',
        value: '-17%',
        description: 'Reduction in CO2 emissions'
      }
    ],
    tools: ['Python', 'NetworkX', 'AnyLogic'],
    date: '2023-08-22',
    featured: false
  },
  {
    id: 'churn-analysis',
    title: 'Customer Churn Analysis',
    description: 'Built a churn prediction model for a SaaS company to identify at-risk customers and recommend retention strategies.',
    category: 'Machine Learning',
    tags: ['Classification', 'Random Forest', 'Customer Retention'],
    thumbnailUrl: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    results: [
      {
        metric: 'Churn Reduction',
        value: '31%',
        description: 'Decrease in customer churn rate'
      },
      {
        metric: 'Model Accuracy',
        value: '88%',
        description: 'Predictive model accuracy'
      },
      {
        metric: 'Revenue Saved',
        value: '$420K',
        description: 'Annual revenue preserved'
      }
    ],
    tools: ['Python', 'TensorFlow', 'SQL'],
    date: '2023-05-10',
    featured: true
  }
];