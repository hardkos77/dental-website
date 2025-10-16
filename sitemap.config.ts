export default {
    sitemap: {
        siteUrl: 'https://dentiste-ortega.fr',
        gzip: true,
        trailingSlash: true,
        defaults: {
            changefreq: 'monthly',
            priority: 0.8
        },
        routes: [
            '/',
            '/services',
            '/technologies',
            '/le-cabinet',
            '/contact',
            '/mentions-legales'
        ]
    }
}
