import "./footer.scss"

function Footer() {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Anothers</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, earum! Iste quae rem temporibus eos rerum sint. Officiis cum unde dolor pariatur, qui eum ratione tempore minima? Mollitia, quibusdam nesciunt hic eum provident nam quo iure obcaecati suscipit distinctio incidunt.</p>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus a tenetur vero beatae deserunt facilis voluptatum sapiente quidem et voluptatibus amet iusto minima, ab sequi doloremque delectus corrupti minus molestias maxime praesentium. Nihil ad consectetur dolorum aliquam! Vero perferendis quo qui nobis sunt nesciunt numquam quasi, pariatur modi dolores tempore?</p>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <h1>MyLoGo</h1>
          </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer