import rss, { pagesGlobToRssItems }  from "@astrojs/rss";

export async function GET(context) {
    return rss({
        title: "Anshal's Astro Blog",
        description: "A blog about my learning journey with Astro.",
        site: context.site,
        items: await pagesGlobToRssItems(import.meta.glob("./posts/*.md")),
        customData: `<language>en-us</language>`,
    })
}   

