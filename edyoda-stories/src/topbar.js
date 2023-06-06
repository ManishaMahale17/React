export default function Topbar() {
    let Categories = [
      "Artificial Intelligence",
      "Cloud Computing",
      "DevOps",
      "Programming Languages",
      "Mobile Application Development",
      "Technology and Tools",
      "Get a Job in Tech Company",
      "Others"
    ];
    return (
      <>
        <nav>
          <div id="container-header">
            <div class="logo">
              <label id="EdYoda">EDYODA</label>
              <label id="Stories">STORIES</label>
            </div>
            <div id="cont-EssentialCategory">
              <span class="dropdown">
                <lable class="dropbtn">
                  <p styles="inlineBlock">
                    {" "}
                    Explore Categories
                    <i class="fas fa-chevron-down" styles="paddingLeft:8px"></i>
                  </p>
                </lable>
                <div class="dropdown-content">
                  {Categories.map((item, index) => {
                    return (
                      <a href="#" key={index}>
                        {item}
                      </a>
                    );
                  })}
                </div>
              </span>
            </div>
          </div>
          <div class="but-on">
            <button class="Gotoweb"> Go To Main Website</button>
          </div>
        </nav>
      </>
    );
  }
  