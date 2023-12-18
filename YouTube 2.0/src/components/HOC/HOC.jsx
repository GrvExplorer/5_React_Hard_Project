
const SectionWrapper = (Component, id) =>  
  function HOC() {
    return (
      <div id={id}>
        <Component />
      </div>
    )
  }

  


export default SectionWrapper;