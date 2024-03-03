import { MetadataRoute } from 'next'
import { allBlogs } from 'contentlayer/generated'
import siteMetadata from '@/data/siteMetadata'
import { fallbackLng, zhLng } from './i18n/locales'

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = [fallbackLng, zhLng]
  const siteUrl = siteMetadata.siteUrl

  // blog route for english
  const firstBlogRoutes = allBlogs
    .filter((p) => p.language === fallbackLng)
    .map((post) => ({
      url: `${siteUrl}/${fallbackLng}/${post.path}`,
      lastModified: post.lastmod || post.date,
    }))

  // blog route for french (or your own second language)
  const secondBlogRoutes = allBlogs
    .filter((p) => p.language === zhLng)
    .map((post) => ({
      url: `${siteUrl}/${zhLng}/${post.path}`,
      lastModified: post.lastmod || post.date,
    }))

  const BlogRoutes = [...firstBlogRoutes, ...secondBlogRoutes].map((route) => ({
    ...route,
  }))

  // all routes for all locales
  const routes = locales.flatMap((locale) => {
    return ['', 'about'].map((route) => ({
      url: `${siteUrl}/${locale}/${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    }))
  })

  const SitemapRoutes: MetadataRoute.Sitemap = [...routes].map((route) => ({
    ...route,
  }))

  return SitemapRoutes
}
