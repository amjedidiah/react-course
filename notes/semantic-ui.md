# Semantic Markup

Semantic markup is a way of writing and structuring your HTML (Hypertext Markup Language) so that it reinforces the semantics, or meaning, of the content rather than its appearance.
In other words, HTML only focuses on the structure of the page and CSS focuses on the style of the content of the web page.

For instance, when you look at a web page, you can clearly identify a paragraph.
A `<p>` tag indicates that an enclosed text is a paragraph. Again, since the `p` tag is both semantic and presentational, users know this is a paragraph, and browsers know how to display it.

On the other hand, if we use `<div>` or `<span>` in a text, it doesn’t provide any additional meaning to the markup because they are not semantic. Instead, they define only how the text would look like.

## HTML5 & Semantics

A semantic element clearly describes its meaning(its purpose and content type) to both the browser and the developer, by having its own HTML tag.
HTML included sematic markup since its inception. However, HTML5 introduced even more semantic tags such as `<section>`, `<article>`, `<footer>`, `<nav>`, `<aside>`, `<mark>`, and `<time>`, making it clearer what information is on the webpage and what it means.

This is way better than mashing up web pages with `<div>` and `<span>` tags, which are non-semantic and only used to group elements together.
The following HTML5 tags can be used in the place of `<div>` tags to break a page content into meaningful parts:

- `<header>` — Represents a container for introductory content for a section, article, entire web page or a set of navigation links.
- `<nav>` — Navigation menu links would all be placed in a `<nav>` tag.
- `<aside>` — Represents content that’s less important. It’s mostly used for sidebars, and should be indirectly related to the surrounding content.
- `<main>` — Specifies main content of the HTML document. The content inside the `<main>` element should be unique to the document. It should not contain any content that is repeated across documents such as sidebars, navigation links, copyright information, site logos, and search forms. There should be only one per page.
- `<section>` — A way of grouping together nearby content of a similar theme, typically with a heading. A web page could normally be split into sections for introduction, content, and contact information.
- `<article>` — Represents an independent article on a web page. For example, a blog post.
- `<footer>` — Sits at the base of a page or section, and might include contact information and some site navigation.

![HTML5 Semantic Markup](https://teamcodearchitects.com/wp-content/uploads/2021/06/HTML-semantic-page-structure.png)

## Benefits of Semantic Markup

1. Accessibility
Semantic markup can help humans(without disabilities) and different assistive applications and devices(such as text-to-speech translators, text size controls, and color and contrast controls, etc), understand the content structure, the relationship among page elements, and the nature of content inside an element and interpret these to people with disabilities.
Thus, ensuring equal access for people with disabilities and providing more options to customize their experience.

2. Search Engine Optimization(SEO)
Semantic markup provides better instructions for web(search engine) crawlers when scanning pages for content, by telling them what important content is on the page.
This can result in search engines ranking the page using the most relevant and meaningful content on the page and ensuring that the right pages are delivered for the right queries.

3. Maintainability
Semantic markup is easier to update and change than web pages that contain a great deal of presentation markup, because it makes the code clearer and organizes it in a logical way.

4. Quality Code
Sematic markup helps us think about the structure of dynamic data, and to choose titles' hierarchy properly.

## Resources

- [HTML5 Semantic Structure](https://teamcodearchitects.com/blog/html-semantic-structure/)
- [What Is Semantic Markup and Why You Should Use It](https://medium.com/codex/what-is-semantic-markup-and-why-you-should-use-it-44777543c29c)
