export function LandmarksShow({ landmark }) {
  return (
    <div>
      <h1>Photo information</h1>
      <p>Name:  {landmark.name}</p>
      <p>Description: {landmark.description}</p>
      <p>Url:  {landmark.image_url}</p>
      <p>Location:  {landmark.location}</p>
    </div>
  );
}