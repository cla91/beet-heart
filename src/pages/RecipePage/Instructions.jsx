export default function Instructions({ instructions = [] }) {
  return (
    <section>
      <h2>Instructions</h2>
      {instructions.length === 0 ? (
        <p>There's no instructions for this recipe.</p>
      ) : (
        <ol>
          {instructions[0].steps.map(({ number, step }) => (
            <li key={number}>{step}</li>
          ))}
        </ol>
      )}
    </section>
  );
}
