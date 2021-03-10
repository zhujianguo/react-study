class FetchHttp {
    async get(url:string): Promise<object> {
        const response = await fetch(url);
        return await response.json;
    }
}