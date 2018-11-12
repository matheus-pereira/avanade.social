type Post = {
    id: string;
    user: {
        id: string;
        name: string;
    };
    text: string;
    imagePath: string;
    likes: [
        {
            id: string;
            name: string;
        }
    ];
    createdAt: Date;
}