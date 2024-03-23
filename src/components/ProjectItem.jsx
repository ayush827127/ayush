import styles from "../css/ProjectItem.module.css";

function ProjectItem({data}) {
  return (
    <div className="col-lg-4 col-md-6 my-3">
      <div className={`${styles.card} card`}>
        <img src={data.photo} className="card-img-top" alt="Project 1" />
        <div className="card-body">
          <h5 className={`${styles.cardTitle} card-title`}>{data.name}</h5>
          <p className={`${styles.cardText} card-text`}>
           {data.info}
          </p>
          <a
            href={data.project_link}
            target="_blank"
            className="btn btn-primary"
          >
            Visit
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
