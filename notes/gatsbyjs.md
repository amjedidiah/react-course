# GatsBy

> `gatsby new <project_name>`

## CSR v. SSR

- CSR(Client Side Rendering): The js code is deployed and the browser engine(client) generates and renders the page when it is requested by the user. Create React App uses this approach.
- SSR(Server Side Rendering): The js code is deployed and the server is generates the page, which the browser renders when it is requested by the user.
- SSG(Static Site Generation): The js code is deployed and the server CI/CD build step generates the static pages way ahead before the user requests for it. The browser renders the already generated page when it is requested by the user. GatsBy uses this approach.

> CSR and SSR are good for dynamic sites
> SSG is good for static sites, like blogs
