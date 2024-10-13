export default function Item({ name, quantity, category }) {
  return (
    <section className="bg-zinc-700 w-60 m-2">
      <h3 className="text-white font-bold text-xl">
        {name},{quantity}
      </h3>
      <p className="text-white">
        Buy {quantity} in {category}
      </p>
    </section>
  );
}
