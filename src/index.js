// Exemple de Worker simple pour servir votre site Next.js
addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // Vous pouvez personnaliser cette logique selon vos besoins
  // Par exemple, rediriger le trafic du blog vers WordPress
  const url = new URL(request.url)

  // Rediriger les requêtes du blog vers WordPress
  if (url.pathname.startsWith("/blog/") && !url.pathname.endsWith("/blog/")) {
    return Response.redirect(`https://blog.chauffagiste-lyon.com${url.pathname.replace("/blog", "")}`, 301)
  }

  // Sinon, continuer vers votre site Next.js
  return fetch(request)
}

