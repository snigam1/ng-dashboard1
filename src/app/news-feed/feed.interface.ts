export interface Feed {
    status: string,
    totalResults: number
    articles: Array<FeedEntry>
}

export interface FeedEntry {
    author: string,
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    expanded: boolean,
    publishedAt: string,
    pubDate: Date
}
