import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
  constructor () {
    super();
    this.state={
    products : [
        {
            price: 99,
            title: 'Watch',
            qty: 1,
            img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            id: 1
        },
        {
            price: 999,
            title: 'Mobile Phone',
            qty: 10,
            img: 'https://images.unsplash.com/photo-1520923642038-b4259acecbd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGVsZXBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            id: 2
        },
        {
            price: 999,
            title: 'Laptop',
            qty: 4,
            img: 'https://images.unsplash.com/photo-1504707748692-419802cf939d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            id: 3
        }
    ]
}

    //  this.increaseQuantity = this.increaseQuantity.bind(this);
    //  this.testing();
}
handelIncreaseQuantity = (product) => {
    console.log('Heyy please increase the qty of ',product);
    const {products} = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;
    this.setState({
      products  
    })
}
handelDecreaseQuantity = (product) => {
    console.log('Heyy please increase the qty of ',product);
    const {products} = this.state;
    const index = products.indexOf(product);
    if(products[index].qty === 0){
        return;
    }
    products[index].qty -= 1;
    this.setState({
      products  
    })
}
handelDeleteProduct = (id) =>{
    const { products } = this.state;
    const items = products.filter((item)=> item.id !== id);  //[{}]
    this.setState({
        products: items
    })
}

getCartCount = () => {
  const{ products} = this.state;

  let count = 0;

  products.forEach((product)=>{
    count += product.qty;
  });

  return count;
}
  getCartTOTAL=()=>{
    const {products} = this.state;
    let cartTotal = 0;
    products.map((product)=>{
      cartTotal = cartTotal + product.qty *product.price
    })
    return cartTotal;
  }
  render(){
    const {products} = this.state
    return (
      <div className="App">
        <Navbar count={this.getCartCount()}/>
        <Cart 
        products = {products}
        onIncreaseQuantity={this.handelIncreaseQuantity}
        onDecreaseQuantity={this.handelDecreaseQuantity}
        onDeleteProduct={this.handelDeleteProduct}
        />
        <div style={{padding: 10, fontSize: 20}}>TOTAL: {this.getCartTOTAL()}</div>
      </div>
    );
  }
  
}

export default App;
