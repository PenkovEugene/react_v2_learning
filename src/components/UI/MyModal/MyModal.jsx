import React from "react";
import classes from './MyModal.module.css'

const MyModal = ({children, visiable, setVisible}) => {

  const rootClasses = [classes.myModal]
  if (visiable) {
    rootClasses.push(classes.active)
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div className={classes.myModalContent} onClick={(event) => event.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default MyModal