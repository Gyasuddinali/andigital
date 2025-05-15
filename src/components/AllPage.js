import ServiceCard from "./ServiceCard"
import { serviceData } from "./serviceData"
import OnPageSEO from "./seo/OnPageSEO"
import OffPageSEO from "./seo/OffPageSEO";
import TechnicalSEO from "./seo/TechnicalSEO";
import LocalSEO from "./seo/LocalSEO";
import T from "./T";
import whyus from "../images/wcus.webp"

export default function AllPage() {
  return (
    <div className="container">
        <ServiceCard></ServiceCard>
        <T></T>

<h2 className='text-center mt-4   fw-bold text-white bg-danger'>Digital Marketing & SEO</h2>
<div className="container-fluid">
<p className="container-fluid  bg-info">Are you extensively searching for the best facilitators of Digital Marketing Course and Advance Digital Marketing Course ? If yes, then your hunt for the same stops right at Pankaj Kumar SEO Expert. He is the most eminent Digital Marketing expert that you would ever attain. His training modules are designed in such a way that would impart rightful skill set when it comes to giving you a bright career in Digital Marketing.

Digital marketing has become a buzzword recently. As the internet expanded the importance of digital marketing evolved. Every business today relies on these new advanced methodologies to boost their revenue and why they wouldn’t; an average person spends more than 3 hours on the internet. Digital marketing is not like traditional marketing; its goal is not only to generate revenue but attract an audience so that your product always stays in their mind. Digital marketing has changed and now has several domains and avenues, which has increased the complexity of this industry. Mastering digital marketing can be challenging because there are no hard and fast rules. It requires you to have creative and innovative ideas to penetrate markets. Digital Marketing Institute In Delhi 2025</p>
</div>
<div className="container">
<h1 className="text-center fw-bold text-primary">
Why Choose Us</h1>


<div className="container my-5">
  <div className="row align-items-center">
    {/* Image Section */}
     

  <div className="col-md-5 mb-4 mb-md-0">
<img
              id="img2"
              className="img-fluid rounded-circle float-start mb-5"
              src={whyus}
              alt="profile"
              style={{ maxWidth: '400px', height: 'auto' }}
            />
            </div>
      <div className="col-md-7">
            <p className=" m-5 float-end text-justify ">
We believe we have the right knowledge and expertise to guide you in the best way possible. We at Pankaj Kumar SEO digital marketing classes will help you achieve your goals with the proper training. Our course is designed for everyone, whatever your background may be whether you are a student or housewife or even a working professional. We can help you gain the right knowledge so that you can improve your skills and utilize them in your work. As soon as you enrol with us, you’ll be able to see significant improvements in your work because of our detailed course modules and our exert teachers who clear every doubt you may have. We aim to provide the best practical knowledge with live projects and commendable modules. We guarantee a higher return of investment to our students. We offer the right value if you invest your time with us and will be able to see long term benefits. We believe in transparency which is vital to building trust hence we provide customized services for everyone. We ensure exclusivity for every student and aim to make you job-ready as soon as you complete our course.

</p>

</div>
</div>
    </div>
  </div>



        {/* <OnPageSEO></OnPageSEO>
        <OffPageSEO></OffPageSEO>
        <TechnicalSEO></TechnicalSEO>
<LocalSEO></LocalSEO> */}


    </div>
  )
}
