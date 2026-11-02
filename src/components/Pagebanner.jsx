import React from 'react'

const Pagebanner = ({title, breadcrumb,image}) => {
  return (
    <div className='pagebanner'style={{backgroundImage:   `url(${image})`}}>
      
<section>

<h1>{title}</h1>
<p>{breadcrumb}</p>


</section>




    </div>
  )
}

export default Pagebanner
