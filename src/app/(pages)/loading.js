export default function Loading(){
    return(
        <div style={{background:'#ffffffe0',backdropFilter: 'blur(10px)',width:'100vw',height:'100vh',zIndex:'99999',position:'fixed',top:'0',left:'0'}}>
            <img src="/assets/loader.gif" alt="loading..." style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',maxWidth:'150px'}} />
        </div>
    )
}