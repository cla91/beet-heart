export default function Ingredients({ ingredients = [] }) {
  return (
    <section>
      <h2>Ingredients</h2>
      {ingredients.length === 0 ? (
        <p>There's no ingredients for this recipe.</p>
      ) : (
        <ul>
          {ingredients.map(({ id, measures, name }) => {
            const amount = measures?.metric?.amount ?? "";
            const unit = measures?.metric?.unitShort ?? "";
            return (
              <li key={id}>
                {amount} {unit} {name}
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
