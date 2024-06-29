import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

export default function PreviewChannelYoutube() {
    const [dados, setDados] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UC0S7RZd3vrOe88Zw9-x63BQ&maxResults=3&order=date&type=video&key=${process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_KEY}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setDados(data.items);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <section className="mx-24">
                <h2 className="font-semibold text-2xl my-4">
                    Canal JS
                </h2>

                <div className="flex lg:flex-row flex-col gap-5">
                    {dados.map((video, key) => (
                        key < 3 ? (
                            <div key={key} className="lg:w-1/3 bg-white border border-gray-200 rounded-lg shadow bg-green-100 dark:border-gray-700">
                                <a
                                    href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={video.snippet.thumbnails.medium.url}
                                        className="object-cover w-screen md:h-96 lg:h-auto lg:rounded-none lg:rounded-t-lg"
                                        alt={video.snippet.title}
                                    />
                                    <div className="flex flex-col justify-between p-4 leading-normal">
                                        <h3 className="lg:text-xl font-bold tracking-tight text-white-100 dark:text-white">
                                            {video.snippet.title}
                                        </h3>
                                    </div>
                                </a>
                            </div>
                        ) : null
                    ))}
                </div>
            </section>
        </>
    );
}
