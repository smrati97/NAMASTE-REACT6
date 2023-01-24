const Shimmer = () =>{
    return <div className="restraunt-list">
        {Array(20).fill("").map((e, i)=><div className="shimmer-card" key={i}></div>)}
    </div>
}

export default Shimmer;