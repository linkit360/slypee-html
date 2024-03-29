module.exports = {
  host: process.env.NODE_HOST || 'localhost', // Define your host from 'package.json'
  port: process.env.PORT,
  app: {
    htmlAttributes: { lang: 'en' },
    title: 'Slypee',
    titleTemplate: 'Slypee',
    meta: [
      {
        name: 'description',
        content: 'Mobile apps for android.'
      }
    ]
  }
};
