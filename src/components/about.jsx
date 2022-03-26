import "./about.css"

const About = () => {
    const exercise = ()=> {
        console.log("Test test Test")

        const ages = [13,45,74,12,78,23,56,33,72,62,46,18,3,93,10];
        //sum of all ages
        let total = 0;
        for (let i=0; i < ages.length; ++i){
                let num = ages[i];
                total += ages;
            }
            console.log("sum", total)  

    };

    return(
    <div className="about page">
        <h1>Online Store </h1>
        <h5>Created by Maira Quinones</h5>

        <button onClick={exercise}>Do the magic</button>
    </div>
    );

};

export default About;
