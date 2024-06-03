import './couresels.css'
 
 
const Couresels = () =>{
    return(
      <div> 
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://prepinstaprime.s3.ap-south-1.amazonaws.com/admin/wp-content/uploads/2024/05/image-83.webp" alt="First slide"/>
    </div>
    <div class="carousel-item active  ">
      <img class="d-block w-100" src="https://prepinstaprime.s3.ap-south-1.amazonaws.com/admin/wp-content/uploads/2023/06/Experts-Banner.webp" alt="Second slide"/>
    </div>
    <div class="carousel-item active">
      <img class="d-block w-100" src=" https://prepinstaprime.s3.ap-south-1.amazonaws.com/admin/wp-content/uploads/2023/06/Nanodegree-Banner.webp" alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only"> </span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only"> </span>
  </a>
</div>
      </div>
    );
      
        };
export default Couresels;