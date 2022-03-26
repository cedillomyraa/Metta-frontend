var catalog = [
    {
        _id: "77771",
        title: "Anna-Belted Printed Kimono",
        price: 18.00,
        color:"Black",
        stock: 10,
        category:"Kimono",
        image:"Kimono-1-1.jpg",
    },
    {
        _id: "77772",
        title: "Zickery- Belted Printed Kimono",
        price: 20.00,
        color: "Green",
        stock: 10,
        category:"Kimono",
        image:"Kimono-2-1.jpg",
    },
    {
        _id: "77773",
        title: "Kimmy- Print Flounce Sleeve Dress",
        price: 28.00,
        color: "Red",
        stock: 10,
        category:"Dresses",
        image:"dress-1-1.jpg",
    },
    {
        _id: "77774",
        title: "Becky- Swiss Dot Dress",
        price: 21.00,
        color: "Rose Pink",
        stock: 10,
        category:"Dresses",
        image:"dress-2-1.jpg",
    },
    {
        _id: "77775",
        title: "Summer- Slit Hem Blouse & Wide Leg Pants Set  ",
        price: 27.00,
        color: "Beige",
        stock: 10,
        category:"Sets",
        image:"Set-1-1.jpg",
    },
    {
        _id: "77776",
        title: "Jasmine- Graphic Print Wide Leg Pants Set",
        price: 23.00,
        color: "Multi Print",
        stock: 10,
        category:"Sets",
        image:"Set-2-1.jpg",
    },
];


class DataService{
    getCatalog(){
        //retrieve the data fro the server
        //var catalog = request();

        return catalog;

    }
}
export default DataService;