function formatValue(value: string | number | boolean): string | number | boolean {
    if (typeof value === 'string') {
        return value.toUpperCase();
    } else if (typeof value === 'number') {
        return value * 10;
    } else {
        return !value;
    }
}

function getLength(value: string | any[]): number {
    if (typeof value === 'string') {
        return value.length;
    } else {
        return value.length;
    }
}

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails(): string {
        return `'Name: ${this.name}, Age: ${this.age}'`;
    }
}

function filterByRating(items: { title: string, rating: number }[]): { title: string, rating: number }[] {
    const result = [];
    for (let i = 0; i < items.length; i++) {
        if (items[i].rating >= 4) {
            result.push(items[i]);
        }
    }
    return result;
}

function filterActiveUsers(users: { id: number, name: string, email: string, isActive: boolean }[]): { id: number, name: string, email: string, isActive: boolean }[] {
    const result = [];
    for (let i = 0; i < users.length; i++) {
        if (users[i].isActive) {
            result.push(users[i]);
        }
    }
    return result;
}

interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

function printBookDetails(book: Book): void {
    const availability = book.isAvailable ? 'Yes' : 'No';
    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`);
}

function getUniqueValues(arr1: (string | number)[], arr2: (string | number)[]): (string | number)[] {
    const combined = [];

    for (let i = 0; i < arr1.length; i++) {
        combined.push(arr1[i]);
    }

    for (let i = 0; i < arr2.length; i++) {
        combined.push(arr2[i]);
    }

    const unique = [];
    for (let i = 0; i < combined.length; i++) {
        let found = false;
        for (let j = 0; j < unique.length; j++) {
            if (unique[j] === combined[i]) {
                found = true;
                break;
            }
        }
        if (!found) {
            unique.push(combined[i]);
        }
    }

    return unique;
}

function calculateTotalPrice(products: { name: string, price: number, quantity: number, discount?: number }[]): number {
    let total = 0;

    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        let productTotal = product.price * product.quantity;

        if (product.discount !== undefined) {
            const discountAmount = productTotal * (product.discount / 100);
            productTotal -= discountAmount;
        }

        total += productTotal;
    }

    return total;
}
