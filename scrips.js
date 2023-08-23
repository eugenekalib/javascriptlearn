function Car(data) {
    this.colorBody = data.colorBody ?? ""
    this.age = data.age ?? null
    this.wheelQuantity = data.wheelQuantity ?? 4
    this.doorsQuantity = data.wheelQuantity ?? 5
    this.hasHatch = data.hasHatch ?? false
    this.passengers = data.passengers ?? null
    this.cabineQuantity = data.cabineQuantity ?? 4

    this.getInfo = () => {
        return {
            colorBody: this.colorBody,
            age: this.age,
            wheelQuantity: this.wheelQuantity,
            doorsQuantity: this.doorsQuantity,
            hasHatch: this.hasHatch,
            cabineQuantity: this.cabineQuantity,
        }
    }
}

const ferrariData = {
    colorBody: "red",
    age: 3,
    wheelQuantity: 4,
    doorsQuantity: 3,
    hasHatch: true,
    passengers: [
        { id: 1, name: "Vasili"},
        { id: 2, name: "Nikolay"},
    ],
    cabineQuantity: 2
}

const ladaData = {
    colorBody: "white",
    age: 70,
    wheelQuantity: 3,
    doorsQuantity: 2,
    hasHatch: false,
    passengers: [],
    cabineQuantity: 3.5
}

const ferrari = new Car(ferrariData)
const lada = new Car(ladaData)

console.log(ferrari.getInfo(), lada)


function Dog(data) {
    this.color = data.color ?? ""
    this.age = data.age ?? null
    this.hasFur = data.hasFur ?? true
    this.pawQuantity = data.pawQuantity ?? 4
    this.hasLongEars = data.hasLongEars ?? false

    this.getInfo = () => {
        return {
            color: this.color,
            age: this.age,
            hasFur: this.hasFur,
            hasLongEars: this.hasLongEars,
        }
    }
}

const yorkData = {
    color: "white",
    age: 2,
    hasFur: true,
    pawQuantity: 4,
    hasLongEars: true,
}

const york = new Dog(yorkData)

console.log(york.getInfo(), york)