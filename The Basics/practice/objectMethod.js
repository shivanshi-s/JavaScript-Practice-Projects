function housekeeper (name,age,work) {
    this.name = name;
    this.age = age;
    this.work =work;
    this.clean = function() {
        alert("may i clean ur room?")
    };
}

// output
housekeeper1.clean();