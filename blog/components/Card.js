export default function Card({ title, image }) {
  return (
    <a href="#" className="flex flex-col gap-4">
      <img
        className="w-full h-56 object-cover rounded-2xl"
        src={image}
        alt={title}
      />
      <h2 className="card-header">{title}</h2>
    </a>
  );
}
