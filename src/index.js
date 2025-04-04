// Worker simple pour gérer les redirections et servir votre site
addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)

  // Rediriger les requêtes du blog vers WordPress
  if (url.pathname.startsWith("/blog/") && !url.pathname.endsWith("/blog/")) {
    return Response.redirect(`https://blog.chauffagiste-lyon.com${url.pathname.replace("/blog", "")}`, 301)
  }

  // Pour toutes les autres requêtes, les transmettre normalement
  return fetch(request)
}

