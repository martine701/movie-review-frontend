import Review from 'src/app/interfaces/review';
export default interface Movie{
    poster: string;
    title: string;
    rated: string;
    plot: string;
    _id: string;
    reviews: Array<Review>;
}