class Father {
    getName() {
        return "Rahul"
    }
    getGender() {
        return "M";
    }
}

class Son extends Father {
    getName() {
        return "Venkat";
    }
    getCity() {
        return "Hyderbad"
    }
}

module.exports = Son;
