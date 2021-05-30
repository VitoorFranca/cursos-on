const CardContainer = () => {
  return (
    <section className="card-container">
      {INFOS.map(item => (
        <Card
          key={item.title}
          icon={item.icon}
          title={item.title}
          credits={item?.credits}
          description={item.description}/>
      ))}
    </section>
  );
}