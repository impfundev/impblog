export default function Footer() {
  return (
    <div className="flex flex-col md:flex-row justify-between bg-backgroundSecondary">
      <div className="card-body">
        <h1 className="card-header">Tech Blog</h1>
        <div className="card-footer">
          <p className="text-content2">
            Reporting on the business of technology, startups, venture capital
            funding, and Silicon Valley.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between">
        <nav className="menu bg-gray-2 p-4 rounded-md">
          <section className="menu-section">
            <span className="menu-title">About</span>
            <ul className="menu-items">
              <li className="menu-item">Tech Blog</li>
              <li className="menu-item">Staff</li>
              <li className="menu-item">Contact Us</li>
              <li className="menu-item">Site Map</li>
            </ul>
          </section>
        </nav>
        <nav className="menu bg-gray-2 p-4 rounded-md">
          <section className="menu-section">
            <span className="menu-title">Legal</span>
            <ul className="menu-items">
              <li className="menu-item">Terms of Service</li>
              <li className="menu-item">Privacy Policy</li>
              <li className="menu-item">Projects</li>
              <li className="menu-item">Calendar</li>
            </ul>
          </section>
        </nav>
        <nav className="menu bg-gray-2 p-4 rounded-md">
          <section className="menu-section">
            <span className="menu-title">Social</span>
            <ul className="menu-items">
              <li className="menu-item">Facebook</li>
              <li className="menu-item">Instagram</li>
              <li className="menu-item">Thread</li>
              <li className="menu-item">Twitter</li>
            </ul>
          </section>
        </nav>
      </div>
    </div>
  );
}
