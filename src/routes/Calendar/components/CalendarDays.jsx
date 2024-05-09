function CalendarDays(props) {
  const renderFunc = props.children || props.render;
  return (
    <article className="bottom-container">
      <article className="week">{}</article>
    </article>
  );
}

export { CalendarDays };
