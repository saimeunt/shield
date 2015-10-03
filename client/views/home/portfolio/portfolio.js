PortfolioItems = new Mongo.Collection(null);

[{
  imageUrl: '/img/home/portfolio/portfolio1.jpg',
  title: 'Dashboard',
  description: 'Description 1',
}, {
  imageUrl: '/img/home/portfolio/portfolio2.jpg',
  title: 'UI design',
  description: 'Description 2',
}, {
  imageUrl: '/img/home/portfolio/portfolio3.jpg',
  title: 'Android page',
  description: 'Description 3',
}, {
  imageUrl: '/img/home/portfolio/portfolio4.jpg',
  title: 'Profile',
  description: 'Description 4',
}, {
  imageUrl: '/img/home/portfolio/portfolio5.jpg',
  title: 'Twitter status',
  description: 'Description 5',
}, {
  imageUrl: '/img/home/portfolio/portfolio6.jpg',
  title: 'Phone mockup',
  description: 'Description 6',
}, {
  imageUrl: '/img/home/portfolio/portfolio7.jpg',
  title: 'Single page',
  description: 'Description 7',
}, {
  imageUrl: '/img/home/portfolio/portfolio8.jpg',
  title: 'Social',
  description: 'Description 8',
}, {
  imageUrl: '/img/home/portfolio/portfolio9.jpg',
  title: 'Templates',
  description: 'Description 9',
}].forEach(portfolioItem => {
  portfolioItem.description = 'This project was crafted for Some Name corp. Detail here a little ' +
    'about your job requirements and the tools used. Tell about the challenges faced and what ' +
    'you and your team did to solve it.';
  PortfolioItems.insert(portfolioItem);
});

Template.portfolio.helpers({
  portfolioItems() {
    return PortfolioItems.find();
  },
});
