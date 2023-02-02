const Footer = ()=>{
    var date = new Date()
    return(
        <footer className="container">
            <div className="row justify-content-center mt-4 mb-4">
                <div className="col-8">
                    <h4>Team Management App - {date.getFullYear()}</h4>
                </div>
            </div>
        </footer>
    )
}

export default Footer