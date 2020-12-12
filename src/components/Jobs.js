import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiJobs(sort: {fields: strapiId, order: ASC}) {
        nodes {
          company
          date
          text
          desc {
            id
            name
          }
        }
      }
    }
`


const Jobs = () => {
  const data = useStaticQuery(query)
  // console.log(data)
  const {allStrapiJobs:{nodes:jobs},} = data
  const [value, setValue] = React.useState(0)
  const {company, text, date, desc} = jobs[value]

  return <section className="section jobs">
    <Title title="Experience" />
    <div className="jobs-center">
     <div className = "btn-container">
      {jobs.map((job, idx) => {
        return <button
        key={job.strapiId}
         className={`job-btn ${idx === value && 'active-btn'}`}
         onClick = {() => {setValue(idx)}}
         >{job.company}</button>
      })}
     </div>
     <article className = 'job-info'>
        <h3>{text}</h3>
        <h4>{company}</h4>
        <p className="job-date">{date}</p>
        {
          desc.map((item) => {
            return (<div key={item.id} className="job-desc">
              <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
              <p>{item.name}</p>
            </div>
          )
          })
        }
     </article>
    </div>
    <Link to="/about" className="btn center-btn "> more info </Link>
  </section >
}

export default Jobs
