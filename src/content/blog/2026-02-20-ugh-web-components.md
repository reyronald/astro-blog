---
title: Ugh, Web Components
description: Let's discuss challenges faced when dealing with open database transactions in Prisma and my solution implemented using AsyncLocalStorage and proxies.
pubDate: 2026-02-20
# heroImage: './2025-02-23 amin-hasani-j16dLbiu8Kk-unsplash.jpg'
# blurhash: 'LNGIZNIBD*?u00f,xbRi~qxuoft7'
tags: [Web components]
---

A couple years ago, the company decided to rebrand itself with a much more modern, slick and minimalist image. Besides marketing material, this also needed to be done on all our digital products. Our user experience and design team started to work hard on a unified design system that would be later implemented as code artifacts our engineering teams could leverage in our applications and software.

When the design language and vision was complete, a dedicated team was put together to make this vision a reality in the form of a re-usable shared component library that front-end engineers from other teams could install and immeidately receive a
