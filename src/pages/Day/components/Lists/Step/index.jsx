import "./index.scss";

export default function Step(props) {
  return (
    <article className="childTask">
      <p className="childTask__content">{props.stepObj.content}</p>
      <div className="childTask__options">
        <button
          onClick={async (e) => {
            e.preventDefault();
            await props.onDelete(props.stepObj.id);
          }}
        >
          🗑️
        </button>
        <button
          onClick={async (e) => {
            e.preventDefault();
            await props.onComplete(props.stepObj.id, {
              isCompleted: !props.stepObj.completed,
            });
          }}
        >
          ✅
        </button>
      </div>
    </article>
  );
}
