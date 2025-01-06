import { YouTubeResponse } from "../interfaces/YouTubeVideo";
import responseData from "../../response.json";

export const simulateApiRequest = (page: number, itemsPerPage: number): YouTubeResponse => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const paginatedItems = responseData.items.slice(startIndex, endIndex);

    return {
        kind: responseData.kind, etag: responseData.etag, pageInfo: {
            totalResults: responseData.pageInfo.totalResults, resultsPerPage: itemsPerPage,
        }, items: paginatedItems,
    };
}
