type LocationData = {
    tags: string[];
};

export default function Tag({ tags }: LocationData) {
    return (
        <div className="tagContainer">
            {tags.map((tag, index) => (
                <span className="tag" key={index}>
                    {tag}
                </span>
            ))}
        </div>
    );
}
