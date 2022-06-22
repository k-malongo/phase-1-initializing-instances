// Write your code here

class Breakfast {
    constructor(food, drink) {
      this.food = food;
      this.drink = drink;
    }
  }

  class Lunch {
    constructor(salad, soup, drink) {
      this.salad = salad;
      this.soup = soup;
      this.drink = drink;
    }
  }

//   Create a class for Dinner. 
//   Since dinner is a little bit fancier,
//    Dinner will have a constructor with 
//    salad, soup, entree, and dessert. 
//    Initialize dessert as a private property by prefixing 
//    its name with the hash symbol (#).

  class Dinner {
    #dessert
    constructor(salad, soup, entree, dessert) {
      this.salad = salad;
      this.soup = soup;
      this.entree = entree;
      this.#dessert = dessert
    }
  }
  const dinner = new Dinner()