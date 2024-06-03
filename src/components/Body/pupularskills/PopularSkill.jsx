import './popularskill.css';

const PopularSkill = () => {
    return(
        <div className = "skills"> 
            <h1>Popular Skills</h1>
          <div class="card img"  >
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWnMwmL4w9yh8l_IbP9y_2XgzPW2JB-0qPA9Z0BVSymsK5WS-548wwRc_5z-eMviVyy7k&usqp=CAU" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div> 
      </div>
    );
};

export default PopularSkill;