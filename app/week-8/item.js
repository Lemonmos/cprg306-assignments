export default function Item({ name, quantity, category, onSelect }) {
  // const handleClickItem = async () => {
  //   const response = await fetch(
  //     "https://www.themealdb.com/api/json/v1/1/filter.php?i=" +
  //       name.replace(
  //         /([\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF])/g,
  //         ""
  //       )
  //   );
  //   const data = await response.json();
  //   // alert(data);
  //   console.log(data);
  //   if (data.meals) {
  //     onItemClick(data.meals);
  //   }
  // };

  return (
    <section className="bg-zinc-700 w-60 m-2" onClick={() => onSelect(name)}>
      <h3 className="text-white font-bold text-xl">
        {name},{quantity}
      </h3>
      <p className="text-white">
        Buy {quantity} in {category}
      </p>
    </section>
  );
}
