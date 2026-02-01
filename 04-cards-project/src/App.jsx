import React from 'react'
import Card from './components/Card.jsx'

const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/250px-Google_%22G%22_logo.svg.png",
    companyName: "Google",
    postedDate: "5 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    payPerHour: 55,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkQZwfIF1UdjlMBtjg4fmlfdGU0suXMgG5qA&s",
    companyName: "Amazon",
    postedDate: "2 weeks ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHour: 65,
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2017/02/Apple-Logo.png",
    companyName: "Apple",
    postedDate: "1 week ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHour: 70,
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/thumbnails/004/201/564/small/meta-social-network-emblem-blue-stylish-letter-m-or-mobius-band-vector.jpg",
    companyName: "Meta",
    postedDate: "3 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    payPerHour: 50,
    location: "Pune, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/020/336/373/non_2x/netflix-logo-netflix-icon-free-free-vector.jpg",
    companyName: "Netflix",
    postedDate: "10 days ago",
    post: "UI Engineer",
    tag1: "Contract",
    tag2: "Senior Level",
    payPerHour: 80,
    location: "Remote, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/960px-Microsoft_logo.svg.png",
    companyName: "Microsoft",
    postedDate: "4 weeks ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHour: 75,
    location: "Noida, India"
  },
  {
    brandLogo: "https://img.icons8.com/win10/1200/tesla-logo.jpg",
    companyName: "Tesla",
    postedDate: "6 days ago",
    post: "Software Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    payPerHour: 60,
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://download.logo.wine/logo/Uber/Uber-Logo.wine.png",
    companyName: "Uber",
    postedDate: "2 months ago",
    post: "Mobile App Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHour: 68,
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJPgPCQ5o_XNfriYRAbp1UKCW8opXlkJZNqQ&s",
    companyName: "Airbnb",
    postedDate: "3 weeks ago",
    post: "Full Stack Developer",
    tag1: "Remote",
    tag2: "Senior Level",
    payPerHour: 72,
    location: "Remote, India"
  },
  {
    brandLogo: "https://www.vhv.rs/dpng/d/453-4533338_oracle-logo-for-website-new-oracle-logo-png.png",
    companyName: "Oracle",
    postedDate: "5 weeks ago",
    post: "Java Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    payPerHour: 45,
    location: "Mumbai, India"
  }
];

  return (
    <div className='parent'>
        {jobOpenings.map(function(elem,idx){
          return <div key={idx}>
            <Card company={elem.companyName} post={elem.post} postedDate={elem.postedDate} brandLogo={elem.brandLogo} tag1={elem.tag1} tag2={elem.tag2} payPerHour={elem.payPerHour} location={elem.location}/>
          </div>
        })}
    </div>
  )
}

export default App