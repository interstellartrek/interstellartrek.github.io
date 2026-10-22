# Zehao's Blog

This is the source for [interstellartrek.github.io](https://interstellartrek.github.io), built with Astro and deployed to GitHub Pages whenever `main` is updated.

## Content sections

- `src/content/blog/` is for regular blog posts. Write these in Markdown or MDX; the `markdown-style-guide.md` post shows the preferred format.
- `src/content/homework/` is for homework posts.
- `src/content/note/` is for notes.
- Mathematical papers and long-form math work should be added as PDFs under `public/pdfs/` and embedded or linked from a Markdown post. For example, use `<iframe src="/pdfs/my-paper.pdf" title="My paper" width="100%" height="800"></iframe>` or `[Read the PDF](/pdfs/my-paper.pdf)`.

The site-wide sidebar links directly to Home, About, Homework, Note, Blog, and Projects.

## Write and publish a blog post

1. Create a post with a short, lowercase URL slug:

   ```sh
   npm run new:post -- my-new-post
   ```

   This creates `src/content/blog/my-new-post.md` with the required frontmatter and today's publication date.

2. Edit the title, description, and article body. The required fields are `title`, `description`, and `pubDate`. To change the publication date, use `YYYY-MM-DD`. Markdown and MDX posts are supported.

3. To add a cover image, put it in `src/assets/` and add a `heroImage` field using a path relative to the post, for example:

   ```yaml
   heroImage: '../../assets/my-cover.jpg'
   ```

4. Preview locally with `npm run dev`, then build the production site with `npm run build`.

5. Commit and push to `main` with lazygit, or run:

   ```sh
   git add src/content/blog/my-new-post.md
   git commit -m "Add my new post"
   git push
   ```

GitHub Actions builds and deploys the site after the push. Blog posts appear in `/blog/` and the RSS feed. Homework and notes use the matching content folders and page URLs.

## Other commands

| Command | Purpose |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the local site at `http://localhost:4321` |
| `npm run build` | Build the production site in `dist/` |
| `npm run preview` | Preview the production build |
