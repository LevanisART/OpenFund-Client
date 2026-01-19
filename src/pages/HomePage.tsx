import "../styles/main.scss";

// Local asset paths
const imgDashboard = "/images/dashboard.png";
const imgLogo = "/images/logo.png";
const imgLogoIcon = "/images/logo-icon.png";
const imgCharacter = "/images/character-1.png";
const imgCharacter2 = "/images/character-2.png";

const HomePage = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="home__hero">
        <div className="home__hero-container">
          {/* Left Decoration - Character with donation */}
          <div className="home__hero-decoration home__hero-decoration--left">
            <img src={imgCharacter} alt="" className="home__character-img" />
            <div className="home__donation-bubble">
              <p className="home__donation-name">გიორგი - 10₾</p>
              <p className="home__donation-message">კარგი სტრიმია!</p>
            </div>
          </div>

          {/* Center Content */}
          <div className="home__hero-content">
            <h1 className="home__hero-title">
              მიიღე დონაციები
              <br />
              საკომისიოს გარეშე
            </h1>

            <div className="home__hero-buttons">
              <button className="home__btn home__btn--primary">დაწყება</button>
              <button className="home__btn home__btn--secondary">
                როგორ მუშაობს?
              </button>
            </div>
          </div>

          {/* Right Decoration - Gift goal */}
          <div className="home__hero-decoration home__hero-decoration--right">
            <img src={imgCharacter2} alt="" className="home__gift-icon" />
            <div className="home__goal-box">
              <p className="home__goal-title">ახალი კომპიუტერი</p>
              <div className="home__goal-progress">
                <div className="home__goal-bar" />
                <p className="home__goal-text">3000 / 6000 ₾ (50%)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="home__dashboard-preview">
          <div className="home__dashboard-img">
            <img src={imgDashboard} alt="OpenFund Dashboard" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="home__faq">
        <div className="home__faq-container">
          {/* Left side - Title */}
          <div className="home__faq-header">
            <div className="home__faq-badge">
              <span className="home__faq-badge-text">
                ხშირად დასმული კითხვები
              </span>
            </div>
            <h2 className="home__faq-title">
              გაიგეთ როგორ
              <br />
              მუშაობს ჩვენი
              <br />
              პლატფორმა
            </h2>
          </div>

          {/* Right side - FAQ Items */}
          <div className="home__faq-list">
            {/* FAQ Item 1 - Active/Open */}
            <div className="home__faq-item home__faq-item--active">
              <div className="home__faq-divider" />
              <p className="home__faq-question">რამდენია საკომისიო?</p>
              <div className="home__faq-answer">
                <p>
                  კრეატორისთვის საკომისიო არის 0%. თანხა ისახება მომენტალურად
                  თქვენს საბანკო ანგარიშზე.
                </p>
                <p>დონატორისგან ბანკი იღებს მაქსიმუმ 2.5%-ს</p>
              </div>
            </div>

            {/* FAQ Item 2 */}
            <div className="home__faq-item">
              <div className="home__faq-divider" />
              <div className="home__faq-row">
                <p className="home__faq-question">
                  როგორ გამოვიყენო
                  <br />
                  სტრიმზე?
                </p>
                <button className="home__faq-toggle">
                  <svg
                    width="11"
                    height="6"
                    viewBox="0 0 11 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 1L5.5 5L1 1"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* FAQ Item 3 */}
            <div className="home__faq-item">
              <div className="home__faq-divider" />
              <div className="home__faq-row">
                <p className="home__faq-question">რამდენად დაცულია?</p>
                <button className="home__faq-toggle">
                  <svg
                    width="11"
                    height="6"
                    viewBox="0 0 11 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 1L5.5 5L1 1"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* FAQ Item 4 */}
            <div className="home__faq-item">
              <div className="home__faq-divider" />
              <div className="home__faq-row">
                <p className="home__faq-question">როგორ გავიტანო თანხა?</p>
                <button className="home__faq-toggle">
                  <svg
                    width="11"
                    height="6"
                    viewBox="0 0 11 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 1L5.5 5L1 1"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* FAQ Item 5 */}
            <div className="home__faq-item">
              <div className="home__faq-divider" />
              <div className="home__faq-row">
                <p className="home__faq-question">
                  რით განსხვავდება სხვა
                  <br />
                  პლატფორმებისგან?
                </p>
                <button className="home__faq-toggle">
                  <svg
                    width="11"
                    height="6"
                    viewBox="0 0 11 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 1L5.5 5L1 1"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="home__footer">
        <div className="home__footer-card">
          <div className="home__footer-content">
            {/* Logo */}
            <div className="home__footer-section">
              <img
                src={imgLogoIcon}
                alt="OpenFund"
                className="home__footer-logo"
              />
            </div>

            {/* Legal Section */}
            <div className="home__footer-section">
              <h4 className="home__footer-heading">სამართლებრივი</h4>
              <ul className="home__footer-links">
                <li>
                  <a href="#" className="home__footer-link">
                    წესები და პირობები
                  </a>
                </li>
                <li>
                  <a href="#" className="home__footer-link">
                    დაბრუნების პირობები
                  </a>
                </li>
                <li>
                  <a href="#" className="home__footer-link">
                    კონფიდენციალურობის პოლიტიკა
                  </a>
                </li>
                <li>
                  <a href="#" className="home__footer-link">
                    AML პოლიტიკა
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="home__footer-section">
              <h4 className="home__footer-heading">კონტაქტი</h4>
              <a
                href="mailto:support@openfund.ge"
                className="home__footer-link"
              >
                support@openfund.ge
              </a>
            </div>

            {/* Social Media Section */}
            <div className="home__footer-section">
              <h4 className="home__footer-heading">სოციალური ქსელები</h4>
              <div className="home__footer-social">
                <a href="#" className="home__social-link">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.9352 0H2.06376C0.92869 0 0 0.92869 0 2.06376V11.9362C0 13.0713 0.92869 14 2.06376 14H11.9362C13.0713 14 14 13.0713 14 11.9362V2.06376C13.999 0.92869 13.0713 0 11.9352 0ZM11.8026 7.47234H10.1413V13.483H7.6555V7.47234H6.41209V5.40033H7.6555V4.15692C7.6555 2.4667 8.35718 1.46114 10.3539 1.46114H12.0136V3.53263H10.9756C10.1996 3.53263 10.148 3.82311 10.148 4.3633L10.1413 5.40033H12.0219L11.8026 7.47234Z"
                      fill="black"
                    />
                  </svg>
                </a>
                <a href="#" className="home__social-link">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.505 2.595C11.327 2.595 11.153 2.64778 11.005 2.74668C10.857 2.84557 10.7416 2.98613 10.6735 3.15058C10.6054 3.31504 10.5876 3.496 10.6223 3.67058C10.657 3.84516 10.7427 4.00553 10.8686 4.1314C10.9945 4.25726 11.1548 4.34298 11.3294 4.37771C11.504 4.41243 11.685 4.39461 11.8494 4.32649C12.0139 4.25837 12.1544 4.14302 12.2533 3.99501C12.3522 3.84701 12.405 3.673 12.405 3.495C12.405 3.2563 12.3102 3.02739 12.1414 2.8586C11.9726 2.68982 11.7437 2.595 11.505 2.595ZM14.955 4.41C14.9403 3.78774 14.8237 3.17209 14.61 2.5875C14.4202 2.08691 14.1232 1.63385 13.74 1.26C13.3686 0.875569 12.9147 0.580632 12.4125 0.3975C11.8295 0.177121 11.2131 0.0579075 10.59 0.045C9.795 -4.19095e-08 9.54 0 7.5 0C5.46 0 5.205 -4.19095e-08 4.41 0.045C3.78686 0.0579075 3.17051 0.177121 2.5875 0.3975C2.08648 0.58294 1.63302 0.877562 1.26 1.26C0.875569 1.63138 0.580632 2.08533 0.3975 2.5875C0.177121 3.17051 0.0579075 3.78686 0.045 4.41C-4.19095e-08 5.205 0 5.46 0 7.5C0 9.54 -4.19095e-08 9.795 0.045 10.59C0.0579075 11.2131 0.177121 11.8295 0.3975 12.4125C0.580632 12.9147 0.875569 13.3686 1.26 13.74C1.63302 14.1224 2.08648 14.4171 2.5875 14.6025C3.17051 14.8229 3.78686 14.9421 4.41 14.955C5.205 15 5.46 15 7.5 15C9.54 15 9.795 15 10.59 14.955C11.2131 14.9421 11.8295 14.8229 12.4125 14.6025C12.9147 14.4194 13.3686 14.1244 13.74 13.74C14.1242 13.3669 14.4213 12.9136 14.61 12.4125C14.8237 11.8279 14.9403 11.2123 14.955 10.59C14.955 9.795 15 9.54 15 7.5C15 5.46 15 5.205 14.955 4.41ZM13.605 10.5C13.5997 10.9761 13.5135 11.4478 13.35 11.895C13.2302 12.2214 13.0379 12.5163 12.7875 12.7575C12.5441 13.0052 12.2498 13.1971 11.925 13.32C11.4778 13.4835 11.0061 13.5697 10.53 13.575C9.78 13.6125 9.5025 13.62 7.53 13.62C5.5575 13.62 5.28 13.62 4.53 13.575C4.03564 13.5847 3.54334 13.5086 3.075 13.35C2.76464 13.2205 2.48393 13.0291 2.25 12.7875C2.00107 12.5466 1.81113 12.2514 1.695 11.925C1.51128 11.4715 1.4097 10.989 1.395 10.5C1.395 9.75 1.35 9.4725 1.35 7.5C1.35 5.5275 1.35 5.25 1.395 4.5C1.39774 4.01323 1.48661 3.53079 1.6575 3.075C1.78954 2.75843 1.9922 2.47624 2.25 2.25C2.47719 1.99139 2.75897 1.78646 3.075 1.65C3.53205 1.48461 4.01396 1.39837 4.5 1.395C5.25 1.395 5.5275 1.35 7.5 1.35C9.4725 1.35 9.75 1.35 10.5 1.395C10.9761 1.40032 11.4478 1.48654 11.895 1.65C12.2358 1.77649 12.5417 1.98214 12.7875 2.25C13.0325 2.48102 13.2245 2.76251 13.35 3.075C13.5168 3.53166 13.6031 4.01382 13.605 4.5C13.6425 5.25 13.65 5.5275 13.65 7.5C13.65 9.4725 13.6425 9.75 13.605 10.5ZM7.5 3.6525C6.73936 3.65398 5.99622 3.88089 5.36449 4.30456C4.73276 4.72823 4.24078 5.32965 3.95073 6.03281C3.66067 6.73598 3.58554 7.50935 3.73485 8.2552C3.88415 9.00104 4.25118 9.6859 4.78956 10.2232C5.32794 10.7606 6.01351 11.1263 6.75964 11.2741C7.50578 11.422 8.279 11.3453 8.9816 11.0539C9.6842 10.7625 10.2847 10.2693 10.7071 9.63678C11.1295 9.00422 11.355 8.26064 11.355 7.5C11.356 6.99383 11.2569 6.49246 11.0634 6.02472C10.87 5.55698 10.5859 5.13211 10.2277 4.77454C9.86939 4.41697 9.44396 4.13376 8.97585 3.9412C8.50773 3.74864 8.00617 3.65052 7.5 3.6525ZM7.5 9.9975C7.00604 9.9975 6.52318 9.85102 6.11246 9.5766C5.70175 9.30217 5.38164 8.91211 5.19261 8.45575C5.00358 7.99939 4.95412 7.49723 5.05049 7.01276C5.14686 6.52829 5.38472 6.08328 5.734 5.734C6.08328 5.38472 6.52829 5.14686 7.01276 5.05049C7.49723 4.95412 7.99939 5.00358 8.45575 5.19261C8.91211 5.38164 9.30217 5.70175 9.5766 6.11246C9.85102 6.52318 9.9975 7.00604 9.9975 7.5C9.9975 7.82798 9.9329 8.15274 9.80739 8.45575C9.68188 8.75876 9.49791 9.03409 9.266 9.266C9.03409 9.49791 8.75876 9.68188 8.45575 9.80739C8.15274 9.9329 7.82798 9.9975 7.5 9.9975Z"
                      fill="black"
                    />
                  </svg>
                </a>
                <a href="#" className="home__social-link">
                  <svg
                    width="14"
                    height="13"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.93809 1.44509C2.9379 1.82816 2.78293 2.19546 2.5073 2.46619C2.23166 2.73693 1.85793 2.88892 1.46831 2.88873C1.0787 2.88854 0.705116 2.73618 0.429754 2.46517C0.154392 2.19417 -0.000194624 1.82671 1.83896e-07 1.44364C0.000194991 1.06057 0.155156 0.693269 0.430793 0.422534C0.70643 0.151798 1.08016 -0.000191354 1.46978 1.80807e-07C1.85939 0.000191715 2.23298 0.152549 2.50834 0.423555C2.7837 0.694562 2.93829 1.06202 2.93809 1.44509ZM2.98216 3.95828H0.0440715V13H2.98216V3.95828ZM7.62434 3.95828H4.70094V13H7.59496V8.25526C7.59496 5.61208 11.0986 5.36654 11.0986 8.25526V13H14V7.2731C14 2.81723 8.81427 2.98333 7.59496 5.17155L7.62434 3.95828Z"
                      fill="black"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className="home__copyright">OpenFund © 2025</p>
      </footer>
    </div>
  );
};

export default HomePage;
