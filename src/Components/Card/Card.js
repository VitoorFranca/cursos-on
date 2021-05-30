const Card = ({ icon, title, description, credits }) => {
  return (
    <div className="card">
      <img className="card-image"
        src={icon}
        alt={title} />

      <div>
        <h3 className="title-card">
            {title}
        </h3>
        <div className="description-container">
          {description.map(text => (
            <>
              <p key={text}>
                {text}
              </p>
              <br/>
            </>
          ))}
          {credits?.map(({name, content}) => (
            <>
              <h4 className="name-description">{name}</h4>
              {content.map(contentItem => (
                <>
                  <p>{contentItem}</p>
                </>
              ))}
              <br/>
            </>
          ))}
        </div>
      </div>

    </div>
  );
}