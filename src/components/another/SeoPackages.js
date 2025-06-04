// SeoPackages.js
import React from 'react';

const packages = [
  {
    name: 'Startup Package',
    price: '₹5000 / Month',
    description: 'Ideal for startups',
    discount: '15% discount when paid yearly',
    features: [
      'Local & National SEO',
      'Minimum 5 Keywords',
      'Business Analysis',
      'In-depth Website Study',
      'Competitor Analysis',
      'Content Duplicacy Check',
      'Initial Backlinks Analysis',
      'Google Penalty Check',
      'Website Speed Analysis',
      'Keyword Research',
      'Canonicalization',
      'Website Page Load Optimization',
      'Initial Report',
      'On Page SEO (Title Tags, URLs, Internal Linking, Image Optimization)',
      'Robots.txt Creation, Sitemap Submission',
      'Schema for Contact',
      'Google Search Console & Analytics Setup',
      'Local SEO & GMB Optimization',
      'Off-Page SEO (Articles, Blogs, Press Releases, Social Bookmarking)',
      'Monthly Reports & Tracking',
      '24/7 Live Project Tracking'
    ],
    popular: false,
  },
  {
    name: 'Pro Package',
    price: '₹10000 / Month',
    description: 'Great for growing businesses',
    discount: '20% discount when paid yearly',
    features: [
      'Local & National SEO',
      'Minimum 10 Keywords',
      'Business Analysis',
      'In-depth Website Study',
      'Competitor Analysis',
      'Content Duplicacy Check',
      'Initial Backlinks Analysis',
      'Google Penalty Check',
      'Website Speed Analysis',
      'Keyword Research',
      'Canonicalization',
      'Website Page Load Optimization',
      'Initial Report',
      'On Page SEO',
      'Title Tags Optimization',
      'URL Optimization',
      'Internal linking & Optimization',
      'Image & ALT Tag Optimization',
      'Content Optimization',
      'Robots.txt Creation',
      'HTML & XML Sitemap Submission',
      'Schema For Contact',
      'Google Search Console',
      'Bing Webmaster Tools',
      'Google Analytics',
      'HTML Code Cleanup & Optimization',
      'Location Based Page Optimisation',
      'Local SEO',
      'Google My Business Setup and Verification',
      'Google Places Optimization',
      'Google My Business Customer Reviews/ratings',
      'Bing local listing',
      'Off Page SEO',
      'Content Writing & Submission',
      'PDF/Doc Submission',
      'Classifieds',
      'Blog Commenting',
      'Q & A',
      'Informational Article Writing & Submission',
      'Press Release Writing & Submission',
      'Guest Blog Posting',
      'Infographic Creation & Distribution',
      '4 Blogs Posting*',
      'Social Bookmarking',
      'Citations',
      'Images',
      'Web 2.0',
      'Video Submission',
      'Status And Report',
      'Search Engine Rank Report',
      'SEO Reports',
      'Google Analytics Report',
      'Activity Report',
      'Monthly Action Plan',
      'Email/Chat/Online',
      '24/7 Live Project Tracking'
    ],
    popular: true,
  },
{
    name: 'Elite Package',
    price: '₹20000 / Month',
    description: 'Best for large businesses',
    discount: '25% discount when paid yearly',
    features: [
      'Local & National SEO',
      'Minimum 20 Keywords',
      'Business Analysis',
      'In-depth Website Study',
      'Competitor Analysis',
      'Content Duplicacy Check',
      'Initial Backlinks Analysis',
      'Google Penalty Check',
      'Website Speed Analysis',
      'Keyword Research',
      'Canonicalization',
      'Website Page Load Optimization',
      'Initial Report',
      'On Page SEO',
      'Title Tags Optimization',
      'URL Optimization',
      'Internal linking & Optimization',
      'Image & ALT Tag Optimization',
      'Content Optimization',
      'Robots.txt Creation',
      'HTML & XML Sitemap Submission',
      'Schema For Contact',
      'Google Search Console',
      'Bing Webmaster Tools',
      'Google Analytics',
      'HTML Code Cleanup & Optimization',
      'Location Based Page Optimisation',
      'Local SEO',
      'Google My Business Setup and Verification',
      'Google Places Optimization',
      'Google My Business Customer Reviews/ratings',
      'Bing local listing',
      'Off Page SEO',
      'Content Writing & Submission',
      'PDF/Doc Submission',
      'Classifieds',
      'Blog Commenting',
      'Q & A',
      'Informational Article Writing & Submission',
      'Press Release Writing & Submission',
      'Guest Blog Posting',
      'Infographic Creation & Distribution',
      '4 Blogs Posting*',
      'Social Bookmarking',
      'Citations',
      'Images',
      'Web 2.0',
      'Video Submission',
      'Status And Report',
      'Search Engine Rank Report',
      'SEO Reports',
      'Google Analytics Report',
      'Activity Report',
      'Monthly Action Plan',
      'Email/Chat/Online Support',
      '24/7 Live Project Tracking'
    ],
    popular: false,
  }
];

const SeoPackages = () => {
   const bgStyle = {
    background: 'linear-gradient(135deg, rgba(111, 0, 255, 0.99), rgb(26, 24, 24), rgb(0, 0, 0))',
    color: 'white',
    
  };
  return (
    <div className="container my-5" >
        <h5 className='text-center text-white'>Pricing</h5>
      <h1 className='text-center text-white'>  Affordable pricing, stunning results</h1>
<p className='text-center text-white'>Enjoy top-notch quality with our premium services, 
    all at competitive rates that offer exceptional value for your investment</p>
      <h2 className="text-center mb-4 text-white">SEO Packages</h2>
      <div className="row" style={bgStyle}>
        {packages.map((pkg, index) => (
          <div className="col-md-4 mb-4" key={index} style={bgStyle}>
            <div className={`card h-100 text-white shadow-sm border-${pkg.popular ? 'primary' : 'success'}`}>
              <div className="card-body " style={bgStyle}>
                <h5 className={`card-title text-white text-${pkg.popular ? 'primary' : 'success'}`}>
                  {pkg.name}
                  {pkg.popular && <span className="badge bg-primary ms-2 text-white">Popular</span>}
                </h5>
                <p className=" text-white">{pkg.description}</p>
                <h6 className="fw-bold ">{pkg.price}</h6>
                <small className=" text-white " >{pkg.discount}</small>
                <ul className="list-unstyled mt-3" style={bgStyle}>
                  {pkg.features.map((feature, i) => (
                    <li key={i}>✅ {feature}</li>
                  ))}
                </ul>
                <div className="mt-3">
                  <button className="btn btn-outline-success w-100">Order Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeoPackages;
