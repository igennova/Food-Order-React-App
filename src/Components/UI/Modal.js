    import React, { Fragment } from "react";
import ReactDOM  from "react-dom";
import classes from "./Modal.module.css"
const Backdrop=(props)=>{
    return(
    <div className={classes.backdrop} onClick={props.onHide}></div>
)}
const Overlay=props=>{
    return(
        <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
        </div>)
}
const Modalhelper=document.getElementById("overlays")
const Modal=(props)=>{
    return(
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onHide={props.onHide}/>,Modalhelper)}
            {ReactDOM.createPortal(<Overlay>{props.children}</Overlay> ,Modalhelper)}



        </Fragment>
    )

}
export default Modal