import { useState, useEffect, useCallback } from "react";

import "./App.css";

const server = "http://localhost:8000";

function App() {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchVideo = useCallback(
    async function (query = "") {
      if (error) {
        setError(null);
      }

      try {
        let res;
        if (query) {
          res = await fetch(
            `${server}/videos?limit=${limit}&page=${page}&query=${query}`
          );
        } else {
          res = await fetch(`${server}/videos?limit=${limit}&page=${page}`);
        }
        const data = await res.json();
        setData(data);
      } catch (err) {
        console.error(err);
        setError(err);
      }
    },
    [limit, page, error]
  );

  useEffect(() => {
    fetchVideo();
  }, [fetchVideo]);

  return (
    <div className="container">
      <div>
        Limit:{" "}
        <input
          type="number"
          value={limit}
          onChange={(e) => setLimit(e.target.value)}
        />
      </div>
      <div style={{ padding: "1rem 0" }}>
        Page:{" "}
        <input
          type="number"
          value={page}
          max={data?.totalPages}
          onChange={(e) => setPage(e.target.value)}
        />
      </div>
      <SearchBar click={fetchVideo} />
      {error ? (
        <div style={{ padding: "1rem 0", color: "red" }}>{error.message}</div>
      ) : null}
      {data !== null ? (
        <div>
          <ShowSearchStats stats={data} />
          <ShowVideos videos={data.videos} />
        </div>
      ) : null}
    </div>
  );
}

function ShowSearchStats({ stats }) {
  return (
    <div>
      <p>Total pages: {stats.totalPages}</p>
      <p>Total videos: {stats.totalVideos}</p>
    </div>
  );
}

function SearchBar({ click }) {
  const [query, setQuery] = useState("");

  return (
    <div>
      Query: <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={() => click(query)}>Search</button>
    </div>
  );
}

function ShowVideos({ videos }) {
  return (
    <div>
      {videos.map((video, index) => (
        <ShowVideo key={index} data={video} />
      ))}
    </div>
  );
}

function ShowVideo({ data }) {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "1rem",
        marginBottom: "10px",
      }}
    >
      <img src={data.thumbnail?.url} alt="video thumbnail" />
      <p>Title: {data.title}</p>
      <p>Description: {data.description}</p>
      <p>Published At: {new Date(data.publishedAt).toUTCString()}</p>
      <p>Channel: {data.channelTitle}</p>
      <p>Video id: {data.videoId}</p>
      <p>Channel id: {data.channelId}</p>
      <a
        href={`https://youtube.com/watch?v=${data.videoId}`}
        target="_blank"
        rel="noreferrer"
      >
        Link
      </a>
    </div>
  );
}

export default App;
