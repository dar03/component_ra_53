function Widget({ title, ...props }) {
    return (
      <div className='widget'>
        <h6>{title}</h6>
        {props.children}
      </div>
    );
  }
  
  export default Widget;