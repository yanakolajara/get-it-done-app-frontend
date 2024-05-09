function CalendarDays(props) {
  const renderFunc = props.children || props.render;
  return (
    <article className="bottom-container">
      <article className="week">{props.weekTarget.map(renderFunc)}</article>
    </article>
  );
}

export { CalendarDays };
