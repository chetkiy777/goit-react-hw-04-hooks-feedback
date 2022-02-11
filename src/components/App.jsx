let state = { good: 0, neutral: 0, bad: 0 };

export const App = () => {
  return (
    <div>
      <h1>Please Leave Feadback</h1>

      <div>
        <button>Good</button>
        <button>Neutral</button>
        <button>Bad</button>
      </div>

      <section>
        <h1>Statistic</h1>
        <label>
          Good <span>{state.good}</span>
        </label>

        <label>
          Neutral <span>{state.neutral}</span>
        </label>

        <label>
          Bad <span>{state.bad}</span>
        </label>
      </section>
    </div>
  );
};
