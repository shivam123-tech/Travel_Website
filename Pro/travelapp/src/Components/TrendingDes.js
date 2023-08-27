import './TrendingDes.css'
function TrendingDes(){
    return(
        <>
        <div className="Des">
        <h1 style={{fontWeight:"bold",fontSize:"52px",textAlign:"center"}}>Trending destinations</h1>
        <div className='first_div'>
            <div className='inside_firstdiv' >
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHzSFJ4GfzPxyDZHfTF_JYzfXyFg0U4YwCZdmND4C&s' style={{height:"30px",width:"30px",float:"right"}}/>
                <h2 style={{paddingLeft:"65px",paddingTop:"60px",color:"white",fontWeight:"bolder"}}>Mumbai</h2>
                <p style={{textAlign:"center",backgroundColor:"lightgray",marginTop:"75px",paddingTop:"10px",paddingBottom:"10px",opacity:"0.8"}}>Come & visit Mumbai</p>
            </div>
            <div className='inside_seconddiv'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHzSFJ4GfzPxyDZHfTF_JYzfXyFg0U4YwCZdmND4C&s' style={{height:"30px",width:"30px",float:"right"}}/>
                <h2 style={{paddingLeft:"180px",paddingTop:"60px",color:"white",fontWeight:"bolder"}}>Goa</h2>
                <p style={{textAlign:"center",backgroundColor:"lightgray",marginTop:"90px",paddingTop:"10px",paddingBottom:"10px",opacity:"0.8"}}>Come & visit Goa</p>
            </div>
        </div>
        <div className='second_div'>
        <div className='inside_thirddiv'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHzSFJ4GfzPxyDZHfTF_JYzfXyFg0U4YwCZdmND4C&s' style={{height:"30px",width:"30px",float:"right"}}/>
           <h2 style={{paddingLeft:"110px",paddingTop:"70px",color:"white",fontWeight:"bolder"}}>Manali</h2>
           <p style={{textAlign:"center",backgroundColor:"lightgray",marginTop:"94px",paddingTop:"10px",paddingBottom:"10px",opacity:"1"}}>Come & visit Manali</p>
        </div>
        <div className='inside_fourthdiv'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHzSFJ4GfzPxyDZHfTF_JYzfXyFg0U4YwCZdmND4C&s' style={{height:"30px",width:"30px",float:"right"}}/>
           <h2 style={{paddingLeft:"70px",paddingTop:"70px",color:"white",fontWeight:"bolder"}}>Khajjiar</h2>
           <p style={{textAlign:"center",backgroundColor:"lightgray",marginTop:"94px",paddingTop:"10px",paddingBottom:"10px",opacity:"1"}}>Come & visit Khajjiar</p>
        </div>
        <div className='inside_fifthdiv'>
        <h1 style={{textAlign:"center",fontWeight:"bolder",paddingTop:"70px"}}>100</h1>
        <p style={{textAlign:"center",fontWeight:"bolder"}}>Trips Planned Today</p>
        </div>
        </div>
        <div className='third_div'>
            <div className='inside_sixthdiv' >
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHzSFJ4GfzPxyDZHfTF_JYzfXyFg0U4YwCZdmND4C&s' style={{height:"30px",width:"30px",float:"right"}}/>
                <h2 style={{paddingLeft:"65px",paddingTop:"60px",color:"white",fontWeight:"bolder"}}>Shimla</h2>
                <p style={{textAlign:"center",backgroundColor:"lightgray",marginTop:"75px",paddingTop:"10px",paddingBottom:"10px",opacity:"0.8"}}>Come & visit Shimla</p>
            </div>
            <div className='inside_seventhdiv' >
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHzSFJ4GfzPxyDZHfTF_JYzfXyFg0U4YwCZdmND4C&s' style={{height:"30px",width:"30px",float:"right"}}/>
                <h2 style={{paddingLeft:"140px",paddingTop:"64px",color:"white",fontWeight:"bolder"}}>Kashmir</h2>
                <p style={{textAlign:"center",backgroundColor:"lightgray",marginTop:"70px",paddingTop:"10px",paddingBottom:"10px",opacity:"1"}}>Come & visit Kashmir</p>
            </div>
            </div>
        </div>
        </>
    )
}

export default TrendingDes;