import "./styles.css";

export default function App() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Experience</h4>
          <ul className="timeline">
            <li>
              <p className="list-heading">
                <span className="title">New Web Design</span>
                <span className="date">21 March, 2018</span>
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                scelerisque diam non nisi semper, et elementum lorem ornare.
                Maecenas placerat facilisis mollis. Duis sagittis ligula in
                sodales vehicula....
              </p>
            </li>
            <li>
              <p className="list-heading">
                <span className="title">21 000 Job Seekers</span>
                <span className="date">4 March, 2021</span>
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                scelerisque diam non nisi semper, et elementum lorem ornare.
                Maecenas placerat facilisis mollis. Duis sagittis ligula in
                sodales vehicula....
              </p>
            </li>
            <li>
              <p className="list-heading">
                <span className="title">Awesome Employers</span>
                <span className="date">1 April, 2023</span>
              </p>
              <p>
                Fusce ullamcorper ligula sit amet quam accumsan aliquet. Sed
                nulla odio, tincidunt vitae nunc vitae, mollis pharetra velit.
                Sed nec tempor nibh...
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
