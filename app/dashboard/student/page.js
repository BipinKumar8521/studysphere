import { SignInButton, SignOutButton, UserProfile } from "@clerk/nextjs";
import "./styles.css";

export default function Home() {
  return (
    <>
      <div className="main-container">
        <div className="container_student">
          <div className="nav_student">
            <h3>Dashboard</h3>
            <p>Projects</p>
            <p>Users</p>
            <div className="segment-box_student">
              <i className="fa-solid fa-circle-plus"></i>
              <p>Add new segment</p>
            </div>
            <div className="alarm-box_student">
              <span>3</span>
              <i className="fa-solid fa-bell"></i>
            </div>
            <SignOutButton />
          </div>
        </div>
        <div className="container_course">
          <div className="product-list_course">
            <div className="product_course" data-price="50">
              <div className="img_course">
                <img
                  src="https://images.pexels.com/photos/277319/pexels-photo-277319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </div>
              <div className="info_course">
                <h3>Helux Nautica</h3>
                <p>$50</p>
              </div>
              <button>Add to Cart</button>
            </div>
            <div className="product_course" data-price="50">
              <div className="img_course">
                <img
                  src="https://images.pexels.com/photos/277319/pexels-photo-277319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </div>
              <div className="info_course">
                <h3>Helux Nautica</h3>
                <p>$50</p>
              </div>
              <button>Add to Cart</button>
            </div>
            <div className="product_course" data-price="50">
              <div className="img_course">
                <img
                  src="https://images.pexels.com/photos/277319/pexels-photo-277319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </div>
              <div className="info_course">
                <h3>Helux Nautica</h3>
                <p>$50</p>
              </div>
              <button>Add to Cart</button>
            </div>
            <div className="product_course" data-price="50">
              <div className="img_course">
                <img
                  src="https://images.pexels.com/photos/277319/pexels-photo-277319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </div>
              <div className="info_course">
                <h3>Helux Nautica</h3>
                <p>$50</p>
              </div>
              <button>Add to Cart</button>
            </div>
            <div className="product_course" data-price="50">
              <div className="img_course">
                <img
                  src="https://images.pexels.com/photos/277319/pexels-photo-277319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </div>
              <div className="info_course">
                <h3>Helux Nautica</h3>
                <p>$50</p>
              </div>
              <button>Add to Cart</button>
            </div>

            {/* Add other product items here */}
          </div>
        </div>
      </div>
      <div className="profile">
        <UserProfile />
      </div>
    </>
  );
}
