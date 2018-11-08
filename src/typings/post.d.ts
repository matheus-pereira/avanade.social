type Post = {
    id: string;
    timestamp: Date;
    text: string;
    imagePath: string;
    likes: number;
    liked: boolean;
    user: {
        id: string;
        name: string;
    }
}