export interface Post {
    id: number;
    country: string;
    city: string;
    startDate: Date;
    returnDate: Date;
    mainPicture: IPicture;
    pictureGallery: IPicture[];
    description: string;
    positivePoints: string[];
    negativePoints: string[];
    advices: string[];
    summary: string;
    highlightTravel: boolean;
}

export interface IPicture {
    img: string;
    altText: string;
}
