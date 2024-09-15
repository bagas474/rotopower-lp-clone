import React from 'react'

const Hero = (props) => {
  return (
    <div 
        className="d-flex justify-content-center w-100" 
        style={{ 
        height: "264px", 
        backgroundImage: "url('https://images.unsplash.com/photo-1564057740580-02521995d221?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        paddingTop: "89px"  
        }}>
        <div class="container item-center my-auto">
            <span class="text-white d-block fw-semibold lh-sm mb-4 fs-1">
                {props.sectionName}
            </span>
        </div>
    </div>
  )
}

export default Hero