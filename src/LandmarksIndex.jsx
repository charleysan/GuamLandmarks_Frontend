export function LandmarksIndex({ landmarks, onShow }) {
  return (
    <div>
      <h1>Landmarks Index ({landmarks.length} total)</h1>
      {landmarks.map((landmarks) => (
        <div key={landmarks.id}>
          <h2>{landmarks.name}</h2>
          <p>{landmarks.description}</p>
          < img src={landmarks.image_url} />
          <p>{landmarks.location}</p>
          <button onClick={() => onShow(landmarks)}>More info</button>
        </div>
      ))}
    </div>
  );
}