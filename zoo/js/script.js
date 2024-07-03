    //Inicia el array para almacenar los animales del zoológico.
    class CZooAnimal {
      constructor() {
      this.zooAnimals = [];
    }
    //Se crea un metodo en el cual al ingresar un animal se registren sus datos
    agregarAnimal(n, cage, type, weight) {
      const IdAnimal = Math.floor(Math.random() * 1000) + 1;
      this.zooAnimals.push({ IdAnimal, name: n, cageNumber: cage, IdTypeAnimal: type, weight });
    }
    //Al generar la tabla, añade los datos de cada animal
    generarTablaAnimales() {
      const tablaBody = document.querySelector('#animalTable tbody');
      tablaBody.innerHTML = '';
    
      this.zooAnimals.forEach(animal => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
          <td>${animal.IdAnimal}</td>
          <td>${animal.name}</td>
          <td>${animal.cageNumber}</td>
          <td>${animal.IdTypeAnimal}</td>
          <td>${animal.weight}</td>
        `;
        tablaBody.appendChild(fila);
      });
    }
    //a. Mostrar la cantidad de animales de la Jaula 5 cuyo peso sea menor a 3 kg.
    contarAnimalesEnJaula5Menor3kg() {
      let count = 0;
      for (const animal of this.zooAnimals) {
        if (animal.cageNumber === 5 && animal.weight < 3) {
          count++;
        }
      }
      return count;
    }
    //b. Listar cantidad de animales de tipo felinos que están entre las jaulas 2 a 5.
    contarFelinosEntreJaulas2y5() {
      let count = 0;
      for (const animal of this.zooAnimals) {
        if (animal.IdTypeAnimal === 1 && animal.cageNumber >= 2 && animal.cageNumber <= 5) {
          count++;
        }
      }
      return count;
    }
    //c. Listar el nombre del animal de la Jaula 4 cuyo peso sea menor a 120.
    listarNombreAnimalJaula4Menor120() {
      for (const animal of this.zooAnimals) {
        if (animal.cageNumber === 4 && animal.weight < 120) {
          return animal.name;
        }
      }
      
    }
  }
  
    const zoo = new CZooAnimal();
    //Genera la tabla de animales y la muestra en el HTML.
    zoo.agregarAnimal("Tigre", 5, 1, 150); //Felino
    zoo.agregarAnimal("León", 2, 1, 180); //Felino
    zoo.agregarAnimal("Águila", 3, 2, 2); //Ave
    zoo.agregarAnimal("Serpiente", 4, 3, 80); //Reptil
    zoo.agregarAnimal("Pantera", 5, 1, 100); //Felino
    
    zoo.generarTablaAnimales();
    //Muestra los resultados de las funciones en el HTML.
    document.getElementById("resultado1").textContent = "Cantidad de animales en la jaula 5 con peso menor a 3 kg: " + zoo.contarAnimalesEnJaula5Menor3kg();
    document.getElementById("resultado2").textContent = "Cantidad de animales tipo felino entre las jaulas 2 y 5: " + zoo.contarFelinosEntreJaulas2y5();
    document.getElementById("resultado3").textContent = "Nombre del animal en la jaula 4 con peso menor a 120: " + zoo.listarNombreAnimalJaula4Menor120();