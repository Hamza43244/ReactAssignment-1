import "./App.css";

function App() {
  var mobiles = [
    {
      name: "A30S",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 2000,
      brand: "Samsung",
    },
    {
      name: "Note 10",
      ram: "6gb",
      rom: "128gb",
      camera: "50px",
      price: 4000,
      brand: "Samsung",
    },
    {
      name: "S10",
      ram: "3gb",
      rom: "128gb",
      camera: "10px",
      price: 5000,
      brand: "Samsung",
    },
    {
      name: "Iphone 4",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 10000,
      brand: "Iphone",
    },
    {
      name: "Iphone 4s",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 20000,
      brand: "Iphone",
    },
    {
      name: "Iphone 5",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 30000,
      brand: "Iphone",
    },
    {
      name: "Iphone 6",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 30000,
      brand: "Iphone",
    },
    {
      name: "Redmi Note 10",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 10000,
      brand: "Xiaomi",
    },
    {
      name: "Redmi Note 11",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 10000,
      brand: "Xiaomi",
    },
    {
      name: "Redmi 10",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 10000,
      brand: "Xiaomi",
    },
    {
      name: "Redmi 10 Pro",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 10000,
      brand: "Xiaomi",
    },
    {
      name: "A3S",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 10000,
      brand: "Oppo",
    },
  ];

  return (
    <div className="bg-primary-subtle">
      <div className="container-fluid bg-success text-center p-2 text-white">
        <h1>Mobile Gallery</h1>
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
              <div className=" my-2 col-3">
                <div className="card px-2">
                        <h3 className="text-danger">{x.brand}</h3>
                        <h5 className="">Model : {x.name}</h5>
                        <h6 className="">Camera : {x.camera}</h6>
                        <h6 className="card-text">Ram : {x.ram}</h6>
                        <h6 className="card-text">Rom : {x.rom}</h6>
                        <h4 className="">Price : Rs. {x.price} </h4>
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
