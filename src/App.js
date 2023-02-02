import "./App.css";

function App() {
  var mobiles = [
    {
      src: "./Images/S-A30s.jpg",
      name: "A30S",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 2000,
      brand: "Samsung",
    },
    {
      src: "./Images/S-Note10.jpg",
      name: "Note 10",
      ram: "6gb",
      rom: "128gb",
      camera: "50px",
      price: 4000,
      brand: "Samsung",
    },
    {
      src: "./Images/S-S10.jpeg",
      name: "S10",
      ram: "3gb",
      rom: "128gb",
      camera: "10px",
      price: 5000,
      brand: "Samsung",
    },
    {
      src: "./Images/I-4.jpg",
      name: "Iphone 4",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 10000,
      brand: "Iphone",
    },
    {
      src: "./Images/I-4s.jpeg",
      name: "Iphone 4s",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 20000,
      brand: "Iphone",
    },
    {
      src: "./Images/I-5.jpeg",
      name: "Iphone 5",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 30000,
      brand: "Iphone",
    },
    {
      src: "./Images/I-6.jpeg",
      name: "Iphone 6",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 30000,
      brand: "Iphone",
    },
    {
      src: "./Images/R-Note10.jpeg",
      name: "Redmi Note 10",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 10000,
      brand: "Xiaomi",
    },
    {
      src: "./Images/R-Note11.jpg",
      name: "Redmi Note 11",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 10000,
      brand: "Xiaomi",
    },
    {
      src: "./Images/R-10.jpeg",
      name: "Redmi 10",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 10000,
      brand: "Xiaomi",
    },
    {
      src: "./Images/R-10pro.jpeg",
      name: "Redmi 10 Pro",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 10000,
      brand: "Xiaomi",
    },
    {
      src: "./Images/O-A3s.jpg",
      name: "A3S",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 10000,
      brand: "Oppo",
    },
  ];

  return (
    <div>
      <div className="container-fluid bg-primary text-center p-2 text-white">
        <h1>Online Mobile Shop</h1>
      </div>

      <div className="container text-center">
        <div className="row">
          <div className="col-4"></div>
        </div>
      </div>

      <div className="container my-3">
        <div className="row">
          {mobiles.map((x) => {
            return (
              <div className=" my-2 col-4">
                <div className="card">
                  <div className="row">
                    <div className="col-6">
                      <img
                        src={x.src}
                        className="mt-2"
                        alt="..."
                        height="220px"
                        width="160px"
                      />
                    </div>
                    <div className="col-6 mt-3">
                      
                        <h3 className="text-danger">{x.brand}</h3>
                        <h5 className="text-primary">Model : {x.name}</h5>
                        <h6 className="">Camera : {x.camera}</h6>
                        <h6 className="card-text">Ram : {x.ram}</h6>
                        <h6 className="card-text">Rom : {x.rom}</h6>
                        <h4 className="bg-primary badge">Price : Rs. {x.price} </h4>
                     
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
