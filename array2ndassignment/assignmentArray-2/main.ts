    // PART 1 ___BASIC ARRAYS___ PRODUCT INVENTORY :


           //     STEP : 1 
     // => DEFINE TYPE ALIYAS (PRODUCT) :
type Product = {
       name : string,
       price : number,
       inventory : {
              stock : number,
              colorOption : string[];
    };
};

           //      STEP : 2
     // =>CREATE AN ARRAY OF PRODUCTS :
const products : Product [] = [
    { name : "Tablet",
     price : 50000,
     inventory : {
              stock : 20,
              colorOption : ["Red" , "Blue" , "Green", "Yellow"]

     },
    },

  {
     name : "Iphone",
     price : 30500,
     inventory : {
              stock : 75,
              colorOption : ["Red" , "Blue", "Green", "Yellow"]
     },
    },
{
     name : "Earbuds",
     price : 150000,
     inventory : {
              stock : 50,
              colorOption :  ["Red" , "Blue", "Green", "Yellow"]
     }
    }
];

   //  console.log(products, products1, products2);



           //     STEP : 3 
     // => IMPLEMENT THE (changeColor) FUNCTION:


// Function to change color and adjust price
function changeColor(products: Product, newColor: string) : void {
     products.inventory.colorOption.push(newColor);
     switch(products.inventory.colorOption) {
        case ["Red"]:
          console.log (products.price *= 0.1);
          break;
          case["Blue"]:
          console.log(products.price *= -0.05)
          break;
          default:
            console.log(products.price)
            break;
     }
     }
     changeColor(products[0], "Black")
     products.forEach((product) => console.log(product));