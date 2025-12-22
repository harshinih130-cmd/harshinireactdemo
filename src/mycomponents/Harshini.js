function Giri()
{
    return(
        <>
          <h1>This is giri Components</h1>
        </>
    )
}

function Harshini()
{
    return(
       <>
       <Giri/>
        <h1>This is user defined functional components</h1>
        <input type="text" placeholder="Enter your name" value="harshini"></input>
        <input type="button" value="clickme"></input>
        </>
    )
}
export default Harshini

