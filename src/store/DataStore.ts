import { action, makeObservable, observable, computed } from "mobx";
import { simulateApiRequest } from "../api/simulatedApi";
import { YouTubeVideo } from "../interfaces/YouTubeVideo";

export type PaginationType = {
    page: number;
    itemsPerPage: number;
    totalItems: number;
};

const paginationDefaultState: Readonly<PaginationType> = {
    page: 1,
    itemsPerPage: 12,
    totalItems: 0,
};

class DataStore {
    protected _pagination: PaginationType = paginationDefaultState;
    public videos: YouTubeVideo[] = [];

    constructor() {
        makeObservable(this, {
            _pagination: observable,
            videos: observable,
            setCurrentPage: action,
            setItemsPerPage: action,
            fetchVideos: action,
            pagination: computed,
            totalPages: computed,
        });

        this.fetchVideos();
    }

    public setCurrentPage = (page: number) => {
        this._pagination.page = page;
        this.fetchVideos();
    };

    public setItemsPerPage = (items: number) => {
        this._pagination.itemsPerPage = items;
        this._pagination.page = 1;
        this.fetchVideos();
    };

    private setTotalItems = (total: number) => {
        this._pagination = {
            ...this._pagination,
            totalItems: total,
        };
    };

    public get pagination(): PaginationType {
        return this._pagination;
    }

    public get totalPages(): number {
        return Math.ceil(this._pagination.totalItems / this._pagination.itemsPerPage);
    }

    public fetchVideos = () => {
        const { page, itemsPerPage } = this._pagination;
        const response = simulateApiRequest(page, itemsPerPage);

        this.videos = response.items;
        this.setTotalItems(response.pageInfo.totalResults);
    };
}

const dataStore = new DataStore();
export default dataStore;
